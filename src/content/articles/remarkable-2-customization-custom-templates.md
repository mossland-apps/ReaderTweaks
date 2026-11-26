---
title: Custom templates on the reMarkable 2
pageSlug: custom-templates
device: remarkable-2
section: customization
type: guide
order: 1
summary: How to use the built-in template set, and how to add your own template images over SSH (no developer mode needed on this model) — with community tools that make it far easier on the reMarkable 2.
lastUpdated: 2026-11-25
datePublished: 2026-09-01
software: Codex firmware
difficulty: Advanced
estimatedTime: 30 minutes
lastTested: 2026-08-27
whatYouNeed:
  - reMarkable 2
  - For custom templates — an SSH connection over USB
  - A template image at the screen resolution, as PNG, plus optionally an SVG
searchTerms:
  - custom templates
  - add template
  - template png
  - templates.json
  - remarkable ssh templates
  - rmkit
  - planner template
  - cornell notes
related:
  - text: "reMarkable 2 customization"
    href: /devices/remarkable/remarkable-2/customization/
  - text: "Notebooks and handwriting conversion on the reMarkable 2"
    href: /devices/remarkable/remarkable-2/guides/notebooks-and-handwriting/
steps:
  - instruction: Use the built-in templates first
    detail: >-
      Open a notebook, open the page menu, and choose "Template". The built-in
      set is large — lined at several spacings, dotted, grid, checklists,
      planners, music, storyboard and more. Each page can use a different one, so
      try these first; most needs are covered.
  - instruction: Understand what a custom template is
    detail: >-
      A custom template is a full-screen background image the device draws behind
      your writing. reMarkable stores templates as PNG files plus an SVG, listed
      in a "templates.json" file. Adding one means placing the files and editing
      that list — which needs SSH access.
    warning: >-
      Editing system files over SSH can break the templates list or the UI if the
      JSON is malformed. Back up "templates.json" before you change it, and keep
      the device synced so your notebooks are safe.
  - instruction: Connect over SSH
    detail: >-
      The reMarkable 2 has SSH built in, with no developer mode and no wipe.
      Find the password under Settings, then Help, then Copyrights and licenses
      (on some software versions under About). Connect the USB cable and run
      "ssh root@10.11.99.1" with that password.
  - instruction: Copy your template image to the device
    detail: >-
      Prepare a PNG at 1404 by 1872 pixels with light-grey lines on white. From
      your computer, use "scp yourtemplate.png
      root@10.11.99.1:/usr/share/remarkable/templates/". Add a matching SVG in the
      same folder if you have one.
  - instruction: Register the template in templates.json
    detail: >-
      Edit "/usr/share/remarkable/templates/templates.json" and add an entry for
      your template — a name, the filename without extension, an icon code, and
      the categories it should appear under. Copy an existing entry's structure
      exactly and change the values.
  - instruction: Restart the interface and test
    detail: >-
      Restart the device, or the "xochitl" UI process, so it re-reads the list.
      Open a notebook, open the template picker, and your template should appear
      in the category you set.
  - instruction: Expect to re-apply after updates, or use a current tool
    detail: >-
      A reMarkable update can replace "templates.json" and remove your files,
      so keep copies and a note of your edits. Older helper tools were built on
      Toltec, which only supports reMarkable software up to 3.3 and can leave a
      newer tablet stuck at start-up. If you want automation, look for a
      template mod that supports your software version, for example in the
      reManager mod manager's catalogue.
---

For most people the built-in templates are enough. Adding your own is an
advanced job — SSH, copying files and hand-editing JSON — and a reMarkable
update can undo it. The reMarkable 2 at least needs no developer mode, so
nothing is erased to get started. If you only need one layout, sending it in as a PDF and writing on
that is still the simplest route.
