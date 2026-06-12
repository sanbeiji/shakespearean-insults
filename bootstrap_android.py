import os
import json
import re

APP_DIR = "/Users/joelewis/Code/shakespearean-insults/android"
PACKAGE = "com.sanbeiji.shakespeareaninsults"
PACKAGE_DIR = os.path.join(APP_DIR, "app/src/main/java", PACKAGE.replace(".", "/"))

def mkdirs(path):
    os.makedirs(path, exist_ok=True)

mkdirs(PACKAGE_DIR)
mkdirs(os.path.join(APP_DIR, "app/src/main/res/values"))
mkdirs(os.path.join(APP_DIR, "app/src/main/res/drawable"))

# 1. settings.gradle.kts
with open(os.path.join(APP_DIR, "settings.gradle.kts"), "w") as f:
    f.write("""pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
rootProject.name = "ShakespeareanInsults"
include(":app")
""")

# 2. build.gradle.kts (Project)
with open(os.path.join(APP_DIR, "build.gradle.kts"), "w") as f:
    f.write("""plugins {
    id("com.android.application") version "8.1.1" apply false
    id("org.jetbrains.kotlin.android") version "1.9.10" apply false
    id("com.google.dagger.hilt.android") version "2.48" apply false
}
""")

# 3. app/build.gradle.kts
with open(os.path.join(APP_DIR, "app/build.gradle.kts"), "w") as f:
    f.write("""plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("kotlin-kapt")
    id("com.google.dagger.hilt.android")
}

android {
    namespace = "com.sanbeiji.shakespeareaninsults"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.sanbeiji.shakespeareaninsults"
        minSdk = 31
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.3"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.6.2")
    implementation("androidx.activity:activity-compose:1.8.0")
    implementation(platform("androidx.compose:compose-bom:2023.10.01"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    
    // Hilt
    implementation("com.google.dagger:hilt-android:2.48")
    kapt("com.google.dagger:hilt-android-compiler:2.48")
    implementation("androidx.hilt:hilt-navigation-compose:1.0.0")

    // ViewModel
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.6.2")

    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
    androidTestImplementation(platform("androidx.compose:compose-bom:2023.10.01"))
    androidTestImplementation("androidx.compose.ui:ui-test-junit4")
    debugImplementation("androidx.compose.ui:ui-tooling")
    debugImplementation("androidx.compose.ui:ui-test-manifest")
}
""")

# 4. AndroidManifest.xml
with open(os.path.join(APP_DIR, "app/src/main/AndroidManifest.xml"), "w") as f:
    f.write("""<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:name=".InsultApp"
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.ShakespeareanInsults"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:label="@string/app_name"
            android:theme="@style/Theme.ShakespeareanInsults">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
""")

# 5. Extract words from web/scripts/slur_engine.js
web_js_path = "/Users/joelewis/Code/shakespearean-insults/web/scripts/slur_engine.js"
with open(web_js_path, "r") as f:
    js_content = f.read()

def extract_array(var_name):
    match = re.search(f'const {var_name} = \\[(.*?)\\];', js_content)
    if match:
        return match.group(1)
    return ""

insult1 = extract_array("insult1")
insult2 = extract_array("insult2")
insult3 = extract_array("insult3")
targetParts = extract_array("targetParts")

# InsultData.kt
data_dir = os.path.join(PACKAGE_DIR, "data")
os.makedirs(data_dir, exist_ok=True)
with open(os.path.join(data_dir, "InsultData.kt"), "w") as f:
    f.write(f"""package {PACKAGE}.data

object InsultData {{
    val insult1 = listOf({insult1})
    val insult2 = listOf({insult2})
    val insult3 = listOf({insult3})
    val targetParts = listOf({targetParts})
    
    val exactQuotes = listOf(
        "Away, you starveling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!",
        "Thou art a boil, a plague sore, an embossed carbuncle in my corrupted blood.",
        "A knave; a rascal; an eater of broken meats; a base, proud, shallow, beggarly, three-suited, hundred-pound, filthy, worsted-stocking knave...",
        "You beastly knave, know you no reverence?",
        "A milksop, one that never in his life felt so much cold as over shoes in snow.",
        "Thou sodden-witted lord! Thou hast no more brain than I have in my elbows.",
        "Villain, I have done thy mother.",
        "You puppyish and scurvy lout!",
        "Hence, rotten thing! or I shall shake thy bones out of thy garments.",
        "A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of not one good quality.",
        "The tartness of his face sours ripe grapes.",
        "She is spherical, like a globe. I could find out countries in her.",
        "Scratching could not make it worse... such a face as yours.",
        "Thou smell of mountain goat.",
        "I was searching for a fool when I found you."
    )
}}
""")

# Gradle properties
with open(os.path.join(APP_DIR, "gradle.properties"), "w") as f:
    f.write("""org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
kotlin.code.style=official
android.nonTransitiveRClass=true
""")

print("Project scaffolded!")
