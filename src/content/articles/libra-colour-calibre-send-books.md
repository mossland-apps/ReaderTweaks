---
title: Send books to the Kobo Libra Colour with Calibre
pageSlug: send-books
device: libra-colour
section: calibre
type: guide
order: 1
summary: Add EPUB books to Calibre and copy them to the Libra Colour over USB, with an optional step for sending them as Kobo's KEPUB format.
lastUpdated: 2026-08-24
datePublished: 2026-08-24
software: Calibre
softwareVersion: "7.21"
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-22
whatYouNeed:
  - Kobo Libra Colour
  - A computer with Calibre installed
  - A USB-C cable that carries data
  - One or more EPUB files
prerequisites:
  - text: "Calibre and the Kobo Libra Colour — formats and what to expect"
    href: /devices/kobo/libra-colour/calibre/
related:
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
  - text: "Install KOReader on the Kobo Libra Colour"
    href: /devices/kobo/libra-colour/koreader/install/
steps:
  - instruction: Install Calibre on your computer if you have not already
    detail: >-
      Calibre is free and runs on Windows, macOS and Linux. Download it from
      calibre-ebook.com and open it once so it creates its library folder.
  - instruction: Add your books to Calibre
    detail: >-
      Drag your EPUB files into the Calibre window, or use "Add books". Calibre
      reads the title and author from each file and can download covers and
      descriptions if you right-click and choose "Edit metadata". The files now
      live in Calibre's library folder on your computer, separate from whatever
      you send to the device.
  - instruction: Connect the Libra Colour with the USB-C cable
    detail: >-
      On the Kobo, choose "Connect" when it asks. After a few seconds Calibre
      recognises the device and a "Device" button appears in its toolbar. If it
      does not appear, the cable may be charge-only — try a different one.
  - instruction: "Optional: set Calibre to send books as KEPUB"
    detail: >-
      KEPUB is Kobo's version of EPUB, with better page numbers and reading
      statistics on Kobo hardware. To turn it on, open Preferences, then Plugins,
      expand "Device Interface plugins", double-click "KoboTouch", and enable the
      option to convert EPUB to KEPUB when sending. Plain EPUB works without this
      step; skip it if you are unsure.
    tip: >-
      This setting only changes what gets copied to the device. Your library
      copies stay as EPUB.
  - instruction: Select the books and send them to the device
    detail: >-
      Highlight one or more books in the list, then click "Send to device" (or
      right-click and choose "Send to device", then "Send to main memory").
      Calibre copies them across and shows a small "Jobs" counter in the
      bottom-right corner while it works. Wait for that to finish.
    warning: >-
      Do not unplug while the Jobs counter is still running. Use your operating
      system's eject or "safely remove" option once it reaches zero.
  - instruction: Find the books on the Libra Colour
    detail: >-
      Unplug the device. On the Kobo home screen, open "My Books". Sideloaded
      books appear alongside anything from the Kobo store, sorted by the most
      recent by default.
    tip: >-
      A book missing from the list usually shows up after you unplug and replug
      once, or restart the Libra Colour from Settings, then Device information.
---

This is the direct way to get your own EPUB books onto the Libra Colour. Calibre
keeps the master copy of each book in its library on your computer; sending to
the device makes a copy there. Deleting a book from the Kobo later does not
remove it from Calibre.
