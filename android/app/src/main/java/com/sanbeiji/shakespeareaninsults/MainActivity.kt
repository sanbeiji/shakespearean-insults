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
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    InsultScreen(
                        modifier = Modifier.padding(innerPadding),
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
    
    val aquilineFont = FontFamily(Font(R.font.aquilinetwo))
    val imFellFont = FontFamily(Font(R.font.im_fell_dw_pica_sc))
    
    val bgGradient = Brush.linearGradient(
        colors = listOf(Color(0xFF0C0812), Color(0xFF160E22), Color(0xFF26153C))
    )

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(bgGradient)
            .padding(24.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
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
                modifier = Modifier.padding(bottom = 32.dp)
            )
            
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .defaultMinSize(minHeight = 160.dp)
                    .padding(24.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = currentInsult,
                    fontFamily = aquilineFont,
                    fontSize = 36.sp,
                    lineHeight = 44.sp,
                    color = Color(0xFFEBD197),
                    textAlign = TextAlign.Center
                )
            }
            
            Spacer(modifier = Modifier.height(40.dp))
            
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
            
            Spacer(modifier = Modifier.height(24.dp))
            
            val context = LocalContext.current
            Row(
                horizontalArrangement = Arrangement.spacedBy(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(onClick = { onSpeak(currentInsult) }) {
                    Icon(imageVector = Icons.Default.VolumeUp, contentDescription = "Hear Insult", tint = Color(0xFFD4AF37))
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
                    val intent = Intent(Intent.ACTION_SEND).apply {
                        type = "text/plain"
                        putExtra(Intent.EXTRA_TEXT, currentInsult)
                    }
                    context.startActivity(Intent.createChooser(intent, "Share Insult"))
                }) {
                    Icon(imageVector = Icons.Default.Share, contentDescription = "Share Insult", tint = Color(0xFFD4AF37))
                }
            }
        }
    }
}
