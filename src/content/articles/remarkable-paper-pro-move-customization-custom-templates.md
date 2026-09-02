---
title: Custom templates on the reMarkable Paper Pro Move
pageSlug: custom-templates
device: remarkable-paper-pro-move
section: customization
type: guide
order: 1
summary: How to use the built-in template set on the small screen, and how to add your own template images through developer mode and SSH.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Codex firmware
difficulty: Advanced
estimatedTime: 30 minutes
lastTested: 2026-08-27
whatYouNeed:
  - reMarkable Paper Pro Move
  - For custom templates — developer mode enabled and an SSH connection
  - A template image at the screen resolution, as PNG, plus optionally an SVG
searchTerms:
  - custom templates
  - add template
  - template png
  - templates.json
  - remarkable ssh templates
  - planner template
  - small screen template
related:
  - text: "reMarkable Paper Pro Move customization"
    href: /devices/remarkable/remarkable-paper-pro-move/customization/
  - text: "Notebooks and handwriting conversion on the reMarkable Paper Pro Move"
    href: /devices/remarkable/remarkable-paper-pro-move/guides/notebooks-and-handwriting/
steps:
  - instruction: Use the built-in templates first
    detail: >-
      Open a notebook, open the page menu, and choose "Template". The built-in
      set is large. On the 7.3-inch screen, favour the wider-spaced lined and
      dotted options and the simpler planners — dense grids and multi-column
      planners are cramped at this size.
  - instruction: Understand what a custom template is
    detail: >-
      A custom template is a full-screen background image the device draws behind
      your writing. reMarkable stores templates as PNG files plus an SVG, listed
      in a "templates.json" file. Adding one means placing the files and editing
      that list — which needs developer mode and SSH.
    warning: >-
      Editing system files over SSH can break the templates list or the UI if the
      JSON is malformed. Back up "templates.json" before you change it, and keep
      the device synced so your notebooks are safe.
  - instruction: Enable developer mode and connect over SSH
    detail: >-
      Turn on developer mode in Settings (this wipes the device, so sync and
      export first), then connect the USB cable and run "ssh root@10.11.99.1"
      with the password shown on the device's licenses screen.
  - instruction: Make the template at the Move's resolution
    detail: >-
      Prepare a PNG at the screen's pixel resolution with light-grey lines on
      white. A layout designed for a 10-inch tablet will look too fine on the
      Move — draw the lines a little heavier and further apart than you would for
      a big screen.
  - instruction: Copy the image and register it
    detail: >-
      Use "scp yourtemplate.png
      root@10.11.99.1:/usr/share/remarkable/templates/" to copy the file, add a
      matching SVG if you have one, then edit
      "/usr/share/remarkable/templates/templates.json" to add an entry — a name,
      the filename without extension, an icon code, and the categories it appears
      under. Copy an existing entry's structure exactly.
  - instruction: Restart the interface and test
    detail: >-
      Restart the device, or the "xochitl" UI process, so it re-reads the list.
      Open a notebook, open the template picker, and your template should appear
      in the category you set.
  - instruction: Expect to re-apply after firmware updates
    detail: >-
      A firmware update can replace "templates.json" and remove your files. Keep
      copies on your computer and a note of your JSON edits. This is more likely
      on the Move's newer platform, which updates often.
---

For most people the built-in templates are enough, and on the Move the wider,
simpler ones suit the screen best. Adding your own is an advanced job —
developer mode, SSH, copying files and hand-editing JSON — that a firmware
update can undo. If you only need one specific layout, sending it in as a PDF
and writing on that is far simpler.
