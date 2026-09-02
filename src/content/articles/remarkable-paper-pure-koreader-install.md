---
title: Install KOReader on the reMarkable Paper Pure
pageSlug: install
device: remarkable-paper-pure
section: koreader
type: guide
order: 1
summary: Enable developer mode, connect over SSH, and install KOReader through the community package manager — with a warning that support for reMarkable's newer platform is still catching up.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: KOReader
softwareVersion: "2026.07.1"
difficulty: Advanced
estimatedTime: 60 minutes
lastTested: 2026-08-27
whatYouNeed:
  - reMarkable Paper Pure
  - A computer comfortable with a command line and SSH
  - The USB-C cable
  - The device's SSH password (shown in Settings after enabling developer mode)
prerequisites:
  - text: "KOReader on the reMarkable Paper Pure — what developer mode involves and the risks"
    href: /devices/remarkable/remarkable-paper-pure/koreader/
  - text: "Check current support and steps for reMarkable's newer platform (Toltec documentation)"
    href: https://toltec-dev.org/
related:
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
  - text: "The reMarkable Paper Pure won't turn on or is frozen"
    href: /devices/remarkable/remarkable-paper-pure/troubleshooting/wont-turn-on/
searchTerms:
  - koreader remarkable
  - toltec
  - developer mode
  - ssh remarkable
  - opkg
  - remux
  - custom software
  - paper pure platform
steps:
  - instruction: Check that your firmware is supported before you start
    detail: >-
      The reMarkable 2's community tooling is mature; the newer platform the
      Paper Pure shares with the Paper Pro is still being worked on. On the
      Toltec project site, confirm KOReader is packaged for the Paper Pure's
      current firmware. If it is not, wait — installing on an unsupported version
      is how devices get bricked.
  - instruction: Back up your notebooks first
    detail: >-
      Make sure everything on the device has synced to your reMarkable account,
      and export any notebook you cannot lose as a PDF. Enabling developer mode
      wipes the device.
  - instruction: Enable developer mode
    detail: >-
      In Settings, then "General", then "Software", turn on developer mode. This
      wipes the device as part of enabling it. After it re-provisions, developer
      mode gives you SSH access.
    warning: >-
      Enabling developer mode erases the device. Do not do this step until your
      content is safely synced and any important notebook is exported.
  - instruction: Find the SSH details and connect
    detail: >-
      In Settings, on the licenses / GPL compliance screen, the device shows its
      IP address over USB and an SSH password. Connect the USB cable, then from
      your computer run "ssh root@10.11.99.1" and enter that password.
  - instruction: Install the community package manager
    detail: >-
      Follow the current install command on the Toltec website for the newer
      reMarkable platform. It sets up the "opkg" package manager and the
      repository. Confirm it reports success; if the script refuses because the
      firmware is unsupported, stop here.
  - instruction: Install KOReader
    detail: >-
      Run "opkg install koreader". This pulls KOReader and a launcher that lets
      you switch between the reMarkable software and KOReader.
  - instruction: Launch KOReader and point it at your files
    detail: >-
      From the launcher on the device, start KOReader. Use its file browser to
      find your documents — synced reMarkable files live under a data folder, and
      you can copy an ebook folder over SSH with "scp". Set a home directory.
  - instruction: Plan for firmware updates
    detail: >-
      A reMarkable firmware update can disable developer mode or remove the
      community changes. Before updating, check whether the new firmware is
      supported; after updating, expect to re-run the install. Many users turn
      off automatic updates while running this setup.
  - instruction: To remove it
    detail: >-
      Run "opkg remove koreader", then the uninstall script, or simply turn
      developer mode back off in Settings, which wipes the device and returns it
      to stock.
---

KOReader makes the Paper Pure a good ebook reader, but the install is genuinely
advanced and, on reMarkable's newer platform, still maturing. Developer mode
wipes the device, then you work over SSH to set up the package manager and
install KOReader. Because the exact steps and supported firmware change often
here, treat the Toltec project's own documentation as authoritative and do not
proceed if your firmware is not listed as supported. If you specifically want a
rock-solid KOReader setup today, a used reMarkable 2 is the better base.
