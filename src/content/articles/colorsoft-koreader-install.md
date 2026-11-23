---
title: Install KOReader on the Kindle Colorsoft
pageSlug: install
device: colorsoft
section: koreader
type: guide
order: 1
summary: For an earlier Colorsoft on firmware 5.18.1 to 5.19.6 — the browser-based Véra jailbreak, then KOReader through Kindle Package Manager (KPM). Plus how to keep it working.
lastUpdated: 2026-11-22
datePublished: 2026-11-22
software: KOReader
difficulty: Advanced
estimatedTime: 30 minutes
whatYouNeed:
  - An earlier (2024 or 2025) Kindle Colorsoft on firmware 5.18.1 to 5.19.6
  - A Wi-Fi network
  - No computer or cable for the KOReader part
prerequisites:
  - text: "KOReader on the Kindle Colorsoft — which models, the risks, and colour support"
    href: /devices/kindle/colorsoft/koreader/
  - text: "Installing KOReader on a Kindle in 2026: the KPM method"
    href: /guides/koreader-on-kindle-2026/
  - text: "Follow the current jailbreak wizard for your model and firmware (Kindle Modding)"
    href: https://kindlemodding.org/
related:
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
searchTerms:
  - koreader colorsoft
  - jailbreak colorsoft
  - vera jailbreak
  - kpm
  - kindle package manager
  - block kindle updates
  - install koreader kindle
steps:
  - instruction: Check your firmware version and stop automatic updates
    detail: >-
      On the Colorsoft, open Settings, then Device Options, then Device Info,
      and note the firmware number. Then turn on Airplane Mode. A firmware
      update is the most common way a working jailbreak breaks.
    warning: >-
      The current jailbreak, Véra, covers the Colorsoft from firmware 5.18.1 up
      to 5.19.6. If yours is on the 5.20 series, or it is the 2026 Colorsoft, we
      have not found a public jailbreak for it at the time of writing. Keep it
      in Airplane Mode and check the Kindle Modding wizard again in a few weeks.
  - instruction: Run the jailbreak from the Kindle's browser
    detail: >-
      On kindlemodding.org, use the jailbreak wizard: it asks for your model and
      firmware and sends you to the right method. For a Colorsoft in range that
      is Véra, which you open in the Kindle's own web browser — no computer
      needed. Follow its page exactly, top to bottom.
    tip: >-
      The steps and file names differ per method and change over time, which is
      why they are not reproduced here.
  - instruction: Finish every post-jailbreak step
    detail: >-
      After the jailbreak the wizard has a short checklist — it installs the
      launcher, blocks over-the-air firmware updates properly, and clears the
      temporary files the exploit used. Do all of it. The update block is what
      keeps the jailbreak alive; Airplane Mode alone is not enough long term.
  - instruction: Install KOReader with KPM
    detail: >-
      Turn Wi-Fi back on. In the Kindle's search bar type ";kpm update" and press
      enter, then ";kpm install koreader". Wait a minute or two. When it
      finishes, a new launcher — a "scriptlet" — appears on the home screen.
  - instruction: Launch KOReader
    detail: >-
      Tap the new scriptlet on the home screen, or type ";kpm launch koreader" in
      the search bar. The first start takes 15 to 30 seconds. To leave KOReader,
      open its top menu and choose exit.
  - instruction: Check how colour looks, and keep KOReader updated
    detail: >-
      Open a book with colour pictures. If you see ghosting or odd colours, that
      is KOReader's colour support on this screen, not a fault in the device.
      Run ";kpm update" then ";kpm install koreader" from time to time to get the
      newest release, since colour fixes arrive in updates.
---

The hard part of putting KOReader on a Colorsoft is the jailbreak and keeping
the firmware under control. The KOReader install itself is two commands in the
search bar. Only earlier Colorsoft models on firmware 5.18.1 to 5.19.6 can do
this today, and colour in KOReader is still rough on this screen. The
[2026 Kindle KPM guide](/guides/koreader-on-kindle-2026/) has the full
background.

The one habit that matters afterwards is the over-the-air update block plus
Airplane Mode. If the Kindle updates itself to firmware with no available
jailbreak, KOReader is gone until a new method appears.
