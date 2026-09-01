---
title: Make Android apps look right on the BOOX Page
pageSlug: refresh-modes
device: boox-page
section: guides
type: guide
order: 3
summary: What the BOOX refresh modes do, which to use for reading versus scrolling, and how to stop ghosting and grey text.
lastUpdated: 2026-08-31
datePublished: 2026-08-31
software: BOOX firmware
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-29
searchTerms:
  - refresh mode
  - ghosting
  - grey text
  - HD Regal Balanced Fast
  - a2 mode
  - screen refresh
  - full refresh
  - dark mode e-ink
related:
  - text: "Install reading apps on the BOOX Page"
    href: /devices/boox/boox-page/guides/install-reading-apps/
  - text: "Optimise a single app on the BOOX Page"
    href: /devices/boox/boox-page/customization/optimise-an-app/
steps:
  - instruction: Understand why apps look wrong at first
    detail: >-
      Android apps assume a fast colour screen that redraws 60 times a second.
      E-ink redraws slowly and leaves a faint trace of the last image (ghosting).
      BOOX bridges the gap with "refresh modes" that trade sharpness for speed,
      applied globally and per app.
  - instruction: Learn the four modes
    detail: >-
      From sharpest and slowest to fastest and roughest, the modes are usually
      named HD (or Regal), Balanced (or Normal), Fast (or Speed), and Ultrafast
      (or A2). HD is for reading still pages. Balanced is a good all-rounder.
      Fast and Ultrafast are for scrolling lists, menus and video-like content,
      and make text look grainy.
  - instruction: Set a sensible global default
    detail: >-
      In the control centre (swipe down from top-right), set the global mode to
      HD or Regal. This is what any app uses until you give it its own setting.
      Do not leave the global mode on a fast setting — everything will look grey.
  - instruction: Give reading apps a slow, clean mode
    detail: >-
      For the Kindle app, Kobo app, KOReader and any text reader, set the per-app
      refresh mode to HD or Regal. Text is a still image between page turns, so it
      should get the sharpest mode.
  - instruction: Give browsing and menus a faster mode
    detail: >-
      For a web browser, a file manager or a store's home screen, allow Balanced
      or Fast so scrolling is not painful. You can switch a single app's mode on
      the fly from the control centre while it is open.
  - instruction: Fix ghosting with full refresh
    detail: >-
      Ghosting builds up over several page turns. In a per-app setting, turn on
      "full refresh every 1 page" for the worst offenders, or every 5 pages as a
      compromise. There is also a manual "full-screen refresh" button in the
      control centre for a one-off clear.
  - instruction: Fix grey or faint text
    detail: >-
      If text looks washed out, turn on "bleach whites" or "enhance contrast" for
      that app, and set the app's own theme to plain light. Avoid dark mode on
      e-ink — inverted text ghosts badly and looks muddy.
---

Almost every complaint about a BOOX comes down to refresh settings left on the
defaults. The rule of thumb: sharpest, slowest mode for reading text; a faster
mode for scrolling and menus; full refresh every page or few pages for anything
that ghosts. Set these once per app and the Page stops feeling like a
compromise. Because the Page is a reading-first device, most people can simply
leave the global mode on HD and rarely touch it.
