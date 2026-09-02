---
title: "KOReader PDF settings that make documents readable"
summary: "KOReader is the best PDF reader on most e-ink devices, but only once it is set up. Here is the difference between page mode and reflow, and the crop, zoom and contrast settings that matter."
category: koreader
lastUpdated: 2026-09-02
order: 15
relatedDevices:
  - pocketbook-inkpad-4
  - scribe
  - remarkable-2
---

A PDF opened cold in any reader is usually disappointing: tiny text, huge white
margins, a page that will not fit. KOReader gives you the tools to fix that, and
they are worth learning because no stock reader matches them.

## First decision: page mode or reflow

Tap the bottom of the screen for the document menu. The key control is the
reading mode:

- **Page mode** shows the PDF exactly as laid out — one fixed page at a time.
  Use it for anything where layout carries meaning: academic papers, sheet music,
  comics, forms, illustrated books. You then use crop and zoom to make it
  readable.
- **Reflow mode** re-pours the text to fit the screen and lets you change font
  size like an EPUB. Use it only for PDFs that are essentially just text — a
  plain report, a novel exported to PDF. It mangles tables, footnotes,
  multi-column layouts and anything with figures.

Most document PDFs are read in page mode with the settings below. Reflow is a
fallback.

## Page mode: crop, zoom, columns

- **Page crop.** Trims the white border so the text fills more of the screen. Set
  it to "auto" and KOReader detects the margins; use "manual" to drag the crop
  box yourself on a page that fools the auto detector. On an A4 or US-Letter scan
  this alone enlarges the text 20–30% with no zooming.
- **Zoom mode.** "Fit content" works with the crop to fill the screen with the
  text block. "Fit width" is good for a single-column page you will scroll down.
  "Fit page" shows the whole page — only comfortable on a large screen.
- **Columns.** For a two-column paper, set the zoom to follow columns
  ("column mode" / "fit column"): a page turn moves down the left column, then to
  the right, then to the next page. This is the single biggest improvement for
  academic PDFs.
- **Panning and page-turn behaviour.** In multi-column or zoomed views, KOReader
  can auto-advance the view down and across a page on each tap. Set this once and
  the button turns just walk through the document.

## Contrast for old scans

Scanned books are often grey. The document menu has a **contrast / gamma**
control that darkens the ink. Push it far enough to be crisp, not so far that
thin strokes break up. There is also a "sharpen" option that helps small type.

## When the file is just too heavy

A 300 MB scanned book turns pages slowly no matter what. Options: lower the
render quality while reading, set full-screen refresh to every few pages instead
of every page, or re-process the file on a computer to a lower resolution.
KOReader's engine is faster than most, but physics still applies.

## The short version

Page mode, auto crop, fit-content zoom, column mode for two-column papers, and a
contrast bump for scans. Reflow only for PDFs that are nothing but text.
