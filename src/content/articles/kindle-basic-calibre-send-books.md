---
title: Send books to the basic Kindle with Calibre
pageSlug: send-books
device: kindle-basic
section: calibre
type: guide
order: 1
summary: Add EPUB books to Calibre and copy them to the entry Kindle over USB as AZW3, with an optional step for the KFX format and one for wireless sending.
lastUpdated: 2026-08-30
datePublished: 2026-08-30
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-28
whatYouNeed:
  - Basic Kindle
  - A computer with Calibre installed
  - A USB-C data cable
  - One or more EPUB files
prerequisites:
  - text: "Calibre and the basic Kindle — formats and what to expect"
    href: /devices/kindle/kindle-basic/calibre/
related:
  - text: "Get your own EPUB books onto the basic Kindle"
    href: /devices/kindle/kindle-basic/guides/send-to-kindle/
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
searchTerms:
  - calibre kindle
  - convert epub to azw3
  - send to device kindle
  - kfx output plugin
  - kindle not showing in calibre
steps:
  - instruction: Install Calibre and add your books
    detail: >-
      Download Calibre from calibre-ebook.com and open it once. Drag your EPUB
      files into the window, or use "Add books". Calibre reads the title and
      author from each file and can fetch better covers and descriptions from
      "Edit metadata".
  - instruction: Connect the Kindle with the USB-C cable
    detail: >-
      Choose to connect when the Kindle asks. After a few seconds Calibre shows a
      "Device" button in its toolbar. If it does not appear, the cable may be
      charge-only — try a known data cable.
  - instruction: Let Calibre convert to AZW3 on send
    detail: >-
      You do not need to convert anything by hand. When you send an EPUB to a
      Kindle, Calibre automatically makes an AZW3 copy, because the entry Kindle
      does not read EPUB over USB. Your EPUB stays in the library untouched.
  - instruction: "Optional: add the KFX Output plugin"
    detail: >-
      Open Preferences, then Plugins, then "Get new plugins", and install "KFX
      Output". It needs a small helper from Amazon's Kindle Previewer, which the
      plugin will prompt you to download. After that, Calibre sends KFX instead
      of AZW3. Skip this unless you specifically want KFX features.
  - instruction: Select the books and send them to the device
    detail: >-
      Highlight the books, then click "Send to device", or right-click and choose
      "Send to device", then "Send to main memory". Calibre shows a "Jobs"
      counter in the bottom-right while it converts and copies.
    warning: >-
      Wait for the Jobs counter to reach zero before disconnecting. Then use your
      operating system's eject or "safely remove" option.
  - instruction: Find the books on the Kindle
    detail: >-
      Unplug the Kindle. Open the Library and look under "All" or "Downloaded".
      Sideloaded books are tagged as personal documents. If one is missing,
      restart the Kindle from Settings, then Device Options, then Restart.
  - instruction: "Optional: send wirelessly instead"
    detail: >-
      In Calibre, open Preferences, then "Sharing books by email", and add your
      Kindle's "@kindle.com" address and the account Calibre should send from. Add
      that sending address to your Amazon "Approved Personal Document E-mail List"
      as well. You can then right-click a book and choose "Send to device by
      email" with no cable.
---

For a Kindle, the one rule is format: send AZW3 (Calibre does this for you
automatically), not EPUB. Everything else is the same as any other reader —
Calibre keeps the master copy on your computer, and sending to the Kindle makes a
converted copy there. The KFX plugin and wireless sending are optional extras you
can add later.
