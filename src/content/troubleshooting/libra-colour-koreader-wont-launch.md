---
title: KOReader won't launch on the Kobo Libra Colour
pageSlug: koreader-wont-launch
device: libra-colour
software: KOReader
softwareVersion: "2024.11"
summary: >-
  The KOReader icon does nothing, never appeared, or the app opens and closes
  straight away. Almost always this is where the installer files were copied.
difficulty: Moderate
estimatedTime: 15 to 30 minutes
lastTested: 2026-08-22
lastUpdated: 2026-08-24
searchTerms:
  - crash
  - crashes
  - crashing
  - black screen
  - white screen
  - blank screen
  - freezes
  - frozen
  - not opening
  - won't open
  - will not start
  - not launching
  - no icon
  - missing icon
  - KFMon
  - NickelMenu
  - boot loop
  - reboot loop
symptoms:
  - Tapping the KOReader tile does nothing.
  - The KOReader tile never appeared after installing.
  - KOReader shows a black or white screen for a few seconds, then drops back to the Kobo home screen.
  - The Libra Colour restarts when you tap KOReader.
beforeYouStart:
  - Check which firmware version the Libra Colour is on — Settings, then Device information.
  - Have the USB-C cable and the computer you installed with nearby.
  - Know that none of the fixes below touch your books, your highlights or your Kobo settings.
mostCommonCause: >-
  On the Libra Colour the usual reason is that the installer files were copied
  into a folder on the device instead of to the top level of the drive. The Kobo
  software only looks for the launcher and the "koreader" folder at the drive's
  root. If a folder named something like "KOReader-2024.11-kobo" ended up on the
  device, the install quietly did nothing.
decisionTree:
  question: What happens when you tap KOReader?
  branches:
    - label: Nothing at all — no tile, or the tile does nothing
      hint: The launcher did not install, or the files are in the wrong place
      href: "#fix-1"
    - label: A black or white screen, then back to the home screen
      hint: KOReader starts but exits immediately
      href: "#fix-2"
    - label: The Libra Colour restarts
      hint: Usually a half-written or interrupted install
      href: "#fix-3"
    - label: An error message with text in it
      hint: Note the wording — it points to a specific cause
      href: "#fix-3"
fixes:
  - title: Put the installer files where the Kobo can find them
    rationale: >-
      The launcher and the "koreader" folder have to sit at the very top of the
      drive. If they are one level down, inside a folder, the Kobo skips the
      install without any warning.
    steps:
      - Connect the Libra Colour and open the KOBOeReader drive on your computer.
      - >-
        Turn on "show hidden files" so you can see folders whose names start with
        a dot. On Windows, use View, then Hidden items. On macOS, press
        Command-Shift-period.
      - >-
        Look for a folder named like "KOReader-2024.11-kobo" in the drive root.
        If it is there, open it, select everything inside, and move those items
        up into the drive root so that ".adds" and ".kobo" sit directly in the
        drive.
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
        Connect the Libra Colour and copy the contents of the zip to the top
        level of the drive, choosing to merge folders and replace files when
        asked.
      - Eject safely, unplug, and let the device install.
      - After it finishes, restart the Libra Colour once from Settings, then Device information.
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
        current launcher, and reinstalling re-registers it with the new
        firmware.
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
  launcher files. To remove it and put the Libra Colour back as it was: connect
  the device, delete the ".adds/koreader" folder and the "koreader.png" file
  from the drive root, then eject. To also remove the launcher, use the KFMon
  uninstall package from the KOReader site, or do a factory reset from Settings
  (which also erases downloaded books, so back them up first). Removing KOReader
  never changes the stock Kobo reader.
related:
  - text: "Install KOReader on the Kobo Libra Colour"
    href: /devices/kobo/libra-colour/koreader/install/
  - text: "KOReader on the Kobo Libra Colour"
    href: /devices/kobo/libra-colour/koreader/
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
---

If KOReader worked before and stopped after a Kobo update, start with Fix 3. If
it has never opened since you installed it, work through the fixes in order —
Fix 1 resolves the large majority of first-time installs on the Libra Colour.
