---
title: "The best Kobo mods: NickelMenu and the toolkit around it"
summary: "Kobo has no official plugin system, but a small, stable set of community mods fixes most of Nickel's annoyances without leaving the stock reader. Here is the toolkit and how to install it."
category: software
lastUpdated: 2026-11-23
order: 5
relatedDevices:
  - libra-colour
  - clara-bw
  - sage
---

Kobo does not have plugins in the way a phone does. What it has is a community
that patches and extends **Nickel** — the stock software — with a handful of
mature, well-behaved mods. They keep the normal Kobo experience, including the
store and library borrowing, and just remove the friction.

Everything here is different from [KOReader](/guides/what-is-koreader/), which is
a whole separate reading app. These mods improve Nickel itself.

## The one that everything builds on: NickelMenu

**NickelMenu** adds your own items to Kobo's menus — the main menu, the reading
menu, the "more" menu. It is the foundation most other tweaks hook into, it
supports Kobo's 4.x software, and it survives Kobo updates within that series.
With it you can add, for example:

- A one-tap **Wi-Fi toggle** and a **full screen refresh** to the reading menu.
- A shortcut to **KOReader**, if you also run it.
- **Reboot** and **power off** items that Kobo buries.
- Toggles for the mods below.

If you install nothing else, install NickelMenu. Our
[NickelMenu guide](/guides/nickelmenu/) covers installing it and writing the
config file.

## Worth adding

- **NickelClock** — shows the time (or the battery level) in the header or
  footer while you read, set up with a small settings file.
- **NickelHome** — hides home-screen widgets: it strips the "recommendations" and
  activity clutter off the home screen so it shows your books and nothing else.
- **NickelTypeFix** — fixes a range of typesetting problems in the Kobo reader,
  for all fonts.
- **kobopatch patches** — binary patches for Nickel that toggle specific
  behaviours: force full page refresh intervals, unlock hidden fonts, change the
  sleep-screen behaviour, remove the "beta features" gate, and dozens more. You
  pick the patches you want and apply them as a set.
- **KFMon** — the launcher framework that draws home-screen icons for things
  like KOReader and Plato. It comes bundled with the KOReader one-click package,
  so you may already have it.

## How to install them

Two routes:

1. **KoboPatch Web UI** (kp.nicoverbruggen.be) — a browser tool that bundles
   NickelMenu, NickelClock, the common patches, fonts and KOReader into one
   download tailored to your model and firmware. The easiest way in for most
   people in 2026.
2. **By hand** — download each mod's package from its own project page and copy
   it to the Kobo drive root over USB, the same pattern as the
   [KOReader install](/devices/kobo/libra-colour/koreader/install/): copy, eject,
   let Nickel process it on restart.

## Cautions

- **Kobo's 6.0 beta is not supported yet.** The Libra Colour, Clara Colour and
  Clara BW are being offered an optional 6.0 update. NickelMenu, NickelClock,
  NickelTypeFix, NickelHome and the KoboPatch Web UI are all built for the 4.x
  software, and support for 6.0 had not been released at the time of writing.
  If you use these mods, tap Skip on the beta prompt. Details in our
  [Kobo update guide](/guides/update-kobo-software/).

- **A Kobo firmware update can disable KFMon** (so a KOReader icon disappears)
  and occasionally a patch. NickelMenu itself is designed to persist. Reapplying
  after an update is a five-minute job with the web UI.
- **kobopatch is firmware-specific.** Use the patch set built for your exact
  firmware version; an old set can fail to apply or misbehave.
- These are unofficial. Kobo support will not help with a modded device, though
  a factory reset removes everything and restores stock.

## The short version

Install NickelMenu. Add NickelClock and the home-screen declutter. Apply a
kobopatch set for your firmware if you want finer control. The KoboPatch Web UI
does all of it from a browser.
