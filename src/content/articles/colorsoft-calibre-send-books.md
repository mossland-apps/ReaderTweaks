---
title: Send books to the Kindle Colorsoft with Calibre
pageSlug: send-books
device: colorsoft
section: calibre
type: guide
order: 1
summary: Add EPUB books to Calibre and copy them to the Colorsoft over USB as AZW3, keep colour pictures in colour, and optionally send wirelessly.
lastUpdated: 2026-11-22
datePublished: 2026-11-22
software: Calibre
difficulty: Easy
estimatedTime: 15 minutes
whatYouNeed:
  - Kindle Colorsoft
  - A computer with Calibre installed
  - A USB-C data cable
  - One or more EPUB files
searchTerms:
  - calibre kindle
  - calibre colorsoft
  - convert epub to azw3
  - send to device kindle
  - kfx output plugin
  - calibre wireless kindle
  - kindle not showing in calibre
related:
  - text: "Get your own books onto the Kindle Colorsoft"
    href: /devices/kindle/colorsoft/guides/send-to-kindle/
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
steps:
  - instruction: Install Calibre and add your books
    detail: >-
      Download Calibre from calibre-ebook.com and open it once. Drag your EPUB
      files into the window, or use "Add books". Calibre reads the title and
      author from each file and can fetch better covers and descriptions from
      "Edit metadata".
  - instruction: Connect the Colorsoft with the USB-C cable
    detail: >-
      After a few seconds Calibre shows a "Device" button in its toolbar. If it
      does not appear, the cable may be charge-only — try a known data cable.
  - instruction: Let Calibre convert to AZW3 on send
    detail: >-
      You do not need to convert anything by hand. When you send an EPUB to a
      Kindle, Calibre automatically makes an AZW3 copy, because the Colorsoft
      does not read EPUB files over USB. Your EPUB stays in the library
      untouched.
  - instruction: Keep pictures in colour
    detail: >-
      For ordinary EPUB books, Calibre leaves colour pictures alone and they
      arrive in colour. Comic files are different: when Calibre converts a CBZ
      or CBR comic it turns the pages grey by default. Before converting a
      comic, open "Convert books", then "Comic input", and tick "Disable
      conversion of images to grayscale".
  - instruction: Select the books and send them to the device
    detail: >-
      Highlight the books, then click "Send to device", or right-click and
      choose "Send to device", then "Send to main memory". Calibre shows a
      "Jobs" counter in the bottom-right while it converts and copies.
    warning: >-
      Wait for the Jobs counter to reach zero before disconnecting. Then use your
      operating system's eject or "safely remove" option.
  - instruction: Find the books on the Colorsoft
    detail: >-
      Unplug the Kindle. Open the Library and look under "All" or "Downloaded".
      Sideloaded books are tagged as personal documents. If one is missing,
      restart the Kindle from Settings, then Device Options, then Restart.
  - instruction: "Optional: send wirelessly instead"
    detail: >-
      In Calibre, open Preferences, then "Sharing books by email", and add your
      Kindle's "@kindle.com" address and the email account Calibre should send
      from. Add that sending address to your Amazon "Approved Personal Document
      E-mail List" as well. You can then right-click a book and choose "Send to
      device by email" with no cable.
---

For a Kindle, the one rule is format: send AZW3 (Calibre does this for you
automatically), not EPUB. On the Colorsoft the only extra point is colour.
Illustrated EPUB books arrive in colour as they are, but comics converted in
Calibre come out grey unless you switch off its greyscale setting first.
