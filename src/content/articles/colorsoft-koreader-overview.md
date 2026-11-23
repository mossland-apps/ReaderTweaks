---
title: KOReader on the Kindle Colorsoft
device: colorsoft
section: koreader
type: overview
summary: KOReader can run on an earlier Colorsoft, but only once it is jailbroken, only on firmware a jailbreak covers, and colour support is still rough. The 2026 model has no confirmed jailbreak yet.
lastUpdated: 2026-11-22
order: 0
software: KOReader
---

Unlike a Kobo, a Kindle will not run KOReader as a simple sideload. It has to be
**jailbroken** first — a one-time process that unlocks the device so it can run
software Amazon did not sign. In 2026 that jailbreak runs in the Kindle's own
web browser with no computer, and KOReader then installs through **Kindle
Package Manager (KPM)**, a package tool bundled with current jailbreaks.

**Which model and firmware you have matters.**

- **Earlier Colorsoft models (2024 and 2025):** the **Véra** jailbreak (August
  2026) covers them on firmware **5.18.1 up to 5.19.6**.
- **Firmware 5.20:** Amazon released firmware 5.20.2 in late 2026 for every
  Kindle from 2024 onward. At the time of writing we have not found a public
  jailbreak confirmed for it.
- **The 2026 Colorsoft:** it arrived after Véra, and we have not found a method
  that names it. Treat KOReader on it as not available for now.
- **The Kindle Scribe Colorsoft** is a different device — see the
  [Scribe KOReader page](/devices/kindle/scribe/koreader/).

## Colour in KOReader is still a work in progress

KOReader was built for black-and-white screens. On the Colorsoft it runs and
reads text well, but in October 2026 the KOReader developers described colour on
these Kindles as rough, with ghosting (faint traces of the previous page), and
worked on fixes. If you want KOReader for its typography and format support, it
is worth it. If you want it mainly for colour comics, the stock Kindle reader is
currently the better experience. Use the newest KOReader release, since colour
fixes arrive in updates.

## The risks, stated plainly

- **Firmware updates undo it.** If the Kindle updates itself over Wi-Fi, the
  jailbreak — and KPM and KOReader with it — stops working. Keeping it working
  means blocking automatic updates as part of the jailbreak and keeping the
  device in Airplane Mode between deliberate syncs.
- **If it updates to firmware with no jailbreak, KOReader is gone** until the
  community releases a new method, which can take months.
- **Amazon support will not help** with a jailbroken device.

## Start here

- **[Installing KOReader on a Kindle in 2026: the KPM method](/guides/koreader-on-kindle-2026/)**
  — the background and the current shape of the process.
- **[Install KOReader on the Kindle Colorsoft](/devices/kindle/colorsoft/koreader/install/)**
  — the steps for an earlier Colorsoft.

The maintained, firmware-specific jailbreak instructions live at
kindlemodding.org — start with its jailbreak wizard.
