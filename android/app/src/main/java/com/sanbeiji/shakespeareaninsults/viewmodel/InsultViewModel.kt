package com.sanbeiji.shakespeareaninsults.viewmodel

import android.media.AudioAttributes
import android.media.AudioFormat
import android.media.AudioTrack
import android.util.Base64
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.sanbeiji.shakespeareaninsults.data.InsultGenerator
import com.sanbeiji.shakespeareaninsults.data.SettingsManager
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import javax.inject.Inject

import android.content.Context
import dagger.hilt.android.qualifiers.ApplicationContext
import java.security.MessageDigest

@HiltViewModel
class InsultViewModel @Inject constructor(
    private val generator: InsultGenerator,
    val settingsManager: SettingsManager,
    @ApplicationContext private val context: Context
) : ViewModel() {

    private val _currentInsult = MutableStateFlow(generator.generateInsultString())
    val currentInsult: StateFlow<String> = _currentInsult.asStateFlow()
    
    private val _isTtsLoading = MutableStateFlow(false)
    val isTtsLoading: StateFlow<Boolean> = _isTtsLoading.asStateFlow()

    private val prefs = context.getSharedPreferences("insult_history", Context.MODE_PRIVATE)
    
    private val _history = MutableStateFlow<List<String>>(loadHistory())
    val history: StateFlow<List<String>> = _history.asStateFlow()

    init {
        if (_history.value.isEmpty()) {
            val currentList = mutableListOf(_currentInsult.value)
            saveHistory(currentList)
        } else {
            _currentInsult.value = _history.value.first()
        }
    }

    private fun loadHistory(): List<String> {
        val set = prefs.getString("history_list", "[]") ?: "[]"
        return try {
            val jsonArray = org.json.JSONArray(set)
            List(jsonArray.length()) { jsonArray.getString(it) }
        } catch (e: Exception) {
            emptyList()
        }
    }

    private fun saveHistory(list: List<String>) {
        val jsonArray = org.json.JSONArray()
        list.forEach { jsonArray.put(it) }
        prefs.edit().putString("history_list", jsonArray.toString()).apply()
        _history.value = list
    }

    fun generateNewInsult() {
        val newInsult = generator.generateInsultString()
        _currentInsult.value = newInsult
        
        val currentList = _history.value.toMutableList()
        currentList.add(0, newInsult)
        if (currentList.size > 10) {
            currentList.removeLast()
        }
        saveHistory(currentList)
    }

    fun setInsult(insult: String) {
        _currentInsult.value = insult
    }

    fun clearHistory() {
        saveHistory(emptyList())
        val ttsDir = java.io.File(context.cacheDir, "tts_cache")
        if (ttsDir.exists()) {
            ttsDir.listFiles()?.forEach { it.delete() }
        }
        generateNewInsult() // Generate a new one so UI isn't empty
    }

    private fun getAudioCacheFile(text: String): java.io.File {
        val ttsDir = java.io.File(context.cacheDir, "tts_cache")
        if (!ttsDir.exists()) {
            ttsDir.mkdirs()
        }
        val digest = MessageDigest.getInstance("MD5").digest(text.toByteArray())
        val hexString = digest.joinToString("") { String.format("%02x", it) }
        return java.io.File(ttsDir, "$hexString.pcm")
    }

    fun playGeminiTTS(text: String, onPlayComplete: () -> Unit, onError: (String) -> Unit) {
        val apiKey = settingsManager.geminiApiKey.value
        if (apiKey.isBlank()) {
            onError("API Key is required for Gemini TTS")
            return
        }

        _isTtsLoading.value = true

        viewModelScope.launch {
            try {
                val cacheFile = getAudioCacheFile(text)
                val rawBytes = if (cacheFile.exists()) {
                    withContext(Dispatchers.IO) { cacheFile.readBytes() }
                } else {
                    withContext(Dispatchers.IO) {
                        val url = URL("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-tts-preview:generateContent?key=$apiKey")
                        val connection = url.openConnection() as HttpURLConnection
                        connection.requestMethod = "POST"
                        connection.setRequestProperty("Content-Type", "application/json")
                        connection.doOutput = true
                        
                        val requestBody = """
                            {
                              "contents": [{
                                "parts": [{
                                  "text": "Say dramatically in an Elizabethan-period English actor accent: $text"
                                }]
                              }],
                              "generationConfig": {
                                "responseModalities": ["AUDIO"],
                                "speechConfig": {
                                  "voiceConfig": {
                                    "prebuiltVoiceConfig": {
                                      "voiceName": "Charon"
                                    }
                                  }
                                }
                              }
                            }
                        """.trimIndent()
                        
                        connection.outputStream.write(requestBody.toByteArray())
                        
                        if (connection.responseCode in 200..299) {
                            val responseStr = connection.inputStream.bufferedReader().use { it.readText() }
                            val json = JSONObject(responseStr)
                            val b64Data = json.getJSONArray("candidates")
                                .getJSONObject(0)
                                .getJSONObject("content")
                                .getJSONArray("parts")
                                .getJSONObject(0)
                                .getJSONObject("inlineData")
                                .getString("data")
                            val decodedBytes = Base64.decode(b64Data, Base64.DEFAULT)
                            cacheFile.writeBytes(decodedBytes)
                            decodedBytes
                        } else {
                            val errorStr = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: ""
                            throw Exception("HTTP Error: ${connection.responseCode} $errorStr")
                        }
                    }
                }
                
                playPcmAudio(rawBytes)
                onPlayComplete()
            } catch (e: Exception) {
                onError(e.localizedMessage ?: "Unknown error occurred")
            } finally {
                _isTtsLoading.value = false
            }
        }
    }

    private fun playPcmAudio(pcmData: ByteArray) {
        val sampleRate = 24000
        val audioTrack = AudioTrack.Builder()
            .setAudioAttributes(
                AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                    .build()
            )
            .setAudioFormat(
                AudioFormat.Builder()
                    .setEncoding(AudioFormat.ENCODING_PCM_16BIT)
                    .setSampleRate(sampleRate)
                    .setChannelMask(AudioFormat.CHANNEL_OUT_MONO)
                    .build()
            )
            .setBufferSizeInBytes(pcmData.size)
            .setTransferMode(AudioTrack.MODE_STATIC)
            .build()

        audioTrack.write(pcmData, 0, pcmData.size)
        audioTrack.play()
    }
}
