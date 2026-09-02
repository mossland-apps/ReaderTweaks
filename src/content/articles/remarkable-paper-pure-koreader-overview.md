---
title: KOReader on the reMarkable Paper Pure
device: remarkable-paper-pure
section: koreader
type: overview
summary: KOReader can run on the Paper Pure through developer mode, but because it uses reMarkable's newer platform the community tooling is less mature than on the reMarkable 2. Advanced, and best treated as experimental.
lastUpdated: 2026-09-01
order: 0
software: KOReader
softwareVersion: "2026.07.1"
---

The Paper Pure's stock EPUB reading is weak, and KOReader is the usual fix. Like
every reMarkable it has a developer mode that gives SSH access instead of needing
a jailbreak — but the Paper Pure shares the Paper Pro's newer hardware platform,
and the community package manager and KOReader builds for it are less settled
than the years-mature setup on the reMarkable 2.

## Why do it

- **A real ebook reader.** Proper font, margin and layout control, library
  management, and formats beyond PDF and EPUB — CBZ, FB2, DjVu and more.
- **Better PDF reflow** than the stock reader for small-text documents.
- **It runs alongside the stock software.** You launch KOReader from a menu; the
  reMarkable writing side is untouched.

## Why you might not

- **It is advanced and less trodden.** You enable developer mode (which wipes the
  device), connect over SSH, and run command-line steps still being refined for
  this platform. A wrong move can require a reset.
- **Firmware updates can break it.** A reMarkable update may disable developer
  mode or remove the community changes; you re-run the install afterwards.
- **No pen support.** KOReader is a reading app — no handwriting, no notebooks.
- **Warranty and support.** reMarkable will not support a device with community
  software on it.

## Start here

- **[Install KOReader on the reMarkable Paper Pure](/devices/remarkable/remarkable-paper-pure/koreader/install/)**
