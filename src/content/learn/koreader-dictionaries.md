---
title: "Dictionaries in KOReader: offline lookups, Wikipedia and translation"
summary: "KOReader can look up any word offline against dictionaries you install, or online against Wiktionary and translators. Here is how to add StarDict dictionaries and set the lookup gesture."
category: koreader
lastUpdated: 2026-09-02
order: 14
---

Long-press a word in KOReader and a lookup panel appears. Out of the box it can
reach online sources; with a few files copied on, it works entirely offline in
whatever languages you read.

## Offline dictionaries (StarDict)

KOReader reads the **StarDict** format — a small set of files per dictionary
(`.ifo`, `.dict` or `.dict.dz`, `.idx`, sometimes `.syn`).

1. Get StarDict dictionaries. Common free sources are the **FreeDict** project
   (bilingual), **GNU Collaborative International Dictionary of English** (GCIDE,
   a full English dictionary), and Wiktionary dumps repackaged as StarDict.
2. Put each dictionary in **its own folder** inside `koreader/data/dict`. So
   `koreader/data/dict/gcide/` contains that dictionary's files,
   `koreader/data/dict/fra-eng/` the next, and so on.
3. In KOReader, open the menu, then the gear, then **Dictionary settings**, and
   confirm the dictionaries are listed and enabled. You can reorder them so your
   preferred one shows first.

Offline lookup is instant and needs no Wi-Fi, which is the main reason to set it
up.

## Online lookups

In the same dictionary settings you can enable:

- **Wikipedia** — full articles, in a chosen language, shown inside the lookup
  panel. Useful for names and places rather than word definitions.
- **Translators** — Google Translate and others, for a quick gloss of a word or
  a selected phrase.

These need Wi-Fi and are slower, so they are a supplement to offline
dictionaries, not a replacement.

## Making lookups quick

- The default is a **long-press** on a word. You can change or add to this in
  **Taps and gestures** — some people bind a corner tap or a short swipe to
  "show dictionary" so a single tap on a highlighted word opens it.
- Select a **phrase** (long-press and drag) and the same panel translates or
  defines the whole selection.
- In the lookup panel, the arrows cycle through your dictionaries without closing
  it, and there is a button to add the word to your vocabulary list if you use
  the built-in flashcard feature.

## The short version

Copy two or three StarDict dictionaries into `koreader/data/dict`, each in its
own folder, enable Wikipedia for names, and — if you look things up often — bind
a gesture to the dictionary so it is one tap, not a press-and-hold.
