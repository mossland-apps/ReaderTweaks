---
title: Calibre and the reMarkable Paper Pure
device: remarkable-paper-pure
section: calibre
type: overview
summary: There is no official Calibre driver for the reMarkable. Here is what Calibre is still useful for, and how documents actually get onto the Paper Pure.
lastUpdated: 2026-09-01
order: 0
software: Calibre
softwareVersion: "7.21"
---

Calibre is the free desktop program for managing an ebook library, but the
reMarkable is not a device it plugs into directly. The Paper Pure has no USB
drive mode, and Calibre has no built-in driver for it.

## What Calibre is still good for here

- **Keeping your master library** of EPUBs on your computer, tidy and with clean
  metadata.
- **Converting EPUB to PDF** for the Paper Pure, which is often the more reliable
  format on this device.
- **Trimming and resizing PDFs** to a page size close to the 10.3-inch screen so
  they display and annotate well.

## How documents get onto the device

- The **reMarkable desktop or mobile app** — the normal route. Add files there
  and they sync to the device.
- A community **Calibre plugin** for the reMarkable can add a "send to
  reMarkable" action that uploads through your account. It is unofficial and may
  lag behind firmware, especially on the newer platform the Paper Pure uses.
- Over **SSH**, if you have enabled developer mode, using "scp" to copy files
  into the device's document folder.

## Start here

- **[Send documents to the reMarkable Paper Pure with Calibre](/devices/remarkable/remarkable-paper-pure/calibre/send-books/)**
