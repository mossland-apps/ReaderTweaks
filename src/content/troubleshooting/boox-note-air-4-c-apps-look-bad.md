---
title: Apps look grey, blurry or ghosted on the BOOX Note Air 4 C
pageSlug: apps-look-bad
device: boox-note-air-4-c
software: BOOX firmware
summary: >-
  Text looks washed out, faint traces of old pages linger, or colour looks
  muddy. On the Note Air 4 C this is the refresh and colour settings, not a
  fault.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-29
lastUpdated: 2026-08-31
searchTerms:
  - ghosting
  - grey text
  - blurry
  - washed out
  - smearing
  - faint text
  - refresh mode
  - colour muddy
  - kaleido washed out
symptoms:
  - Text and menus look grey rather than crisp black.
  - Faint images of previous pages stay on screen.
  - Scrolling a list or web page leaves a smeared trail.
  - Colour content looks dull, grainy or low-resolution.
  - One app looks fine and another looks terrible.
beforeYouStart:
  - This is a settings problem in almost every case, not a broken screen.
  - Have five minutes to change settings per affected app.
  - The colour layer always looks slightly muted — that is how Kaleido e-ink works, not a fault.
  - A true screen fault shows as a permanent line or blotch that a full refresh never clears.
mostCommonCause: >-
  The global refresh mode is left on a fast setting, an app has no per-app
  optimisation set, or a plain-text app is left in colour mode so text is
  softer and greyer than it needs to be. Ghosting is a full-refresh frequency
  set too low.
decisionTree:
  question: What are you seeing?
  branches:
    - label: Everything looks grey, in every app
      hint: The global refresh mode is set too fast
      href: "#fix-1"
    - label: One specific app looks bad, others are fine
      hint: That app needs its own optimisation set
      href: "#fix-2"
    - label: Plain text looks soft and greyish
      hint: Switch that app to black-and-white mode
      href: "#fix-2"
    - label: Old pages linger until a manual refresh
      hint: Raise the full-refresh frequency
      href: "#fix-3"
    - label: A permanent line or blotch that never clears
      hint: Likely a hardware fault
      href: "#fix-3"
fixes:
  - title: Fix the global refresh mode
    rationale: >-
      The global mode is the default every app uses until you give it its own. If
      it is on a fast setting, the whole device looks grey and grainy.
    steps:
      - Swipe down from the top-right for the control centre and find the refresh mode selector.
      - Set it to "HD" or "Regal". Do not leave it on "Fast", "Speed", "Ultrafast" or "A2".
      - Tap the manual "full-screen refresh" button once to clear the current ghosting, then check text.
  - title: Optimise the specific app, and set colour per app
    rationale: >-
      Per-app settings override the global mode. An app with none set falls back
      to defaults that often look wrong, and a text app left in colour mode looks
      softer than it should.
    steps:
      - Long-press the app on the Apps screen and choose "Optimise", or use the control-centre optimisation icon.
      - Set its refresh mode — HD or Regal for text, Balanced or Fast for a browser or store.
      - For a plain-text reader, set the app to black-and-white. Keep colour only for comics, magazines, maps and photos.
      - If text is grey, turn on "enhance contrast" or "bleach whites" a little — not to the maximum.
      - If the app's layout is tiny or huge on the big screen, adjust the DPI slider, then reopen the app.
      - Turn on "animation filter" to stop page-curl and fade effects that smear.
  - title: Deal with ghosting and rule out a hardware fault
    rationale: >-
      Ghosting is normal e-ink behaviour that a full refresh clears, and it is a
      little more visible through the colour filter. If a full refresh never
      clears a mark, it is not ghosting.
    steps:
      - In the affected app's optimisation panel, set "full refresh every N pages" to 1 for the cleanest result, or 3 to 5 as a compromise.
      - For KOReader, do this inside KOReader (menu, gear, Screen) and turn BOOX's app-level full refresh off.
      - Add a "refresh" shortcut to the Navigation Ball for a one-tap manual clear any time.
      - If a line, band or blotch stays after a manual full refresh and a restart, that is a panel fault — contact BOOX support with a photo.
recovery: >-
  All of these are settings changes and are safe to undo. The optimisation panel
  has a "reset" for each app, and the control centre lets you set the global mode
  back. Nothing here touches your books, notebooks or apps.
related:
  - text: "Make Android apps look right on the BOOX Note Air 4 C"
    href: /devices/boox/boox-note-air-4-c/guides/refresh-modes/
  - text: "Optimise a single app on the BOOX Note Air 4 C"
    href: /devices/boox/boox-note-air-4-c/customization/optimise-an-app/
---

If everything looks grey, fix the global refresh mode first. If it is one app,
that app needs its own optimisation set — and for plain text, switch it to
black-and-white for a sharper page. Ghosting that clears on a manual full
refresh is normal; a mark that never clears is a hardware issue.
