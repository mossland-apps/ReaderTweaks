---
title: KOReader on the Kindle Paperwhite
device: paperwhite
section: koreader
type: overview
summary: KOReader can run on a Paperwhite, but only on a jailbroken device, and only if a jailbreak exists for its firmware. In 2026 the process is browser-based and installs through KPM.
lastUpdated: 2026-11-22
order: 0
software: KOReader
softwareVersion: "2026.07.1"
---

Unlike a Kobo, a Kindle will not run KOReader as a simple sideload. It has to be
**jailbroken** first — a one-time process that unlocks the device so it can run
software Amazon did not sign. In 2026 that jailbreak runs in the Kindle's own
web browser with no computer, and KOReader then installs through **Kindle
Package Manager (KPM)**, a package tool bundled with current jailbreaks. It runs
alongside the normal Kindle interface.

**Which model and firmware you have matters.** The current jailbreak, **Véra**
(August 2026), covers the 2024 Paperwhite and the Paperwhite 5 on firmware
5.17.1 up to 5.19.6. Amazon has since released firmware 5.20.2, and at the time
of writing we have not found a public jailbreak confirmed for it. The redesigned
2026 Paperwhite (released October 2026) arrived after Véra, and we have not found
a method that names it, so treat KOReader on it as not available for now.

## What "jailbreak" means here

- It uses a known flaw in a specific Kindle firmware version to gain access. A
  different jailbreak exists for each firmware range, and there is often **none
  for the very newest firmware** until the community finds a new method.
- It is reversible, and it does not touch your Amazon account or your purchased
  books.
- It is legal to do to a device you own. It is not related to removing copy
  protection from books.

## The risks, stated plainly

- **Firmware updates undo it.** If the Kindle updates itself over Wi-Fi, the
  jailbreak — and KPM and KOReader with it — can stop working. Keeping it working
  means blocking automatic updates as part of the jailbreak, and keeping the
  device in Airplane Mode between deliberate syncs.
- **If it updates to firmware with no jailbreak, KOReader is gone** until the
  community releases a new method, which can take months.
- **Amazon support will not help** with a jailbroken device.

## Who it is for

People who want KOReader's typography and format support badly enough to manage
firmware carefully. If you mostly read Amazon purchases and the odd EPUB,
[Send to Kindle](/devices/kindle/paperwhite/guides/send-to-kindle/) and the
stock reader are the calmer choice.

## Start here

- **[Installing KOReader on a Kindle in 2026: the KPM method](/guides/koreader-on-kindle-2026/)**
  — the background and the current shape of the process.
- **[Install KOReader on the Kindle Paperwhite](/devices/kindle/paperwhite/koreader/install/)**
  — the Paperwhite steps.

The maintained, firmware-specific jailbreak instructions live at
kindlemodding.org — start with its jailbreak wizard.
