package com.sanbeiji.shakespeareaninsults

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.Share
import androidx.compose.material.icons.filled.VolumeUp
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.NavigationRail
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.ui.res.painterResource
import android.content.res.Configuration
import android.net.Uri
import androidx.compose.ui.platform.LocalContext
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.hilt.navigation.compose.hiltViewModel
import com.sanbeiji.shakespeareaninsults.R
import com.sanbeiji.shakespeareaninsults.ui.theme.ShakespeareanInsultsTheme
import com.sanbeiji.shakespeareaninsults.viewmodel.InsultViewModel
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class MainActivity : ComponentActivity(), TextToSpeech.OnInitListener {
    private var tts: TextToSpeech? = null
    private var ttsReady = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        tts = TextToSpeech(this, this)
        setContent {
            ShakespeareanInsultsTheme {
                val bgGradient = Brush.linearGradient(
                    colors = listOf(Color(0xFF0C0812), Color(0xFF160E22), Color(0xFF26153C))
                )
                Box(modifier = Modifier.fillMaxSize().background(bgGradient)) {
                    InsultScreen(
                        onSpeak = { text ->
                            if (ttsReady) {
                                tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, null)
                            }
                        }
                    )
                }
            }
        }
    }
    
    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            ttsReady = true
        }
    }
    
    override fun onDestroy() {
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
    }
}

@Composable
fun InsultScreen(
    modifier: Modifier = Modifier,
    viewModel: InsultViewModel = hiltViewModel(),
    onSpeak: (String) -> Unit = {}
) {
    val currentInsult by viewModel.currentInsult.collectAsState()
    var showSettings by remember { mutableStateOf(false) }
    
    if (showSettings) {
        SettingsDialog(viewModel = viewModel, onDismiss = { showSettings = false })
    }
    
    val aquilineFont = FontFamily(Font(R.font.aquilinetwo))
    val imFellFont = FontFamily(Font(R.font.im_fell_dw_pica_sc))
    
    val configuration = LocalContext.current.resources.configuration
    val isLandscape = configuration.orientation == Configuration.ORIENTATION_LANDSCAPE
    val useRail = isLandscape
    
    val context = LocalContext.current
    val isTtsLoading by viewModel.isTtsLoading.collectAsState()
    
    val actions = @Composable {
        IconButton(
            onClick = {
                if (viewModel.settingsManager.useGeminiTTS.value) {
                    viewModel.playGeminiTTS(
                        text = currentInsult,
                        onPlayComplete = {},
                        onError = { err ->
                            Toast.makeText(context, err, Toast.LENGTH_SHORT).show()
                        }
                    )
                } else {
                    onSpeak(currentInsult)
                }
            },
            enabled = !isTtsLoading
        ) {
            if (isTtsLoading) {
                CircularProgressIndicator(
                    color = Color(0xFFD4AF37),
                    modifier = Modifier.size(24.dp),
                    strokeWidth = 2.dp
                )
            } else {
                Icon(imageVector = Icons.Default.VolumeUp, contentDescription = "Hear Insult", tint = Color(0xFFD4AF37))
            }
        }
        IconButton(onClick = { 
            val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
            val clip = ClipData.newPlainText("Insult", currentInsult)
            clipboard.setPrimaryClip(clip)
            Toast.makeText(context, "Copied to parchment!", Toast.LENGTH_SHORT).show()
        }) {
            Icon(imageVector = Icons.Default.ContentCopy, contentDescription = "Copy Insult", tint = Color(0xFFD4AF37))
        }
        IconButton(onClick = {
            val encodedInsult = java.net.URLEncoder.encode(currentInsult, "UTF-8")
            val shareUrl = "https://sanbeiji.github.io/docs/insults/?insult=$encodedInsult"
            val shareText = "\"$currentInsult\" - Punish thyself with the Shakespearean Insult Machine! $shareUrl"
            val intent = Intent(Intent.ACTION_SEND).apply {
                type = "text/plain"
                putExtra(Intent.EXTRA_TEXT, shareText)
            }
            context.startActivity(Intent.createChooser(intent, "Share Insult"))
        }) {
            Icon(imageVector = Icons.Default.Share, contentDescription = "Share Insult", tint = Color(0xFFD4AF37))
        }
        IconButton(onClick = {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://github.com/sanbeiji/shakespearean-insults"))
            context.startActivity(intent)
        }) {
            Icon(
                painter = painterResource(id = R.drawable.ic_github),
                contentDescription = "GitHub",
                tint = Color(0xFFD4AF37),
                modifier = Modifier.size(24.dp)
            )
        }
        IconButton(onClick = { showSettings = true }) {
            Icon(imageVector = Icons.Default.Settings, contentDescription = "Settings", tint = Color(0xFFD4AF37))
        }
    }
    
    val contentBox = @Composable {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "YE OLDE SHAKESPEAREAN INSULT MACHINE",
                fontFamily = imFellFont,
                fontWeight = FontWeight.Normal,
                fontSize = 20.sp,
                letterSpacing = 2.sp,
                color = Color(0xFFF3EEFB),
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(bottom = 16.dp)
            )
            
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f)
                    .padding(vertical = 16.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = currentInsult,
                    fontFamily = aquilineFont,
                    fontSize = 36.sp,
                    lineHeight = 44.sp,
                    color = Color(0xFFEBD197),
                    textAlign = TextAlign.Center,
                    modifier = Modifier.verticalScroll(rememberScrollState())
                )
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            
            Button(
                onClick = { viewModel.generateNewInsult() },
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFFD4AF37),
                    contentColor = Color(0xFF1C1226)
                ),
                shape = RoundedCornerShape(50),
                modifier = Modifier
                    .fillMaxWidth(0.8f)
                    .height(56.dp)
            ) {
                Text(
                    text = "PUNISH MEE!",
                    fontFamily = imFellFont,
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp,
                    letterSpacing = 2.sp
                )
            }
        }
    }

    if (useRail) {
        Row(modifier = modifier.fillMaxSize()) {
            NavigationRail(
                containerColor = Color.Transparent,
                modifier = Modifier.fillMaxHeight().width(80.dp),
                contentColor = Color(0xFFD4AF37)
            ) {
                Spacer(modifier = Modifier.weight(1f))
                actions()
                Spacer(modifier = Modifier.weight(1f))
            }
            Box(modifier = Modifier.weight(1f).fillMaxHeight(), contentAlignment = Alignment.Center) {
                contentBox()
            }
        }
    } else {
        Scaffold(
            modifier = modifier.fillMaxSize(),
            containerColor = Color.Transparent,
            bottomBar = {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalArrangement = Arrangement.SpaceEvenly,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    actions()
                }
            }
        ) { paddingValues ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues),
                contentAlignment = Alignment.Center
            ) {
                contentBox()
            }
        }
    }
}

