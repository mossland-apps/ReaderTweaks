---
title: KOReader on the reMarkable Paper Pro Move
device: remarkable-paper-pro-move
section: koreader
type: overview
summary: KOReader can run on the Move through developer mode, but the newer reMarkable platform means community support is less mature than on the reMarkable 2. It is advanced and best treated as experimental.
lastUpdated: 2026-09-01
order: 0
software: KOReader
softwareVersion: "2024.11"
---

The Move's stock EPUB reading is weak, and KOReader is the usual fix. Like every
reMarkable it has a developer mode that gives SSH access instead of needing a
jailbreak exploit — but the Move (like the Paper Pro) uses reMarkable's newer
hardware platform, and the community package manager and KOReader builds for it
are less settled than the years-mature setup on the reMarkable 2.

## Why do it

- **A real ebook reader** on a device you carry everywhere — proper font, margin
  and layout control, and formats beyond PDF and EPUB.
- **Better PDF reflow** than the stock reader for small-text documents, which
  matters on a 7.3-inch page.
- **It runs alongside the stock software** through a launcher; the reMarkable
  writing side is untouched.

## Why you might not

- **It is advanced and less trodden.** You enable developer mode (which wipes the
  device), connect over SSH, and run command-line steps that are still being
  refined for this platform. A wrong move can require a reset.
- **Firmware updates can break it.** A reMarkable update may disable developer
  mode or remove the community changes; you re-run the install afterwards.
- **No pen support.** KOReader is a reading app — no handwriting, no notebooks.
- **Warranty and support.** reMarkable will not support a device with community
  software on it.

## Start here

- **[Install KOReader on the reMarkable Paper Pro Move](/devices/remarkable/remarkable-paper-pro-move/koreader/install/)**
