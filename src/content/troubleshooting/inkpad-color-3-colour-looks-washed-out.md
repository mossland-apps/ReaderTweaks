---
title: Colour looks washed out or grainy on the PocketBook InkPad Color 3
pageSlug: colour-looks-washed-out
device: pocketbook-inkpad-color-3
software: PocketBook firmware
summary: >-
  Colours look pale, greyish or speckled, or plain text looks softer than you
  expected. Some of this is how Kaleido 3 works; the rest is settings.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-30
lastUpdated: 2026-09-01
searchTerms:
  - colour washed out
  - colours pale
  - kaleido grainy
  - colour dull
  - text blurry colour screen
  - saturation
  - colour banding
  - grid pattern
  - front light colour
symptoms:
  - Colours look pale or greyish next to a phone or a printed page.
  - A faint grid or speckle is visible over colour images.
  - Plain black text looks slightly soft or dim.
  - Colours look better or worse depending on the front-light setting.
  - A colour photo shows visible bands instead of smooth gradients.
beforeYouStart:
  - Some of this is the display technology, not a fault — read the "what is normal" note below.
  - Compare in good ambient light with the front light low; colour e-ink relies on reflected light.
  - None of these steps change your files.
mostCommonCause: >-
  Kaleido 3 puts a colour filter over a black-and-white panel, so colour is
  always muted, lower-resolution and slightly textured compared with a backlit
  screen — that is inherent. On top of that, three settings make a real
  difference: the colour/black-and-white mode, the saturation and contrast
  controls, and the front-light level and tone.
decisionTree:
  question: What bothers you most?
  branches:
    - label: Plain text looks soft or dim
      hint: Switch to black-and-white mode for text
      href: "#fix-1"
    - label: Colour images look flat or pale
      hint: Adjust saturation and contrast
      href: "#fix-2"
    - label: A grid or speckle over colour, or colour shifts with the light
      hint: This is mostly normal — tune the light
      href: "#fix-3"
    - label: Everything looks worse than a review photo
      hint: Reviews use bright even light; match that
      href: "#fix-3"
fixes:
  - title: Use black-and-white mode for anything without colour
    rationale: >-
      The colour filter dims and slightly softens the whole screen. Turning it
      off for text restores the full 300-ppi sharpness and a cleaner front light.
    steps:
      - >-
        Open the control panel (swipe down) or Settings and find the colour /
        black-and-white screen toggle. Set it to black-and-white for novels and
        documents.
      - >-
        Put that toggle on a button long-press (see the key-mapping guide) so
        switching is one press when you move between a comic and a novel.
      - >-
        In black-and-white mode, also check the reading font weight and the
        "bold text" option if text still looks light.
  - title: Tune saturation and contrast for colour content
    rationale: >-
      The stock colour rendering is deliberately conservative. A modest boost
      makes scans and comics look much better without going lurid.
    steps:
      - >-
        Open a colour comic or PDF, tap the top centre, and find the "colour
        enhancement" or saturation control. Raise it a notch or two and see how
        skin tones look — back off if they go orange.
      - Raise contrast slightly for faint or old print; stop before thin lines break up.
      - >-
        For a whole-library effect, some firmware has a global colour/saturation
        setting under Settings, then the display or "Colour" section.
      - >-
        Do a full screen refresh after big changes (button long-press, or the
        control panel) so you judge a clean page.
  - title: Get the lighting right, and know what is normal
    rationale: >-
      Colour e-ink shows its best in bright, even, natural-ish light. A faint
      regular texture over colour and a slight colour cast from the front light
      are characteristics of the panel, not defects.
    steps:
      - >-
        Read colour content in good ambient light. Unlike black-and-white e-ink,
        Kaleido looks noticeably duller in a dim room.
      - >-
        Set the front light bright enough but neutral — a very warm tone tints
        colours yellow, a very cool tone makes them look grey. A middle warm-tone
        setting is usually best for colour.
      - >-
        Expect muted colour, a faint screen-door texture on saturated areas, and
        gentle banding in gradients. Every Kaleido 3 device shows these.
      - >-
        A genuine fault looks different: a permanent coloured line or blotch, a
        patch that never refreshes, or colour only on half the screen. That is
        worth contacting PocketBook about, with a photo.
recovery: >-
  Every setting here is reversible from the same menu. If you think the panel is
  actually faulty rather than just modest, a firmware update (Settings, then
  Software Update) sometimes improves colour processing; otherwise contact
  PocketBook support with photos in good light.
related:
  - text: "Get the best from the colour screen on the PocketBook InkPad Color 3"
    href: /devices/pocketbook/pocketbook-inkpad-color-3/guides/colour-and-comics/
  - text: "Remap the page-turn buttons on the PocketBook InkPad Color 3"
    href: /devices/pocketbook/pocketbook-inkpad-color-3/customization/key-mapping/
---

Muted, slightly textured colour is how Kaleido 3 works — it is a calm colour
reader, not a tablet. Within that, read plain text in black-and-white mode for
full sharpness, give colour content a small saturation and contrast bump, and
read colour in good light with a neutral front-light tone. A permanent coloured
mark or a half-colour screen is a different matter and worth a support ticket.
