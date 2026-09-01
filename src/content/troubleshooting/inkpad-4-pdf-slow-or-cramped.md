---
title: PDFs are slow or cramped on the PocketBook InkPad 4
pageSlug: pdf-slow-or-cramped
device: pocketbook-inkpad-4
software: PocketBook firmware
summary: >-
  A PDF turns pages slowly, the text is tiny with big white borders, or it will
  not remember your zoom. This is almost always settings, not the device.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-30
lastUpdated: 2026-09-01
searchTerms:
  - pdf slow
  - pdf laggy
  - pdf tiny text
  - pdf margins
  - crop pdf
  - zoom not saved
  - pdf ghosting
  - two column pdf
  - scanned book unreadable
symptoms:
  - Turning a page in a PDF takes two or three seconds.
  - The page has huge white margins and small text.
  - Zoom and pan reset every time you turn the page.
  - A two-column paper is unreadable at full-page zoom.
  - Heavy ghosting builds up over a few PDF pages.
beforeYouStart:
  - Note whether it is one PDF or every PDF — one bad file behaves differently from a settings problem.
  - Know roughly the file size; a 200 MB scan is inherently slower than a 3 MB text PDF.
  - None of these steps change the file itself.
mostCommonCause: >-
  The stock PDF reader opens a document at full-page zoom with no crop, which
  wastes the screen on white margins and forces slow full-page redraws. Setting a
  crop, a locked zoom and a suitable view mode fixes the size and most of the
  speed. Genuinely heavy scanned files are always slower and are the case for
  KOReader.
decisionTree:
  question: What is the main problem?
  branches:
    - label: Text is tiny with wide white borders
      hint: Crop the margins
      href: "#fix-1"
    - label: Zoom or position resets every page
      hint: Set and lock a view mode
      href: "#fix-1"
    - label: Page turns are slow on every PDF
      hint: Reduce redraw load and refresh settings
      href: "#fix-2"
    - label: Only one huge or scanned PDF is slow
      hint: Use KOReader or a lighter copy
      href: "#fix-3"
fixes:
  - title: Crop the margins and lock a view
    rationale: >-
      Most of the wasted space and re-zooming comes from opening the PDF
      full-page with no crop and no locked zoom.
    steps:
      - >-
        Open the PDF, tap the top centre, and choose "Crop". Use the automatic
        crop or drag the guides to trim the white border. This alone enlarges the
        text noticeably.
      - >-
        Set a comfortable zoom, then choose a "Columns" or locked-zoom mode so
        the setting sticks and the buttons walk down the page, then to the next.
      - >-
        For a two-column academic PDF, the "Columns" mode reads the left column
        top-to-bottom, then the right — set it once per document.
      - Use the "Contrast" control to darken a faint scan.
  - title: Speed up page turns on all PDFs
    rationale: >-
      Every PDF page is an image the device has to render and push to the e-ink
      panel. A few settings cut that work.
    steps:
      - >-
        In the PDF menu, turn off any "smooth" or high-quality rendering option
        while you are just reading; turn it back on only when you need fine
        detail.
      - >-
        Set the page-refresh interval so the screen does a full flash every few
        pages rather than every page — fewer full flashes means faster turns,
        with a little more ghosting between them.
      - Keep the device's storage from filling up; a nearly-full device is slower at everything.
      - Restart the InkPad 4 if it has been on for days — a fresh start clears a slow-drift.
  - title: Use KOReader for heavy or scanned PDFs
    rationale: >-
      KOReader's PDF engine is faster with large scans, remembers per-document
      crop and zoom, and reflows text PDFs more cleanly than the stock reader.
    steps:
      - >-
        Install KOReader from the KOReader section — it is one file in the
        "applications" folder, no jailbreak.
      - >-
        Open the problem PDF in KOReader, set the crop and zoom once; it stores
        them with that document.
      - >-
        For a born-digital text PDF that is still awkward, try KOReader's reflow,
        which handles paragraphs and hyphenation better.
      - >-
        If even KOReader struggles, the file itself is the limit — re-export or
        re-scan it at a lower resolution, or split it into parts.
recovery: >-
  Everything here is a view setting or a second reading app; the PDF files are
  untouched. Crop, zoom and mode are saved per document, so a change to one PDF
  does not affect the others.
related:
  - text: "Read PDFs and documents on the PocketBook InkPad 4"
    href: /devices/pocketbook/pocketbook-inkpad-4/guides/pdfs-and-documents/
  - text: "KOReader on the PocketBook InkPad 4"
    href: /devices/pocketbook/pocketbook-inkpad-4/koreader/
---

Almost every PDF complaint on the InkPad 4 is fixed by cropping the margins and
locking a zoom and view mode — after that the buttons just page through. Slow
turns ease with lighter rendering and less frequent full refreshes. For big
scanned books, KOReader is the right tool and installs in ten minutes.
