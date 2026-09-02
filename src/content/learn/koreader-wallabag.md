---
title: "Read Wallabag articles on your e-reader with KOReader"
summary: "KOReader's built-in Wallabag plugin downloads your saved articles as EPUB and syncs your read status back. Here is what you need from your Wallabag server and how to set it up."
category: koreader
lastUpdated: 2026-09-02
order: 20
---

[Wallabag](https://wallabag.org/) is a self-hostable read-it-later service — the
open alternative to Pocket or Instapaper. KOReader has a **built-in Wallabag
plugin** that pulls your saved articles onto the device as EPUB files and marks
them read or deletes them when you finish. No browser, no third-party app.

## What you need first

A Wallabag server you can reach — either your own instance or the hosted
`wallabag.it`. From it, gather four things:

- The **server URL**.
- Your **username** and **password**.
- A **Client ID** and **Client Secret**. Create these in Wallabag under your
  account, then **API clients management**, then **Create a new client**. Each is
  a long string.

## Setting it up in KOReader

1. Menu, then the plug/tools icon, then **Wallabag**, then **Settings**.
2. Enter the server URL, client ID, client secret, username and password.
3. Set a **download directory** — a folder on the device where the article EPUBs
   will land, for example `wallabag`.
4. Restart KOReader if it asks. Server and login changes only take effect on
   restart.

Then, back in the Wallabag menu, choose **Download new articles**. KOReader
fetches the latest saved articles (30 by default) as individual EPUBs into your
folder, and they open like any book — with KOReader's full typography controls,
which is the whole point of reading them here.

## Read status and cleanup

In the Wallabag settings you can turn on:

- **Mark as read on the server** when you finish an article on the device.
- **Delete finished articles** locally, or **archive** them instead of deleting.
- **Remove local files** for articles you deleted or archived on the server, so
  the folder stays in sync.

## Limits worth knowing

- It downloads **text and basic formatting**. Complex article layouts and some
  images may not survive the conversion — that is Wallabag's article parser, not
  KOReader.
- It is **your Wallabag account only**. It does not read Pocket, Instapaper or
  raw RSS. For RSS, KOReader has a separate **News downloader** plugin.
- On very old devices, saving the settings screen can misbehave; you can edit
  `koreader/settings/wallabag.lua` directly instead.

## The short version

Make an API client in Wallabag, paste its ID and secret plus your login into
KOReader's Wallabag settings, pick a download folder, and hit "download new
articles". Turn on mark-as-read and delete-when-finished so it tidies up after
itself.
