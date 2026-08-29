---
title: Notebooks or notes aren't syncing from the Kindle Scribe
pageSlug: notes-not-syncing
device: scribe
software: Kindle firmware
summary: >-
  A notebook or book annotation is not showing up in the Kindle app, or an
  emailed export never arrives. Usually it is Wi-Fi, a sync that has not run, or
  the approved-sender list.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-27
lastUpdated: 2026-08-29
searchTerms:
  - notebook not syncing
  - notes missing
  - export not working
  - email notebook failed
  - kindle app no notebooks
  - whispersync notes
  - handwriting not saving
symptoms:
  - A notebook made on the Scribe is missing from the Kindle app on your phone or computer.
  - Notes written on a book page do not appear when you open that book elsewhere.
  - Emailing a notebook as PDF or text produces nothing in your inbox.
  - Changes made on the Scribe are not reflected after editing a notebook in the app.
beforeYouStart:
  - Confirm the Scribe has Wi-Fi on and a working connection.
  - Know which Amazon account the Scribe is registered to — Settings, then Your Account.
  - Have the Kindle app installed and signed in to the same account on a phone or computer.
mostCommonCause: >-
  Notebook sync only happens over Wi-Fi and only when a sync runs, so the usual
  cause is a Scribe that has been offline or asleep and has not synced yet. For
  emailed exports, the usual cause is that the destination or sending address
  is not handled correctly, or the export simply has not finished uploading.
decisionTree:
  question: What is not working?
  branches:
    - label: A notebook is missing from the Kindle app
      hint: Force a sync on both ends
      href: "#fix-1"
    - label: Notes on a book page are missing elsewhere
      hint: Check the account and Whispersync
      href: "#fix-2"
    - label: An emailed export never arrived
      hint: Check the address and wait for the upload
      href: "#fix-3"
    - label: Edits in the app are not coming back to the Scribe
      hint: Sync the Scribe, then reopen the notebook
      href: "#fix-1"
fixes:
  - title: Force a sync on the Scribe and in the app
    rationale: >-
      Notebooks upload on a sync, not instantly. If the Scribe has been asleep or
      off Wi-Fi, the notebook is still only on the device.
    steps:
      - >-
        On the Scribe, make sure Wi-Fi is on. Open Settings and choose "Sync", or
        swipe down and tap the sync icon. Give it a minute.
      - >-
        In the Kindle app on your phone or computer, pull to refresh or use the
        Sync option, and open the Notebooks section.
      - >-
        If the notebook still does not appear, close and reopen it on the Scribe
        once — that can mark it as changed and push it on the next sync.
      - >-
        Leave the Scribe awake on Wi-Fi for a few minutes. Large notebooks with a
        lot of handwriting take longer to upload.
  - title: Check the account and Whispersync for book notes
    rationale: >-
      Notes written on a book page sync as part of that book's annotations, which
      only works if the book is an Amazon purchase or personal document on the
      same account, and Whispersync is on.
    steps:
      - >-
        Confirm the Scribe and the other device are on the same Amazon account
        (Settings, then Your Account).
      - >-
        On Amazon's site, in "Manage Your Content and Devices", check that
        "Whispersync for personal documents" is turned on if the book is one you
        sideloaded.
      - >-
        Open the book on the Scribe, sync, then open it on the other device.
        In-book handwritten notes appear as annotations; on devices without a pen
        they may show as markers you tap to view.
      - >-
        Note that handwriting on a sideloaded PDF stays with that PDF and is
        exported from the share menu, not synced as book annotations.
  - title: Fix an emailed export that never arrived
    rationale: >-
      Export uploads the file and emails it. It can fail if Wi-Fi drops during
      the upload, if the file is very large, or if it lands in spam.
    steps:
      - >-
        Re-run the export from the notebook's Share menu, choose email, and enter
        the address carefully. Stay on Wi-Fi until it says it has sent.
      - Check the spam or junk folder of the destination inbox.
      - >-
        For a large notebook, try exporting as text rather than PDF, or split it
        by exporting selected pages, then try PDF again.
      - >-
        If exports never work, confirm the Scribe can send mail at all: the "Send
        to Kindle" side of your account settings and the approved-sender list can
        affect outbound notebook email on some setups.
recovery: >-
  Nothing here risks your notebooks — they stay on the Scribe until you delete
  them there. If sync is stuck, the safe way to get a copy off the device is to
  export the notebook by email as a PDF while on a stable Wi-Fi connection.
related:
  - text: "Notebooks and writing on book pages on the Kindle Scribe"
    href: /devices/kindle/scribe/guides/notebooks-and-writing/
  - text: "The Kindle Scribe won't turn on or is frozen"
    href: /devices/kindle/scribe/troubleshooting/wont-turn-on/
---

Most "missing notebook" reports are a Scribe that has not synced yet — force a
sync on both ends and give a large notebook time to upload. Emailed exports that
fail are usually Wi-Fi dropping mid-upload or the file landing in spam.
