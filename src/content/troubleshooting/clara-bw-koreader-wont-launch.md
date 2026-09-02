---
title: KOReader won't launch on the Kobo Clara BW
pageSlug: koreader-wont-launch
device: clara-bw
software: KOReader
softwareVersion: "2026.07.1"
summary: >-
  The KOReader icon does nothing, never appeared, or the app opens and closes
  straight away. Almost always this is where the installer files were copied.
difficulty: Moderate
estimatedTime: 15 to 30 minutes
lastTested: 2026-08-25
lastUpdated: 2026-09-02
searchTerms:
  - crash
  - crashes
  - crashing
  - black screen
  - white screen
  - blank screen
  - freezes
  - not opening
  - won't open
  - not launching
  - no icon
  - missing icon
  - KFMon
  - NickelMenu
  - boot loop
symptoms:
  - Tapping the KOReader tile does nothing.
  - The KOReader tile never appeared after installing.
  - KOReader shows a black or white screen for a few seconds, then drops back to the Kobo home screen.
  - The Clara BW restarts when you tap KOReader.
beforeYouStart:
  - Check which firmware version the Clara BW is on — Settings, then Device information.
  - Have the USB-C cable and the computer you installed with nearby.
  - Know that none of the fixes below touch your books, your highlights or your Kobo settings.
mostCommonCause: >-
  Two things account for most cases on the Clara BW. The first is the wrong
  package: the Clara BW needs the KOReader build with "kobov5" in the file name,
  and the plain "koreader-kobo" package will not run on it. The second is files
  copied into a folder on the device instead of to the top level of the drive —
  the Kobo software only looks for the launcher and the "koreader" folder at the
  drive's root, so a folder named after the zip quietly does nothing.
decisionTree:
  question: What happens when you tap KOReader?
  branches:
    - label: Nothing at all — no tile, or the tile does nothing
      hint: The launcher did not install, or the files are in the wrong place
      href: "#fix-1"
    - label: A black or white screen, then back to the home screen
      hint: KOReader starts but exits immediately
      href: "#fix-2"
    - label: The Clara BW restarts
      hint: Usually a half-written or interrupted install
      href: "#fix-3"
    - label: An error message with text in it
      hint: Note the wording — it points to a specific cause
      href: "#fix-3"
fixes:
  - title: Use the "kobov5" package and put the files at the drive root
    rationale: >-
      The Clara BW is a 2024-generation Kobo on a newer platform. It needs the
      "kobov5" KOReader build, and the launcher and "koreader" folder have to sit
      at the very top of the drive — one level down, inside a folder, and the Kobo
      skips the install without any warning.
    steps:
      - >-
        Check which package you used. On the KOReader releases page, the Clara
        BW's file has "kobov5" in the name (such as
        "koreader-kobov5-v2026.07.1.zip"). If you installed the plain
        "koreader-kobo" package, that is the problem — download the "kobov5" one.
      - Connect the Clara BW and open the KOBOeReader drive on your computer.
      - >-
        Turn on "show hidden files" so you can see folders whose names start with
        a dot. On Windows, use View, then Hidden items. On macOS, press
        Command-Shift-period.
      - >-
        Look for a folder named after the zip (something like
        "koreader-kobov5-v2026.07.1") in the drive root. If it is there, open it,
        select everything inside, and move those items up into the drive root so
        that ".adds" and ".kobo" sit directly in the drive.
      - >-
        Confirm the drive root now contains a ".adds" folder with a "koreader"
        folder inside it, and a ".kobo" folder that contains a file called
        "KoboRoot.tgz".
      - Eject the drive safely, unplug, and wait for the device to process the update.
    note: >-
      If "KoboRoot.tgz" is missing from the ".kobo" folder, the download was
      incomplete. Download the KOReader package again in full and recopy it.
  - title: Reinstall KOReader over the top of itself
    rationale: >-
      An install can finish but leave one file damaged, usually from a copy that
      was interrupted or an eject that was cut short. Copying the package again
      repairs it and leaves your KOReader settings alone.
    steps:
      - Download the current KOReader package for Kobo again, letting it finish completely.
      - >-
        Connect the Clara BW and copy the contents of the zip to the top level of
        the drive, choosing to merge folders and replace files when asked.
      - Eject safely, unplug, and let the device install.
      - After it finishes, restart the Clara BW once from Settings, then Device information.
    note: >-
      Your KOReader bookmarks, highlights and settings live in
      ".adds/koreader/settings" and are not affected by a reinstall.
  - title: Rule out a firmware change or a stuck launcher
    rationale: >-
      A recent Kobo firmware update can leave the launcher unregistered until it
      is reinstalled, and a launcher caught mid-update can make the tile do
      nothing or trigger a restart.
    steps:
      - >-
        Check the firmware version under Settings, then Device information. If it
        changed in the last few days, that is the likely cause.
      - >-
        Reinstall the KOReader package as in Fix 2. The package includes a
        current launcher, and reinstalling re-registers it with the new firmware.
      - >-
        If the device still restarts when you tap the tile, do a normal restart
        from Settings first, then try again. This clears a launcher that was left
        half-updated.
      - >-
        If an error message appears, note its exact wording. A message about "no
        such file" points back to Fix 1; one that names a specific ".lua" file
        points to Fix 2.
recovery: >-
  KOReader lives entirely in the ".adds/koreader" folder plus a couple of
  launcher files. To remove it and put the Clara BW back as it was: connect the
  device, delete the ".adds/koreader" folder and the "koreader.png" file from the
  drive root, then eject. To also remove the launcher, use the KFMon uninstall
  package from the KOReader site, or do a factory reset from Settings (which also
  erases downloaded books, so back them up first). Removing KOReader never
  changes the stock Kobo reader.
related:
  - text: "Install KOReader on the Kobo Clara BW"
    href: /devices/kobo/clara-bw/koreader/install/
  - text: "KOReader on the Kobo Clara BW"
    href: /devices/kobo/clara-bw/koreader/
  - text: "The Kobo Clara BW won't turn on or is frozen"
    href: /devices/kobo/clara-bw/troubleshooting/wont-turn-on/
---

If KOReader worked before and stopped after a Kobo update, start with Fix 3. If
it has never opened since you installed it, work through the fixes in order —
Fix 1 resolves the large majority of first-time installs.
