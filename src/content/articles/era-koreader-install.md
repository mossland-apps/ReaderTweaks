---
title: Install KOReader on the PocketBook Era
pageSlug: install
device: pocketbook-era
section: koreader
type: guide
order: 1
summary: Copy KOReader's application file into the Era's applications folder. It appears in the PocketBook app menu — no jailbreak, and the stock reader is untouched.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-30
whatYouNeed:
  - PocketBook Era
  - A computer
  - A USB-C cable that carries data
  - The KOReader PocketBook package (downloaded in step 2)
prerequisites:
  - text: "KOReader on the PocketBook Era — what it adds and what it doesn't"
    href: /devices/pocketbook/pocketbook-era/koreader/
nextStep:
  text: More KOReader guides for the Era
  href: /devices/pocketbook/pocketbook-era/koreader/
related:
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
  - text: "PocketBook Era won't turn on or is frozen"
    href: /devices/pocketbook/pocketbook-era/troubleshooting/wont-turn-on/
searchTerms:
  - install koreader pocketbook
  - koreader pbi
  - applications folder
  - koreader.app
  - system applications
steps:
  - instruction: Update the Era to the current firmware first
    detail: >-
      Newer PocketBook firmware improves how third-party applications are
      launched. On the device, go to Settings, then "Software Update", and apply
      anything offered before you continue.
  - instruction: Download the KOReader package for PocketBook
    detail: >-
      On the KOReader releases page, download the PocketBook build. Depending on
      the release it is a file ending in ".pbi" (a PocketBook installer) or a zip
      that contains a "koreader.app" file and a "koreader" folder. Take the
      newest normal release, not a nightly build.
  - instruction: Connect the Era to your computer
    detail: >-
      Use the USB-C cable and accept the connection prompt on the device. It
      appears as a drive.
  - instruction: "If you have a .pbi file: copy it to the device and run it"
    detail: >-
      Copy the ".pbi" file to the "applications" folder on the drive (create the
      folder if it is not there). Eject and unplug. On the Era, open the
      Applications menu, open the ".pbi" entry, and confirm the install. It
      unpacks KOReader and removes the installer.
  - instruction: "If you have a zip: extract it to the applications folder"
    detail: >-
      Open the zip and copy the "koreader.app" file and the "koreader" folder it
      contains into the "applications" folder at the top level of the drive, so
      that "applications/koreader.app" and "applications/koreader/" both exist.
    warning: >-
      The files must be inside "applications" at the drive root, not nested in an
      extra folder such as "koreader-pocketbook". If KOReader does not appear,
      that is the usual reason.
  - instruction: Eject the drive and unplug
    detail: >-
      Use your computer's eject or "safely remove" option, then disconnect. The
      Era re-scans its applications.
  - instruction: Open KOReader from the app menu
    detail: >-
      On the Era, open the Applications menu from the home screen. "KOReader" is
      listed with the built-in apps. Open it; the first launch takes 10 to 20
      seconds. To leave KOReader, use its top menu and choose exit, which returns
      you to the PocketBook interface.
    tip: >-
      You can add KOReader to the home-screen shortcut bar under Settings, then
      Personalize, so you do not have to go through the Applications menu each
      time.
  - instruction: Set the buttons up inside KOReader
    detail: >-
      KOReader ignores PocketBook's own key mapping and uses its own. Open
      KOReader's top menu, then the gear, then "Taps and gestures", then
      "Physical buttons", and assign the two side page-turn buttons and their
      long presses there.
---

Installing KOReader on a PocketBook is the easiest of any e-reader brand: no
jailbreak, no launcher to register, just one file in the right folder. The stock
PocketBook reader, your library and your settings are untouched, and you move
between the two by opening or closing KOReader from the app menu. The only thing
to get right is that "koreader.app" and the "koreader" folder sit directly
inside "applications" at the top of the drive.
