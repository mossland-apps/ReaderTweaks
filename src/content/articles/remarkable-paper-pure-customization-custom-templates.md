---
title: Custom templates on the reMarkable Paper Pure
pageSlug: custom-templates
device: remarkable-paper-pure
section: customization
type: guide
order: 1
summary: How to use the built-in template set, and how to add your own template images through developer mode and SSH.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Codex firmware
difficulty: Advanced
estimatedTime: 30 minutes
lastTested: 2026-08-27
whatYouNeed:
  - reMarkable Paper Pure
  - For custom templates — developer mode enabled and an SSH connection
  - A template image at the screen resolution, as PNG, plus optionally an SVG
searchTerms:
  - custom templates
  - add template
  - template png
  - templates.json
  - remarkable ssh templates
  - planner template
  - cornell notes
related:
  - text: "reMarkable Paper Pure customization"
    href: /devices/remarkable/remarkable-paper-pure/customization/
  - text: "Notebooks and handwriting conversion on the reMarkable Paper Pure"
    href: /devices/remarkable/remarkable-paper-pure/guides/notebooks-and-handwriting/
steps:
  - instruction: Use the built-in templates first
    detail: >-
      Open a notebook, open the page menu, and choose "Template". The built-in
      set is large — lined at several spacings, dotted, grid, checklists,
      planners, music, storyboard and more. Each page can use a different one, so
      try these before going further; most needs are covered.
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
  - instruction: Copy your template image to the device
    detail: >-
      Prepare a PNG at the screen resolution with light-grey lines on white. From
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
  - instruction: Expect to re-apply after firmware updates
    detail: >-
      A firmware update can replace "templates.json" and remove your files. Keep
      copies on your computer and a note of your JSON edits so you can re-add them
      quickly. This is more likely on the Paper Pure's newer platform, which
      updates often. Community tools exist to automate re-applying templates.
---

For most people the built-in templates are enough, and adding your own is an
advanced job: developer mode, SSH, copying image files, and hand-editing a JSON
list, all of which a firmware update can undo. If you only need one specific
layout, sending it in as a PDF and writing on that is a far simpler route than a
true custom template.
