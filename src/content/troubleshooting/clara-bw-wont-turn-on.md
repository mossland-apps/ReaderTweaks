---
title: The Kobo Clara BW won't turn on or is frozen
pageSlug: wont-turn-on
device: clara-bw
software: Kobo firmware
summary: >-
  The screen is blank, stuck on the Kobo logo, or frozen on a page and not
  responding. Most cases are a flat battery or a software hang that a forced
  restart clears.
difficulty: Easy
estimatedTime: 30 minutes
lastTested: 2026-08-25
lastUpdated: 2026-08-27
searchTerms:
  - won't turn on
  - dead
  - black screen
  - frozen
  - unresponsive
  - stuck on logo
  - stuck on kobo screen
  - hard reset
  - force restart
  - not charging
  - wont wake up
symptoms:
  - Pressing the power button does nothing and the screen stays blank.
  - The device is stuck showing the Kobo logo or a loading screen.
  - The page is frozen and taps and swipes do nothing.
  - It will not wake from sleep.
beforeYouStart:
  - Use a cable and charger you know work, ideally the ones that came with the device.
  - Give any charging attempt at least 30 minutes before deciding it is not working.
  - A forced restart does not erase books or settings; a factory reset does.
mostCommonCause: >-
  The most common cause is simply a fully drained battery — a Kobo that has sat
  unused for weeks can take 15 to 30 minutes on the charger before it shows any
  sign of life. The next most common is a software hang, where the device has
  power but has stopped responding, which a forced restart fixes.
decisionTree:
  question: What is the device doing?
  branches:
    - label: Completely blank, no logo, no light
      hint: Charge it first, then force a restart
      href: "#fix-1"
    - label: Stuck on the Kobo logo or a loading screen
      hint: Force a restart; if it recurs, repair the software
      href: "#fix-2"
    - label: A page is frozen but the screen is on
      hint: A forced restart clears the hang
      href: "#fix-2"
    - label: It restarts fine but keeps freezing later
      hint: Likely a bad book file or a full disk
      href: "#fix-3"
fixes:
  - title: Charge it, then force a restart
    rationale: >-
      A deeply discharged battery gives no response at all until it has taken on
      a little charge. Only after charging is it worth forcing a restart.
    steps:
      - >-
        Plug the Clara BW into a wall charger with a known-good USB-C cable.
        Leave it for at least 30 minutes, ideally longer. A charging indicator
        may not appear immediately.
      - >-
        With it still plugged in, press and hold the power button for about
        30 seconds. Ignore any menu that appears and keep holding. The screen
        will blank and then show the Kobo start-up logo.
      - >-
        Release the button and let it boot. This can take a minute or two the
        first time after a full drain.
      - >-
        If nothing at all happens after an hour on the charger and a 30-second
        hold, try a different cable and charger before assuming a hardware
        fault.
    note: >-
      Charge-only cables and weak USB ports are a common false alarm. A wall
      charger of 5 W or more is more reliable than a laptop port for reviving a
      flat device.
  - title: Force a restart to clear a hang or a stuck logo
    rationale: >-
      If the screen is on — a frozen page, or stuck on the logo — the device has
      power but the software has stopped. Holding the power button forces it to
      restart cleanly.
    steps:
      - >-
        Press and hold the power button for about 30 seconds until the screen
        changes and the Kobo logo appears, then release.
      - >-
        Let it finish starting. A frozen reading session is usually back to
        normal after this, on the same page.
      - >-
        If it boots to the logo and hangs there again, connect it to a computer,
        let it mount as a drive, and check there is free space — a completely
        full device can fail to start. Delete a few large files if so, eject,
        and restart.
      - >-
        If the logo hang repeats and the disk is not full, the next step is
        Fix 3.
  - title: Repair the software if it keeps freezing
    rationale: >-
      Repeated freezes after a normal start usually trace to one corrupt book
      file or a damaged library database, not the hardware.
    steps:
      - >-
        Connect the device to a computer. Note the most recently added books —
        remove the last one or two you added before the trouble started and see
        if the freezes stop.
      - >-
        If a specific book crashes the reader every time you open it, delete that
        file and re-add a fresh copy.
      - >-
        As a stronger step, back up your ".kobo" folder, then delete the file
        "KoboReader.sqlite" inside it. The device rebuilds its library database
        on the next start. Your book files stay; shelves and reading position may
        be lost.
      - >-
        If none of that helps, a factory reset from Settings, then Device
        information, returns the software to new. This erases downloaded books
        and settings, so copy anything you want to keep off the device first.
recovery: >-
  A forced restart and the database rebuild do not remove your book files. A
  factory reset does erase downloaded books and settings, but not Kobo store
  purchases, which can be downloaded again after you sign in. If the device shows
  no response after an hour of charging, a fresh cable and charger, and a
  30-second power hold, it is likely a hardware fault and worth contacting Kobo
  support.
related:
  - text: "Set up a new Kobo Clara BW"
    href: /devices/kobo/clara-bw/guides/first-setup/
  - text: "KOReader won't launch on the Kobo Clara BW"
    href: /devices/kobo/clara-bw/troubleshooting/koreader-wont-launch/
---

Try the fixes in the order the decision tree points to. A long charge plus a
30-second power-button hold revives most "dead" Clara BWs; a stuck logo or a
frozen page is nearly always cleared by the same 30-second hold on its own.
