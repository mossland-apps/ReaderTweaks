---
title: Install KOReader on the Kindle Paperwhite
pageSlug: install
device: paperwhite
section: koreader
type: guide
order: 1
summary: The KOReader-specific steps for a jailbroken Paperwhite — installing the hotfix, KUAL and the KOReader package — plus how to protect it from firmware updates.
lastUpdated: 2026-08-26
datePublished: 2026-08-26
software: KOReader
softwareVersion: "2024.11"
difficulty: Advanced
estimatedTime: 1 hour
lastTested: 2026-08-20
whatYouNeed:
  - Kindle Paperwhite, already jailbroken for its firmware version
  - A computer
  - A USB-C data cable
  - The KOReader Kindle package, the KUAL package and the update hotfix
prerequisites:
  - text: "KOReader on the Kindle Paperwhite — what jailbreaking involves and the risks"
    href: /devices/kindle/paperwhite/koreader/
  - text: "Jailbreak the device first using the current community method for your firmware (MobileRead)"
    href: https://www.mobileread.com/forums/forumdisplay.php?f=150
searchTerms:
  - koreader kindle
  - jailbreak paperwhite
  - kual
  - mrpi
  - hotfix
  - block kindle updates
  - install koreader kindle
related:
  - text: "KOReader won't launch on the Kindle Paperwhite"
    href: /devices/kindle/paperwhite/troubleshooting/koreader-wont-launch/
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
steps:
  - instruction: Confirm the Kindle is already jailbroken
    detail: >-
      This guide starts after the jailbreak. If you have not done that, stop here
      and follow the current method for your exact firmware version on the
      MobileRead forums — it changes over time and per firmware, which is why it
      is not reproduced here. You can check your firmware under Settings, then
      Device Options, then Device Info.
  - instruction: Put the Kindle in airplane mode and turn off automatic updates
    detail: >-
      From the quick settings, enable Airplane Mode. A firmware update can remove
      the jailbreak, so most people keep Wi-Fi off except for brief, deliberate
      syncs. Installing the update-blocking hotfix in the next step makes this
      safer.
    warning: >-
      If the Kindle updates its firmware before the jailbreak is protected, you
      may have to start the whole process again, and on the newest firmware there
      may be no jailbreak available at all.
  - instruction: Download the three packages on your computer
    detail: >-
      From the KOReader releases page, get the file named like
      "koreader-kindle-2024.11.zip". From MobileRead, get the current "KUAL"
      package and the "Kindle update-blocking hotfix" (often called the update
      hotfix or "Prevent OTA"). Keep the zip files as they are for now.
  - instruction: Connect the Kindle and copy the packages across
    detail: >-
      Connect by USB and open the Kindle drive. Extract each zip and copy the
      resulting folders into the "extensions" folder and the "documents" folder
      as each package's own readme specifies — KUAL and the hotfix go where their
      instructions say, and the KOReader package is usually placed in the root or
      the "koreader" folder created by its installer.
    tip: >-
      Follow the readme inside each zip rather than guessing. The exact folder
      names differ slightly between packages and firmware.
  - instruction: Eject the Kindle and open KUAL
    detail: >-
      Eject the drive safely and unplug. On the Kindle, open the Library — KUAL
      appears as an item called "KUAL" or "Kindle Unified Application Launcher".
      Open it to get its menu.
  - instruction: Install the update hotfix from KUAL
    detail: >-
      In the KUAL menu, run the hotfix installer. This stops the Kindle from
      downloading and applying firmware updates on its own, which is what
      protects the jailbreak going forward. You can then turn Wi-Fi back on when
      you need it.
  - instruction: Install KOReader from KUAL
    detail: >-
      Still in KUAL, choose the "Install or update KOReader" action, sometimes
      shown as "MRPI" (the package installer). It unpacks the KOReader package
      you copied over. When it finishes, back out of KUAL.
  - instruction: Launch KOReader
    detail: >-
      Open KUAL again and choose "KOReader" to start it, or use the KOReader
      launcher item if the installer added one to the Library. The first launch
      takes 15 to 30 seconds. To leave KOReader, use its top menu and choose
      exit, which returns you to the Kindle interface.
  - instruction: Set KOReader as the reader you land in, if you want
    detail: >-
      KOReader can be set to start automatically instead of the Kindle reader.
      This lives in KOReader's own settings under "Start with" or in a KUAL
      "autostart" action. Leave it off at first so you can get back to the normal
      interface easily while you learn KOReader.
---

Everything hard about KOReader on a Kindle is the jailbreak and keeping firmware
under control; the KOReader part itself is a few actions in a menu. This guide
covers only the KOReader-specific steps and assumes the device is already
jailbroken for its firmware — the jailbreak method is firmware-specific and
maintained by the community, so the right source for it is the MobileRead
forums, linked above.

The single most important habit afterwards is the update hotfix plus airplane
mode. A Kindle that quietly updates itself is the usual reason a working
KOReader setup breaks.
