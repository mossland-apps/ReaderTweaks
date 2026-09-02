---
title: Notebooks or documents aren't syncing on the reMarkable 2
pageSlug: syncing
device: remarkable-2
software: Codex firmware
summary: >-
  A notebook is missing from the apps, an added document never reached the
  device, or sync is stuck. Usually it is Wi-Fi, a sync that has not finished, a
  subscription limit, or community software interfering.
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
  - toltec sync
  - sign out sign in
symptoms:
  - A notebook made on the device is missing from the desktop or mobile app.
  - A PDF added in the app never appeared on the reMarkable 2.
  - Sync shows as pending or spinning and does not complete.
  - Older versions of a notebook are missing, or edits are not merging.
beforeYouStart:
  - Confirm the reMarkable 2 has Wi-Fi on and a working connection.
  - Know whether you have a reMarkable Connect subscription or are on the free tier.
  - Note whether you have installed any community software (Toltec, custom sync clients).
mostCommonCause: >-
  Most often the device simply has not finished syncing — it needs Wi-Fi and
  time, and a large notebook uploads slowly. Some cloud features and
  older-version history depend on a reMarkable Connect subscription. On a
  modified device, a third-party sync tool or a paused service can also be the
  cause.
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
      hint: Restart, check storage, and check community software
      href: "#fix-3"
    - label: Old versions or edit history are missing
      hint: That is a subscription-tier limit, not a fault
      href: "#fix-3"
fixes:
  - title: Force a sync and refresh the app
    rationale: >-
      Notebooks upload on a sync, not instantly. If the device has been asleep or
      off Wi-Fi, the notebook is still only on the reMarkable 2.
    steps:
      - >-
        On the device, make sure Wi-Fi is on. Open Settings and look for a sync
        status or "Sync now" option, or simply leave the device awake on Wi-Fi
        for a few minutes.
      - >-
        In the desktop or mobile app, sign out and back in, or use its refresh
        option, then open the notebooks list.
      - >-
        Open and close the notebook once on the device — that can mark it changed
        and push it on the next sync.
      - Large notebooks with heavy ink take noticeably longer to upload; give it time.
  - title: Fix a document that never reached the device
    rationale: >-
      A file added in the app has to upload to your account and then download to
      the reMarkable 2. Either leg can stall on a weak connection, and a corrupt
      or huge PDF can fail to process.
    steps:
      - Confirm the device and the app are signed in to the same reMarkable account.
      - >-
        Check the file opened correctly in the app itself. If it did not, the PDF
        may be damaged — re-save or re-export it and add it again.
      - >-
        As an offline alternative, enable the USB web interface in Settings,
        connect USB, open 10.11.99.1, and drop the file there directly.
      - >-
        Put the device on a strong Wi-Fi connection and leave it awake. Very
        large PDFs can take several minutes to arrive.
  - title: Clear a stuck sync, and check the tier and any modifications
    rationale: >-
      A sync that spins forever is usually a connection problem, a full device,
      or — on a modified unit — a third-party sync tool. Missing version history
      is a deliberate free-tier limit.
    steps:
      - Restart the reMarkable 2 from Settings, then "General", then "Power". Restart your router too if other devices are slow.
      - >-
        Check free space in Settings. A nearly full device can fail to download
        new documents; remove some large PDFs you have finished with.
      - >-
        If you have installed community software, a custom sync client or a
        paused service can block the official sync. Disable or update it and try
        again.
      - >-
        If it is version history or a cloud integration that is missing, check
        your plan. Extended sync history and Google Drive, Dropbox and OneNote
        links need a reMarkable Connect subscription; without it, only current
        files sync.
recovery: >-
  Your notebooks are safe on the device until you delete them there, even if sync
  is stuck. The reliable way to get a copy off is to export the notebook as a PDF
  by email or through the app, or to pull it via the USB web interface while
  connected. Do not sign out of the device if a large notebook has not yet
  synced.
related:
  - text: "Get documents onto the reMarkable 2"
    href: /devices/remarkable/remarkable-2/guides/get-documents-on/
  - text: "The reMarkable 2 won't turn on or is frozen"
    href: /devices/remarkable/remarkable-2/troubleshooting/wont-turn-on/
---

Most "missing notebook" reports are a device that has not finished syncing — put
it on Wi-Fi, leave it awake, and give a large notebook time. On a modified
reMarkable 2, also check that a community sync tool is not getting in the way.
If it is version history or a cloud integration that is missing, that is a
subscription-tier limit rather than something to fix.
