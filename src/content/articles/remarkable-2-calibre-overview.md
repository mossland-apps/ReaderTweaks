---
title: Calibre and the reMarkable 2
device: remarkable-2
section: calibre
type: overview
summary: There is no official Calibre driver for the reMarkable. Here is what Calibre is still useful for, and how documents actually get onto the reMarkable 2.
lastUpdated: 2026-09-01
order: 0
software: Calibre
softwareVersion: "7.21"
---

Calibre is the free desktop program for managing an ebook library, but the
reMarkable is not a device it plugs into directly. The reMarkable 2 has no USB
drive mode, and Calibre has no built-in driver for it.

## What Calibre is still good for here

- **Keeping your master library** of EPUBs on your computer, tidy and with clean
  metadata.
- **Converting EPUB to PDF** for the reMarkable 2, which is often the more
  reliable format on the stock reader.
- **Trimming and resizing PDFs** to a page size close to the 10.3-inch screen so
  they display and annotate well.

## How documents get onto the device

- The **reMarkable desktop or mobile app** — the normal route. Add files there
  and they sync to the device.
- The **local USB web interface** at http://10.11.99.1 — enable it in Settings,
  connect USB, and drag files onto the page in a browser. Offline, no cloud
  involved.
- A community **Calibre plugin** for the reMarkable (search Calibre's plugin
  index) can add a "send to reMarkable" action that uploads through your account
  or the local USB connection. It is unofficial but well maintained for the
  reMarkable 2.
- Over **SSH**, if you have enabled developer mode, using "scp" to copy files
  into the device's document folder.

## Start here

- **[Send documents to the reMarkable 2 with Calibre](/devices/remarkable/remarkable-2/calibre/send-books/)**
