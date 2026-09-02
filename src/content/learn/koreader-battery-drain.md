---
title: "KOReader battery drain: causes and fixes"
summary: "KOReader should not noticeably shorten an e-reader's battery life. If it does, it is almost always Wi-Fi, the refresh setting, a plugin, or the frontlight — not the app itself."
category: koreader
lastUpdated: 2026-09-02
order: 21
---

An e-reader running KOReader should still last weeks, not days. If yours is
draining fast, work through these — roughly in order of how often they are the
cause.

## Wi-Fi left on

This is the big one. KOReader does not turn Wi-Fi off when it finishes syncing,
and an idle Wi-Fi radio is the largest drain on an e-reader by far.

- In **Network settings**, turn on **"turn off Wi-Fi after N minutes"** of
  inactivity, or **disable Wi-Fi on suspend**.
- If you do not use progress sync, OPDS or online dictionaries while reading,
  just leave Wi-Fi off and turn it on deliberately.

## Full refresh on every page

A full-screen flash costs more power than a partial update. Menu, then the gear,
then **Screen**, then the full-refresh interval. Every 1 page is the cleanest
image but the most power; every 6 pages is a common compromise. On a device that
does not ghost much, a higher number saves a real amount over a long book.

## The frontlight

Obvious, but easy to miss: KOReader's brightness and warmth are separate from the
stock reader's, and it is easy to leave it brighter than you need. Lower it, and
check the **auto-warmth / auto-brightness** settings are not fighting you.

## Statistics and other background work

- The **Statistics** plugin writes to a database on every page turn. The cost is
  small, but if you have a huge history it adds up; you can trim or disable it in
  its settings.
- **Auto-sync** in progress sync wakes Wi-Fi on every book open and close. Fine
  if Wi-Fi is managed as above; a drain if Wi-Fi then stays on.
- The **News downloader** or **Wallabag** plugins only run when you trigger them,
  but a scheduled fetch (if you set one up) will wake the radio.

## Suspend behaviour

KOReader relies on the device suspending properly when you put it down. If it is
not sleeping — screen stays warm, battery falls overnight — check:

- **"Sleep after N minutes"** is set and short.
- No plugin is holding the device awake (disable them one at a time for a day to
  find it).
- On BOOX and other Android devices, that Android's own battery settings are not
  keeping KOReader running in the background; restrict it there.

## A genuinely faulty battery

On an older device that will not hold charge no matter what, the cell is worn.
KOReader cannot cause that, and on many e-readers the battery is replaceable.

## The short version

Turn Wi-Fi off after a few minutes idle, set full refresh to every few pages
rather than every page, drop the frontlight, and make sure the device is
actually sleeping when you set it down.
