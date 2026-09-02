---
title: "KOReader's status bar, and the Bookends plugin"
summary: "KOReader's built-in bottom status bar already shows progress, time and battery, and it is highly configurable. The community Bookends plugin goes further with corner overlays. Here is what each does."
category: koreader
lastUpdated: 2026-09-02
order: 17
---

The strip along the bottom of a KOReader page — progress, page numbers, clock,
battery — is the **status bar** (KOReader also calls it the footer). It is one of
the most configurable parts of the app, and for most people the built-in options
are enough. A third-party plugin called **Bookends** adds more if you want it.

## The built-in status bar

Tap it, or open the reading menu and find the status-bar settings. You can:

- **Choose which items show** and in what order: percent read, pages left in
  chapter, pages left in book, current time, battery, chapter title, book title,
  reading-time estimates, and more.
- **Switch the progress readout** between a bar, a percentage, page `x of y`, or
  a combination.
- **Set it to one or two rows**, or hide it entirely and show it only on a
  gesture.
- **Change alignment and separators** so it does not look cluttered.
- **Toggle it quickly** — a two-finger tap or a corner swipe by default — to get
  a completely clean page and bring it back when you want a status check.

A common setup: one row, showing chapter progress, pages left in the chapter, and
the time, with battery hidden until it is low.

## The Bookends plugin

**Bookends** is a community plugin (not part of KOReader) that places
configurable text overlays in the **corners and edges** of the page, above and
beyond the bottom bar. Each position can show multiple lines with its own font,
size and style, and the text is built from tokens that expand to live values —
progress, time, battery, chapter, book metadata, a custom label. It ships with a
gallery of community presets.

It is genuinely nice if you want, say, the chapter name top-left, the time
top-right, and a thin progress line along the bottom edge in your own styling.

### The caveats

- **It is unofficial.** You install it by copying the plugin folder into
  `koreader/plugins` and it updates itself or via a manual download.
- **It can break on a KOReader update.** A plugin that hooks into the reader UI
  is exactly the kind of thing a KOReader release can disturb. Expect to
  reinstall or wait for the plugin author occasionally.
- **The built-in bar covers most needs.** Try the native settings first; reach
  for Bookends only if you specifically want corner overlays.

## The short version

Spend five minutes in the built-in status-bar settings — one row, the two or
three items you actually check, a gesture to hide it. Add the Bookends plugin
only if you want styled corner overlays and can live with an unofficial add-on.
