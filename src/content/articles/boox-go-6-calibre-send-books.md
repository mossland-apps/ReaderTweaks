---
title: Get books onto the BOOX Go 6 with Calibre
pageSlug: send-books
device: boox-go-6
section: calibre
type: guide
order: 1
summary: Three ways to move books from Calibre to the Go 6 — USB file transfer, Calibre's wireless content server, and a microSD card. No conversion.
lastUpdated: 2026-08-31
datePublished: 2026-08-31
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-29
whatYouNeed:
  - BOOX Go 6
  - A computer with Calibre installed
  - A USB-C data cable, or Wi-Fi, or a microSD card
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the BOOX Go 6 — the options and when to use them"
    href: /devices/boox/boox-go-6/calibre/
related:
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
  - text: "Install reading apps on the BOOX Go 6"
    href: /devices/boox/boox-go-6/guides/install-reading-apps/
searchTerms:
  - calibre boox
  - mtp android file transfer
  - calibre content server
  - wireless calibre
  - copy books to boox
  - microsd books
steps:
  - instruction: Add your books to Calibre and keep them as EPUB
    detail: >-
      Drag your files into Calibre. You do not need to convert anything for the
      Go 6 — every reading app on it opens EPUB and PDF directly.
  - instruction: Method A — USB file transfer
    detail: >-
      Connect the Go 6 with the USB-C cable. On the device, tap the USB
      notification and choose "File transfer". It appears in your file manager as
      an Android device. Open its internal storage and drag your books into the
      "Books" folder (create it if missing).
    tip: >-
      On macOS you need the free "Android File Transfer" app for this; Windows and
      most Linux file managers handle it natively.
  - instruction: Method B — Calibre's wireless content server
    detail: >-
      In Calibre, click "Connect/share", then "Start Content Server". It shows an
      address like http://192.168.1.50:8080. On the Go 6, open that address in the
      browser, or add it as an "OPDS catalogue" in a reading app that supports one
      (KOReader, Moon+ Reader), and download books over Wi-Fi.
  - instruction: Method C — microSD card
    detail: >-
      Put a microSD card in the Go 6's slot. Take it out, copy books to it on a
      computer, and put it back. Every reading app can browse the card, and it
      keeps your sideloaded library separate from app data.
  - instruction: Open the books in your reading app
    detail: >-
      Point your app's library or file browser at the folder you copied to. The
      Go 6 does not have one central "my books" list the way a Kobo does — each
      app has its own.
---

Because the Go 6 is Android, there is no single "send to device" button. The
simplest routine is either dragging files into the "Books" folder over USB, or
running Calibre's wireless content server and pulling books down. A microSD card
is the tidiest option if you sideload a lot. Either way, no conversion.
