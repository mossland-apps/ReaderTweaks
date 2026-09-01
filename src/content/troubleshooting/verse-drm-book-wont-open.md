---
title: A DRM-protected library book won't open on the PocketBook Verse
pageSlug: drm-book-wont-open
device: pocketbook-verse
software: PocketBook firmware
summary: >-
  A borrowed EPUB or PDF shows "This document is protected", asks for
  authorisation, or opens as an ".acsm" file that does nothing. It needs the
  Verse signed in to an Adobe ID.
difficulty: Moderate
estimatedTime: 20 minutes
lastTested: 2026-08-30
lastUpdated: 2026-09-01
searchTerms:
  - adobe drm
  - acsm file
  - this document is protected
  - library book won't open
  - overdrive
  - libby epub
  - adobe id
  - authorization error
  - e_adept
symptoms:
  - A borrowed book shows "This document is protected" or "License error".
  - The device asks you to authorise with Adobe and the sign-in fails.
  - The downloaded file ends in ".acsm" and opening it does nothing useful.
  - A library book opened on another device but not on the Verse.
beforeYouStart:
  - Have your Adobe ID email and password, or be ready to create a free Adobe account.
  - Note how you got the book — the Libby app, the library website, or Adobe Digital Editions on a computer.
  - None of these steps affect your own unprotected books.
mostCommonCause: >-
  The Verse can open Adobe-DRM library books, but only once it is authorised with
  an Adobe ID, and each Adobe ID can authorise a limited number of devices. The
  usual causes are: the device was never signed in to Adobe, the book was
  fulfilled to a different Adobe ID than the one on the device, or the ".acsm"
  file was copied over instead of being opened on the device to complete the
  download.
decisionTree:
  question: What are you seeing?
  branches:
    - label: It asks me to authorise with Adobe and I have not
      hint: Sign the device in to an Adobe ID
      href: "#fix-1"
    - label: I signed in but the book still says "protected" or "license error"
      hint: The book belongs to a different Adobe ID
      href: "#fix-2"
    - label: The file is an ".acsm" and nothing happens
      hint: The .acsm must be opened on the device, not just copied
      href: "#fix-3"
    - label: "Adobe sign-in itself fails with an activation limit"
      hint: You have authorised too many devices
      href: "#fix-2"
fixes:
  - title: Authorise the Verse with an Adobe ID
    rationale: >-
      Adobe-DRM books are locked to an Adobe account, and the reader has to be
      signed in to that account before it can unlock them.
    steps:
      - >-
        On the Verse, open Settings, then "Accounts and Synchronization", then
        "Adobe DRM".
      - >-
        Enter your Adobe ID email and password. If you do not have one, create a
        free Adobe account first at adobe.com on any device, then come back and
        sign in.
      - >-
        Wait for it to confirm the device is authorised. Then open the borrowed
        book again from the Library.
    note: >-
      Use the same Adobe ID everywhere you read library books — the Libby app,
      any computer, and the Verse — so books unlock on all of them.
  - title: Make sure the book was fulfilled to the right Adobe ID
    rationale: >-
      If the book was downloaded (fulfilled) under a different Adobe ID than the
      one now on the device, the Verse cannot open it, and re-authorising to a
      new ID does not retroactively unlock older books.
    steps:
      - >-
        Check which Adobe ID the book came from. In Libby, this is under
        Settings, then "Read books with... Adobe". On a computer it is the ID
        signed in to Adobe Digital Editions.
      - >-
        Sign the Verse in to that same Adobe ID (Settings, then Accounts and
        Synchronization, then Adobe DRM). If the device is already signed in to a
        different ID, sign out first.
      - >-
        Re-download the loan so a fresh copy is fulfilled to the ID now on the
        device: return and re-borrow it, or use "Send to device" again from the
        library app.
      - >-
        If Adobe reports an activation limit when you sign in, you have
        authorised the maximum number of devices for that ID. Sign in at
        adobe.com, open your account's device list, and remove one you no longer
        use.
  - title: Complete the download from the ".acsm" file on the device
    rationale: >-
      An ".acsm" file is not the book — it is a small ticket that a reader
      exchanges for the actual book. Copying the ".acsm" onto the Verse and
      opening it there completes the download; copying a book fulfilled on a
      computer usually does not carry the licence.
    steps:
      - >-
        Download the ".acsm" file from the library website rather than using a
        computer app to open it.
      - >-
        Copy just the ".acsm" file to the Verse by USB, into any folder.
      - >-
        On the device, open the ".acsm" from the Library. With Adobe DRM
        authorised (Fix 1), the Verse contacts Adobe, downloads the real EPUB or
        PDF, and replaces the ".acsm" entry with the book.
      - >-
        If it still fails, the cleanest route is to fulfil the loan in the Libby
        app and use its "Send to device" option, which hands the Verse a book
        already tied to your Adobe ID.
recovery: >-
  None of this affects your own books. If the loan is now in a broken state,
  return it from the library app and borrow it again — library systems allow
  this, and a fresh loan fulfilled to the Adobe ID on the device will open. Your
  Adobe authorisation stays on the device until you sign out of it.
related:
  - text: "Read library books on the PocketBook Verse"
    href: /devices/pocketbook/pocketbook-verse/guides/library-books/
  - text: "Set up a new PocketBook Verse"
    href: /devices/pocketbook/pocketbook-verse/guides/first-setup/
---

The Verse is one of the few readers that opens Adobe-DRM library books without a
computer, but only after it is signed in to an Adobe ID — and the book has to
have been issued to that same ID. Fix 1 covers a device that was never
authorised; Fix 2 covers a mismatch between the book's ID and the device's.
