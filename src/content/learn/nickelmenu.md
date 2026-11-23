---
title: "NickelMenu on Kobo: what it is, how to install it, and how to set it up"
summary: "NickelMenu adds your own items to the Kobo's menus — a Wi-Fi toggle, a reboot button, a KOReader launcher. How to install it over USB, write the config file, and remove it again. Plus how it differs from KFMon."
category: software
lastUpdated: 2026-11-23
order: 7
relatedDevices:
  - libra-colour
  - clara-bw
  - sage
---

**NickelMenu** is a small, free add-on that adds custom items to the menus of
**Nickel**, Kobo's own reading software. Its author describes it as "the easiest
way to launch scripts, change settings, and run actions on Kobo e-readers". You
keep the normal Kobo experience, including the store and library borrowing, and
gain a menu of shortcuts you choose yourself.

It is the foundation most other Kobo tweaks hook into — see
[the best Kobo mods](/guides/best-kobo-plugins/) for the wider toolkit.

## Check your firmware first

NickelMenu needs Kobo software **4.6 or newer**, and it supports the **4.x**
series. **It does not officially support Kobo's 5.x or 6.0 software yet.** Work
on that support exists but had not been released at the time of writing. If your
Libra Colour, Clara Colour or Clara BW has taken Kobo's 6.0 beta, wait. Our
[Kobo update guide](/guides/update-kobo-software/) explains the beta.

To check: **More**, **Settings**, **Device information**, then **Software
version**.

The NickelMenu project says it is safe to try on newer 4.x versions, because it
has error checking and a failsafe that switches it off if something goes wrong.

## Install it

1. Connect the Kobo to your computer by USB. It appears as a drive named
   KOBOeReader.
2. From NickelMenu's official site (pgaskin.net/NickelMenu) or its GitHub
   releases page, download the file **KoboRoot.tgz**.
3. Turn on "show hidden files" on your computer. Copy **KoboRoot.tgz** into the
   hidden **.kobo** folder on the drive. Do not unzip it.
4. Eject the drive safely and unplug. The Kobo installs the file and restarts.
5. Look for a new menu item called **NickelMenu**. On older firmware it is in the
   top-left main menu; on firmware 4.23.15505 and later it is at the bottom
   right.

To update NickelMenu later, repeat the same steps. Your configuration is kept.

## Set it up: the config file

NickelMenu reads simple text files from the folder **.adds/nm/** on the Kobo
drive. The folder contains a **doc** file with the full reference. Create a new
plain-text file in that folder — the name does not matter; **config** is common —
and add one line per menu item:

```
menu_item :<location> :<label> :<action> :<argument>
```

- **location** is where the item appears: `main` (the main menu), `reader` (the
  menu while reading), `library` (My Books), `browser`, or `selection` (when you
  select text).
- **label** is the text you see. It must not contain a colon.
- **action** and **argument** say what happens.

Lines starting with `#` are comments. Changes take effect straight away, without
a reboot.

### Useful lines to start with

```
# Reading menu: invert the screen
menu_item :reader :Invert Screen :nickel_setting :toggle :invert

# Reading menu: switch Wi-Fi on or off
menu_item :reader :Wi-Fi on/off :nickel_wifi :toggle

# Main menu: find books you copied over without unplugging
menu_item :main :Import books :nickel_misc :rescan_books_full

# Main menu: restart or power off
menu_item :main :Reboot :power :reboot
menu_item :main :Power off :power :shutdown

# Main menu: start KOReader (if it is installed in .adds/koreader)
menu_item :main :KOReader :cmd_spawn :quiet :exec /mnt/onboard/.adds/koreader/koreader.sh
```

Other actions include `nickel_setting` with `dark_mode` or `screenshots`,
`nickel_orientation` to rotate the screen, `nickel_screenshot` to capture the
screen, and `nickel_bluetooth` on models with Bluetooth. The **doc** file in
**.adds/nm/** lists every action and what it accepts.

## NickelMenu or KFMon?

You will see both names in KOReader instructions. They do different jobs:

- **KFMon** is a launcher that watches for a special picture "book" being opened
  in your library. Opening the KOReader picture starts KOReader. That is the
  KOReader tile on the home screen. An official Kobo firmware update switches
  KFMon off, so the tile vanishes until you reinstall it.
- **NickelMenu** adds menu items. A NickelMenu line can start KOReader directly,
  and KOReader's own instructions say that route survives firmware updates.

They work together. The line `generator :main :kfmon` adds every app that KFMon
knows about to NickelMenu's main menu automatically.

## Remove it

Create an empty file named **uninstall** in the **.adds/nm/** folder, then
restart the Kobo. NickelMenu removes itself.

If the Kobo misbehaves after installing it, use the built-in failsafe: turn the
Kobo off within about 20 seconds of turning it on. NickelMenu treats that as a
sign something is wrong and disables itself.
