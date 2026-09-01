---
title: Send books to the PocketBook InkPad 4 with Calibre
pageSlug: send-books
device: pocketbook-inkpad-4
section: calibre
type: guide
order: 1
summary: Add EPUB books to Calibre and copy them to the InkPad 4 over USB. No conversion is needed, and wireless sending is available through the email plugin.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-30
whatYouNeed:
  - PocketBook InkPad 4
  - A computer with Calibre installed
  - A USB-C data cable
  - Your EPUB (or other) book files
prerequisites:
  - text: "Calibre and the PocketBook InkPad 4 — formats and when it helps"
    href: /devices/pocketbook/pocketbook-inkpad-4/calibre/
related:
  - text: "Get books onto the PocketBook InkPad 4"
    href: /devices/pocketbook/pocketbook-inkpad-4/guides/get-books-on/
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
searchTerms:
  - calibre pocketbook
  - send epub pocketbook
  - pocketbook not showing in calibre
  - calibre email pocketbook
  - convert for pocketbook
steps:
  - instruction: Install Calibre and add your books
    detail: >-
      Download Calibre from calibre-ebook.com and open it once. Drag your book
      files into the window, or use "Add books". Calibre reads the title and
      author from each file and can fetch covers and descriptions from "Edit
      metadata".
  - instruction: Connect the InkPad 4 with the USB-C cable
    detail: >-
      Accept the connection prompt on the device. After a few seconds Calibre
      recognises it and shows a "Device" button in the toolbar. If it does not
      appear, the cable may be charge-only — try a known data cable.
  - instruction: Send EPUB straight across — no conversion
    detail: >-
      The InkPad 4 reads EPUB directly, so leave Calibre's conversion settings
      alone. Only convert if you have a format even the InkPad 4 cannot open,
      which is rare; in that case convert to EPUB. Never convert a PDF or comic
      archive — send it as-is.
  - instruction: Select the books and send them to the device
    detail: >-
      Highlight the books, then click "Send to device", or right-click and
      choose "Send to device", then "Send to main memory". Calibre shows a
      "Jobs" counter in the bottom-right while it copies. Large PDF and CBZ files
      take a moment.
    warning: >-
      Wait for the Jobs counter to reach zero, then use your operating system's
      eject or "safely remove" option before unplugging.
  - instruction: Find the books on the InkPad 4
    detail: >-
      Unplug the device. The new books appear in the Library, usually under
      "Recent" first. If one is missing, connect and disconnect once more, or
      restart the InkPad 4 from the power menu.
  - instruction: "Optional: send wirelessly by email"
    detail: >-
      In Calibre, open Preferences, then "Sharing books by email", and add the
      InkPad 4's Send-to-PocketBook address and the account Calibre should send
      from. This suits ordinary ebooks; large scanned PDFs are better sent over
      USB.
---

On a device this open, Calibre is a convenience rather than a necessity. Use it
for a tidy catalogue and clean metadata on your ebooks; copy PDFs and comic
archives on directly so their layout survives. Either way, EPUB goes across
without conversion.
