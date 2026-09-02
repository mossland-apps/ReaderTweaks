---
title: The reMarkable 2 won't turn on or is frozen
pageSlug: wont-turn-on
device: remarkable-2
software: Codex firmware
summary: >-
  The screen is blank, stuck on the startup logo, or frozen and not responding.
  Most cases are a flat battery or a software hang that a forced restart clears.
difficulty: Easy
estimatedTime: 45 minutes
lastTested: 2026-08-30
lastUpdated: 2026-09-01
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
  - loading dots
  - wont wake up
  - old battery
symptoms:
  - Pressing the power button does nothing and the screen stays blank.
  - The device is stuck on the reMarkable logo or the loading dots.
  - The screen is frozen and touch and the Marker do nothing.
  - It will not wake from sleep.
beforeYouStart:
  - Use a charger and cable you know work; the large battery needs a real charger, not a weak port.
  - Give any charging attempt at least 30 to 60 minutes before deciding it is not working.
  - A forced restart does not erase notebooks; a factory reset or re-provisioning does.
  - Many reMarkable 2s in use now are several years old, so a tired battery is a real possibility.
mostCommonCause: >-
  The most common cause is a fully drained battery — the reMarkable 2 has a large
  cell, so a device that has sat unused can need a good half hour or more on a
  proper charger before it responds. The next most common is a software hang,
  which a long power-button hold clears. On an older unit, a battery that no
  longer holds charge is also common.
decisionTree:
  question: What is the device doing?
  branches:
    - label: Completely blank, no logo, no light
      hint: Charge it properly first, then force a restart
      href: "#fix-1"
    - label: Stuck on the logo or the loading dots
      hint: Force a restart; if it recurs, let it charge fully and retry
      href: "#fix-2"
    - label: The screen is on but frozen
      hint: A long power-button hold clears the hang
      href: "#fix-2"
    - label: It started after a firmware update or community software
      hint: Recovery may need reMarkable support or re-provisioning
      href: "#fix-3"
fixes:
  - title: Charge it on a real charger, then force a restart
    rationale: >-
      A deeply discharged reMarkable 2 gives no response until it has taken on
      charge, and its big battery needs more current than a laptop port reliably
      provides.
    steps:
      - >-
        Plug the device into a wall charger of 9 W or more with a known-good
        USB-C cable. Leave it for at least 30 minutes, longer if you can. No
        charging indicator may show at first.
      - >-
        With it still plugged in, press and hold the power button for about
        10 to 15 seconds. The screen blanks and then shows the startup logo.
      - Release and let it boot. After a full drain this can take a couple of minutes.
      - >-
        If there is still nothing after an hour on a proper charger and a
        power-button hold, try another cable and charger.
    note: >-
      On an older reMarkable 2, if it only runs for a short time off the charger
      or dies overnight, the battery is likely worn. It is replaceable — a repair
      shop or a careful DIY swap with a genuine cell brings the device back
      rather than scrapping it.
  - title: Force a restart for a hang or a stuck logo
    rationale: >-
      If the screen is lit, the device has power but the software has stopped. A
      long power-button hold forces a clean restart.
    steps:
      - >-
        Press and hold the power button for about 10 to 15 seconds until the
        screen changes and the logo appears, then release.
      - Let it finish. A frozen session is usually back to normal afterwards.
      - >-
        If it hangs on the logo or the loading dots again, plug it into a wall
        charger and leave it for an hour, then repeat the hold — a device very
        low on charge can stall partway through boot.
      - If the logo hang repeats after a full charge, go to Fix 3.
  - title: Recover a device that will not boot after an update or modification
    rationale: >-
      A firmware update that went wrong, or community software such as Toltec on
      an unsupported firmware, can leave the device unable to start normally.
    steps:
      - >-
        If you have not modified the device, contact reMarkable support with the
        symptoms and your serial number. The reMarkable 2 still receives support
        even though it is no longer sold new.
      - >-
        If you enabled developer mode or installed community software, the
        supported path back is to re-provision the device — reMarkable's recovery
        process or turning developer mode off, both of which wipe it. Notebooks
        that had synced to your account come back afterwards.
      - >-
        The reMarkable 2 has mature community recovery guides for a bricked
        device; follow one matched to your exact firmware, and only if you are
        comfortable with the risk.
recovery: >-
  A forced restart leaves your notebooks in place. Re-provisioning or a factory
  reset erases the device, but notebooks that had synced to your reMarkable
  account come back after you sign in again. Before any reset, if the device is
  reachable at all, get it onto Wi-Fi and let it sync, and export anything
  critical as a PDF.
related:
  - text: "Set up a reMarkable 2"
    href: /devices/remarkable/remarkable-2/guides/first-setup/
  - text: "Notebooks or documents aren't syncing on the reMarkable 2"
    href: /devices/remarkable/remarkable-2/troubleshooting/syncing/
---

Charge it properly and hold the power button for 10 to 15 seconds first. A stuck
logo that repeats usually just needs a longer charge. On an older reMarkable 2
that will not hold a charge, the battery is replaceable — worth doing before
giving up on an otherwise fine device.
