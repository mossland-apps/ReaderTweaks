---
title: Custom templates on the reMarkable 2
pageSlug: custom-templates
device: remarkable-2
section: customization
type: guide
order: 1
summary: How to use the built-in template set, and how to add your own template images through developer mode and SSH — with community tools that make it far easier on the reMarkable 2.
lastUpdated: 2026-09-01
datePublished: 2026-09-01
software: Codex firmware
difficulty: Advanced
estimatedTime: 30 minutes
lastTested: 2026-08-27
whatYouNeed:
  - reMarkable 2
  - For custom templates — developer mode enabled and an SSH connection
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
  - instruction: Consider a community tool to manage this
    detail: >-
      The reMarkable 2 has mature helper tools that copy templates and re-apply
      the JSON edits for you, including after a firmware update wipes them. If you
      add templates regularly, one of these saves a lot of repeated SSH work —
      look in the reMarkable community resources for a current one.
---

For most people the built-in templates are enough. Adding your own is an
advanced job — developer mode, SSH, copying files and hand-editing JSON — but
the reMarkable 2's long-standing community means there are well-tested helper
tools that automate it and survive firmware updates, which the newer models do
not yet have. If you only need one layout, sending it in as a PDF and writing on
that is still the simplest route.
