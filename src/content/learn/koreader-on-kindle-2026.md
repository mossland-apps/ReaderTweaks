---
title: "Installing KOReader on a Kindle in 2026: the KPM method"
summary: "The Kindle route changed in 2026. Jailbreaks now run in the Kindle's own browser, and KOReader installs through Kindle Package Manager (KPM) instead of KUAL. Here is the current shape of it."
category: koreader
lastUpdated: 2026-09-02
order: 11
relatedDevices:
  - paperwhite
  - kindle-basic
  - scribe
---

If you are following an older guide that tells you to jailbreak from a computer,
copy `koreader-kindle-2024.11.zip` to the drive, and run **MRPI** from **KUAL**,
you are reading instructions that the Kindle community has moved on from. That
method still works on a handful of old models, but for any current Kindle the
process in 2026 is different — and simpler.

## What changed

- **The jailbreak runs on the Kindle itself, in its own web browser.** You put
  the device on Wi-Fi, open the built-in browser, load a page hosted by the
  Kindle Modding project, and let it work. No computer, no cable, no drivers.
- **KOReader installs through KPM — Kindle Package Manager.** Modern jailbreaks
  bundle it. You type a short command into the Kindle's search bar and KPM
  downloads and installs KOReader for you.
- **KUAL and manual file-copying are deprecated** for this purpose from firmware
  **5.19.4** onward. They survive only for old non-touch models (Kindle 2, 3
  Keyboard, 4 Non-Touch).
- **The community hub moved.** The maintained instructions now live at
  **kindlemodding.org** (and its Discord), not the MobileRead forums.

## The shape of the process

Every step below has a firmware-specific detail that changes over time, which is
why the live instructions are the thing to follow, not this page. But the shape
is stable:

1. **Check your firmware version.** On the Kindle: Settings, then Device Options
   (or Menu), then Device Info. Write the number down — every later choice
   depends on it.
2. **Stop the Kindle updating itself.** Turn on Airplane Mode now. A firmware
   update is the single most common way a working jailbreak breaks.
3. **Pick and run the jailbreak.** The Kindle Modding wizard tells you which
   method matches your model and firmware. As of late 2026 the common ones are
   **NoseBleed** (Paperwhite 5, Kindle 11, Oasis 3 on firmware roughly
   5.16.4–5.18.6), **WinterBreak** (older models and lower firmware), and
   **AdBreak** (ad-supported models on firmware around 5.18.1–5.18.5). You run
   whichever one applies from the Kindle's browser.
4. **Finish the post-jailbreak steps.** These install the launcher, block
   over-the-air updates properly, and remove the temporary files the jailbreak
   used. Do all of them — a jailbreak that has not had OTA updates blocked is
   living on borrowed time.
5. **Install KOReader with KPM.** Re-enable Wi-Fi, then in the Kindle's search
   bar type `;kpm update` and press go, then `;kpm install koreader`. Wait a
   minute. A new launcher — a "scriptlet" — appears on the home screen.
6. **Launch it.** Tap the scriptlet, or type `;kpm launch koreader` in the
   search bar. The first start takes 15 to 30 seconds. To leave KOReader, use its
   top menu and choose exit, which returns you to the normal Kindle interface.
7. **Update KOReader later** by running `;kpm update` then `;kpm install koreader`
   again. KPM handles the download.

## What can still go wrong

- **No jailbreak for the newest firmware.** Amazon patched the exploits used by
  the 2026 methods around mid-year, so devices on the very latest firmware
  (roughly 5.18.1.1.1 and the 5.19 series at the time of writing) cannot be
  jailbroken yet. If your Kindle is on one of those, the honest answer is to wait
  for a new method — check the wizard again in a month or two — or read Amazon
  purchases and sideloaded EPUB in the stock reader.
- **A firmware update undoes everything.** If the Kindle updates itself, the
  jailbreak, KPM and the KOReader launcher all stop working, even though the
  files may still be on the device. Recovery means re-jailbreaking for the new
  firmware, if a method exists. Airplane Mode plus the OTA-block step is what
  prevents this.
- **KPM is still labelled experimental.** It works well for most people, but if
  `;kpm install koreader` fails, the Kindle Modding Discord is where
  device-specific problems get sorted.
- **Old non-touch Kindles still use the old way.** Kindle 2, 3 and 4 Non-Touch
  cannot use KPM. Those follow the legacy KUAL and manual-copy method, and some
  KOReader features are missing on hardware that old.

## Where the real instructions are

The exact jailbreak file, the exact post-jailbreak checklist and the exact KPM
behaviour all change with firmware and with each new method. Follow the current
walkthrough at [kindlemodding.org](https://kindlemodding.org/) — start with its
jailbreak wizard, which asks for your model and firmware and points you at the
right method. This page exists to tell you the shape has changed, so you do not
waste an afternoon on a 2024 guide.

Our device pages —
[Kindle Paperwhite](/devices/kindle/paperwhite/koreader/) and
[basic Kindle](/devices/kindle/kindle-basic/koreader/) — cover what KOReader is
worth on each model and the risks specific to it. Running KOReader on a
[Kindle Scribe](/devices/kindle/scribe/koreader/) is still not practical, and KPM
does not change that.
