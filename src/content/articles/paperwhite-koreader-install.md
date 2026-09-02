---
title: Install KOReader on the Kindle Paperwhite
pageSlug: install
device: paperwhite
section: koreader
type: guide
order: 1
summary: The 2026 method — a browser-based jailbreak, then KOReader through Kindle Package Manager (KPM). No computer needed. Plus how to keep it working through firmware updates.
lastUpdated: 2026-09-02
datePublished: 2026-08-26
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Advanced
estimatedTime: 30 minutes
lastTested: 2026-09-01
whatYouNeed:
  - Kindle Paperwhite on a firmware version a current jailbreak supports
  - A Wi-Fi network
  - No computer or cable for the KOReader part
prerequisites:
  - text: "KOReader on the Kindle Paperwhite — what jailbreaking involves and the risks"
    href: /devices/kindle/paperwhite/koreader/
  - text: "Installing KOReader on a Kindle in 2026: the KPM method"
    href: /guides/koreader-on-kindle-2026/
  - text: "Follow the current jailbreak wizard for your model and firmware (Kindle Modding)"
    href: https://kindlemodding.org/
related:
  - text: "KOReader won't launch on the Kindle Paperwhite"
    href: /devices/kindle/paperwhite/troubleshooting/koreader-wont-launch/
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
searchTerms:
  - koreader kindle
  - kpm
  - kindle package manager
  - jailbreak paperwhite 2026
  - nosebleed
  - winterbreak
  - block kindle updates
  - install koreader kindle
steps:
  - instruction: Check your firmware version and stop automatic updates
    detail: >-
      On the Paperwhite, open Settings, then Device Options, then Device Info, and
      note the firmware number. Then turn on Airplane Mode. A firmware update is
      the most common way a working jailbreak breaks, and some methods only cover
      a specific firmware range.
    warning: >-
      If the Kindle is already on the newest firmware (broadly the 5.19 series, or
      5.18.1.1.1, at the time of writing) there is no jailbreak for it yet. Keep
      it in Airplane Mode and check the Kindle Modding wizard again in a few
      weeks.
  - instruction: Run the jailbreak from the Kindle's browser
    detail: >-
      The jailbreak in 2026 runs on the device itself — no computer. On
      kindlemodding.org, use the jailbreak wizard: it asks for your model and
      firmware and sends you to the right method (commonly NoseBleed, WinterBreak
      or AdBreak). You open that page in the Kindle's own web browser and let the
      script run; the screen flashes a few times.
    tip: >-
      Follow the wizard's page exactly, top to bottom. The steps and file names
      differ per method and change over time, which is why they are not
      reproduced here.
  - instruction: Finish every post-jailbreak step
    detail: >-
      After the jailbreak the wizard has a short checklist — it installs the
      launcher, blocks over-the-air firmware updates properly, and clears the
      temporary files the exploit used. Do all of it. The update block is what
      keeps the jailbreak alive; Airplane Mode alone is not enough long term.
  - instruction: Install KOReader with KPM
    detail: >-
      Turn Wi-Fi back on. In the Kindle's search bar (the magnifying glass on the
      home screen) type ";kpm update" and press enter, then ";kpm install
      koreader". Wait a minute or two. When it finishes you are returned to the
      home screen and a new launcher — a "scriptlet" — has appeared.
  - instruction: Launch KOReader
    detail: >-
      Tap the new scriptlet on the home screen, or type ";kpm launch koreader" in
      the search bar. The first start takes 15 to 30 seconds. To leave KOReader,
      open its top menu and choose exit, which returns you to the normal Kindle
      interface.
  - instruction: Set your Wi-Fi habit
    detail: >-
      With updates blocked you can leave Wi-Fi on, but many people still keep the
      Paperwhite in Airplane Mode except for deliberate syncs, as a second layer
      of protection against an update slipping through.
  - instruction: Update KOReader when you want to
    detail: >-
      Run ";kpm update" then ";kpm install koreader" again. KPM fetches the
      current build. There is no need to touch a computer.
  - instruction: "Optional: make KOReader the reader you land in"
    detail: >-
      KOReader can start automatically instead of the Kindle reader, set in
      KOReader's own settings or through a KPM option. Leave it off at first so
      the normal interface is easy to get back to while you learn KOReader.
---

In 2026 the hard, risky part of putting KOReader on a Kindle is the jailbreak and
keeping firmware under control. The KOReader install itself is now two commands
in the search bar — Kindle Package Manager does the rest, with no computer
involved.

This guide is deliberately light on the jailbreak specifics. Those are
firmware-specific, they change every few months, and the Kindle Modding project
maintains a wizard that walks you through the right one for your exact device.
Follow that; use this page for the overall shape and the KPM steps. The
[2026 Kindle KPM guide](/guides/koreader-on-kindle-2026/) has the full
background.

The one habit that matters afterwards is the over-the-air update block plus
Airplane Mode. A Kindle that quietly updates itself is the usual reason a working
KOReader setup breaks — and if it updates to firmware with no available
jailbreak, KOReader is gone until a new method appears.
