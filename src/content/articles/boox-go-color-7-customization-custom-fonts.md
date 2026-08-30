---
title: Add your own fonts to the BOOX Go Color 7
pageSlug: custom-fonts
device: boox-go-color-7
section: customization
type: guide
order: 1
summary: Put TrueType or OpenType fonts in the BOOX fonts folder so the stock NeoReader app can use them, and how third-party apps handle their own.
lastUpdated: 2026-08-30
datePublished: 2026-08-30
software: BOOX firmware
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-28
whatYouNeed:
  - BOOX Go Color 7
  - A computer or a way to move files onto the device
  - Font files in .ttf or .otf format
searchTerms:
  - custom fonts boox
  - neoreader fonts
  - fonts folder
  - import font
  - add font
related:
  - text: "BOOX Go Color 7 customization"
    href: /devices/boox/boox-go-color-7/customization/
  - text: "Get books onto the BOOX Go Color 7 with Calibre"
    href: /devices/boox/boox-go-color-7/calibre/send-books/
steps:
  - instruction: Gather the font files
    detail: >-
      You need files ending in ".ttf" or ".otf". Copy the whole family — regular,
      bold, italic, bold-italic — so styled text renders correctly.
  - instruction: Copy them to the BOOX fonts folder
    detail: >-
      Connect the Go Color 7 by USB in "File transfer" mode, or use a microSD
      card. In internal storage there is a "fonts" folder (create it at the root
      if it is missing). Copy your font files there.
  - instruction: Select the font in NeoReader
    detail: >-
      Open a book in the stock NeoReader app, tap the centre for the menu, open
      the font settings, and pick your font from the list — added fonts appear
      alongside the built-in ones. You can also set a default font for all books
      in NeoReader's settings.
  - instruction: For third-party reading apps, use their own import
    detail: >-
      KOReader, Moon+ Reader and similar apps keep their own font folders and
      settings. In KOReader, put fonts in "koreader/fonts" (or use its font
      import), then choose them from the reading menu. Each app is separate — a
      font added for NeoReader is not automatically available in KOReader.
  - instruction: Restart the app if a font does not appear
    detail: >-
      If a newly added font is missing from the list, fully close the reading app
      from the recent-apps view and reopen it so it re-scans the folder.
---

Fonts on the Go Color 7 work at two levels: the BOOX "fonts" folder feeds the
stock NeoReader app, and each third-party reading app has its own font folder and
picker. There is no single system-wide font list for reading, so if you use more
than one app you may need to add the font in each. File naming does not matter
the way it does on a Kobo — the apps read the family from inside the file.
