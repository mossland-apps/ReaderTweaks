---
title: Calibre and the reMarkable Paper Pro Move
device: remarkable-paper-pro-move
section: calibre
type: overview
summary: There is no official Calibre driver for the reMarkable. Here is what Calibre is still useful for with the Move, and how documents actually get onto the device.
lastUpdated: 2026-09-01
order: 0
software: Calibre
softwareVersion: "7.21"
---

Calibre is the free desktop program for managing an ebook library, but the
reMarkable is not a device it plugs into directly. The Move has no USB drive
mode, and Calibre has no built-in driver for it.

## What Calibre is still good for here

- **Keeping your master library** of EPUBs on your computer, tidy and with clean
  metadata.
- **Converting EPUB to PDF** for the Move, which is often the more reliable
  format on this device.
- **Trimming and resizing PDFs** to a page size near the 7.3-inch screen so text
  is not tiny. This matters more on the Move than on the larger reMarkables.

## How documents get onto the device

- The **reMarkable desktop or mobile app** — the normal route. Add files there
  and they sync to the device.
- A community **Calibre plugin** for the reMarkable can add a "send to
  reMarkable" action that uploads through your account. It is unofficial and may
  lag behind firmware, especially on the newer platform the Move uses.
- Over **SSH**, if you have enabled developer mode, using "scp" to copy files
  into the device's document folder.

## Start here

- **[Send documents to the reMarkable Paper Pro Move with Calibre](/devices/remarkable/remarkable-paper-pro-move/calibre/send-books/)**
