package com.sanbeiji.shakespeareaninsults.ui.theme

import android.app.Activity
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

val PrimaryGold = Color(0xFFD4AF37)
val TextLight = Color(0xFFF3EEFB)
val TextGold = Color(0xFFEBD197)
val TextDark = Color(0xFF1C1226)
val BackgroundDark = Color(0xFF0C0812)
val SurfaceDark = Color(0xFF1A1226)
val CardBorder = Color(0x40D4AF37)

private val AppColorScheme = darkColorScheme(
    primary = PrimaryGold,
    onPrimary = TextDark,
    background = BackgroundDark,
    onBackground = TextLight,
    surface = SurfaceDark,
    onSurface = TextGold
)

@Composable
fun ShakespeareanInsultsTheme(
    content: @Composable () -> Unit
) {
    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = AppColorScheme.background.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = false
        }
    }

    MaterialTheme(
        colorScheme = AppColorScheme,
        content = content
    )
}

