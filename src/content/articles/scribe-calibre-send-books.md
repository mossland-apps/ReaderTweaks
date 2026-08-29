---
title: Send books to the Kindle Scribe with Calibre
pageSlug: send-books
device: scribe
section: calibre
type: guide
order: 1
summary: Add books to Calibre and copy them to the Scribe over USB — EPUB converts to AZW3 automatically, PDFs go across untouched.
lastUpdated: 2026-08-29
datePublished: 2026-08-29
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-27
whatYouNeed:
  - Kindle Scribe
  - A computer with Calibre installed
  - A USB-C data cable
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the Kindle Scribe — formats and PDF handling"
    href: /devices/kindle/scribe/calibre/
related:
  - text: "Get your own books and PDFs onto the Kindle Scribe"
    href: /devices/kindle/scribe/guides/get-books-and-pdfs/
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
searchTerms:
  - calibre scribe
  - convert epub to azw3
  - send pdf to scribe
  - kfx output plugin
  - scribe not showing in calibre
steps:
  - instruction: Install Calibre and add your books
    detail: >-
      Download Calibre from calibre-ebook.com and open it once. Drag your EPUB
      and PDF files into the window, or use "Add books".
  - instruction: Connect the Scribe with the USB-C cable
    detail: >-
      Choose to connect when the Scribe asks. Calibre shows a "Device" button in
      its toolbar after a few seconds. If it does not appear, the cable may be
      charge-only — try a known data cable.
  - instruction: Let Calibre convert EPUB to AZW3, leave PDFs alone
    detail: >-
      For EPUB, do nothing special — Calibre makes an AZW3 copy on send because
      the Scribe does not read EPUB over USB. For PDF, make sure Calibre is set
      to send it as PDF, not convert it; converting a PDF for Kindle almost
      always makes it harder to read.
  - instruction: Select the files and send them to the device
    detail: >-
      Highlight the books, then click "Send to device", or right-click and
      choose "Send to device", then "Send to main memory". Wait for the "Jobs"
      counter in the bottom-right to reach zero.
    warning: >-
      Do not unplug while Jobs is still running. Use your operating system's
      eject or "safely remove" option first.
  - instruction: Find the files on the Scribe
    detail: >-
      Unplug the device. Open the Library and set the filter to "All". Sideloaded
      books and PDFs are tagged as personal documents. Restart the Scribe from
      Settings, then Device Options, then Restart, if something is missing.
  - instruction: "Optional: add the KFX Output plugin or wireless sending"
    detail: >-
      For KFX, open Preferences, then Plugins, then "Get new plugins", and
      install "KFX Output"; it will prompt for a helper from Amazon's Kindle
      Previewer. For wireless sending, set up "Sharing books by email" in
      Preferences with the Scribe's "@kindle.com" address and add your sending
      address to Amazon's approved list.
---

The rule for the Scribe is the same as any Kindle for EPUB — send AZW3, which
Calibre does for you — with one addition: send PDFs as PDF. The Scribe's screen
is large enough that a normal PDF page reads well untouched, and converting it
only loses the layout.
