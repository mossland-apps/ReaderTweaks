---
title: Install KOReader on the BOOX Go 6
pageSlug: install
device: boox-go-6
section: koreader
type: guide
order: 1
summary: Install KOReader from F-Droid or the official APK on the Go 6, then set its BOOX refresh mode and grant storage access. No jailbreak.
lastUpdated: 2026-11-23
datePublished: 2026-08-31
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-29
whatYouNeed:
  - BOOX Go 6 and either the F-Droid app or the KOReader Android APK
prerequisites:
  - text: "KOReader on the BOOX Go 6 — why and what to set"
    href: /devices/boox/boox-go-6/koreader/
nextStep:
  text: More KOReader guides for the Go 6
  href: /devices/boox/boox-go-6/koreader/
related:
  - text: "Make Android apps look right on the BOOX Go 6"
    href: /devices/boox/boox-go-6/guides/refresh-modes/
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
searchTerms:
  - install koreader boox
  - koreader android
  - koreader apk
  - play store koreader
  - storage permission
steps:
  - instruction: Install KOReader
    detail: >-
      KOReader is not on the Google Play Store, so ignore look-alike listings
      there. Either install the F-Droid app store and get KOReader from it, or
      download the "koreader-android-arm" APK from the KOReader releases page on
      GitHub in the device's browser and open it to install. You may need to
      allow "install unknown apps" for the browser or F-Droid when prompted.
  - instruction: Open KOReader and grant file access
    detail: >-
      Launch KOReader. On first run it asks for permission to access storage —
      grant it, and if Android shows an "all files access" toggle for KOReader,
      turn that on too. Without it, KOReader cannot see books outside its own
      folder.
  - instruction: Point KOReader at your books folder
    detail: >-
      In KOReader, open the file browser (top-left menu) and navigate to where
      your books are — often "Books" or "Download" in internal storage, or the
      microSD card. Long-press a folder and "Set as home directory" so it opens
      there each time.
  - instruction: Set KOReader's BOOX refresh mode
    detail: >-
      Leave KOReader, go to the Apps screen, open KOReader's BOOX optimisation
      panel, and set its refresh mode to HD or Regal. Turn off any BOOX
      "app-level full refresh" setting — KOReader does its own refresh
      management.
  - instruction: Set KOReader's own refresh inside the app
    detail: >-
      Back in KOReader, open the top menu, then the gear, then "Screen", and set
      "full refresh every N pages" to your taste (every 1 page is cleanest, every
      6 is a good compromise).
  - instruction: Set up tap zones and gestures
    detail: >-
      Because the Go 6 has no buttons, open KOReader's "Taps and gestures" and
      make sure the tap-to-turn zones and edge swipes are set the way you like —
      this is your only page-turn control.
---

On the Go 6, KOReader installs like any Android app — from F-Droid or the official APK, with no jailbreak. Grant full file access so it can find your books, let
KOReader manage e-ink refresh itself rather than BOOX's per-app system, and
because the Go 6 has no physical buttons, take a minute in KOReader's gesture
settings to get the tap zones right.
