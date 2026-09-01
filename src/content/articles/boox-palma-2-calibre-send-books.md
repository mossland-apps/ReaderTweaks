---
title: Get books onto the BOOX Palma 2 with Calibre
pageSlug: send-books
device: boox-palma-2
section: calibre
type: guide
order: 1
summary: Three ways to move books from Calibre to the Palma 2 — USB file transfer, Calibre's wireless content server, and a microSD card. No conversion.
lastUpdated: 2026-08-31
datePublished: 2026-08-31
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-29
whatYouNeed:
  - BOOX Palma 2
  - A computer with Calibre installed
  - A USB-C data cable, or Wi-Fi, or a microSD card
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the BOOX Palma 2 — the options and when to use them"
    href: /devices/boox/boox-palma-2/calibre/
related:
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
  - text: "Install apps on the BOOX Palma 2"
    href: /devices/boox/boox-palma-2/guides/install-reading-apps/
searchTerms:
  - calibre boox palma
  - mtp android file transfer
  - calibre content server
  - wireless calibre
  - copy books to palma
  - microsd books
steps:
  - instruction: Add your books to Calibre and keep them as EPUB
    detail: >-
      Drag your files into Calibre. You do not need to convert anything for the
      Palma 2 — every reading app on it opens EPUB and PDF directly.
  - instruction: Method A — USB file transfer
    detail: >-
      Connect the Palma 2 with the USB-C cable. On the device, tap the USB
      notification and choose "File transfer". It appears in your file manager as
      an Android device. Open its internal storage and drag your books into the
      "Books" folder (create it if missing).
    tip: >-
      On macOS you need the free "Android File Transfer" app; Windows and most
      Linux file managers handle it natively.
  - instruction: Method B — Calibre's wireless content server
    detail: >-
      In Calibre, click "Connect/share", then "Start Content Server". It shows an
      address like http://192.168.1.50:8080. On the Palma 2, open that in the
      browser, or add it as an "OPDS catalogue" in KOReader or Moon+ Reader, and
      download books over Wi-Fi. This suits a pocket device you rarely plug in.
  - instruction: Method C — microSD card
    detail: >-
      Put a microSD card in the Palma 2's slot, copy books to it on a computer,
      and put it back. Every reading app can browse the card, and it keeps your
      sideloaded library separate from app data.
  - instruction: Open the books in your reading app
    detail: >-
      Point your app's library or file browser at the folder you copied to. The
      Palma 2 does not have one central "my books" list — each app has its own.
---

Because the Palma 2 is Android, there is no single "send to device" button. For
a pocket device you rarely tether, Calibre's wireless content server is often the
nicest option — browse your whole library in a browser or reader app and pull
down what you want. USB file transfer and a microSD card also work. No
conversion either way.
