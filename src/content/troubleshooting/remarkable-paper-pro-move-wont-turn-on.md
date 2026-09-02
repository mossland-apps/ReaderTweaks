---
title: The reMarkable Paper Pro Move won't turn on or is frozen
pageSlug: wont-turn-on
device: remarkable-paper-pro-move
software: Codex firmware
summary: >-
  The screen is blank, stuck on the startup logo, or frozen and not responding.
  Most cases are a flat battery or a software hang that a forced restart clears.
difficulty: Easy
estimatedTime: 40 minutes
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
symptoms:
  - Pressing the power button does nothing and the screen stays blank.
  - The device is stuck on the reMarkable logo or the loading dots.
  - The screen is frozen and touch and the Marker do nothing.
  - It will not wake from sleep.
beforeYouStart:
  - Use a charger and cable you know work.
  - Give any charging attempt at least 30 minutes before deciding it is not working.
  - A forced restart does not erase notebooks; a factory reset or re-provisioning does.
mostCommonCause: >-
  The most common cause is a fully drained battery — the Move has a smaller
  battery than the bigger reMarkables, so it drains faster if the front light
  was left on, and a flat device needs time on the charger before it responds.
  The next most common is a software hang, which a long power-button hold clears.
decisionTree:
  question: What is the device doing?
  branches:
    - label: Completely blank, no logo, no light
      hint: Charge it first, then force a restart
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
  - title: Charge it, then force a restart
    rationale: >-
      A deeply discharged Move gives no response until it has taken on some
      charge. Only after charging is a forced restart worth trying.
    steps:
      - >-
        Plug the device into a wall charger with a known-good USB-C cable and
        leave it for at least 30 minutes, longer if you can. No charging
        indicator may show at first.
      - >-
        With it still plugged in, press and hold the power button for about
        10 to 15 seconds. The screen blanks and then shows the startup logo.
      - Release and let it boot. After a full drain this can take a couple of minutes.
      - >-
        If there is still nothing after an hour on a proper charger and a
        power-button hold, try another cable and charger before assuming a fault.
    note: >-
      Charge-only cables and weak USB ports are the usual false alarm. A proper
      wall charger revives a flat device more reliably than a laptop port.
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
      A firmware update that went wrong, or community software on an unsupported
      firmware, can leave the device unable to start normally. The Move's newer
      platform is more prone to this than the reMarkable 2.
    steps:
      - >-
        If you have not modified the device, contact reMarkable support with the
        symptoms and your serial number. A genuine boot failure on an unmodified
        device is a warranty matter.
      - >-
        If you enabled developer mode or installed community software, the
        supported path back is to re-provision the device — reMarkable's recovery
        process, or turning developer mode off, both of which wipe it. Notebooks
        that had synced to your account come back afterwards.
      - >-
        Follow a community recovery guide only if it is matched to your exact
        model and firmware, and only if you are comfortable with the risk.
recovery: >-
  A forced restart leaves your notebooks in place. Re-provisioning or a factory
  reset erases the device, but notebooks that had synced to your reMarkable
  account come back after you sign in again. Before any reset, if the device is
  reachable at all, get it onto Wi-Fi and let it sync, and export anything
  critical as a PDF.
related:
  - text: "Set up a new reMarkable Paper Pro Move"
    href: /devices/remarkable/remarkable-paper-pro-move/guides/first-setup/
  - text: "Notebooks or documents aren't syncing on the reMarkable Paper Pro Move"
    href: /devices/remarkable/remarkable-paper-pro-move/troubleshooting/syncing/
---

Charge it and hold the power button for 10 to 15 seconds first. A stuck logo
that repeats usually just needs a longer charge before it can finish booting; a
device that will not start after an update or a modification needs reMarkable's
recovery process or support.
