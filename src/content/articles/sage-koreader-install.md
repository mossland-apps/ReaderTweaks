---
title: Install KOReader on the Kobo Sage
pageSlug: install
device: sage
section: koreader
type: guide
order: 1
summary: Add KOReader to the Sage by copying one package to the device. This keeps the stock Kobo reader intact and adds a KOReader icon to the home screen.
lastUpdated: 2026-09-02
datePublished: 2026-08-30
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-28
whatYouNeed:
  - Kobo Sage
  - A computer
  - A USB-C cable that carries data (not a charge-only cable)
  - The KOReader package for Kobo (downloaded in step 2)
prerequisites:
  - text: "KOReader on the Kobo Sage — what it adds and what it doesn't"
    href: /devices/kobo/sage/koreader/
nextStep:
  text: More KOReader guides for the Sage
  href: /devices/kobo/sage/koreader/
related:
  - text: "KOReader won't launch on the Kobo Sage"
    href: /devices/kobo/sage/troubleshooting/koreader-wont-launch/
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
searchTerms:
  - sideload
  - install koreader
  - KFMon
  - KoboRoot
  - one-click install
  - put koreader on kobo
steps:
  - instruction: Update the Sage to the current firmware first
    detail: >-
      The Kobo software unpacks the KOReader installer during a normal boot, and
      a badly out-of-date system can mishandle that step. On the device, go to
      the home screen, open the menu, then Settings, then Device information, and
      let it check for and apply any update before you continue.
  - instruction: Download the right KOReader package for the Sage
    detail: >-
      On the KOReader releases page, take the newest normal release (dated, such
      as v2026.07.1 — not a "nightly"). The Sage uses the plain **"koreader-kobo"**
      file, such as "koreader-kobo-v2026.07.1.zip" — not the "kobov5" file (that
      is for the 2024 Clara BW, Clara Colour and Libra Colour) and not the Kindle
      or Android builds.
  - instruction: Connect the Sage to your computer with the USB-C cable
    detail: >-
      When the Kobo asks what to do, choose "Connect". It appears on your
      computer as a removable drive named KOBOeReader. You are adding files to
      it, not replacing anything.
  - instruction: Copy the contents of the zip to the top level of the Kobo drive
    detail: >-
      Open the downloaded zip and copy everything inside it onto the KOBOeReader
      drive so the files sit at the very top, not inside a new folder. The
      package contains folders named ".kobo" and ".adds"; choose to merge them
      with the folders already on the drive. Do not copy the zip file itself onto
      the device.
    warning: >-
      If your unzip tool creates a folder named after the zip (something like
      "koreader-kobo-v2026.07.1") on the drive, open it and move its contents up
      one level, so that ".adds" and ".kobo" sit directly in the drive's root.
      The installer only runs when the files are at the top level.
  - instruction: Eject the drive safely, then unplug the cable
    detail: >-
      Use your operating system's "eject" or "safely remove" option before you
      pull the cable. Ejecting is what tells the Kobo software the drive is free
      again, and only then does it look for the installer you just copied.
    warning: >-
      Pulling the cable without ejecting can leave the install half-written and,
      in rare cases, damage the Kobo's library database.
  - instruction: Wait for the Sage to process the update
    detail: >-
      The screen shows a progress bar or the word "Installing", may go blank for
      a moment, and the device may restart once. Leave it alone for a minute or
      two. What is happening is the Kobo software unpacking a small launcher
      called KFMon, which draws the KOReader icon and starts the app.
  - instruction: Open KOReader from the home screen
    detail: >-
      Once the device has settled, a KOReader tile appears on the home screen,
      and in the app list on newer firmware. Tap it. The first launch takes
      10 to 20 seconds. To leave KOReader, open its top menu and choose exit.
    tip: >-
      No KOReader tile? Connect and eject the device once more, or restart the
      Sage from Settings, then Device information. KFMon adds the tile on the next
      clean start-up.
---

This is the standard way to run KOReader on a Kobo, and it is the same on the
Sage as on the smaller models: you copy one package to the device over USB, and
the Kobo's own software installs it on the next start-up. Nothing is overwritten
— the stock reader, your library and your settings stay as they were, and you
switch between the two by opening or closing KOReader.

The one part people get wrong is step 4 — the files have to land at the top level
of the drive, not inside a folder. If KOReader does not appear after the device
restarts, that is almost always why; the fix is in the
[troubleshooting guide](/devices/kobo/sage/troubleshooting/koreader-wont-launch/).
