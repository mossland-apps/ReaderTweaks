---
title: The BOOX Go Color 7 battery drains fast
pageSlug: battery-drains-fast
device: boox-go-color-7
software: BOOX firmware
summary: >-
  The Go Color 7 loses charge quickly even when idle. On an Android e-reader this
  is almost always background apps, sync, or Wi-Fi left on.
difficulty: Easy
estimatedTime: 25 minutes
lastTested: 2026-08-28
lastUpdated: 2026-08-30
searchTerms:
  - battery drain
  - battery draining
  - poor battery life
  - overnight drain
  - background apps
  - wakelock
  - standby drain
  - deep sleep
symptoms:
  - The battery drops 10 percent or more overnight with nothing running.
  - A full charge lasts a day or two instead of a week or more.
  - The device feels warm when it has been sitting idle.
  - Battery life fell after installing several apps.
beforeYouStart:
  - An Android e-reader will never match a Kobo or Kindle for standby, but it should still last many days.
  - Note which apps you have installed and signed into — each is a potential drain.
  - None of these steps remove your books.
mostCommonCause: >-
  On an Android e-reader the causes, in order, are: reading and store apps left
  running in the background and syncing; Wi-Fi left on so those apps keep
  checking in; and a specific misbehaving app holding the device awake (a
  "wakelock"). BOOX's own power settings control most of this.
decisionTree:
  question: What does the drain look like?
  branches:
    - label: It has been heavy since I set the device up
      hint: Restrict background apps and turn Wi-Fi off between syncs
      href: "#fix-1"
    - label: It got worse after I installed several apps
      hint: One app is likely holding it awake — find it
      href: "#fix-2"
    - label: The device is warm when idle
      hint: A stuck app or process — restart and check
      href: "#fix-2"
    - label: It drains even in airplane mode
      hint: Check the optimisation and auto-sync settings
      href: "#fix-3"
fixes:
  - title: Restrict background apps and manage Wi-Fi
    rationale: >-
      Reading and store apps sync in the background by default, and Wi-Fi left on
      lets them do it constantly. Restricting them and turning Wi-Fi off between
      syncs is most of the fix.
    steps:
      - >-
        Open Settings, then "Power" (or "Battery"), and find the app management
        list. Set apps you use only occasionally — a second store app, a library
        app — to "optimised" or "restricted" so Android can close them when not
        in use.
      - >-
        Keep one or two apps you use constantly exempt so they resume instantly.
      - >-
        Turn Wi-Fi off from the control centre when you are just reading. Turn it
        on to sync, then off again. Or use airplane mode.
      - >-
        In each reading app's own settings, turn off "sync on open" or set the
        sync interval to manual.
  - title: Find an app that is holding the device awake
    rationale: >-
      One app with a bug can keep the processor from sleeping, which shows as
      steady drain and a warm device even with the screen off.
    steps:
      - >-
        Open Settings, then Battery or Power, and look at the per-app battery
        usage since the last full charge. An app near the top that you have
        barely opened is the suspect.
      - >-
        Restrict or force-stop that app. If the drain stops over the next day, it
        was the cause — leave it restricted, or uninstall and reinstall it fresh.
      - >-
        Restart the device to clear any process already stuck awake. The device
        often feels warm until you do.
      - >-
        If you cannot tell which app, use safe mode (hold volume-down while
        booting) for a day. If standby is good in safe mode, a third-party app is
        the cause; add them back one at a time.
  - title: Check optimisation and auto-sync settings
    rationale: >-
      If the device drains even with the radios off, an app is doing local work —
      indexing, a stuck download — or the system's own sync accounts are busy.
    steps:
      - >-
        Open Settings, then "Accounts", and turn off auto-sync for any Google or
        other account you do not need syncing continuously.
      - >-
        In BOOX's app-optimisation panel, make sure no reading app is set to keep
        running or to disable Android's power management for it.
      - >-
        Let the device sit plugged in and idle for an hour to finish any pending
        indexing, then unplug and check standby again.
      - >-
        As a last resort, back up sideloaded books and do a factory reset to
        clear a system-level problem, then add apps back carefully.
recovery: >-
  Restricting apps and turning off sync are safe and reversible. A factory reset
  erases the device's internal storage — apps, their data, and books stored
  internally — but not a microSD card or cloud-synced content. Only reset if
  targeted fixes fail.
related:
  - text: "Install reading apps on the BOOX Go Color 7"
    href: /devices/boox/boox-go-color-7/guides/install-reading-apps/
  - text: "The BOOX Go Color 7 won't turn on or is frozen"
    href: /devices/boox/boox-go-color-7/troubleshooting/wont-turn-on/
---

Start by turning Wi-Fi off between syncs and restricting background apps — that
alone brings most Go Color 7s back to many days of standby. If it is still bad,
the battery-usage list will point to the one app holding the device awake.
