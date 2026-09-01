---
title: Send books to the PocketBook Era with Calibre
pageSlug: send-books
device: pocketbook-era
section: calibre
type: guide
order: 1
summary: Add EPUB books to Calibre and copy them to the Era over USB. No conversion is needed, and wireless sending is available through the email plugin.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-30
whatYouNeed:
  - PocketBook Era
  - A computer with Calibre installed
  - A USB-C data cable
  - Your EPUB (or other) book files
prerequisites:
  - text: "Calibre and the PocketBook Era — formats and when it helps"
    href: /devices/pocketbook/pocketbook-era/calibre/
related:
  - text: "Get books onto the PocketBook Era"
    href: /devices/pocketbook/pocketbook-era/guides/get-books-on/
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
  - instruction: Connect the Era with the USB-C cable
    detail: >-
      Accept the connection prompt on the device. After a few seconds Calibre
      recognises it and shows a "Device" button in the toolbar. If it does not
      appear, the cable may be charge-only — try a known data cable.
  - instruction: Send EPUB straight across — no conversion
    detail: >-
      The Era reads EPUB directly, so leave Calibre's conversion settings alone.
      Only convert if you have a format even the Era cannot open, which is rare;
      in that case convert to EPUB.
  - instruction: Select the books and send them to the device
    detail: >-
      Highlight the books, then click "Send to device", or right-click and
      choose "Send to device", then "Send to main memory". Calibre shows a
      "Jobs" counter in the bottom-right while it copies.
    warning: >-
      Wait for the Jobs counter to reach zero, then use your operating system's
      eject or "safely remove" option before unplugging.
  - instruction: Find the books on the Era
    detail: >-
      Unplug the device. The new books appear in the Library, usually under
      "Recent" first. If one is missing, connect and disconnect once more, or
      restart the Era from the power menu.
  - instruction: "Optional: send wirelessly by email"
    detail: >-
      In Calibre, open Preferences, then "Sharing books by email", and add the
      Era's Send-to-PocketBook address and the account Calibre should send from.
      You can then right-click a book and choose "Send to device by email", then
      sync the "Send-to-PocketBook" folder on the reader.
---

On a device this open, Calibre is a convenience rather than a necessity. Use it
if you want a proper catalogue on your computer and clean metadata; skip it and
copy files directly if you just want a book on the reader. Either way, EPUB goes
across without conversion — the format headaches of Kindle and Kobo do not apply
here.
