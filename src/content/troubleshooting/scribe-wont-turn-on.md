---
title: The Kindle Scribe won't turn on or is frozen
pageSlug: wont-turn-on
device: scribe
software: Kindle firmware
summary: >-
  The screen is blank, stuck on the Kindle logo, or frozen and not responding.
  Most cases are a flat battery or a software hang that a long power-button hold
  clears.
difficulty: Easy
estimatedTime: 45 minutes
lastTested: 2026-08-27
lastUpdated: 2026-08-29
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
  - 40 seconds
  - wont wake up
symptoms:
  - Pressing the power button does nothing and the screen stays blank.
  - The device is stuck on the Kindle logo or a loading screen.
  - The screen is frozen and the pen and touch do nothing.
  - It will not wake from sleep.
beforeYouStart:
  - Use a charger and cable you know work; the Scribe's large battery needs a real charger, not a weak USB port.
  - Give any charging attempt at least 30 to 60 minutes before deciding it is not working.
  - A forced restart does not erase notebooks or books; a factory reset does.
mostCommonCause: >-
  The most common cause is a fully drained battery — the Scribe has a large cell,
  so a device that has sat unused can need a good half hour or more on a proper
  charger before it responds. The next most common is a software hang, where the
  device has power but has stopped, which a long power-button hold clears.
decisionTree:
  question: What is the device doing?
  branches:
    - label: Completely blank, no logo, no light
      hint: Charge it properly first, then force a restart
      href: "#fix-1"
    - label: Stuck on the Kindle logo or a loading screen
      hint: Force a restart; if it recurs, connect to a computer
      href: "#fix-2"
    - label: The screen is on but frozen
      hint: A long power-button hold clears the hang
      href: "#fix-2"
    - label: It restarts fine but keeps freezing
      hint: A large notebook or PDF, or low free space
      href: "#fix-3"
fixes:
  - title: Charge it on a real charger, then force a restart
    rationale: >-
      A deeply discharged Scribe gives no response until it has taken on charge,
      and its big battery needs more current than a laptop port reliably
      provides.
    steps:
      - >-
        Plug the Scribe into a wall charger of 9 W or more with a known-good
        USB-C cable. Leave it for at least 30 minutes, longer if you can. No
        charging icon may show at first.
      - >-
        With it still plugged in, press and hold the power button for about
        40 seconds. Keep holding past any menu. The screen blanks and then shows
        the Kindle logo.
      - >-
        Release and let it boot. After a full drain this can take a couple of
        minutes.
      - >-
        If there is still nothing after an hour on a proper charger and a
        40-second hold, try another cable and charger before assuming a fault.
    note: >-
      Weak chargers and charge-only cables are the usual false alarm with the
      Scribe specifically, because of its battery size.
  - title: Force a restart for a hang or a stuck logo
    rationale: >-
      If the screen is lit, the device has power but the software has stopped. A
      long power-button hold forces a clean restart.
    steps:
      - >-
        Press and hold the power button for about 40 seconds until the screen
        changes and the Kindle logo appears, then release.
      - >-
        Let it finish. A frozen session is usually back to normal on the same
        page or notebook afterwards.
      - >-
        If it hangs on the logo again, connect the Scribe to a computer with USB.
        If it mounts as a drive, check there is free space and remove a large
        file or two, then eject and restart.
      - If the logo hang repeats and space is fine, go to Fix 3.
  - title: Deal with repeated freezes
    rationale: >-
      Freezes after a normal start usually trace to one very large notebook or
      PDF, or a device that is nearly full, rather than a hardware fault.
    steps:
      - >-
        Connect to a computer. Remove the last large PDF or the biggest notebook
        exports you added before the trouble began, and see if the freezes stop.
      - >-
        Check free space in Settings, then Device Options, then Device Info.
        Clear space if it is very low — large marked-up PDFs and image-heavy
        notebooks add up.
      - >-
        Restart, then open notebooks and books one at a time to find one that
        freezes the device every time. Remove or re-create that one.
      - >-
        As a last resort, a factory reset from Settings returns the software to
        new. It erases downloaded books, sideloaded PDFs and notebooks that have
        not synced, so export or sync anything you want to keep first.
recovery: >-
  A forced restart leaves your content in place. A factory reset erases
  downloaded books, sideloaded files and unsynced notebooks — not Amazon
  purchases or notebooks that have already synced to your account. Before a
  reset, connect to Wi-Fi and sync, and email out any notebook you cannot lose.
related:
  - text: "The Kindle Scribe pen isn't writing or is lagging"
    href: /devices/kindle/scribe/troubleshooting/pen-not-writing/
  - text: "Notebooks or notes aren't syncing from the Kindle Scribe"
    href: /devices/kindle/scribe/troubleshooting/notes-not-syncing/
---

Follow the fixes in the order the decision tree points to. A proper charger and
a 40-second power-button hold revive most unresponsive Scribes; a stuck logo or
frozen screen is nearly always cleared by the same hold on its own.
