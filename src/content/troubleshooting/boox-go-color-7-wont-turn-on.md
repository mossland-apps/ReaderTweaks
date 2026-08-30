---
title: The BOOX Go Color 7 won't turn on or is frozen
pageSlug: wont-turn-on
device: boox-go-color-7
software: BOOX firmware
summary: >-
  The screen is blank, stuck on the BOOX logo, or frozen and not responding.
  Most cases are a flat battery or an Android hang that a forced restart clears.
difficulty: Easy
estimatedTime: 30 minutes
lastTested: 2026-08-28
lastUpdated: 2026-08-30
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
  - boot loop
  - recovery mode
symptoms:
  - Pressing the power button does nothing and the screen stays blank.
  - The device is stuck on the BOOX or "Onyx" logo.
  - The screen is frozen and touch and buttons do nothing.
  - It will not wake from sleep.
beforeYouStart:
  - Use a charger and cable you know work, ideally the ones supplied.
  - Give any charging attempt at least 30 minutes before deciding it is not working.
  - A forced restart does not erase anything; a factory reset does.
mostCommonCause: >-
  The most common cause is a fully drained battery — Android devices can sit with
  no response for 15 to 30 minutes on the charger before they show life. The next
  most common is an Android hang, where the device has power but has stopped,
  which a long power-button hold clears. A bad app update can also cause a boot
  loop.
decisionTree:
  question: What is the device doing?
  branches:
    - label: Completely blank, no logo, no light
      hint: Charge it first, then force a restart
      href: "#fix-1"
    - label: Stuck on the BOOX or Onyx logo
      hint: Force a restart; if it loops, use recovery
      href: "#fix-2"
    - label: The screen is on but frozen
      hint: A long power-button hold clears the hang
      href: "#fix-2"
    - label: It restarts but crashes again after a recent app or update
      hint: Remove that app in safe mode
      href: "#fix-3"
fixes:
  - title: Charge it, then force a restart
    rationale: >-
      A deeply discharged battery gives no response until it has taken on some
      charge, and the Go Color 7's screen stays dark the whole time.
    steps:
      - >-
        Plug the device into a wall charger with a known-good USB-C cable. Leave
        it for at least 30 minutes, longer if you can. A charging icon may not
        appear at first.
      - >-
        With it still plugged in, press and hold the power button for about
        20 to 30 seconds. The screen blanks and then shows the start-up logo.
      - Release and let it boot. After a full drain this can take a couple of minutes.
      - >-
        If nothing happens after an hour on a proper charger and a 30-second
        hold, try another cable and charger before assuming a fault.
    note: >-
      Charge-only cables and weak USB ports are a frequent false alarm. A 5 W or
      higher wall charger is more reliable than a laptop port.
  - title: Force a restart, and use recovery for a boot loop
    rationale: >-
      A lit screen means the device has power but Android has stopped. A long
      power hold forces a restart. If it keeps returning to the logo, the recovery
      menu can clear the cache without erasing data.
    steps:
      - >-
        Press and hold the power button for about 30 seconds until the logo
        appears, then release, and let it finish starting.
      - >-
        If it hangs on the logo repeatedly, hold the power button to turn it
        fully off. Then hold power together with the volume-up button (or as your
        model's manual specifies) to enter the recovery menu.
      - >-
        In recovery, choose "wipe cache partition" — this does not delete your
        apps or books. Then choose "reboot system now".
      - >-
        If the loop continues after a cache wipe, the next option in recovery is
        a factory reset, which does erase the device — see recovery notes below.
  - title: Remove a bad app in safe mode
    rationale: >-
      If the device boots but then freezes or restarts, and it started right
      after you installed or updated a particular app, that app is the likely
      cause.
    steps:
      - >-
        Restart, and as it boots hold the volume-down button to start Android in
        safe mode (third-party apps are disabled). If it is stable in safe mode,
        an app is the cause.
      - >-
        In safe mode, open Settings, then Apps, and uninstall the app you added
        or updated just before the trouble.
      - Restart normally. Reinstall the app later if you still want it, from a fresh download.
recovery: >-
  A forced restart and a cache wipe leave your apps and books in place. A factory
  reset from the recovery menu or Settings erases everything on the device —
  installed apps, their data, and any books in internal storage — but not books
  on a microSD card, and not anything already synced to a cloud account. Back up
  sideloaded books off the device before a reset. If nothing revives the device
  after charging and recovery, contact BOOX support.
related:
  - text: "Set up a new BOOX Go Color 7"
    href: /devices/boox/boox-go-color-7/guides/first-setup/
  - text: "The BOOX Go Color 7 battery drains fast"
    href: /devices/boox/boox-go-color-7/troubleshooting/battery-drains-fast/
---

Charge it properly and hold the power button for 30 seconds first. A stuck logo
that repeats needs the recovery menu's cache wipe; a device that freezes after a
recent app needs safe mode to remove that app.
