# Ye Olde Shakespearean Insult Machine

Insult yourself and others using the Shakespearian Insult Machine! Deploy this to a web server or just run locally. Use it on your phone, parchment, or share via raven for tavern frolicks.

Try the app live at: https://sanbeiji.com/insults

A silly little project by [@sanbeiji](https://sanbeiji.com).

---

## Project Background

This codebase was originally used as a teaching tool for **mobile web development**. Over the years, it has been continuously maintained, updated, and expanded to showcase modern high-fidelity web and mobile development practices—evolving from a simple dynamic web page into a fully-fledged Progressive Web App (PWA) and native Android app using modern frameworks.

---

## Key Features

The engine generates approximately **38,681,486 unique Shakespearean insults** through several methods:

*   **Dynamic Insult Generator**: Sentence templates and grammatical databases construct insults on the fly. To ensure high-quality combinations, the engine checks for semantic and stem overlaps (e.g. preventing repetitive sound patterns like "head-headed" or "brain-brained").
*   **Dual Text-to-Speech (TTS) Engines**:
    *   *Native TTS*: Uses a custom composite scoring algorithm to automatically filter out robotic voices and select the highest-fidelity British English system voice.
    *   *Gemini AI Voice (Dramatic)*: Connects to the Gemini 3.1 Flash API to dramatically read generated insults in an Elizabethan actor's theatrical voice (requires a Gemini API Key).
*   **Sliding History Drawer (Thy Past Sins)**: Keeps track of your last 10 generated insults, allowing you to recall, copy, or share them.
*   **Social & Clipboard Integration**: Quick share buttons formatted for Bluesky and Threads, or instant copy to clipboard with custom notifications.
*   **Offline-First & Responsive Layout**: PWA integration via service workers for full offline availability, with responsive layouts matching mobile, desktop, and landscape modes.

---

## App Versions

### Web App
The web version is built using vanilla HTML, CSS, and JavaScript.
To run or test the web version, you can:
1. **Try it live**: Access the deployed version at https://sanbeiji.com/insults.
2. **Run it locally (Basic)**: Open the [web/index.html](file:///Users/joelewis/Code/shakespearean-insults/web/index.html) file directly in a modern web browser.
3. **Run it locally (With PWA/Offline features)**: Serve the files using a local web server (e.g., `python -m http.server 8000`) and access it via `http://localhost:8000`.

### Android App
The Android app is built using Jetpack Compose and Kotlin with Hilt dependency injection.
To build and run the Android app:
1. Open the `/android` folder in Android Studio.
2. Build and run on a emulator or physical device.

---

## License

This project is released into the public domain under [The Unlicense](LICENSE).
