---
title: Install KOReader on the reMarkable Paper Pure
pageSlug: install
device: remarkable-paper-pure
section: koreader
type: guide
order: 1
summary: Turn on developer mode (which erases the tablet), then install KOReader with reManager, the free desktop mod manager KOReader's developers now recommend. Plus what happens after a restart or a reMarkable update.
lastUpdated: 2026-11-25
datePublished: 2026-09-01
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Advanced
estimatedTime: 45 minutes
whatYouNeed:
  - reMarkable Paper Pure
  - A Windows, Mac or Linux computer for the reManager app
  - The USB-C cable, or the tablet and computer on the same Wi-Fi
  - The tablet's SSH password (shown in its Settings)
prerequisites:
  - text: "KOReader on the reMarkable Paper Pure — what it involves and the risks"
    href: /devices/remarkable/remarkable-paper-pure/koreader/
  - text: "KOReader's official reMarkable install instructions (KOReader wiki)"
    href: https://github.com/koreader/koreader/wiki/Installation-on-ReMarkable
related:
  - text: "How to install KOReader on any device"
    href: /guides/install-koreader-any-device/
  - text: "The reMarkable Paper Pure won't turn on or is frozen"
    href: /devices/remarkable/remarkable-paper-pure/troubleshooting/wont-turn-on/
searchTerms:
  - koreader remarkable
  - remanager
  - vellum
  - xovi
  - appload
  - tripletap
  - ssh remarkable
  - developer mode
  - toltec
steps:
  - instruction: Check your reMarkable software version
    detail: >-
      reManager's guide says that if your tablet runs software older than
      3.11.2.5 you should update to 3.11.2.5 first, and it does not support
      reMarkable beta releases. The launcher KOReader uses on current software
      needs 3.20 or later. Check the version in Settings before you start.
    warning: >-
      Older guides, including an earlier version of this one, tell you to use
      Toltec. Toltec only supports reMarkable software up to 3.3 and does not support the Paper Pro family.
      Installing it on a newer version can leave the tablet stuck at start-up.
      KOReader's developers describe the Toltec route as outdated.
  - instruction: Back up everything, then turn on developer mode
    detail: >-
      On the Paper Pure, SSH access (which reManager needs) only works with
      developer mode on. Go to Settings, then General, then Paper Tablet, then
      Software, then Advanced, and turn on Developer Mode.
    warning: >-
      reMarkable says turning on developer mode performs a factory reset, so
      everything on the device is erased. Sync to your reMarkable account and
      export any notebook you cannot lose first. Afterwards the tablet shows a
      warning on every start-up that cannot be removed, and turning developer
      mode off later needs reMarkable's recovery application.
  - instruction: Find the SSH password
    detail: >-
      After the device has reset and you have set it up again, go to Settings,
      then General, then Help, then About, then Copyrights and licenses. It shows
      the username (root), the password and the IP address. Over a USB cable the
      address is 10.11.99.1.
  - instruction: Install reManager on your computer
    detail: >-
      reManager is a free, open-source mod manager for every reMarkable model,
      and it is the method KOReader's own instructions recommend. Get it from
      the Mac App Store, the Microsoft Store or Flathub on Linux, or download it
      from its GitHub page (rmitchellscott/reManager).
  - instruction: Connect reManager to the tablet
    detail: >-
      Connect the USB cable (or use Wi-Fi). In reManager, enter the IP address
      and the SSH password from the previous step. The first time it connects,
      reManager offers to set up Vellum, the package system it uses to install
      mods. Accept.
  - instruction: Turn off automatic reMarkable updates
    detail: >-
      reManager's guide recommends switching off automatic updates while you
      use mods, so a reMarkable update does not break them unexpectedly.
      reManager has a switch for this.
  - instruction: Install KOReader
    detail: >-
      In reManager, open the Mods tab, find KOReader under Discover, press the
      plus button (or Add), then press Apply on the Changes bar. reManager
      installs KOReader and the pieces it needs.
  - instruction: Start mods and open KOReader
    detail: >-
      Mods do not start on their own. Start them from reManager's System tab,
      or install the "tripletap" mod so a triple-press of the power button
      starts them. Then open KOReader from the AppLoad button in the sidebar of
      the reMarkable's main screen.
    tip: >-
      Put your ebooks in a folder KOReader can see, and set it as KOReader's home
      folder so it opens there.
  - instruction: After every restart
    detail: >-
      A restart returns the tablet to the plain reMarkable software. Your
      KOReader install is still there; triple-press the power button (with
      tripletap) or start mods from reManager again. Do not try to make the mod
      framework start automatically at boot — its developer warns that this can
      leave the tablet in a restart loop.
  - instruction: After a reMarkable software update
    detail: >-
      Open reManager. Its status screen walks you through recovery in numbered
      steps, including checking which mods are compatible with the new version.
      Follow them before using KOReader again.
  - instruction: To remove it
    detail: >-
      In reManager, open Installed and press the bin icon next to KOReader.
      To remove everything, use System, then Advanced, then Uninstall, which
      removes Vellum and, by default, your installed mods. Turning developer mode off is done with reMarkable's recovery application.
---

On the Paper Pure, KOReader is the difference between a weak ebook reader and a
good one. The current way to install it is **reManager**, a free desktop app
that KOReader's developers recommend. The big cost on this model is developer mode: turning it on erases the tablet and adds a permanent start-up warning, so back up first.

Two things are different from older guides. Toltec, the tool most guides used
to recommend, does not work on current reMarkable software. And mods no longer
start by themselves after a restart: you start them with a triple-press of the
power button or from reManager.

The tools change often. If a step here no longer matches what you see, follow
[KOReader's reMarkable instructions](https://github.com/koreader/koreader/wiki/Installation-on-ReMarkable),
which also cover a manual install for people comfortable with the command line.
