---
title: The basic Kindle won't connect to Wi-Fi
pageSlug: wifi-wont-connect
device: kindle-basic
software: Kindle firmware
summary: >-
  The entry Kindle will not join your network, drops the connection, or connects
  but cannot download books. Most cases are the router, the password, or a Kindle
  that needs a restart.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-28
lastUpdated: 2026-08-30
searchTerms:
  - wifi not working
  - wont connect to wifi
  - kindle no internet
  - unable to connect
  - wifi keeps dropping
  - cant download books
  - 5ghz
  - captive portal
symptoms:
  - The Kindle shows "Unable to connect" when you pick your network.
  - It connects, then loses the connection after a few minutes.
  - Wi-Fi shows as connected but books and samples will not download.
  - Your home network does not appear in the list at all.
beforeYouStart:
  - Note the Wi-Fi band your network uses — many Kindles connect only to 2.4 GHz, not 5 GHz.
  - Have your Wi-Fi password to hand and check it for capital letters and symbols.
  - Know that none of these steps erase your books or settings.
mostCommonCause: >-
  The most common cause is the network itself rather than the Kindle — usually a
  5 GHz-only network, a mistyped password, or a router that has stopped handing
  out addresses and needs a restart. A close second is a Kindle that has been
  awake for a long time and needs a restart of its own.
decisionTree:
  question: What exactly happens?
  branches:
    - label: My network is not in the list
      hint: Likely a 5 GHz-only network, or the router is hiding its name
      href: "#fix-1"
    - label: It says "Unable to connect" when I choose the network
      hint: Usually the password or the router
      href: "#fix-2"
    - label: It connects but drops out, or nothing downloads
      hint: Restart both devices, then check the account
      href: "#fix-3"
    - label: It only fails on one network, such as a hotel or office
      hint: A sign-in page the Kindle cannot show
      href: "#fix-3"
fixes:
  - title: Make sure the Kindle can see your network
    rationale: >-
      Kindles connect to the 2.4 GHz band. If your router only broadcasts 5 GHz,
      or broadcasts both under the same name and steers the Kindle to 5 GHz, the
      network may not appear or may refuse the connection.
    steps:
      - >-
        In your router settings, confirm that 2.4 GHz is switched on. If the two
        bands share one name, try giving the 2.4 GHz band its own name
        temporarily and connect the Kindle to that.
      - >-
        If your network name is hidden, on the Kindle choose "Wi-Fi Networks",
        then "Enter Wi-Fi network" (or the plus icon), and type the exact name
        and password yourself.
      - >-
        Move the Kindle closer to the router for the first connection. E-ink
        devices have weaker antennas than a phone.
    note: >-
      Some routers have a "legacy device" or "compatibility" mode for older
      2.4 GHz gear. Turning it on can fix a Kindle that keeps failing.
  - title: Rule out the password and the router
    rationale: >-
      "Unable to connect" almost always means the Kindle reached the router but
      was rejected, which points to the password or to the router refusing new
      devices.
    steps:
      - >-
        Re-enter the password slowly. Tap the "show password" box so you can see
        it. Watch for a capital letter at the start, a zero versus the letter O,
        and a one versus a lower-case L.
      - >-
        Restart your router — unplug it for 30 seconds and let it fully start
        again. This clears a router that has run out of addresses to give out.
      - >-
        On the Kindle, tap your network name, choose "Forget", then connect to it
        again from scratch.
      - >-
        If you use MAC address filtering on your router, add the Kindle's Wi-Fi
        MAC address (Settings, then Device Options, then Device Info) to the
        allowed list.
  - title: Restart both devices, then check downloads
    rationale: >-
      A connection that works but drops, or that downloads nothing, is usually
      fixed by restarting the Kindle and the router. If downloads still fail
      afterwards, the problem is the Amazon account link, not the network.
    steps:
      - >-
        Restart the Kindle from Settings, then Device Options, then Restart. Do
        the same for your router.
      - >-
        Once reconnected, open Settings and choose "Sync". Then try downloading a
        book from your Library.
      - >-
        If Wi-Fi is fine but nothing downloads, open "Manage Your Content and
        Devices" on Amazon's website and confirm the Kindle is listed and
        registered to your account. Deregister and register it again if it looks
        wrong.
      - >-
        On a hotel or office network that shows a sign-in page, the Kindle's basic
        browser often cannot load it. Use your phone to sign in to that network
        first, or use a phone hotspot instead.
recovery: >-
  None of these steps remove content. If you deregistered the Kindle and cannot
  register it again, connect it to a computer by USB to keep reading books that
  are already on it, and try registration later. A full "Reset" from Device
  Options is a last resort and erases downloaded books, though not your Amazon
  purchases, which can be downloaded again.
related:
  - text: "Books bought or sent aren't showing up on the basic Kindle"
    href: /devices/kindle/kindle-basic/troubleshooting/books-not-showing/
  - text: "Set up a new basic Kindle"
    href: /devices/kindle/kindle-basic/guides/first-setup/
---

Work through the fixes in order unless the decision tree points you to a specific
one. Fix 1 and Fix 2 together resolve almost every "will not connect" case on a
home network; Fix 3 is for connections that form but do not hold.
