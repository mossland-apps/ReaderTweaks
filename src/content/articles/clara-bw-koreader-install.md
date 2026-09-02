---
title: Install KOReader on the Kobo Clara BW
pageSlug: install
device: clara-bw
section: koreader
type: guide
order: 1
summary: Add KOReader to the Clara BW by copying one package to the device. This keeps the stock Kobo reader intact and adds a KOReader icon to the home screen.
lastUpdated: 2026-09-02
datePublished: 2026-08-27
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-25
whatYouNeed:
  - Kobo Clara BW
  - A computer
  - A USB-C cable that carries data (not a charge-only cable)
  - The KOReader package for Kobo (downloaded in step 2)
prerequisites:
  - text: "KOReader on the Kobo Clara BW — what it adds and what it doesn't"
    href: /devices/kobo/clara-bw/koreader/
nextStep:
  text: More KOReader guides for the Clara BW
  href: /devices/kobo/clara-bw/koreader/
related:
  - text: "KOReader won't launch on the Kobo Clara BW"
    href: /devices/kobo/clara-bw/troubleshooting/koreader-wont-launch/
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
searchTerms:
  - sideload
  - sideloading
  - install koreader
  - KFMon
  - KoboRoot
  - one-click install
  - put koreader on kobo
steps:
  - instruction: Update the Clara BW to the current firmware first
    detail: >-
      The Kobo software unpacks the KOReader installer during a normal boot, and
      a badly out-of-date system can mishandle that step. On the device, go to
      the home screen, open the menu, then Settings, then Device information, and
      let it check for and apply any update before you continue.
  - instruction: Download the right KOReader package for the Clara BW
    detail: >-
      On the KOReader releases page, take the newest normal release (dated, such
      as v2026.07.1 — not a "nightly"). The Clara BW is one of the 2024 Kobos on
      a newer hardware platform, so it needs the file with **"kobov5"** in the
      name, such as "koreader-kobov5-v2026.07.1.zip" — the same package covers
      the Clara Colour and Libra Colour. The plain "koreader-kobo" file is for
      older Kobos and the Kindle and Android builds will not run here.
    warning: >-
      Installing the plain "koreader-kobo" package on a Clara BW is the most
      common reason KOReader will not start on this model. Match the "kobov5"
      file to the device.
  - instruction: Connect the Clara BW to your computer with the USB-C cable
    detail: >-
      When the Kobo asks what to do, choose "Connect". It appears on your
      computer as a removable drive named KOBOeReader. This is the same storage
      the stock reader uses; you are adding files to it, not replacing anything.
  - instruction: Copy the contents of the zip to the top level of the Kobo drive
    detail: >-
      Open the downloaded zip and copy everything inside it onto the KOBOeReader
      drive so the files sit at the very top, not inside a new folder. The
      package contains folders named ".kobo" and ".adds"; when your computer
      asks, choose to merge them with the folders already on the drive. Do not
      copy the zip file itself onto the device.
    warning: >-
      If your unzip tool creates a folder named after the zip (something like
      "koreader-kobov5-v2026.07.1") on the drive, open it and move its contents
      up one level, so that ".adds" and ".kobo" sit directly in the drive's root.
      The installer only runs when the files are at the top level.
  - instruction: Eject the drive safely, then unplug the cable
    detail: >-
      Use your operating system's "eject" or "safely remove" option before you
      pull the cable. Ejecting is what tells the Kobo software the drive is free
      again, and only then does it look for the installer you just copied.
    warning: >-
      Pulling the cable without ejecting can leave the install half-written and,
      in rare cases, damage the Kobo's library database.
  - instruction: Wait for the Clara BW to process the update
    detail: >-
      The screen shows a progress bar or the word "Installing", may go blank for
      a moment, and the device may restart once. Leave it alone for a minute or
      two. What is happening is the Kobo software unpacking a small launcher
      program called KFMon, which draws the KOReader icon and starts the app.
  - instruction: Open KOReader from the home screen
    detail: >-
      Once the device has settled, a KOReader tile appears on the home screen,
      and in the app list on newer firmware. Tap it. The first launch takes
      10 to 20 seconds. To leave KOReader, open its top menu and choose exit;
      that returns you to the normal Kobo screen.
    tip: >-
      No KOReader tile? Connect and eject the device once more, or restart the
      Clara BW from Settings, then Device information. KFMon adds the tile on the
      next clean start-up.
---

This is the standard way to run KOReader on a Kobo, and it is the same on the
Clara BW as on the larger models: you copy one package to the device over USB,
and the Kobo's own software installs it on the next start-up. Nothing is
overwritten — the stock reader, your library and your settings stay as they
were, and you switch between the two by opening or closing KOReader.

The one part people get wrong is step 4 — the files have to land at the top
level of the drive, not inside a folder. If KOReader does not appear after the
device restarts, that is almost always why; the fix is in the
[troubleshooting guide](/devices/kobo/clara-bw/troubleshooting/koreader-wont-launch/).
