package com.sanbeiji.shakespeareaninsults.data

import android.content.Context
import android.content.SharedPreferences
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKey
import dagger.hilt.android.qualifiers.ApplicationContext
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class SettingsManager @Inject constructor(
    @ApplicationContext private val context: Context
) {
    private val masterKey = MasterKey.Builder(context)
        .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
        .build()

    private val sharedPreferences: SharedPreferences = EncryptedSharedPreferences.create(
        context,
        "secret_settings",
        masterKey,
        EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
        EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
    )

    private val _useGeminiTTS = MutableStateFlow(sharedPreferences.getBoolean("use_gemini", false))
    val useGeminiTTS: StateFlow<Boolean> = _useGeminiTTS.asStateFlow()

    private val _geminiApiKey = MutableStateFlow(sharedPreferences.getString("api_key", "") ?: "")
    val geminiApiKey: StateFlow<String> = _geminiApiKey.asStateFlow()

    fun setUseGeminiTTS(enabled: Boolean) {
        sharedPreferences.edit().putBoolean("use_gemini", enabled).apply()
        _useGeminiTTS.value = enabled
    }

    fun setGeminiApiKey(key: String) {
        sharedPreferences.edit().putString("api_key", key).apply()
        _geminiApiKey.value = key
    }
}
