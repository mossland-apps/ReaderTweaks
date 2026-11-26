---
title: Install KOReader on the reMarkable 2
pageSlug: install
device: remarkable-2
section: koreader
type: guide
order: 1
summary: No developer mode needed — install KOReader with reManager, the free desktop mod manager KOReader's developers now recommend. Plus what happens after a restart or a reMarkable update.
lastUpdated: 2026-11-25
datePublished: 2026-09-01
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Advanced
estimatedTime: 30 minutes
whatYouNeed:
  - reMarkable 2
  - A Windows, Mac or Linux computer for the reManager app
  - The USB-C cable, or the tablet and computer on the same Wi-Fi
  - The tablet's SSH password (shown in its Settings)
prerequisites:
  - text: "KOReader on the reMarkable 2 — what it involves and the risks"
    href: /devices/remarkable/remarkable-2/koreader/
  - text: "KOReader's official reMarkable install instructions (KOReader wiki)"
    href: https://github.com/koreader/koreader/wiki/Installation-on-ReMarkable
related:
  - text: "How to install KOReader on any device"
    href: /guides/install-koreader-any-device/
  - text: "The reMarkable 2 won't turn on or is frozen"
    href: /devices/remarkable/remarkable-2/troubleshooting/wont-turn-on/
searchTerms:
  - koreader remarkable
  - remanager
  - vellum
  - xovi
  - appload
  - tripletap
  - ssh remarkable
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
      Toltec. Toltec only supports reMarkable software up to 3.3.
      Installing it on a newer version can leave the tablet stuck at start-up.
      KOReader's developers describe the Toltec route as outdated.
  - instruction: Back up your notebooks
    detail: >-
      Nothing in this guide wipes the device, but you are installing unofficial
      software. Make sure everything has synced to your reMarkable account, and
      export any notebook you cannot lose as a PDF.
  - instruction: Find the SSH password (no developer mode needed)
    detail: >-
      Unlike the newer Paper Pro family, the reMarkable 2 does not need
      developer mode: SSH access is built in. Go to Settings, then Help, then
      Copyrights and licenses (on some software versions it is under About, or
      under General, then Help). It shows the password and the IP address. Over a
      USB cable the address is 10.11.99.1.
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
      removes Vellum and, by default, your installed mods.
---

On the reMarkable 2, KOReader is the difference between a weak ebook reader and a
good one. The current way to install it is **reManager**, a free desktop app
that KOReader's developers recommend. The reMarkable 2 does not need developer mode, so nothing is erased.

Two things are different from older guides. Toltec, the tool most guides used
to recommend, does not work on current reMarkable software. And mods no longer
start by themselves after a restart: you start them with a triple-press of the
power button or from reManager.

The tools change often. If a step here no longer matches what you see, follow
[KOReader's reMarkable instructions](https://github.com/koreader/koreader/wiki/Installation-on-ReMarkable),
which also cover a manual install for people comfortable with the command line.
