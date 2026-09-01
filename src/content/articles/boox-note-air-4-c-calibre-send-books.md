---
title: Get books and PDFs onto the BOOX Note Air 4 C with Calibre
pageSlug: send-books
device: boox-note-air-4-c
section: calibre
type: guide
order: 1
summary: Three ways to move books and PDFs from Calibre to the Note Air 4 C — USB file transfer, Calibre's wireless content server, and a microSD card. No conversion.
lastUpdated: 2026-08-31
datePublished: 2026-08-31
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-29
whatYouNeed:
  - BOOX Note Air 4 C
  - A computer with Calibre installed
  - A USB-C data cable, or Wi-Fi, or a microSD card
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the BOOX Note Air 4 C — the options and when to use them"
    href: /devices/boox/boox-note-air-4-c/calibre/
related:
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
  - text: "Notes and PDF markup on the BOOX Note Air 4 C"
    href: /devices/boox/boox-note-air-4-c/guides/notes-and-markup/
searchTerms:
  - calibre boox note air
  - mtp android file transfer
  - calibre content server
  - wireless calibre
  - copy pdf to boox
  - microsd books
steps:
  - instruction: Add your books and PDFs to Calibre and keep them as EPUB or PDF
    detail: >-
      Drag your files into Calibre. You do not need to convert anything for the
      Note Air 4 C — every reading app on it opens EPUB and PDF directly. Keep
      PDFs as PDF so the page layout you want to mark up is preserved.
  - instruction: Method A — USB file transfer
    detail: >-
      Connect the device with the USB-C cable. On the device, tap the USB
      notification and choose "File transfer". It appears in your file manager as
      an Android device. Open its internal storage and drag your files into the
      "Books" folder (create it if missing). Keep PDFs you will annotate in a
      folder of their own so they are easy to find.
    tip: >-
      On macOS you need the free "Android File Transfer" app; Windows and most
      Linux file managers handle it natively.
  - instruction: Method B — Calibre's wireless content server
    detail: >-
      In Calibre, click "Connect/share", then "Start Content Server". It shows an
      address like http://192.168.1.50:8080. On the device, open that in the
      browser, or add it as an "OPDS catalogue" in KOReader or Moon+ Reader, and
      download books over Wi-Fi.
  - instruction: Method C — microSD card
    detail: >-
      Put a microSD card in the slot, copy files to it on a computer, and put it
      back. Every reading app can browse the card, and it keeps your sideloaded
      library separate from app data.
  - instruction: Open the files in your reading app
    detail: >-
      Point NeoReader, KOReader or whichever app you use at the folder you copied
      to. The Note Air 4 C does not have one central "my books" list — each app
      has its own. Pen markup you add in NeoReader is saved back alongside the
      PDF.
---

Because the Note Air 4 C is Android, there is no single "send to device" button.
Drag files into the "Books" folder over USB, run Calibre's wireless content
server, or use a microSD card. Keep PDFs as PDF so the layout survives for
markup. No conversion either way — EPUB and PDF work as they are.
