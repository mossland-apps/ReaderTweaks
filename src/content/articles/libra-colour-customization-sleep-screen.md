---
title: Change the sleep and power-off screens on the Kobo Libra Colour
pageSlug: sleep-screen
device: libra-colour
section: customization
type: guide
order: 2
summary: Replace the images the Libra Colour shows when it sleeps or powers off with your own, using a hidden settings menu and a folder on the device.
lastUpdated: 2026-08-25
datePublished: 2026-08-25
software: Kobo firmware
difficulty: Moderate
estimatedTime: 15 minutes
lastTested: 2026-08-23
whatYouNeed:
  - Kobo Libra Colour
  - A computer
  - A USB-C data cable
  - One or more images, ideally 1264 x 1680 pixels, as PNG or JPEG
searchTerms:
  - sleep screen
  - screensaver
  - standby image
  - power off screen
  - custom image
  - book cover sleep
  - developer settings
  - dev mode
related:
  - text: "Kobo Libra Colour customization"
    href: /devices/kobo/libra-colour/customization/
  - text: "Add your own fonts to the Kobo Libra Colour"
    href: /devices/kobo/libra-colour/customization/custom-fonts/
steps:
  - instruction: Understand the two options first
    detail: >-
      Out of the box, the Libra Colour can show the cover of the book you are
      reading when it sleeps — turn that on under Settings, then "Energy saving
      and privacy". This guide is for the other case: showing your own fixed
      images instead.
  - instruction: Prepare your images
    detail: >-
      The screen is 1264 by 1680 pixels. Images that match that size and are
      portrait-oriented look best. Convert them to greyscale PNG or JPEG first if
      you want to see exactly how they will appear, since the panel shows a
      limited range of grey.
  - instruction: Open the hidden developer settings
    detail: >-
      On the home screen, open the menu, then Settings, then "Device
      information". Tap the firmware version line repeatedly — about seven times
      — until a "Developer options" or "Developer settings" entry appears in the
      settings list.
    warning: >-
      Developer settings contain options that can disable Wi-Fi syncing or wipe
      data. Change only the one setting named in the next step and leave the rest
      alone.
  - instruction: Turn on custom screensaver images
    detail: >-
      In Developer settings, enable the option whose name mentions "screensaver"
      or "custom screensaver images". This tells the Libra Colour to look for a
      folder of images instead of using the built-in artwork.
  - instruction: Connect the device and add the images
    detail: >-
      Connect over USB and open the KOBOeReader drive. Open the ".kobo" folder
      (turn on "show hidden files" if you cannot see it), and inside it create a
      folder called "screensaver". Copy your images there.
  - instruction: Eject, unplug and test
    detail: >-
      Eject the drive safely and disconnect. Press the power button once to
      sleep the device. It should now show one of your images, picked at random
      if you added more than one. Power off fully to check the power-off screen
      as well.
  - instruction: To go back to the default
    detail: >-
      Return to Developer settings and turn the custom screensaver option off,
      or delete the images from the "screensaver" folder. The built-in artwork
      returns on the next sleep.
---

The Libra Colour keeps custom sleep images behind a developer menu that is
hidden by default. Reaching it means tapping the firmware version a few times,
which is a deliberate Kobo design so it is not changed by accident. Once the
option is on, the device simply displays whatever images you put in a
"screensaver" folder. If all you want is the cover of your current book, you do
not need any of this — that is a normal setting under "Energy saving and
privacy".
