---
title: "How to update your Kobo's software, and whether to take the 6.0 beta"
summary: "Update a Kobo over Wi-Fi or by USB, check which version you are on, and know what an update does to KOReader and other mods. Plus what Kobo's optional 6.0 beta changes, and why many tinkerers should skip it for now."
category: software
lastUpdated: 2026-11-23
order: 6
relatedDevices:
  - libra-colour
  - clara-bw
  - sage
---

Kobo calls its system software "firmware" or "eReader software". Updates bring
fixes and features, and most of the time you should take them. The exceptions are
covered below: an update can switch off community add-ons such as KOReader's
home-screen icon, and Kobo's new **6.0 beta** is a bigger change that the add-ons
are not ready for yet.

## Check which version you are on

On the Kobo: go to the **Home** screen, tap **More** at the bottom, then
**Settings**, then **Device information**. The number next to **Software
version** is your firmware, for example "4.38…" or "6.0…". Write it down before
you change anything. Most mod instructions depend on it.

## Update over Wi-Fi (the normal way)

1. **Charge it fully first.** Kobo says an update will not install unless the
   device is fully charged.
2. **Sync.** On the Home screen, tap the **Sync** icon at the top, then **Sync
   now**. The Kobo connects to Wi-Fi and downloads any update along with your
   books.
3. **Or check directly.** Go to **More**, **Settings**, **Device information**,
   **Check for updates**.
4. **Accept the prompt.** If an update is available, the Kobo asks whether you
   want to install it. It can take a while, so leave it alone until it finishes.

## Update by USB (Kobo's manual method)

Kobo publishes a "Manually Updating your Kobo eReader device Firmware" page in its
help centre with a download for each model. Use it when Wi-Fi updates fail.

1. Download the update for your exact model from Kobo's page. Some models come in
   two hardware versions. Kobo says to check the **7th character of the serial
   number**: 0 means version 1 hardware, 2 means version 2.
2. Connect the Kobo to your computer by USB. It appears as a drive named
   KOBOeReader.
3. Unzip the download. Turn on "show hidden files" on your computer, then copy
   the unzipped contents into the hidden **.kobo** folder on the drive.
4. Eject the drive safely and unplug. The Kobo finds the update files, installs
   them and restarts.

Kobo's other USB route, the **Kobo Desktop** app, is no longer offered in Europe,
and Kobo says it does not work with the Libra Colour, Clara Colour or Clara BW.

## What an update does to KOReader and other mods

- **KOReader's home-screen icon usually disappears.** That icon comes from a small
  launcher called **KFMon**, and an official firmware update switches it off.
  KOReader and your settings are still on the device. Copy the KOReader package
  across again, exactly as when you first installed it, and the icon comes back.
- **KOReader launched from NickelMenu keeps working.** KOReader's own
  instructions say the NickelMenu route does not need reinstalling after a
  firmware update, on the firmware NickelMenu supports.
- **kobopatch patches need reapplying.** Patches are built for one firmware
  version. After an update, apply a patch set made for the new version.
- **NickelMenu persists** between firmware upgrades on the 4.x software it
  supports.

So if you rely on add-ons, update when you have ten minutes and a computer handy,
not just before a trip.

## The Kobo 6.0 beta: what it is

In late 2026 Kobo began offering **"Kobo eReader software beta 6.0+"** to three
models: the **Libra Colour**, **Clara Colour** and **Clara BW**. Kobo describes it
as a one-time platform overhaul with a new reading engine. It is **optional**: the
Kobo shows a beta upgrade window with **Skip** and **Download** buttons, and Kobo
is rolling it out in phases.

What Kobo lists as new includes borrowing from several library cards in Libby, a
clock while reading, Large Print Mode up to 200%, separate Wi-Fi and Bluetooth
switches, signing in for Adobe DRM on the device, and support for LCP-protected
EPUBs. Kobo's subscription service Kobo Stack needs 6.0.

What Kobo lists as removed or changed:

- Pinch-to-zoom for font size, and fast page turning by holding a button or
  corner.
- Sketchpad, the games, reading awards and Activity tracking.
- **RTF and HTML files are no longer supported**, and MOBI files may have
  problems. Kobo says to convert them to EPUB.
- **Books you had placed in the hidden .kobo folder are not kept** when updating
  to 6.0.

## Should you take the 6.0 beta?

If you only use the Kobo as Kobo designed it, the beta is a reasonable choice, and
it is the only way to get the new features. If you use **KOReader, NickelMenu or
patches**, we suggest tapping **Skip** for now:

- **NickelMenu** officially supports the 4.x software only. Work to support the
  newer software exists but had not been released at the time of writing.
- **The KoboPatch Web UI** states that Kobo software newer than 4.x is not
  supported yet.
- **KOReader** runs on 6.0, but users have reported problems, including the
  battery showing 0% and the device never going to sleep. Fixes are being worked
  on.

**Think hard before going back.** Kobo warns not to roll back from 6.0: doing so
deletes data stored only on the device, including sideloaded books, annotations,
highlights and reading stats. Back up your highlights and sideloaded books
before you take the beta, so you have a copy whatever happens.

## If an update gets stuck

Kobo's general advice for a frozen device is to charge it for at least an hour,
then hold the power button for at least 10 seconds to force it off, and start it
again. If an update keeps failing, try Kobo's manual USB method above. If that
fails too, contact Kobo support. Avoid a factory reset unless support tells you
to, because it erases bookmarks, annotations and notebooks stored on the device.
