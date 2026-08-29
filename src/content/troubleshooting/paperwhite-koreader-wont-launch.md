---
title: KOReader won't launch on the Kindle Paperwhite
pageSlug: koreader-wont-launch
device: paperwhite
software: KOReader
softwareVersion: "2024.11"
summary: >-
  KOReader was installed on a jailbroken Paperwhite but will not start, the KUAL
  entry is missing, or it stopped working after a firmware update.
difficulty: Advanced
estimatedTime: 30 to 60 minutes
lastTested: 2026-08-20
lastUpdated: 2026-08-26
searchTerms:
  - koreader wont start
  - kual missing
  - koreader gone after update
  - jailbreak broken
  - mrpi failed
  - koreader crash kindle
  - hotfix
symptoms:
  - The KUAL "book" is missing from the Library.
  - KUAL opens but has no KOReader entry, or the entry does nothing.
  - KOReader worked before and disappeared after the Kindle updated its firmware.
  - Choosing KOReader shows a black screen, then returns to the Kindle.
beforeYouStart:
  - Check the current firmware version — Settings, then Device Options, then Device Info.
  - Have the computer, cable and the KOReader, KUAL and hotfix packages you used before.
  - Know that this only concerns KOReader and the jailbreak; your Amazon books are untouched.
mostCommonCause: >-
  By far the most common cause is a firmware update. A Kindle that updated itself
  over Wi-Fi removes the jailbreak, and with it KUAL and KOReader, even though
  the KOReader files may still be on the drive. The next most common cause is
  files that were copied to the wrong folder, so KUAL never picked up the
  KOReader action.
decisionTree:
  question: When did it stop working?
  branches:
    - label: It never worked since I installed it
      hint: Files are probably in the wrong place
      href: "#fix-1"
    - label: It stopped after the Kindle updated
      hint: The jailbreak was removed and needs redoing
      href: "#fix-2"
    - label: KUAL is there but KOReader will not start
      hint: Reinstall the KOReader package
      href: "#fix-3"
    - label: I see an error message
      hint: Note the wording; it usually names the cause
      href: "#fix-3"
fixes:
  - title: Check the files are where KUAL expects them
    rationale: >-
      KUAL only shows a KOReader action if the KOReader package and its KUAL
      "extension" are in the exact folders the readme specifies. A folder one
      level too deep is invisible to it.
    steps:
      - >-
        Connect the Kindle and open its drive. Confirm there is an "extensions"
        folder at the root, with a "koreader" (or similarly named) folder inside
        it that contains a "menu.json" or "config.xml".
      - >-
        Confirm the KOReader program itself is where its installer put it —
        usually a "koreader" folder at the root, or unpacked by the installer
        from a package in "documents".
      - >-
        If anything is nested inside an extra folder such as
        "koreader-kindle-2024.11", move its contents up to the correct level.
      - Eject safely, unplug, and open KUAL again to see if the action appears.
    note: >-
      Re-read the readme files inside the KUAL and KOReader packages. The folder
      names change slightly between versions.
  - title: Redo the jailbreak if a firmware update removed it
    rationale: >-
      A firmware update disables the jailbreak. KUAL and KOReader vanish because
      the system will no longer run unsigned software, even though the files
      remain. There is no way around re-doing the jailbreak for the new firmware.
    steps:
      - >-
        Check the firmware version. If it is higher than it was, the update is
        the cause.
      - >-
        On the MobileRead forums, find the jailbreak method for this exact
        firmware version. If one exists, follow it, then reinstall KUAL, the
        update hotfix and KOReader as in the install guide.
      - >-
        Install the update hotfix again straight away, and keep the Kindle in
        airplane mode except for deliberate syncs, so this does not recur.
      - >-
        If no jailbreak exists yet for this firmware, KOReader cannot run until
        one is released. Use the stock reader in the meantime.
    note: >-
      This is the reason the install guide stresses the hotfix and airplane
      mode. An unprotected jailbreak is temporary.
  - title: Reinstall the KOReader package
    rationale: >-
      If KUAL works and the jailbreak is intact but KOReader still will not
      start, the KOReader files themselves are likely incomplete or damaged from
      an interrupted copy.
    steps:
      - Download the current "koreader-kindle" package again, in full.
      - >-
        Connect the Kindle, copy the package to the location its readme
        specifies, replacing the old files.
      - >-
        Eject, unplug, open KUAL and run "Install or update KOReader" (the MRPI
        action).
      - >-
        Start KOReader from KUAL. If it now shows an error naming a specific
        ".lua" file, delete the "koreader" folder entirely and reinstall from
        scratch.
recovery: >-
  To remove KOReader and the jailbreak and return the Paperwhite to stock:
  install the "uninstall" actions from KUAL if present, then delete the
  "koreader" and "extensions" folders and the KUAL document from the drive. A
  firmware update or a full device Reset from Device Options also removes
  everything and restores the stock software; a Reset erases downloaded books
  but not Amazon purchases.
related:
  - text: "Install KOReader on the Kindle Paperwhite"
    href: /devices/kindle/paperwhite/koreader/install/
  - text: "KOReader on the Kindle Paperwhite"
    href: /devices/kindle/paperwhite/koreader/
---

If KOReader stopped working, check the firmware version first — an update is the
cause far more often than anything else, and Fix 2 is then the only real option.
For a fresh install that never ran, Fix 1 covers the usual folder mistakes.
