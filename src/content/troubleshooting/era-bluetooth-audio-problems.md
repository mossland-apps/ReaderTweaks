---
title: Bluetooth audio drops out or won't pair on the PocketBook Era
pageSlug: bluetooth-audio-problems
device: pocketbook-era
software: PocketBook firmware
summary: >-
  Headphones will not pair, keep disconnecting, stutter during text-to-speech,
  or play through the speaker instead. Most causes are the pairing list, the
  codec, or power settings.
difficulty: Easy
estimatedTime: 15 minutes
lastTested: 2026-08-30
lastUpdated: 2026-09-01
searchTerms:
  - bluetooth won't pair
  - headphones not connecting
  - audio cutting out
  - tts stutter
  - bluetooth lag
  - pairing failed
  - audio through speaker
  - bluetooth keeps disconnecting
symptoms:
  - The Era does not find the headphones, or pairing fails partway.
  - Audio plays for a while, then the headphones disconnect.
  - Text-to-speech stutters or breaks up over Bluetooth.
  - Sound comes out of the built-in speaker even though headphones are connected.
  - Paired headphones will not reconnect the next day.
beforeYouStart:
  - Charge the headphones — low battery is the most common cause of drop-outs.
  - Know how to put your headphones into pairing mode (usually a held button until a light flashes).
  - Test the same headphones with a phone to confirm they are not at fault.
mostCommonCause: >-
  Bluetooth on an e-reader is a low-power radio and less robust than a phone's.
  The usual causes are a stale entry in the pairing list, the headphones being
  connected to another device at the same time, a weak signal through your body
  between the Era and the earbuds, or the Era's aggressive sleep cutting the
  connection.
decisionTree:
  question: What is happening?
  branches:
    - label: It will not pair at all
      hint: Clear the entry and pair fresh
      href: "#fix-1"
    - label: It pairs but keeps disconnecting or stuttering
      hint: Signal, battery or codec
      href: "#fix-2"
    - label: Sound plays through the speaker with headphones connected
      hint: Reselect the output device
      href: "#fix-3"
    - label: It will not reconnect automatically later
      hint: Re-pair and keep one source at a time
      href: "#fix-1"
fixes:
  - title: Clear the pairing and connect fresh
    rationale: >-
      A half-finished or stale pairing entry blocks a clean connection. Removing
      it and starting over fixes most "won't pair" cases.
    steps:
      - >-
        On the Era, open Settings, then Bluetooth. If your headphones are in the
        list, choose them and select "Unpair" or "Forget".
      - >-
        On the headphones, do a full reset if they support one (check their
        manual), or at least take them out of and back into pairing mode.
      - >-
        Turn the Era's Bluetooth off and on again, then scan and select the
        headphones. Confirm any prompt on both devices.
      - >-
        Make sure the headphones are not also connected to your phone or laptop —
        multipoint earbuds will often grab the last device. Disconnect them there
        first.
  - title: Stop drop-outs and stutter
    rationale: >-
      Once connected, drop-outs are almost always signal strength, headphone
      battery, or the Era trying to sleep.
    steps:
      - >-
        Keep the Era on the same side of your body as the headphones, or in a
        shirt pocket rather than a back pocket. E-reader Bluetooth is weak and
        your body blocks it.
      - Charge the headphones fully. Low battery causes exactly this pattern.
      - >-
        In Settings, set the auto-sleep and auto-power-off timers longer while
        listening, or disable them. If the Era sleeps, audio can pause or the
        link can drop.
      - >-
        Try a different pair of headphones. Some older or bass-heavy earbuds use
        a codec that the Era streams poorly; a plain pair often works better for
        speech.
  - title: Send sound to the headphones, not the speaker
    rationale: >-
      The Era has a real speaker, so it has an output choice. After a
      reconnection it sometimes defaults back to the speaker.
    steps:
      - >-
        Open the playback controls (in the reading menu for text-to-speech, or
        the audio player for a file) and look for an output or headphone icon;
        select the Bluetooth device.
      - >-
        If there is no such control, toggle Bluetooth off and on from Settings
        while audio is playing — it usually re-routes to the headphones.
      - >-
        As a last resort, restart the Era with the headphones on and connected,
        then start playback.
recovery: >-
  None of these steps affect your books or audiobook files. If Bluetooth still
  fails after a fresh pairing and a restart, and the same headphones work with a
  phone, the device may need a firmware update (Settings, then Software Update)
  or, rarely, service. You can still listen through the built-in speaker in the
  meantime.
related:
  - text: "Read aloud and play audiobooks on the PocketBook Era"
    href: /devices/pocketbook/pocketbook-era/guides/audio-and-tts/
  - text: "The PocketBook Era won't turn on or is frozen"
    href: /devices/pocketbook/pocketbook-era/troubleshooting/wont-turn-on/
---

Most Bluetooth trouble on the Era clears by forgetting the headphones and
pairing fresh, with the headphones disconnected from every other device first.
Drop-outs during listening are signal or battery: keep the Era close to the
headphones, charge them, and stop the Era sleeping mid-chapter. When all else
fails, the built-in speaker still works.
