---
title: "How to install KOReader on any device: Kobo, Kindle, PocketBook, BOOX, Android and more"
summary: "Where to download KOReader safely, which package your device needs, and how the install works on each platform — including the honest answers for iPhone, iPad, Windows and the newest Kindles and Kobos."
category: koreader
lastUpdated: 2026-11-23
order: 10.5
relatedDevices:
  - libra-colour
  - clara-bw
  - paperwhite
  - boox-go-color-7
  - pocketbook-verse
  - remarkable-2
---

KOReader is free and open source (licensed under the AGPL-3.0). The current
stable release at the time of writing is **2026.07.1**, released in August 2026.
How you install it depends entirely on the device. On some it is a five-minute
copy. On others it needs an unlock first, or is not possible at all.

## Where to download it

- **The official sources** are the KOReader releases page on GitHub (linked from
  koreader.rocks, the project's website) and, for Android, **F-Droid**.
- **Pick a stable release**, named by date like "v2026.07.1", not a "nightly"
  build, unless you are chasing a specific fix.
- **KOReader is not on the Google Play Store.** The project's Android
  instructions say so. A Play listing claiming to be KOReader is not from the
  KOReader project.
- **There is no "KOReader.exe" for Windows** and no app for iPhone or iPad. Sites
  offering those are not offering the real thing.

## Kobo

The easiest platform. You copy a package to the Kobo over USB, and Kobo's own
software installs it on the next start-up. Nothing is replaced, and a KOReader
icon appears on the home screen.

- Newer Kobos (Libra Colour, Clara Colour and Clara BW) need the package with
  **"kobov5"** in its name. Older Kobos use the plain "kobo" package.
- KOReader's wiki recommends a bundle that includes the **KFMon** and
  **NickelMenu** launchers for new users. The [NickelMenu guide](/guides/nickelmenu/)
  explains the difference between the two.
- **An official Kobo update usually removes the KOReader icon.** Reinstalling the
  package brings it back. See [updating a Kobo](/guides/update-kobo-software/).
- **Kobo's optional 6.0 beta** (Libra Colour, Clara Colour, Clara BW): KOReader
  runs on it, but with reported bugs such as the battery showing 0%. If you rely
  on KOReader, skip the beta for now.

Step-by-step guides: [Libra Colour](/devices/kobo/libra-colour/koreader/install/),
[Clara BW](/devices/kobo/clara-bw/koreader/install/) and
[Sage](/devices/kobo/sage/koreader/install/).

## Kindle

Possible on many Kindles, but only after a **jailbreak**, an unlock that has to
match your exact model and firmware. In 2026 the jailbreak runs in the Kindle's
own browser, and KOReader then installs with **Kindle Package Manager (KPM)**.

- The current jailbreak covers firmware up to **5.19.6** on most Kindles from
  2022 and 2024.
- At the time of writing we have not found a public jailbreak for firmware 5.20
  or for the Kindles released in October 2026.
- A Kindle that updates itself loses the jailbreak, and KOReader with it.

Full background: [Installing KOReader on a Kindle in 2026](/guides/koreader-on-kindle-2026/).

## PocketBook

No unlock needed. KOReader's instructions are to download the **PocketBook**
package, unzip it, and copy its **applications** and **system** folders to the
top level of the device over USB, merging them with the folders already there.
KOReader then appears in the apps list as **@koreader**.

- On some models a PocketBook firmware update removes the KOReader icon. Copy the
  files again to restore it.
- As of August 2026, KOReader's wiki said the standard release could not be
  installed on the **PocketBook InkPad One**, which uses a different processor.
  Check the wiki for that model.
- PocketBook models that run Android use the Android route below.

Device guides: [our PocketBook pages](/devices/pocketbook/).

## Android phones, tablets and BOOX e-readers

KOReader is a normal Android app, so no unlock is needed. Install it from either
official source:

- **F-Droid**, the open-source app store. Install the F-Droid app, search for
  KOReader, and install. F-Droid builds and signs its own copy, and it needs
  Android 4.3 or newer.
- **The APK file from GitHub.** Download it on the device, allow "install unknown
  apps" for your browser or file manager when Android asks, and open the file.
  Choose the **arm** file unless you know you need **arm64** or **x86**. KOReader's
  own advice is to pick ARM unless you have a specific reason not to.

Do not mix the two: an F-Droid copy and a GitHub copy are signed differently, so
one will not update the other. Uninstall first if you switch.

On a BOOX, set the e-ink refresh mode for KOReader in BOOX's app settings
afterwards. See [our BOOX pages](/devices/boox/).

## reMarkable

Possible on every current model, but it means adding unofficial software.
KOReader's wiki recommends **reManager**, a free desktop app that installs mods
for you over SSH.

- **reMarkable 2:** SSH is built in, so no developer mode is needed and nothing
  is erased.
- **Paper Pro, Paper Pro Move and Paper Pure:** you must turn on developer mode
  first. reMarkable says that performs a factory reset, and it adds a permanent
  start-up warning.
- **Avoid Toltec**, the tool older guides recommend. It only supports reMarkable
  software up to 3.3, and KOReader's developers call that route outdated.
- **Mods do not start by themselves** after a restart. You start them again with
  a triple-press of the power button or from reManager.

Step-by-step guides: [reMarkable 2](/devices/remarkable/remarkable-2/koreader/install/),
[Paper Pro](/devices/remarkable/remarkable-paper-pro/koreader/install/),
[Paper Pro Move](/devices/remarkable/remarkable-paper-pro-move/koreader/install/) and
[Paper Pure](/devices/remarkable/remarkable-paper-pure/koreader/install/).

## Computers

- **Linux:** official AppImage, Flatpak (on Flathub) and Debian packages.
- **macOS:** at the time of writing there is no download on the releases page.
  Only development builds exist, and they are unsigned.
- **Windows:** no native version. KOReader's wiki describes running the Linux
  version through Windows Subsystem for Linux, which is a project, not an
  install.

## iPhone and iPad

There is no official KOReader for iOS or iPadOS. Apps in the App Store with
similar names are not KOReader.

## Is KOReader safe?

The official packages are safe in the ordinary sense: the code is public, it is
maintained by volunteers in the open on GitHub, and it is widely used.
The risks are about the route, not the app. Download only from the official
sources above. On a Kindle, the jailbreak is the risky part, and it can be undone
by a firmware update. On Kobo and PocketBook, KOReader sits alongside the stock
software and removing it is a matter of deleting its folder.
