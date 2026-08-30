---
title: Send documents to the reMarkable Paper Pro with Calibre
pageSlug: send-books
device: remarkable-paper-pro
section: calibre
type: guide
order: 1
summary: Use Calibre to prepare EPUBs and PDFs for the Paper Pro, then move them across with the reMarkable app or a community plugin. There is no direct Calibre driver.
lastUpdated: 2026-08-30
datePublished: 2026-08-30
software: Calibre
softwareVersion: "7.21"
difficulty: Moderate
estimatedTime: 20 minutes
lastTested: 2026-08-28
whatYouNeed:
  - reMarkable Paper Pro and a reMarkable account
  - A computer with Calibre and the reMarkable desktop app installed
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the reMarkable Paper Pro — what it is and is not useful for"
    href: /devices/remarkable/remarkable-paper-pro/calibre/
related:
  - text: "Get documents onto the reMarkable Paper Pro"
    href: /devices/remarkable/remarkable-paper-pro/guides/get-documents-on/
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
searchTerms:
  - calibre remarkable
  - convert epub to pdf
  - remarkable plugin
  - send to remarkable
  - trim pdf margins
  - page size a4
steps:
  - instruction: Add your books to Calibre and keep the originals as EPUB
    detail: >-
      Drag your files into Calibre. Keep every book as EPUB in the library — that
      is your master copy. What you send to the reMarkable is a prepared copy.
  - instruction: Decide EPUB or PDF for each document
    detail: >-
      Try the EPUB on the device first. If it renders cleanly and you do not need
      to annotate it heavily, leave it as EPUB. If it looks wrong, or you want
      reliable markup, convert it to PDF in the next step.
  - instruction: Convert to PDF at a sensible page size
    detail: >-
      In Calibre, right-click the book, choose Convert, output format PDF. Under
      "PDF Output", set a custom page size near the reMarkable's screen — roughly
      157 by 210 mm works well — and a readable base font size. This trades reflow
      for a fixed layout that displays and annotates predictably.
  - instruction: Trim wide margins on existing PDFs
    detail: >-
      For a PDF that is mostly white margin, use Calibre's "Polish books", or a
      dedicated tool, to crop the margins so the text fills more of the
      11.8-inch page. This makes small-print PDFs much more readable.
  - instruction: Move the prepared file to the device
    detail: >-
      Open the reMarkable desktop app, sign in, and drag the prepared EPUB or PDF
      into it. It uploads to your account and downloads to the Paper Pro on its
      next sync. Alternatively, install the community Calibre reMarkable plugin
      and use its "send to device" action.
  - instruction: Confirm it arrived and looks right
    detail: >-
      On the Paper Pro, sync and open the document. Check the layout and, for a
      PDF, that the text is large enough to read and there is room to write in
      the margins. Adjust the conversion settings and re-send if needed.
---

Calibre cannot talk to a reMarkable directly, so its job here is preparation:
keep your EPUB library tidy, convert to a well-sized PDF when EPUB does not cut
it, and trim margins on documents you will annotate. The actual transfer happens
through the reMarkable desktop app or a community plugin.
