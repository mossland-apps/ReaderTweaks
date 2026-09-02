---
title: "The best fonts for KOReader, and how to add your own"
summary: "KOReader ships with a decent set, but the reason people install it is control. Here is how fonts work in KOReader, which free ones are worth trying, and the settings that matter more than the typeface."
category: koreader
lastUpdated: 2026-09-02
order: 13
---

KOReader comes with a serviceable default set — the Noto family covers most
languages, plus a few classics. But font choice is one of the main reasons
people move off the stock reader, so it is worth doing properly.

## How fonts work in KOReader

- **Bundled fonts** live inside the app and are always available.
- **Your own fonts** go in the `fonts` folder inside KOReader's directory
  (`koreader/fonts`). Drop `.ttf` or `.otf` files in — whole families, so
  regular, bold, italic and bold-italic are all present — and restart KOReader.
  They then appear in the font list while reading.
- KOReader reads the family and style **from inside each file**, so file naming
  does not matter the way it does on a Kobo.
- The font menu is reached by tapping the top of the screen, then the "Aa"
  icon. Long-pressing a font name opens per-font weight and rendering options.

## Free fonts worth trying

All of these are open-licensed, so you can download and copy them without any
grey area:

- **Literata** — Google's commissioned book face, designed for screens. A very
  safe default; comfortable at small sizes.
- **Bitter** — a slab serif with sturdy strokes that hold up on low-contrast
  e-ink.
- **Source Serif 4** and **Source Sans 3** — Adobe's open families, clean and
  neutral.
- **Noto Serif** — already bundled; wide language coverage and predictable.
- **Atkinson Hyperlegible** — designed for low vision; unusually easy to
  distinguish letters, if you find most faces too tight.
- **iA Writer Duospace** or a good mono like **JetBrains Mono** — only if you
  read a lot of technical text or code in EPUBs.

A note on Bookerly and Ember: those are Amazon's Kindle fonts. They are not
distributed for free, so we do not link them; some people copy them off a Kindle
they own, which is a licensing question we leave to you.

## The settings that matter more than the typeface

Changing font rarely fixes a page that feels wrong. These usually do:

- **Weight.** KOReader can render any font a notch heavier. On e-ink, a slightly
  bolder body is often more readable than a different face. Font menu, then the
  weight control.
- **Hinting and anti-aliasing.** Under the font menu's advanced options. If text
  looks fuzzy, try switching the hinting mode.
- **Gamma.** In the screen settings — it thickens or thins every glyph at once.
  A small increase makes light fonts land better on a grey panel.
- **Line spacing and margins.** More space between lines does more for comfort
  than any font swap. These are in the same reading menu.

## The short version

Add Literata, set the weight one notch up, nudge the gamma, and give the lines a
little more room. If it still is not right, then try a different face.
