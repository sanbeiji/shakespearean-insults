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
import androidx.compose.material.icons.filled.History
import androidx.compose.material.icons.filled.Delete
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.NavigationRail
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.ui.res.painterResource
import android.content.res.Configuration
import android.net.Uri
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalUriHandler
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
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.LocalIndication
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.ui.draw.scale
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
    var showHistory by remember { mutableStateOf(false) }
    
    if (showSettings) {
        SettingsDialog(viewModel = viewModel, onDismiss = { showSettings = false })
    }
    
    if (showHistory) {
        HistoryDialog(viewModel = viewModel, onDismiss = { showHistory = false })
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
            val shareUrl = "https://sanbeiji.com/insults/?insult=$encodedInsult"
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
        IconButton(onClick = { showHistory = true }) {
            Icon(imageVector = Icons.Default.History, contentDescription = "History", tint = Color(0xFFD4AF37))
        }
        IconButton(onClick = { showSettings = true }) {
            Icon(imageVector = Icons.Default.Settings, contentDescription = "Settings", tint = Color(0xFFD4AF37))
        }
    }
    
    val contentBox = @Composable {
        val fontSizePref by viewModel.settingsManager.fontSize.collectAsState()
        val textSize = when (fontSizePref) {
            "Medium" -> 48.sp
            "Large" -> 60.sp
            else -> 36.sp
        }
        val lineH = when (fontSizePref) {
            "Medium" -> 68.sp
            "Large" -> 84.sp
            else -> 52.sp
        }

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
                    fontSize = textSize,
                    lineHeight = lineH,
                    color = Color(0xFFEBD197),
                    textAlign = TextAlign.Center,
                    modifier = Modifier.verticalScroll(rememberScrollState()).padding(vertical = 24.dp)
                )
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            
            val interactionSource = remember { MutableInteractionSource() }
            val isPressed by interactionSource.collectIsPressedAsState()
            val scale by animateFloatAsState(
                targetValue = if (isPressed) 0.95f else 1f,
                animationSpec = tween(durationMillis = 100), label = "scale"
            )
            val glowRadius by animateDpAsState(
                targetValue = if (isPressed) 8.dp else 15.dp,
                animationSpec = tween(durationMillis = 200), label = "glow"
            )
            val gradient = Brush.linearGradient(
                colors = listOf(Color(0xFFFFE9A3), Color(0xFFD4AF37), Color(0xFFAA8214))
            )

            Box(
                modifier = Modifier
                    .fillMaxWidth(0.8f)
                    .height(56.dp)
                    .scale(scale)
                    .shadow(
                        elevation = glowRadius,
                        shape = RoundedCornerShape(50),
                        spotColor = Color(0xFFD4AF37),
                        ambientColor = Color(0xFFD4AF37)
                    )
                    .background(brush = gradient, shape = RoundedCornerShape(50))
                    .clickable(
                        interactionSource = interactionSource,
                        indication = LocalIndication.current,
                        onClick = { viewModel.generateNewInsult() }
                    ),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "PUNISH MEE!",
                    fontFamily = imFellFont,
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp,
                    letterSpacing = 2.sp,
                    color = Color(0xFF1C1226)
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
    val fontSize by viewModel.settingsManager.fontSize.collectAsState()
    val uriHandler = LocalUriHandler.current

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Settings", color = Color(0xFFD4AF37), fontWeight = FontWeight.Bold) },
        containerColor = Color(0xFF1C1226),
        text = {
            Column(modifier = Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(16.dp)) {
                Text("Text Size", color = Color.White, fontWeight = FontWeight.SemiBold)
                
                @OptIn(ExperimentalLayoutApi::class)
                FlowRow(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    listOf("Small", "Medium", "Large").forEach { option ->
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            RadioButton(
                                selected = fontSize == option,
                                onClick = { viewModel.settingsManager.setFontSize(option) },
                                colors = RadioButtonDefaults.colors(selectedColor = Color(0xFFD4AF37))
                            )
                            Text(option, color = Color.LightGray, fontSize = 14.sp)
                        }
                    }
                }
                
                Divider(color = Color.White.copy(alpha = 0.1f))

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
                        visualTransformation = PasswordVisualTransformation(),
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                        modifier = Modifier.fillMaxWidth()
                    )
                    Text(
                        "A Gemini API Key is required for AI voice synthesis.",
                        color = Color.LightGray,
                        fontSize = 12.sp,
                        lineHeight = 16.sp,
                        modifier = Modifier.padding(top = 4.dp)
                    )
                    TextButton(
                        onClick = { uriHandler.openUri("https://aistudio.google.com/app/apikey") },
                        contentPadding = PaddingValues(0.dp),
                        modifier = Modifier.height(24.dp)
                    ) {
                        Text("Get a Gemini API key", color = Color(0xFFD4AF37), fontSize = 12.sp, fontWeight = FontWeight.Bold)
                    }
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

@Composable
fun HistoryDialog(
    viewModel: InsultViewModel,
    onDismiss: () -> Unit
) {
    val history by viewModel.history.collectAsState()

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                Text("Recent Insults", color = Color(0xFFD4AF37), fontWeight = FontWeight.Bold)
                IconButton(onClick = { viewModel.clearHistory() }) {
                    Icon(imageVector = Icons.Default.Delete, contentDescription = "Clear History", tint = Color.Red.copy(alpha = 0.8f))
                }
            }
        },
        containerColor = Color(0xFF1C1226),
        text = {
            if (history.isEmpty()) {
                Text("No history yet.", color = Color.LightGray)
            } else {
                LazyColumn(
                    modifier = Modifier.fillMaxWidth().heightIn(max = 400.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    items(history) { insult ->
                        Card(
                            colors = CardDefaults.cardColors(containerColor = Color(0xFF26153C)),
                            modifier = Modifier.fillMaxWidth().clickable {
                                viewModel.setInsult(insult)
                                onDismiss()
                            }
                        ) {
                            Text(
                                text = insult,
                                color = Color.White,
                                modifier = Modifier.padding(12.dp),
                                fontSize = 16.sp
                            )
                        }
                    }
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
