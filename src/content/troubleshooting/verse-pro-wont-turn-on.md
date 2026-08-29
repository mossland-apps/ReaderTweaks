---
title: The PocketBook Verse Pro won't turn on or is frozen
pageSlug: wont-turn-on
device: pocketbook-verse-pro
software: PocketBook firmware
summary: >-
  The screen is blank, stuck on the PocketBook logo, or frozen and not
  responding. Most cases are a flat battery or a software hang that a forced
  restart clears.
difficulty: Easy
estimatedTime: 30 minutes
lastTested: 2026-08-26
lastUpdated: 2026-08-28
searchTerms:
  - won't turn on
  - dead
  - black screen
  - frozen
  - unresponsive
  - stuck on logo
  - hard reset
  - force restart
  - not charging
  - reset hole
  - wont wake up
symptoms:
  - Pressing the power button does nothing and the screen stays blank.
  - The device is stuck on the PocketBook logo or a loading bar.
  - A page is frozen and the buttons and touch do nothing.
  - It will not wake from sleep.
beforeYouStart:
  - Use a charger and cable you know work, ideally the ones supplied.
  - Give any charging attempt at least 30 minutes before deciding it is not working.
  - A forced restart does not erase books or settings; a factory reset does.
mostCommonCause: >-
  The most common cause is a fully drained battery — a reader that has sat unused
  for weeks can need 15 to 30 minutes on the charger before it responds at all.
  The next most common is a software hang, where the device has power but has
  stopped responding, which holding the power button clears.
decisionTree:
  question: What is the device doing?
  branches:
    - label: Completely blank, no logo, no light
      hint: Charge it first, then force a restart
      href: "#fix-1"
    - label: Stuck on the PocketBook logo or a loading bar
      hint: Force a restart; if it recurs, check storage
      href: "#fix-2"
    - label: A page is frozen but the screen is on
      hint: A forced restart clears the hang
      href: "#fix-2"
    - label: It starts fine but keeps freezing later
      hint: Likely a bad file or a full disk
      href: "#fix-3"
fixes:
  - title: Charge it, then force a restart
    rationale: >-
      A deeply discharged battery gives no response until it has taken on a
      little charge. Only after charging is a forced restart worth trying.
    steps:
      - >-
        Plug the Verse Pro into a wall charger with a known-good USB-C cable and
        leave it for at least 30 minutes, longer if you can. A charging light or
        icon may not appear straight away.
      - >-
        With it still plugged in, press and hold the power button for about
        30 seconds. Keep holding through any menu that appears. The screen blanks
        and then shows the PocketBook start-up logo.
      - >-
        Release and let it boot. After a full drain this can take a minute or
        two.
      - >-
        If nothing happens after an hour on the charger and a 30-second hold, try
        a different cable and a proper wall charger before assuming a fault.
    note: >-
      Charge-only cables and weak USB ports are a frequent false alarm. A 5 W or
      higher wall charger revives a flat device more reliably than a laptop
      port.
  - title: Force a restart to clear a hang or a stuck logo
    rationale: >-
      If the screen is lit — a frozen page, or stuck on the logo — the device
      has power but the software has stopped. Holding the power button forces a
      clean restart.
    steps:
      - >-
        Press and hold the power button for about 30 seconds until the screen
        changes and the PocketBook logo appears, then release.
      - >-
        Let it finish starting. A frozen reading session is usually back on the
        same page afterwards.
      - >-
        If it hangs on the logo again, connect it to a computer, let it mount as
        a drive, and check there is free space. A completely full device can
        fail to start; delete a few large files, eject, and restart.
      - If the logo hang repeats and the disk is not full, go to Fix 3.
  - title: Repair the software if it keeps freezing
    rationale: >-
      Repeated freezes after a normal start usually trace to one damaged book
      file or a corrupt library database, not the hardware.
    steps:
      - >-
        Connect the device to a computer. Remove the last one or two book files
        you added before the trouble began, and see if the freezes stop.
      - >-
        If a specific book crashes the reader every time it opens, delete that
        file and add a fresh copy.
      - >-
        In the device's Settings, look for "Clear cache" or "Optimize library" /
        "Update library" and run it. This rebuilds the book index without
        touching the files.
      - >-
        As a last resort, a factory reset from Settings returns the software to
        new. It erases downloaded books and settings, so copy anything you want
        to keep off the device first.
recovery: >-
  A forced restart and a library rebuild leave your book files in place. A
  factory reset erases downloaded books and settings but not your PocketBook
  account or cloud library, which can be re-synced after you sign in. If the
  device shows no response after an hour of charging, a fresh cable and charger,
  and a 30-second power hold, it is likely a hardware fault and worth contacting
  PocketBook support.
related:
  - text: "Set up a new PocketBook Verse Pro"
    href: /devices/pocketbook/pocketbook-verse-pro/guides/first-setup/
  - text: "A DRM-protected library book won't open on the PocketBook Verse Pro"
    href: /devices/pocketbook/pocketbook-verse-pro/troubleshooting/drm-book-wont-open/
---

Follow the fixes in the order the decision tree points to. A long charge plus a
30-second power-button hold revives most unresponsive Verse Pros; a stuck logo
or frozen page is nearly always cleared by the same hold on its own.
