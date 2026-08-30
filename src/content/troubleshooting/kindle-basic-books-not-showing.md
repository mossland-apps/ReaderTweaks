---
title: Books bought or sent aren't showing up on the basic Kindle
pageSlug: books-not-showing
device: kindle-basic
software: Kindle firmware
summary: >-
  A book you bought, borrowed or sent is missing from the entry Kindle. Usually
  it is a sync issue, a filter hiding it, or a delivery sent to a different
  device.
difficulty: Easy
estimatedTime: 10 minutes
lastTested: 2026-08-28
lastUpdated: 2026-08-30
searchTerms:
  - book not showing
  - missing books
  - purchase not downloading
  - send to kindle not working
  - library empty
  - book stuck downloading
  - whispersync
symptoms:
  - A book you just bought on Amazon is not on the Kindle.
  - A file you sent with Send to Kindle never arrived.
  - A borrowed library book is missing or expired early.
  - Books are on the Kindle but the home screen looks empty.
beforeYouStart:
  - Confirm the Kindle has Wi-Fi on and a working connection.
  - Know which Amazon account the Kindle is registered to — Settings, then Your Account.
  - Have a computer or phone handy to open "Manage Your Content and Devices" on Amazon.
mostCommonCause: >-
  Most often the book is in your account but has not synced to this device yet,
  or the home screen is set to show only downloaded items. For Send to Kindle,
  the usual cause is that the file was sent from an email address that is not on
  your approved-senders list, so Amazon dropped it without telling you.
decisionTree:
  question: Which kind of book is missing?
  branches:
    - label: An Amazon purchase
      hint: Sync, then check filters and the right account
      href: "#fix-1"
    - label: A file I sent with Send to Kindle
      hint: Check the approved-sender list and the file
      href: "#fix-2"
    - label: A library or borrowed book
      hint: Delivery device and loan status
      href: "#fix-3"
    - label: Everything looks empty
      hint: A home-screen filter, or the account
      href: "#fix-1"
fixes:
  - title: Sync the Kindle and check what it is showing you
    rationale: >-
      A purchase lands in your account immediately but only reaches the device on
      a sync. The home screen also has a filter that can hide books that are in
      your account but not yet downloaded.
    steps:
      - Open Settings and choose "Sync", or swipe down and tap the sync icon. Wait a minute.
      - >-
        On the Library screen, open the filter (top of the screen) and set it to
        "All" rather than "Downloaded". Books in your account that are not on the
        device show with a small download badge — tap one to bring it down.
      - Set the sort order to "Recent" and look again.
      - >-
        Confirm the Kindle is on the account that owns the book. Settings, then
        Your Account, shows the registered name. If it is wrong, deregister and
        register the correct account.
    note: >-
      If a book still will not download after syncing, remove it from the device
      (long-press, "Remove download") and download it again.
  - title: Fix a Send to Kindle delivery that never arrived
    rationale: >-
      Amazon only accepts personal documents from approved email addresses and
      under a size limit. A file that breaks either rule is discarded silently.
    steps:
      - >-
        On Amazon's site, open "Manage Your Content and Devices", then
        Preferences, then "Personal Document Settings". Check that the address you
        sent from is on the "Approved Personal Document E-mail List", and add it
        if not.
      - >-
        Confirm you sent the file to this Kindle's own "@kindle.com" address, not
        another device's, and that the file is under the size limit and in a
        supported format.
      - Re-send the file. If you used email, put a word in the subject line so it is not treated as empty.
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
        In the Libby or OverDrive app, open the loan and check it is still active
        and was "sent to Kindle" for this device, not another one.
      - On the Kindle, sync and set the Library filter to "All".
      - >-
        If the book vanished before the due date, the loan may have been returned
        early from the app, or the hold expired. Borrow it again.
recovery: >-
  Nothing here deletes content you own. If deregistering and re-registering the
  Kindle does not help, the book is still safe in your Amazon account and can be
  downloaded on the Kindle app on a phone to confirm the account is fine, then
  re-synced to this Kindle.
related:
  - text: "The basic Kindle won't connect to Wi-Fi"
    href: /devices/kindle/kindle-basic/troubleshooting/wifi-wont-connect/
  - text: "Get your own EPUB books onto the basic Kindle"
    href: /devices/kindle/kindle-basic/guides/send-to-kindle/
---

If the decision tree does not point you somewhere, start with Fix 1 — a sync plus
the "All" filter resolves the majority of "missing book" reports.
