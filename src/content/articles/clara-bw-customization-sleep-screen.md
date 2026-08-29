---
title: Change the sleep and power-off screens on the Kobo Clara BW
pageSlug: sleep-screen
device: clara-bw
section: customization
type: guide
order: 2
summary: Replace the images the Clara BW shows when it sleeps or powers off with your own, using a hidden settings menu and a folder on the device.
lastUpdated: 2026-08-27
datePublished: 2026-08-27
software: Kobo firmware
difficulty: Moderate
estimatedTime: 15 minutes
lastTested: 2026-08-25
whatYouNeed:
  - Kobo Clara BW
  - A computer
  - A USB-C data cable
  - One or more images, ideally 1072 x 1448 pixels, as PNG or JPEG
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
  - text: "Kobo Clara BW customization"
    href: /devices/kobo/clara-bw/customization/
  - text: "Add your own fonts to the Kobo Clara BW"
    href: /devices/kobo/clara-bw/customization/custom-fonts/
steps:
  - instruction: Understand the two options first
    detail: >-
      Out of the box, the Clara BW can show the cover of the book you are reading
      when it sleeps — turn that on under Settings, then "Energy saving and
      privacy". This guide is for the other case: showing your own fixed images
      instead.
  - instruction: Prepare your images
    detail: >-
      The Clara BW screen is 1072 by 1448 pixels. Portrait images that match
      that size look best. Convert them to greyscale PNG or JPEG first if you
      want to see exactly how they will appear, since the panel shows a limited
      range of grey.
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
      or "custom screensaver images". This tells the Clara BW to look for a
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

The Clara BW keeps custom sleep images behind a developer menu that is hidden by
default. Reaching it means tapping the firmware version a few times, which is a
deliberate Kobo design so it is not changed by accident. Once the option is on,
the device simply displays whatever images you put in a "screensaver" folder. If
all you want is the cover of your current book, you do not need any of this —
that is a normal setting under "Energy saving and privacy". Note that the image
size for the Clara BW's 6-inch screen is smaller than for the larger Kobo
models, so images made for a Libra will be scaled.
