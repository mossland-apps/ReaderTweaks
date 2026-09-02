---
title: Notebooks or documents aren't syncing on the reMarkable Paper Pure
pageSlug: syncing
device: remarkable-paper-pure
software: Codex firmware
summary: >-
  A notebook is missing from the apps, an added document never reached the
  device, or sync is stuck. Usually it is Wi-Fi, a sync that has not finished, or
  a subscription limit.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-30
lastUpdated: 2026-09-01
searchTerms:
  - not syncing
  - sync stuck
  - notebook missing
  - document not appearing
  - connect subscription
  - cloud sync
  - desktop app not updating
  - sign out sign in
symptoms:
  - A notebook made on the device is missing from the desktop or mobile app.
  - A PDF added in the app never appeared on the Paper Pure.
  - Sync shows as pending or spinning and does not complete.
  - Older versions of a notebook are missing, or edits are not merging.
beforeYouStart:
  - Confirm the Paper Pure has Wi-Fi on and a working connection.
  - Know whether you have a reMarkable Connect subscription or are on the free tier.
  - Have the desktop or mobile app installed and signed in to the same account.
mostCommonCause: >-
  Most often the device simply has not finished syncing — it needs Wi-Fi and
  time, and a large notebook with a lot of ink uploads slowly. Some cloud
  features and older-version history depend on a reMarkable Connect subscription,
  so on the free tier certain things are expected not to sync.
decisionTree:
  question: What is not working?
  branches:
    - label: A notebook is missing from the apps
      hint: Force a sync on the device and refresh the app
      href: "#fix-1"
    - label: A document added in the app never reached the device
      hint: Check Wi-Fi, the account, and the file
      href: "#fix-2"
    - label: Sync is stuck spinning
      hint: Restart, then check storage and connection
      href: "#fix-3"
    - label: Old versions or edit history are missing
      hint: That is a subscription-tier limit, not a fault
      href: "#fix-3"
fixes:
  - title: Force a sync and refresh the app
    rationale: >-
      Notebooks upload on a sync, not instantly. If the device has been asleep or
      off Wi-Fi, the notebook is still only on the Paper Pure.
    steps:
      - >-
        On the Paper Pure, make sure Wi-Fi is on. Open Settings and look for a
        sync status or "Sync now" option, or simply leave the device awake on
        Wi-Fi for a few minutes.
      - >-
        In the desktop or mobile app, sign out and back in, or use its refresh
        option, then open the notebooks list.
      - >-
        Open and close the notebook once on the device — that can mark it changed
        and push it on the next sync.
      - >-
        Large notebooks with heavy ink or many pages take noticeably longer to
        upload. Give it time on a good connection.
  - title: Fix a document that never reached the device
    rationale: >-
      A file added in the app has to upload to your account and then download to
      the Paper Pure. Either leg can stall on a weak connection, and a corrupt or
      huge PDF can fail to process.
    steps:
      - Confirm the device and the app are signed in to the same reMarkable account.
      - >-
        Check the file opened correctly in the app itself. If it did not, the PDF
        may be damaged — re-save or re-export it and add it again.
      - >-
        Put the device on a strong Wi-Fi connection and leave it awake. Very
        large PDFs can take several minutes to arrive.
      - >-
        Remove the document from the app and add it again as a fresh copy if it
        still will not sync.
  - title: Clear a stuck sync, and understand subscription limits
    rationale: >-
      A sync that spins forever is usually a connection problem or the device
      being nearly full. Missing version history, by contrast, is a deliberate
      limit of the free tier.
    steps:
      - >-
        Restart the Paper Pure from Settings, then "General", then "Power".
        Restart your router too if other devices are also slow.
      - >-
        Check free space in Settings. A nearly full device can fail to download
        new documents; remove some large PDFs you have finished with.
      - >-
        Try a different network — some corporate or captive-portal Wi-Fi blocks
        the sync service.
      - >-
        If it is version history or a cloud integration that is missing, check
        your plan. Extended sync history and Google Drive, Dropbox and OneNote
        links need a reMarkable Connect subscription; without it, only current
        files sync.
recovery: >-
  Your notebooks are safe on the device until you delete them there, even if sync
  is stuck. The reliable way to get a copy off is to export the notebook as a PDF
  by email or through the app while on a stable connection. Signing out of the
  device does not delete local content, but do not sign out if a large notebook
  has not yet synced.
related:
  - text: "Get documents onto the reMarkable Paper Pure"
    href: /devices/remarkable/remarkable-paper-pure/guides/get-documents-on/
  - text: "The reMarkable Paper Pure won't turn on or is frozen"
    href: /devices/remarkable/remarkable-paper-pure/troubleshooting/wont-turn-on/
---

Most "missing notebook" reports are a device that has not finished syncing — put
it on Wi-Fi, leave it awake, and give a large notebook time. If it is version
history or a cloud integration that is missing, that is a subscription-tier
limit rather than something to fix.
