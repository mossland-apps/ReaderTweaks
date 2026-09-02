---
title: The reMarkable Marker isn't writing or is lagging on the Paper Pure
pageSlug: pen-not-writing
device: remarkable-paper-pure
software: Codex firmware
summary: >-
  The Marker makes no mark, skips, lags behind your hand, or the eraser and
  shortcut button do nothing. Most cases are a worn tip, a software hang, or a
  setting.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-30
lastUpdated: 2026-09-01
searchTerms:
  - marker not working
  - pen not writing
  - stylus lag
  - pen skipping
  - marker not detected
  - eraser not working
  - shortcut button
  - replace tip
  - replace nib
  - worn tip
  - remarkable 2 marker
symptoms:
  - The Marker makes no mark on the screen at all.
  - Lines skip, break up, or only register when you press hard.
  - The ink appears a moment behind the Marker tip.
  - The Marker Plus eraser or the barrel shortcut button does nothing.
beforeYouStart:
  - Check whether you have spare tips and the puller tool that came with the Marker.
  - Confirm you are using a current-generation Marker — the Paper Pure does not work with reMarkable 2 pens.
  - None of these steps affect your notebooks or documents.
mostCommonCause: >-
  The most common cause of skipping or "press hard to write" is a worn Marker tip
  — tips are a wear part and last a few weeks to a few months. The most common
  cause of no marks at all, or lag, is a software hang that a restart clears. The
  eraser and shortcut button not working is usually a Marker Plus settings issue.
decisionTree:
  question: What is the Marker doing?
  branches:
    - label: No mark anywhere, or the device does not react to the Marker
      hint: Restart, and check it is a current-generation Marker
      href: "#fix-1"
    - label: It skips, breaks up, or needs hard pressure
      hint: The tip is worn — replace it
      href: "#fix-2"
    - label: The ink lags behind the tip
      hint: Restart and reduce what is running
      href: "#fix-1"
    - label: The eraser or shortcut button does not work
      hint: Check the Marker Plus settings and firmware
      href: "#fix-3"
fixes:
  - title: Restart the Paper Pure and check the Marker
    rationale: >-
      A Marker that suddenly makes no marks, or writes with lag, is almost always
      a software hang rather than a hardware fault. A restart clears it. A Marker
      that never worked on this device may be the wrong generation.
    steps:
      - >-
        Restart the device from Settings, then "General", then "Power", then
        "Restart". If the screen is unresponsive, hold the power button for about
        10 seconds.
      - >-
        After it boots, open a new notebook and touch the Marker to the centre of
        the screen. Try writing there first.
      - >-
        Confirm you have a current-generation Marker or Marker Plus — the kind
        that charges on the device edge. A reMarkable 2 Marker will not work on
        the Paper Pure at all.
      - >-
        If the centre works but the edges do not, the problem is likely the tip
        (Fix 2), not the software.
  - title: Replace the Marker tip
    rationale: >-
      Marker tips wear down with use. As a tip flattens it stops making reliable
      contact, which shows as skipping, broken lines, or needing to bear down. A
      fresh tip usually fixes it completely.
    steps:
      - >-
        Use the small tip-puller tool (a metal ring or tweezers) to grip the tip
        and pull it straight out with a firm, even pull.
      - Push a new tip straight in until it seats. It should sit flush and not wobble.
      - Test on a notebook page. Writing should feel light again and lines should be unbroken.
      - >-
        The Paper Pure uses the same current-generation tips as the Paper Pro and
        Paper Pro Move, not the reMarkable 2's. reMarkable's own tips and
        well-reviewed third-party packs both work.
    note: >-
      A textured screen protector wears tips faster. If you use one, expect to
      replace tips more often.
  - title: Fix the Marker Plus eraser or shortcut button
    rationale: >-
      The eraser end and the barrel button are only on the Marker Plus, and both
      are controlled in settings. If they stopped working, it is usually a
      setting or a firmware bug, not the pen.
    steps:
      - >-
        Confirm you have the Marker Plus — it has a flat eraser end and a small
        button on the barrel. The plain Marker has neither.
      - >-
        Open Settings, then "Stylus" (or "Marker"), and check the shortcut button
        is assigned to an action such as "Erase" and is not set to "Off".
      - >-
        Make sure the device firmware is current, from Settings, then "General",
        then "Software".
      - >-
        Restart the device. If the eraser still does nothing after a restart and
        a firmware check, contact reMarkable — a Marker Plus with a dead eraser
        is usually replaced under warranty.
recovery: >-
  None of these steps touch your content. If a restart or a tip change does not
  help and the Marker still will not write anywhere, the Marker or the digitiser
  may be faulty; the Marker is covered by the device's warranty and reMarkable
  replaces it readily.
related:
  - text: "Notebooks and handwriting conversion on the reMarkable Paper Pure"
    href: /devices/remarkable/remarkable-paper-pure/guides/notebooks-and-handwriting/
  - text: "The reMarkable Paper Pure won't turn on or is frozen"
    href: /devices/remarkable/remarkable-paper-pure/troubleshooting/wont-turn-on/
---

If the Marker skips or needs pressure, replace the tip first — it is the answer
most of the time and takes a minute. If it makes no marks at all or lags,
restart the Paper Pure, and double-check the Marker is a current-generation one,
since reMarkable 2 pens do not work here.
