---
title: KOReader won't launch on the Kindle Paperwhite
pageSlug: koreader-wont-launch
device: paperwhite
software: KOReader
softwareVersion: "2026.07.1"
summary: >-
  KOReader was installed on a jailbroken Paperwhite but will not start, the
  launcher scriptlet is missing, or it stopped working after a firmware update.
difficulty: Advanced
estimatedTime: 30 to 60 minutes
lastTested: 2026-09-01
lastUpdated: 2026-09-02
searchTerms:
  - koreader wont start
  - scriptlet missing
  - kpm install koreader failed
  - koreader gone after update
  - jailbreak broken
  - kual missing
  - koreader crash kindle
symptoms:
  - The KOReader launcher scriptlet is missing from the home screen.
  - The KPM install command runs but no scriptlet appears, or it errors.
  - KOReader worked before and disappeared after the Kindle updated its firmware.
  - Choosing KOReader shows a black screen, then returns to the Kindle.
beforeYouStart:
  - Check the current firmware version — Settings, then Device Options, then Device Info.
  - Have Wi-Fi available so KPM can reach its repository.
  - Know that this only concerns KOReader and the jailbreak; your Amazon books are untouched.
mostCommonCause: >-
  By far the most common cause is a firmware update. A Kindle that updated itself
  over Wi-Fi removes the jailbreak, and with it KPM and the KOReader launcher,
  even though some KOReader files may still be on the device. The next most common
  cause is a KPM install that did not finish — usually a Wi-Fi drop or the
  repository being briefly unreachable.
decisionTree:
  question: When did it stop working?
  branches:
    - label: It stopped after the Kindle updated
      hint: The jailbreak was removed and needs redoing
      href: "#fix-1"
    - label: The KPM install never produced a working scriptlet
      hint: Re-run the KPM install on a stable connection
      href: "#fix-2"
    - label: The scriptlet is there but KOReader will not start
      hint: Reinstall the KOReader package with KPM
      href: "#fix-3"
    - label: I installed the old way with KUAL on an older model
      hint: Check the files are where KUAL expects them
      href: "#fix-3"
fixes:
  - title: Redo the jailbreak if a firmware update removed it
    rationale: >-
      A firmware update disables the jailbreak. KPM and the KOReader launcher stop
      working because the system will no longer run unsigned software, even though
      files remain. There is no way around re-doing the jailbreak for the new
      firmware.
    steps:
      - >-
        Check the firmware version. If it is higher than it was, the update is
        the cause.
      - >-
        Go to kindlemodding.org and run the jailbreak wizard for this exact model
        and firmware. If a method exists, follow it and complete every
        post-jailbreak step, including the over-the-air update block.
      - >-
        Re-run ";kpm update" then ";kpm install koreader" to reinstall KOReader.
      - >-
        Keep the Kindle in Airplane Mode except for deliberate syncs so this does
        not recur.
      - >-
        If no jailbreak exists yet for this firmware, KOReader cannot run until
        one is released. Use the stock reader in the meantime and check the wizard
        again in a few weeks.
    note: >-
      This is why the install guide stresses the update block and Airplane Mode.
      An unprotected jailbreak is temporary.
  - title: Re-run the KPM install on a stable connection
    rationale: >-
      If the jailbreak is intact but no working scriptlet ever appeared, the KPM
      install probably did not complete — a Wi-Fi drop mid-download, or the
      repository being briefly unavailable.
    steps:
      - Confirm Wi-Fi is connected and the browser can load a normal web page.
      - In the search bar run ";kpm update" and wait for it to finish.
      - Then run ";kpm install koreader" again. Leave the Kindle alone until it returns you to the home screen.
      - >-
        If it still fails, run ";kpm upgrade" first (this refreshes KPM itself),
        then ";kpm install koreader". Persistent failures are worth reporting on
        the Kindle Modding Discord with your model and firmware.
  - title: Reinstall KOReader, or check a legacy KUAL install
    rationale: >-
      If KPM works and the jailbreak is intact but KOReader still will not start,
      the KOReader files are likely incomplete. On older non-touch models that
      use the deprecated KUAL method, the usual problem is files in the wrong
      folder instead.
    steps:
      - >-
        With KPM: run ";kpm install koreader" once more to replace the files, then
        launch from the scriptlet or ";kpm launch koreader". If it shows an error
        naming a specific ".lua" file, the install is damaged — some KPM versions
        offer ";kpm remove koreader" to clear it before reinstalling.
      - >-
        With the legacy KUAL method (Kindle 2, 3 or 4 Non-Touch): connect the
        Kindle by USB and confirm the "extensions" folder at the drive root
        contains a "koreader" folder, and that the KOReader program folder is
        where its readme specifies — not nested one level too deep.
      - >-
        Re-read the readme inside the KUAL and KOReader packages; folder names
        change slightly between versions.
      - Eject, unplug, and open KUAL again to run its "Install or update KOReader" action.
recovery: >-
  To remove KOReader with KPM, use ";kpm remove koreader" if your version offers
  it, or delete the scriptlet and the "koreader" folder from the drive over USB.
  A firmware update or a full device Reset from Device Options removes the
  jailbreak, KPM and KOReader together and restores the stock software; a Reset
  erases downloaded books but not Amazon purchases.
related:
  - text: "Install KOReader on the Kindle Paperwhite"
    href: /devices/kindle/paperwhite/koreader/install/
  - text: "Installing KOReader on a Kindle in 2026: the KPM method"
    href: /guides/koreader-on-kindle-2026/
---

If KOReader stopped working, check the firmware version first — an update is the
cause far more often than anything else, and Fix 1 is then the only real option.
For a fresh install that never produced a launcher, Fix 2 covers the usual
interrupted-download case.
