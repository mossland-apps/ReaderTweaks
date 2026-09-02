---
title: Send documents to the reMarkable Paper Pro Move with Calibre
pageSlug: send-books
device: remarkable-paper-pro-move
section: calibre
type: guide
order: 1
summary: Use Calibre to prepare EPUBs and PDFs for the Move's small screen, then move them across with the reMarkable app or a community plugin. There is no direct Calibre driver.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Calibre
softwareVersion: "7.21"
difficulty: Moderate
estimatedTime: 20 minutes
lastTested: 2026-08-30
whatYouNeed:
  - reMarkable Paper Pro Move and a reMarkable account
  - A computer with Calibre and the reMarkable desktop app installed
  - Your EPUB and PDF files
prerequisites:
  - text: "Calibre and the reMarkable Paper Pro Move — what it is and is not useful for"
    href: /devices/remarkable/remarkable-paper-pro-move/calibre/
related:
  - text: "Get documents onto the reMarkable Paper Pro Move"
    href: /devices/remarkable/remarkable-paper-pro-move/guides/get-documents-on/
  - text: "Calibre basics: managing your own ebook library"
    href: /guides/calibre-basics/
searchTerms:
  - calibre remarkable
  - convert epub to pdf
  - remarkable plugin
  - send to remarkable
  - trim pdf margins
  - small page size
steps:
  - instruction: Add your books to Calibre and keep the originals as EPUB
    detail: >-
      Drag your files into Calibre. Keep every book as EPUB in the library — that
      is your master copy. What you send to the Move is a prepared copy.
  - instruction: Decide EPUB or PDF for each document
    detail: >-
      Try the EPUB on the device first. If it renders cleanly and you do not need
      to annotate it heavily, leave it as EPUB. If it looks wrong, or you want
      reliable markup, convert it to PDF in the next step.
  - instruction: Convert to PDF at a small page size
    detail: >-
      In Calibre, right-click the book, choose Convert, output format PDF. Under
      "PDF Output", set a custom page size close to the Move's screen — roughly
      98 by 174 mm — and a readable base font size. On a 7.3-inch screen this
      makes a real difference between comfortable and squinting.
  - instruction: Trim wide margins on existing PDFs
    detail: >-
      For a PDF that is mostly white margin, use Calibre's "Polish books", or a
      dedicated tool, to crop the margins so the text fills more of the page.
      Small-print PDFs are close to unreadable on the Move without this.
  - instruction: Move the prepared file to the device
    detail: >-
      Open the reMarkable desktop app, sign in, and drag the prepared EPUB or PDF
      into it. It uploads to your account and downloads to the Move on its next
      sync. Alternatively, install the community Calibre reMarkable plugin and
      use its "send to device" action.
  - instruction: Confirm it arrived and looks right
    detail: >-
      On the Move, sync and open the document. Check the text is large enough to
      read one-handed and there is room to write in the margins. Adjust the
      conversion settings and re-send if needed.
---

Calibre cannot talk to a reMarkable directly, so its job here is preparation —
and on the Move that preparation is more important than on the bigger models.
Keep your EPUB library tidy, convert to a small, well-sized PDF when EPUB does
not cut it, and trim margins on anything you will annotate. The actual transfer
happens through the reMarkable desktop app or a community plugin.
