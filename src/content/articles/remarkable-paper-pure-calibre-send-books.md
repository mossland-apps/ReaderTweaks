---
title: Send documents to the reMarkable Paper Pure with Calibre
pageSlug: send-books
device: remarkable-paper-pure
section: calibre
type: guide
order: 1
summary: Use Calibre to prepare EPUBs and PDFs for the Paper Pure, then move them across with the reMarkable app or a community plugin. There is no direct Calibre driver.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Calibre
softwareVersion: "7.21"
difficulty: Moderate
estimatedTime: 20 minutes
lastTested: 2026-08-30
whatYouNeed:
  - reMarkable Paper Pure and a reMarkable account
  - A computer with Calibre and the reMarkable desktop app installed
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the reMarkable Paper Pure — what it is and is not useful for"
    href: /devices/remarkable/remarkable-paper-pure/calibre/
related:
  - text: "Get documents onto the reMarkable Paper Pure"
    href: /devices/remarkable/remarkable-paper-pure/guides/get-documents-on/
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
      is your master copy. What you send to the Paper Pure is a prepared copy.
  - instruction: Decide EPUB or PDF for each document
    detail: >-
      Try the EPUB on the device first. If it renders cleanly and you do not need
      to annotate it heavily, leave it as EPUB. If it looks wrong, or you want
      reliable markup, convert it to PDF in the next step.
  - instruction: Convert to PDF at a sensible page size
    detail: >-
      In Calibre, right-click the book, choose Convert, output format PDF. Under
      "PDF Output", set a custom page size near the reMarkable's screen — roughly
      157 by 210 mm works well — and a readable base font size. This trades
      reflow for a fixed layout that displays and annotates predictably.
  - instruction: Trim wide margins on existing PDFs
    detail: >-
      For a PDF that is mostly white margin, use Calibre's "Polish books", or a
      dedicated tool, to crop the margins so the text fills more of the 10.3-inch
      page. This makes small-print PDFs much more readable, which matters more on
      a screen with no front light to help.
  - instruction: Move the prepared file to the device
    detail: >-
      Open the reMarkable desktop app, sign in, and drag the prepared EPUB or PDF
      into it. It uploads to your account and downloads to the Paper Pure on its
      next sync. Alternatively, install the community Calibre reMarkable plugin
      and use its "send to device" action.
  - instruction: Confirm it arrived and looks right
    detail: >-
      On the Paper Pure, sync and open the document. Check the layout and, for a
      PDF, that the text is large enough to read comfortably and there is room to
      write in the margins. Adjust the conversion settings and re-send if needed.
---

Calibre cannot talk to a reMarkable directly, so its job here is preparation:
keep your EPUB library tidy, convert to a well-sized PDF when EPUB does not cut
it, and trim margins on documents you will annotate. The actual transfer happens
through the reMarkable desktop app or a community plugin.
