---
title: Add your own fonts to the PocketBook Verse
pageSlug: custom-fonts
device: pocketbook-verse
section: customization
type: guide
order: 1
summary: Copy TrueType or OpenType fonts to a folder on the Verse and select them from the reading menu. No extra software needed.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: PocketBook firmware
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-30
whatYouNeed:
  - PocketBook Verse
  - A computer
  - A USB-C data cable
  - Font files in .ttf or .otf format
searchTerms:
  - custom fonts
  - add fonts pocketbook
  - fonts folder
  - install font
  - system fonts
related:
  - text: "PocketBook Verse customization"
    href: /devices/pocketbook/pocketbook-verse/customization/
  - text: "Remap the page-turn buttons on the PocketBook Verse"
    href: /devices/pocketbook/pocketbook-verse/customization/key-mapping/
steps:
  - instruction: Gather the font files
    detail: >-
      You need files ending in ".ttf" or ".otf". A family usually comes as four —
      regular, bold, italic and bold-italic. Copy all four so books that use bold
      and italic display correctly.
  - instruction: Connect the Verse to your computer
    detail: >-
      Use the USB-C cable and accept the connection prompt. The Verse appears as
      a drive.
  - instruction: Open or create the "fonts" folder
    detail: >-
      At the top level of the drive there may already be a "fonts" folder. If
      not, create one, spelled exactly that way in lower case, next to the
      "Books" and "system" folders.
    warning: >-
      Put "fonts" at the drive root, not inside another folder.
  - instruction: Copy your font files into it
    detail: >-
      Drag the .ttf or .otf files in. Sub-folders per family are fine; the device
      looks inside them. A microSD card has its own "fonts" folder that also
      works.
  - instruction: Eject the drive and unplug
    detail: >-
      Use your computer's eject or "safely remove" option, then disconnect. The
      Verse rebuilds its font list.
  - instruction: Select the font while reading
    detail: >-
      Open a book, tap the top centre for the reading menu, and open the font
      settings. Your added fonts appear in the list with the built-in ones.
      PocketBook also lets you set a default font for all books in Settings,
      under "Personalize".
    tip: >-
      If a font is missing, its file may be a web format such as .woff, which the
      Verse does not read. Convert it to .ttf or .otf first.
---

Adding fonts to a PocketBook is a plain copy into a "fonts" folder. Unlike Kobo,
you do not need to follow a strict file-naming pattern — PocketBook reads the
family and style from inside each font file. You can also set one of your added
fonts as the default for every book under Personalize, which Kobo and Kindle do
not offer.
