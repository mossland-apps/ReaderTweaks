---
title: Books bought or sent aren't showing up on the Kindle Colorsoft
pageSlug: books-not-showing
device: colorsoft
software: Kindle firmware
summary: >-
  A book or comic you bought, borrowed or sent is missing from the Colorsoft.
  Usually it is a sync issue, a filter hiding it, or a delivery sent to a
  different device.
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-11-22
lastUpdated: 2026-11-22
searchTerms:
  - book not showing
  - missing books
  - purchase not downloading
  - send to kindle not working
  - comic not showing
  - library empty
  - book stuck downloading
symptoms:
  - A book or comic you just bought on Amazon is not on the Kindle.
  - A file you sent with Send to Kindle never arrived.
  - A borrowed library book is missing or expired early.
  - Books are on the Kindle but the home screen looks empty.
beforeYouStart:
  - Confirm the Kindle has Wi-Fi on and a working connection.
  - Know which Amazon account the Kindle is registered to — check Settings, then Your Account.
  - Have a computer or phone handy to open "Manage Your Content and Devices" on Amazon.
mostCommonCause: >-
  Most often the book is in your account but has not synced to this device yet,
  or the Library is set to show only downloaded items. For Send to Kindle, the
  usual cause is that the file was sent from an email address that is not on
  your approved-senders list, or it was a comic file type Amazon does not
  accept.
decisionTree:
  question: Which kind of book is missing?
  branches:
    - label: An Amazon purchase
      hint: Sync, then check filters and the right account
      href: "#fix-1"
    - label: A file I sent with Send to Kindle
      hint: Check the approved-sender list and the file type
      href: "#fix-2"
    - label: A library or borrowed book
      hint: Delivery device and loan status
      href: "#fix-3"
    - label: Everything looks empty
      hint: A Library filter, or the account
      href: "#fix-1"
fixes:
  - title: Sync the Kindle and check what it is showing you
    rationale: >-
      A purchase lands in your account immediately but only reaches the device on
      a sync. The Library also has a filter that can hide books that are in your
      account but not yet downloaded.
    steps:
      - >-
        Open Settings and choose "Sync", or swipe down and tap the sync icon.
        Wait a minute.
      - >-
        On the Library screen, open the filter and set it to "All" rather than
        "Downloaded". Books in your account that are not on the device show with
        a small download badge — tap one to bring it down.
      - >-
        Confirm the Kindle is on the account that owns the book. Settings, then
        Your Account, shows the registered name. If it is wrong, deregister and
        register the correct account.
    note: >-
      Colour comics and picture books are large downloads. Give them longer on a
      slow connection before assuming they are stuck.
  - title: Fix a Send to Kindle delivery that never arrived
    rationale: >-
      Amazon only accepts personal documents from approved email addresses, in
      supported formats and under a size limit. A file that breaks any of these
      rules is discarded, often without notice.
    steps:
      - >-
        On Amazon's site, open "Manage Your Content and Devices", then
        Preferences, then "Personal Document Settings". Check that the address
        you sent from is on the "Approved Personal Document E-mail List", and add
        it if not.
      - >-
        Confirm you sent the file to this Kindle's own "@kindle.com" address, not
        another device's, and that it is under the current size limit (200 MB).
      - >-
        Comic archives (CBZ and CBR) are not accepted. Convert them first and
        copy the result over USB or with Calibre.
      - >-
        Check "Manage Your Content and Devices", then the Documents tab — a
        delivered file appears there even before it reaches the device, which
        tells you whether the problem is delivery or sync.
  - title: Sort out a library or borrowed book
    rationale: >-
      Library loans through Libby or OverDrive are sent to one specific Kindle,
      and the loan can end or be returned early from the library app.
    steps:
      - >-
        In the Libby or OverDrive app, open the loan and check it is still
        active and was sent to this Kindle, not another one.
      - >-
        On the Kindle, sync and set the Library filter to "All". A borrowed book
        behaves like a purchase once delivered.
      - >-
        If the book vanished before the due date, the loan may have been returned
        early from the app, or the hold expired. Borrow it again.
recovery: >-
  Nothing here deletes content you own. Books are safe in your Amazon account
  even if the Kindle misbehaves — you can check them in the Kindle app on a
  phone, then sync the Colorsoft again.
related:
  - text: "Kindle Colorsoft won't connect to Wi-Fi"
    href: /devices/kindle/colorsoft/troubleshooting/wifi-wont-connect/
  - text: "Get your own books onto the Kindle Colorsoft"
    href: /devices/kindle/colorsoft/guides/send-to-kindle/
---

If the decision tree does not point you somewhere, start with Fix 1 — a sync
plus the "All" filter resolves most "missing book" reports. For your own files,
the approved-sender list and the comic file type are the two usual culprits.
