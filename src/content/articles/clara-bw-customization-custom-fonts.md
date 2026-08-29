---
title: Add your own fonts to the Kobo Clara BW
pageSlug: custom-fonts
device: clara-bw
section: customization
type: guide
order: 1
summary: Copy TrueType or OpenType fonts to a folder on the Clara BW and select them from the reading menu. No extra software needed.
lastUpdated: 2026-08-27
datePublished: 2026-08-27
software: Kobo firmware
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-25
whatYouNeed:
  - Kobo Clara BW
  - A computer
  - A USB-C data cable
  - One or more font files in .ttf or .otf format
searchTerms:
  - custom fonts
  - add fonts
  - install fonts
  - fonts folder
  - Bookerly
  - Literata
related:
  - text: "Kobo Clara BW customization"
    href: /devices/kobo/clara-bw/customization/
  - text: "What is KOReader, and should you install it?"
    href: /guides/what-is-koreader/
steps:
  - instruction: Gather the font files
    detail: >-
      You need the actual font files, ending in ".ttf" (TrueType) or ".otf"
      (OpenType). A single font family often comes as four files — regular, bold,
      italic and bold-italic. Copy all four so the reader can show bold and
      italic text correctly.
    tip: >-
      Give the four files matching names, such as "Literata-Regular",
      "Literata-Bold", "Literata-Italic" and "Literata-BoldItalic". Kobo groups a
      family by the part of the name before the first dash.
  - instruction: Connect the Clara BW to your computer
    detail: >-
      Use the USB-C cable and choose "Connect" on the device. It appears as a
      drive named KOBOeReader.
  - instruction: Create a folder named "fonts" at the top level of the drive
    detail: >-
      Open the KOBOeReader drive and make a new folder called exactly "fonts" in
      the root, next to the folders that are already there. The name must be
      lower-case and spelled that way.
    warning: >-
      Put the "fonts" folder at the top level of the drive, not inside another
      folder. Kobo only looks for it in the root.
  - instruction: Copy the font files into the fonts folder
    detail: >-
      Drag the .ttf or .otf files into the "fonts" folder. You can make
      sub-folders per family if you like; Kobo reads them too.
  - instruction: Eject the drive and unplug
    detail: >-
      Use your computer's eject or "safely remove" option, then disconnect the
      cable. The Clara BW rebuilds its font list, which takes a few seconds.
  - instruction: Select the font while reading
    detail: >-
      Open any book, tap the top centre of the screen for the reading menu, and
      open the font settings (the "Aa" icon). Your added fonts appear in the same
      list as the built-in ones, usually at the bottom. On a 6-inch screen it is
      worth trying the font weight and sharpness sliders as well.
    tip: >-
      If a font is missing from the list, its file name may not match the
      family-name pattern, or the file may be a web font format such as .woff,
      which Kobo does not read. Convert it to .ttf or .otf first.
---

Kobo has supported user fonts for years, and the Clara BW is no exception. The
whole process is copying files into a folder called "fonts" on the device. The
one detail worth getting right is the file naming: Kobo builds a family from
files whose names share everything before the first dash, so consistent naming
is what makes bold and italic work. On the small screen, picking a font that is
a little narrower than the defaults can be the difference between four and five
words per line.
