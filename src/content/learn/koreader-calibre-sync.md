---
title: "KOReader and Calibre: wireless books, and syncing highlights back"
summary: "Two different jobs go under 'KOReader Calibre sync'. One is getting books onto the device over Wi-Fi. The other is pulling your KOReader highlights and progress back into Calibre. Here is how to do each."
category: koreader
lastUpdated: 2026-09-02
order: 19
---

People search for "KOReader Calibre sync" meaning one of two things. They are
unrelated, so decide which you want.

## Job 1: send books to KOReader over Wi-Fi

KOReader has **built-in Calibre support** — it connects to Calibre's wireless
content server and lets you browse and download your library, no cable.

1. In Calibre on your computer: **Connect/share**, then **Start wireless device
   connection** (or **Start Content Server**). Note the address it shows, like
   `192.168.1.50:9090`.
2. In KOReader: the menu, then the plug/tools icon, then **Calibre**, then
   **Wireless connection**. Enter that address, or let KOReader scan for it on
   the network.
3. KOReader now shows your Calibre library. Download individual books, or a whole
   shelf, straight to the device.

This also works the other way for metadata: KOReader can hand a book's reading
status back to Calibre's wireless connection while connected.

An alternative that needs no server running is an **OPDS catalogue** — Calibre's
content server exposes one, and KOReader can add it under **OPDS** in the same
menu. Same result, browse-and-download, and it works from anywhere you can reach
the server.

## Job 2: get KOReader highlights and progress into Calibre

KOReader stores your highlights, bookmarks and progress in a **sidecar file**
next to each book (a `.sdr` folder). To surface that in Calibre you need a
**third-party Calibre plugin** — search Calibre's plugin index for the
"KOReader" plugin. Once installed:

- Connect the device by USB. The plugin reads the `.sdr` sidecars and writes the
  highlights, the reading percentage and the last-read date into custom columns
  in your Calibre library.
- It is one-directional — device to Calibre — and it is a snapshot each time you
  run it, not a live sync.
- It is unofficial and maintained by a volunteer, so it can lag behind a KOReader
  format change.

This is the route if you want your highlights searchable in Calibre or exported
from there. It does nothing for getting books onto the device — that is Job 1.

## The short version

To load books wirelessly: Calibre's wireless device connection or its OPDS
catalogue, added in KOReader's Calibre menu. To collect your highlights in
Calibre: the third-party KOReader plugin for Calibre, run over USB.
