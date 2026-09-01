---
title: The BOOX Note Air 4 C pen isn't writing or is lagging
pageSlug: pen-not-writing
device: boox-note-air-4-c
software: BOOX firmware
summary: >-
  The pen makes no mark, skips, lags behind your hand, or the side button does
  nothing. Most cases are a worn tip, a software hang, or a setting.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-29
lastUpdated: 2026-08-31
searchTerms:
  - pen not working
  - stylus not writing
  - pen lag
  - pen skipping
  - pen not detected
  - side button
  - replace nib
  - replace tip
  - worn tip
  - calibration off
symptoms:
  - The pen makes no mark on the screen at all.
  - Lines skip, break up, or only register when you press hard.
  - The ink appears a moment behind the pen tip.
  - The ink lands a few millimetres away from where the tip touches.
  - The pen's side button does nothing.
beforeYouStart:
  - The pen has no battery and needs no charging or pairing — if it writes at all, it is talking to the device.
  - Check whether the pen came with spare tips and a tip-removal ring.
  - Note whether the problem is everywhere or only in one app.
  - None of these steps erase notebooks or books.
mostCommonCause: >-
  Skipping or "press hard to write" is almost always a worn pen tip — they are
  consumable. No marks at all, or lag, is usually a software hang that a restart
  clears. Ink landing off the tip is a calibration issue. The side button not
  working is a settings or firmware issue.
decisionTree:
  question: What is the pen doing?
  branches:
    - label: No mark anywhere, or the device does not react to the pen
      hint: Restart, then test in a fresh notebook
      href: "#fix-1"
    - label: It skips, breaks up, or needs hard pressure
      hint: The tip is worn — replace it
      href: "#fix-2"
    - label: The ink lags behind the tip
      hint: Restart and lower the refresh load
      href: "#fix-1"
    - label: The ink lands away from the tip
      hint: Re-run pen calibration
      href: "#fix-3"
    - label: The side button does not work
      hint: Check pen settings and firmware
      href: "#fix-3"
fixes:
  - title: Restart the device and test in a fresh notebook
    rationale: >-
      A pen that suddenly makes no marks, or writes with lag, is almost always a
      software hang rather than a hardware fault. A restart clears it.
    steps:
      - Restart the Note Air 4 C from the control centre or by holding the power button for about 30 seconds.
      - After it boots, open BOOX Notes, make a new notebook, and try writing near the centre of the screen.
      - If the centre works but the edges do not, the problem is likely the tip (Fix 2), not the software.
      - If one specific app will not accept the pen but BOOX Notes does, that app lacks proper stylus support — use BOOX Notes or NeoReader for markup.
  - title: Replace the pen tip
    rationale: >-
      Pen tips are a wear part. As one flattens it stops making reliable contact,
      which shows as skipping, broken lines, or needing to bear down. A fresh tip
      usually fixes it completely.
    steps:
      - Use the small removal ring or tool from the box (or fine tweezers) to grip the tip and pull it straight out.
      - Push a new tip straight in until it seats. It should sit flush and not wobble.
      - Test on a notebook page. Writing should feel light again and lines should be unbroken.
      - Order more tips when you are down to your last one. BOOX sells felt and POM tip packs; textured "paper-like" screen protectors wear tips faster.
  - title: Re-run calibration and check the side button
    rationale: >-
      If ink lands away from the tip, the digitiser calibration has drifted. The
      side button is a software assignment that can be off or lost after an
      update.
    steps:
      - Open Settings, then the pen or handwriting section, and run "calibrate". Tap the targets carefully with the pen held the way you normally write.
      - In the same section, check the side-button action is set to something (for example "eraser") and not "off".
      - Make sure the firmware is current, from Settings, then "Firmware Update" — pen behaviour has been fixed in past updates.
      - Restart and test again. If ink still lands off the tip after calibration and a firmware check, contact BOOX support.
recovery: >-
  None of these steps touch your content. If a restart, a tip change and
  calibration do not help and the pen still will not write anywhere, the pen or
  the digitiser may be faulty — contact BOOX support, and export important
  notebooks as PDF in the meantime.
related:
  - text: "Notes and PDF markup on the BOOX Note Air 4 C"
    href: /devices/boox/boox-note-air-4-c/guides/notes-and-markup/
  - text: "The BOOX Note Air 4 C won't turn on or is frozen"
    href: /devices/boox/boox-note-air-4-c/troubleshooting/wont-turn-on/
---

If the pen skips or needs pressure, replace the tip first — it is the answer
most of the time and takes a minute. If it makes no marks at all or lags,
restart the device before assuming anything is broken. Ink landing off the tip
is a calibration fix, not a fault.
