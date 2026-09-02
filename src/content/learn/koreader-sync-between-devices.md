---
title: "Sync your reading position between devices with KOReader"
summary: "KOReader's Progress Sync plugin keeps your place in a book in step across every device running KOReader. Here is how it works, what it does and does not sync, and whether to self-host."
category: koreader
lastUpdated: 2026-09-02
order: 18
relatedDevices:
  - libra-colour
  - clara-bw
---

If you read the same book on a Kobo at home and a phone on the train, KOReader's
**Progress Sync** plugin (often called **kosync**) resumes each device where the
other left off. It is built in — nothing to install.

## What it syncs, and what it does not

- **It syncs**: your position in a document — the page or the exact scroll point.
- **It does not sync**: bookmarks, highlights, notes, per-book settings, your
  library, or your fonts. Those stay on each device. If you need highlights in
  more than one place, that is a different job (a cloud-synced folder of
  KOReader's sidecar files, or exporting notes).
- **It does not upload your books.** The plugin sends a hash that identifies the
  document, plus a position. No filename, no content, over HTTPS.

## Setting it up

The plugin only appears in the menu when a document is open.

1. Open any book. Menu, then the gear, then **Progress sync**.
2. On the first device choose **Register / Login** and create an account — a
   username and password, nothing else.
3. On every other device, open the same menu and **Login** with that account.
4. Turn on **Auto sync** so it syncs whenever you open or close a book. There is
   also a **Sync now** for a manual push.

KOReader comes with the address of the project's public sync server already
filled in, so for most people steps 1–3 are all there is to it.

## The public server versus your own

- **The public server** is free and run by the KOReader project on a
  best-effort basis. It works well and is fine for personal use. It can be slow
  or briefly down, and there is no support if it is.
- **Self-hosting** is straightforward if you already run a home server: the
  official sync server is a small service you can start with one Docker command,
  and several community re-implementations exist. Point every device's "custom
  sync server" field at your instance. Worth it if you want reliability or
  privacy on your own terms; overkill otherwise.

## Gotchas

- Both devices must be on the **same KOReader account** and have opened the book
  at least once so the hashes match.
- A book that was **converted or re-downloaded** in between may hash differently
  and start a fresh position. Keep the same file on both devices.
- Sync is position-only, so if you also want the same **bookmarks**, put
  KOReader's `koreader` settings/sidecar folder in a synced cloud folder — but
  only sync when KOReader is closed, or you will get conflicts.

## The short version

Open a book, register on one device, log in on the others, turn on Auto sync.
The default public server is fine to start; self-host if you want it to be
reliable and yours.
