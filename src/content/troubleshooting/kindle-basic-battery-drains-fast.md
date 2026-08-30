---
title: The basic Kindle's battery drains fast
pageSlug: battery-drains-fast
device: kindle-basic
software: Kindle firmware
summary: >-
  The entry Kindle used to last weeks and now needs charging every few days.
  Usually it is Wi-Fi left on, a stuck background process, or a book that keeps
  the device busy.
difficulty: Easy
estimatedTime: 20 minutes
lastTested: 2026-08-28
lastUpdated: 2026-08-30
searchTerms:
  - battery drain
  - battery draining
  - poor battery life
  - loses charge
  - wont hold charge
  - overnight drain
  - hot kindle
symptoms:
  - The battery drops several percent a day even when you are not reading.
  - A full charge lasts days instead of weeks.
  - The Kindle feels warm when it has been idle.
  - Battery life fell sharply after a firmware update or a new book.
beforeYouStart:
  - Note roughly how fast it is draining — a percent a day is normal, ten percent a day is not.
  - A very old battery does lose capacity; this guide is for a sudden change, not gradual ageing.
  - None of these steps erase books or settings.
mostCommonCause: >-
  On a Kindle the usual causes, in order, are: Wi-Fi left switched on so the
  device keeps checking in; a background process that has got stuck, cleared by a
  restart; and a specific book — often a large PDF or a badly made file — that
  keeps the reader working even on a static page.
decisionTree:
  question: When did the drain start?
  branches:
    - label: It has always been a bit heavy since I got it
      hint: Turn Wi-Fi off between syncs
      href: "#fix-1"
    - label: It started suddenly, for no clear reason
      hint: Restart, then watch for a day
      href: "#fix-2"
    - label: It started after I added a particular book or PDF
      hint: Remove that file and re-check
      href: "#fix-3"
    - label: The Kindle also feels warm when idle
      hint: A stuck process — force a restart
      href: "#fix-2"
fixes:
  - title: Turn Wi-Fi off between syncs
    rationale: >-
      Wi-Fi is the single biggest drain on an e-reader. Left on, the Kindle keeps
      the radio active and checks in with Amazon, which can cost several percent a
      day on its own.
    steps:
      - >-
        Swipe down from the top and turn Wi-Fi off. Turn it on only when you want
        to sync new purchases, send a document, or download a book.
      - >-
        Or enable Airplane Mode, which does the same thing and is quicker to
        toggle.
      - >-
        With Wi-Fi off, a healthy entry Kindle should lose only a percent or two a
        day. Check again after 24 hours.
    note: >-
      "Whispersync" and syncing your furthest page read still work — they just
      happen the next time Wi-Fi is on, rather than continuously.
  - title: Restart the Kindle and watch for a day
    rationale: >-
      A background task — indexing, a failed download, a sync loop — can get
      stuck and keep the processor awake. A restart clears it, and the device
      often feels warm until you do.
    steps:
      - Restart from Settings, then Device Options, then Restart. If the screen is unresponsive, hold the power button for about 40 seconds.
      - >-
        After it boots, leave Wi-Fi off and do not open anything for a few hours,
        then check the battery. A stuck process usually shows as steady drain even
        with nothing running.
      - >-
        If it drained hard again by the next day, and you recently updated the
        firmware, connect to Wi-Fi once and let it fully finish any pending
        update or index — a half-finished update can churn.
  - title: Find a book or PDF that keeps the device busy
    rationale: >-
      A large PDF, a file with broken formatting, or one with an embedded active
      element can stop the reader from idling properly, so the Kindle never fully
      sleeps between page turns.
    steps:
      - >-
        Think back to what you added just before the drain started. Remove that
        book or PDF from the device (long-press, "Remove download") and use the
        Kindle normally for a day.
      - >-
        If the drain stops, that file was the cause. For a PDF, try a smaller or
        re-saved copy. For an EPUB you sideloaded, re-convert it in Calibre from a
        clean source.
      - >-
        Also check you do not have a huge number of collections or thousands of
        documents synced, which makes indexing heavier. Removing finished
        downloads helps.
recovery: >-
  Nothing here removes books you own. If the battery still drains fast after
  turning Wi-Fi off, restarting, and ruling out a bad file, and the device is
  more than two or three years old, the battery itself may simply be worn.
  Amazon can service or replace it; a genuinely faulty battery on a newer device
  is covered by warranty.
related:
  - text: "The basic Kindle won't connect to Wi-Fi"
    href: /devices/kindle/kindle-basic/troubleshooting/wifi-wont-connect/
  - text: "Set up a new basic Kindle"
    href: /devices/kindle/kindle-basic/guides/first-setup/
---

The first thing to try is simply leaving Wi-Fi off except when you need it — on
an e-reader that alone is usually the difference between days and weeks. If the
drain is sudden or the device runs warm, restart it and watch for a day before
looking further.
