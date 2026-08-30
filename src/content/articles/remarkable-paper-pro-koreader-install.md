---
title: Install KOReader on the reMarkable Paper Pro
pageSlug: install
device: remarkable-paper-pro
section: koreader
type: guide
order: 1
summary: Enable developer mode, connect over SSH, install the Toltec package manager, and use it to install KOReader — plus how to keep it working across firmware updates.
lastUpdated: 2026-08-30
datePublished: 2026-08-30
software: KOReader
softwareVersion: "2024.11"
difficulty: Advanced
estimatedTime: 45 minutes
lastTested: 2026-08-25
whatYouNeed:
  - reMarkable Paper Pro
  - A computer comfortable with a command line and SSH
  - The USB-C cable
  - The device's SSH password (shown in Settings after enabling developer mode)
prerequisites:
  - text: "KOReader on the reMarkable Paper Pro — what developer mode involves and the risks"
    href: /devices/remarkable/remarkable-paper-pro/koreader/
  - text: "Follow the current Toltec and KOReader install steps for your firmware (Toltec documentation)"
    href: https://toltec-dev.org/
related:
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
  - text: "The reMarkable Paper Pro won't turn on or is frozen"
    href: /devices/remarkable/remarkable-paper-pro/troubleshooting/wont-turn-on/
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
  - instruction: Back up your notebooks first
    detail: >-
      Make sure everything on the device has synced to your reMarkable account,
      and export any notebook you cannot lose as a PDF. Community software carries
      a real risk of needing a factory reset to recover from a bad step.
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
      In Settings, then "Help", then "Copyrights and licenses" (or the "GPLv3
      Compliance" screen), the device shows its IP address over USB and an SSH
      password. Connect the USB cable, then from your computer run
      "ssh root@10.11.99.1" and enter that password.
  - instruction: Install the Toltec package manager
    detail: >-
      Toltec is the community repository that packages KOReader and other tools
      for reMarkable. From the SSH session, follow the current install command on
      the Toltec website — it is a single script that sets up the "opkg" package
      manager and the Toltec repo. Confirm it reports success.
    tip: >-
      Use the exact command from toltec-dev.org for your firmware version. Toltec
      tracks which firmware it supports, and installing on an unsupported version
      is how people get into trouble.
  - instruction: Install KOReader through Toltec
    detail: >-
      With Toltec set up, run "opkg install koreader". This pulls KOReader and its
      launcher. It also installs a way to switch between the reMarkable software
      and KOReader — often a launcher such as "remux" or an entry added to the
      device's menu.
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
      "opkg install koreader". Some users turn off automatic updates while running
      this setup.
  - instruction: To remove it
    detail: >-
      Run "opkg remove koreader", then Toltec's uninstall script, or simply turn
      developer mode back off in Settings, which wipes the device and returns it
      to stock.
---

KOReader on a reMarkable is the difference between a poor ebook reader and a good
one, but the install is genuinely advanced: developer mode wipes the device,
then you work over SSH to set up the Toltec package manager and install KOReader
through it. Because the exact steps and supported firmware change, the
authoritative source is the Toltec project's own documentation, linked above.
Keep your notebooks backed up, and expect to re-run the install after firmware
updates.
