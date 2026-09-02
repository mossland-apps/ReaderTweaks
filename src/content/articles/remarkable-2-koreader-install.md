---
title: Install KOReader on the reMarkable 2
pageSlug: install
device: remarkable-2
section: koreader
type: guide
order: 1
summary: Enable developer mode, connect over SSH, install the Toltec package manager, and use it to install KOReader — plus how to keep it working across firmware updates.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Advanced
estimatedTime: 45 minutes
lastTested: 2026-08-27
whatYouNeed:
  - reMarkable 2
  - A computer comfortable with a command line and SSH
  - The USB-C cable
  - The device's SSH password (shown in Settings after enabling developer mode)
prerequisites:
  - text: "KOReader on the reMarkable 2 — what developer mode involves and the risks"
    href: /devices/remarkable/remarkable-2/koreader/
  - text: "Follow the current Toltec and KOReader install steps for your firmware (Toltec documentation)"
    href: https://toltec-dev.org/
related:
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
  - text: "The reMarkable 2 won't turn on or is frozen"
    href: /devices/remarkable/remarkable-2/troubleshooting/wont-turn-on/
searchTerms:
  - koreader remarkable
  - toltec
  - developer mode
  - ssh remarkable
  - entware
  - opkg
  - remux
  - custom software
steps:
  - instruction: Check the supported firmware before you update or start
    detail: >-
      Toltec tracks which reMarkable 2 firmware versions it supports, and support
      lags a little behind the newest release. Before installing, and before
      accepting any pending firmware update, check the Toltec site. Many people
      deliberately stay on a known-good firmware while running this.
  - instruction: Back up your notebooks first
    detail: >-
      Make sure everything on the device has synced to your reMarkable account,
      and export any notebook you cannot lose as a PDF. Enabling developer mode
      wipes the device.
  - instruction: Enable developer mode
    detail: >-
      In Settings, then "General", then "Software", turn on developer mode. This
      wipes the device as part of enabling it, which is why the backup comes
      first. After it re-provisions, developer mode gives you SSH access.
    warning: >-
      Enabling developer mode erases the device. Do not do this step until your
      content is safely synced and any important notebook is exported.
  - instruction: Find the SSH details and connect
    detail: >-
      In Settings, on the "Help", then "Copyrights and licenses" / "GPLv3
      Compliance" screen, the device shows its IP address over USB and an SSH
      password. Connect the USB cable, then from your computer run
      "ssh root@10.11.99.1" and enter that password.
  - instruction: Install the Toltec package manager
    detail: >-
      Toltec is the community repository that packages KOReader and other tools
      for reMarkable. From the SSH session, run the current install command from
      the Toltec website — a single script that sets up the "opkg" package
      manager and the Toltec repo. Confirm it reports success.
    tip: >-
      Use the exact command from toltec-dev.org for your firmware version.
      Installing on an unsupported firmware is the main way people get into
      trouble on the reMarkable 2.
  - instruction: Install KOReader through Toltec
    detail: >-
      Run "opkg install koreader". This pulls KOReader and its launcher. It also
      installs a way to switch between the reMarkable software and KOReader —
      often a launcher such as "remux", or an entry added to the device's menu.
  - instruction: Launch KOReader and point it at your files
    detail: >-
      From the launcher on the device, start KOReader. Use its file browser to
      find your documents — synced reMarkable files live under a data folder;
      many people also copy an ebook folder over SSH with "scp". Set a home
      directory so it opens there.
  - instruction: Plan for firmware updates
    detail: >-
      A reMarkable firmware update can disable developer mode or remove Toltec's
      changes. Before updating, check the Toltec site for whether the new firmware
      is supported. After updating, you generally re-run the Toltec install and
      "opkg install koreader". Turning off automatic updates while running this
      setup is common practice.
  - instruction: To remove it
    detail: >-
      Run "opkg remove koreader", then Toltec's uninstall script, or simply turn
      developer mode back off in Settings, which wipes the device and returns it
      to stock.
---

KOReader on a reMarkable 2 is the difference between a poor ebook reader and a
good one, and because the device is mature, this is the most reliable community
install on this site. It is still advanced: developer mode wipes the device,
then you work over SSH to set up Toltec and install KOReader through it. Keep
your notebooks backed up, use the exact steps from the Toltec project for your
firmware, and expect to re-run the install after firmware updates — or hold
updates back.