@Composable
fun SettingsDialog(
    viewModel: InsultViewModel,
    onDismiss: () -> Unit
) {
    val useGemini by viewModel.settingsManager.useGeminiTTS.collectAsState()
    val apiKey by viewModel.settingsManager.geminiApiKey.collectAsState()

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Settings", color = Color(0xFFD4AF37), fontWeight = FontWeight.Bold) },
        containerColor = Color(0xFF1C1226),
        text = {
            Column(modifier = Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(16.dp)) {
                Text("Voice Engine", color = Color.White, fontWeight = FontWeight.SemiBold)
                
                Row(verticalAlignment = Alignment.CenterVertically) {
                    RadioButton(
                        selected = !useGemini,
                        onClick = { viewModel.settingsManager.setUseGeminiTTS(false) },
                        colors = RadioButtonDefaults.colors(selectedColor = Color(0xFFD4AF37))
                    )
                    Text("Native Device Voice", color = Color.LightGray)
                }
                
                Row(verticalAlignment = Alignment.CenterVertically) {
                    RadioButton(
                        selected = useGemini,
                        onClick = { viewModel.settingsManager.setUseGeminiTTS(true) },
                        colors = RadioButtonDefaults.colors(selectedColor = Color(0xFFD4AF37))
                    )
                    Text("Gemini AI Voice (Dramatic)", color = Color.LightGray)
                }
                
                if (useGemini) {
                    Spacer(modifier = Modifier.height(8.dp))
                    OutlinedTextField(
                        value = apiKey,
                        onValueChange = { viewModel.settingsManager.setGeminiApiKey(it) },
                        label = { Text("Gemini API Key", color = Color.LightGray) },
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedBorderColor = Color(0xFFD4AF37),
                            unfocusedBorderColor = Color(0xFFD4AF37).copy(alpha = 0.5f),
                            focusedTextColor = Color.White,
                            unfocusedTextColor = Color.White
                        ),
                        singleLine = true,
                        modifier = Modifier.fillMaxWidth()
                    )
                    Text(
                        "Required to use the Gemini 3.1 Flash TTS model. Your key is stored securely using EncryptedSharedPreferences.",
                        color = Color.LightGray,
                        fontSize = 12.sp,
                        lineHeight = 16.sp
                    )
                }
            }
        },
        confirmButton = {
            TextButton(onClick = onDismiss) {
                Text("Close", color = Color(0xFFD4AF37))
            }
        }
    )
}
