---
title: Send documents to the reMarkable 2 with Calibre
pageSlug: send-books
device: remarkable-2
section: calibre
type: guide
order: 1
summary: Use Calibre to prepare EPUBs and PDFs for the reMarkable 2, then move them across with the reMarkable app, the local USB interface, or a community plugin. There is no direct Calibre driver.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Calibre
softwareVersion: "7.21"
difficulty: Moderate
estimatedTime: 20 minutes
lastTested: 2026-08-30
whatYouNeed:
  - reMarkable 2 and a reMarkable account
  - A computer with Calibre and the reMarkable desktop app installed
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the reMarkable 2 — what it is and is not useful for"
    href: /devices/remarkable/remarkable-2/calibre/
related:
  - text: "Get documents onto the reMarkable 2"
    href: /devices/remarkable/remarkable-2/guides/get-documents-on/
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
searchTerms:
  - calibre remarkable
  - convert epub to pdf
  - remarkable plugin
  - send to remarkable
  - usb web interface
  - trim pdf margins
steps:
  - instruction: Add your books to Calibre and keep the originals as EPUB
    detail: >-
      Drag your files into Calibre. Keep every book as EPUB in the library — that
      is your master copy. What you send to the reMarkable 2 is a prepared copy.
  - instruction: Decide EPUB or PDF for each document
    detail: >-
      Try the EPUB on the device first. If it renders cleanly and you do not need
      to annotate it heavily, leave it as EPUB. If it looks wrong, or you want
      reliable markup, convert it to PDF in the next step. If you have installed
      KOReader, EPUB is fine as-is.
  - instruction: Convert to PDF at a sensible page size
    detail: >-
      In Calibre, right-click the book, choose Convert, output format PDF. Under
      "PDF Output", set a custom page size near the reMarkable's screen — roughly
      157 by 210 mm works well — and a readable base font size. This trades
      reflow for a fixed layout that displays and annotates predictably.
  - instruction: Trim wide margins on existing PDFs
    detail: >-
      For a PDF that is mostly white margin, use Calibre's "Polish books", or a
      dedicated tool, to crop the margins so the text fills more of the page.
      This helps a lot on a screen with no front light to lift faint text.
  - instruction: Move the prepared file to the device
    detail: >-
      Easiest: open the reMarkable desktop app, sign in, and drag the file in; it
      syncs on the next connection. Offline alternative: enable the USB web
      interface in Settings, connect USB, open 10.11.99.1 in a browser,
      and drop the file there. Or use the community Calibre reMarkable plugin's
      "send to device" action.
  - instruction: Confirm it arrived and looks right
    detail: >-
      On the reMarkable 2, open the document. Check the layout and, for a PDF,
      that the text is large enough and there is room to write in the margins.
      Adjust the conversion settings and re-send if needed.
---

Calibre cannot talk to a reMarkable directly, so its job here is preparation:
keep your EPUB library tidy, convert to a well-sized PDF when EPUB does not cut
it, and trim margins on documents you will annotate. The transfer itself happens
through the reMarkable desktop app, the offline USB web interface at
10.11.99.1, or a community plugin.
