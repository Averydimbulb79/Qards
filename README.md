# Qards

A sleek, browser-based presentation studio where every slide is a **qard**.

[Open the Qards web app](https://averydimbulb79.github.io/Qards/)

## Version 0.4.0 · Local-first project foundation

- Began the individual-use professional editor milestone; no accounts, collaboration or server required.
- Introduced IndexedDB persistence for the active project, with a localStorage fallback.
- Project writes are debounced and the header indicates save status.
- Added `.qards` project export (versioned JSON document), retaining editable objects, templates, transitions and slide settings.
- Import now accepts `.qards` as well as earlier JSON project exports, with file validation.
- Existing localStorage documents are preserved for compatibility.
- This is the first part of v0.4: modularisation, rich media, layers, snapping and other advanced editing capabilities are still planned.
- Note: `.qards` is currently a versioned JSON document, not yet a bundled ZIP/media package.

## Version 0.3.1 · Template engine foundation

- Templates now open a gallery rather than immediately replacing the current Qard.
- Eight built-in designs: Editorial, Midnight, Terracotta, Botanical, Lavender, Sunset, Monochrome and Ocean.
- Each preset includes a gradient background, coordinated foreground/accent palette and paired fonts.
- **Add Qard** creates a new editable slide with the selected template, preserving existing slides.
- **Style Current** applies a design to the active slide without replacing its text objects (existing objects are restyled).
- Template background and ID are stored with the Qard, included in autosave and JSON export, and rendered in presentation mode.
- Changing the background colour manually removes the template gradient.
- This is the initial preset engine; user-defined templates, detailed layout variants and template editing remain future work.

## Version 0.3.0 · Ribbon redesign and first Qard template

- Reorganised ribbon into File, Home, Insert, Design, Transitions and View, with compact consistent SVG icons and visible command labels.
- Home: Undo/Redo, New Qard, Duplicate, Delete Qard and Inspector.
- Insert: Add Text Box and the first reusable **Title Qard** template.
- Design: Title Qard template and background inspector shortcut.
- Transitions: effect, duration and Apply to All, with the inspector values kept in sync.
- View: Fullscreen workspace, Inspector and Present.
- File: JSON import/export, Save locally and New presentation.
- **Title Qard** inserts an editable title and subtitle layout on the current Qard. Applying the template replaces that Qard's existing text objects; undo is available.
- Existing deck data and editing features are preserved; unavailable features are not shown as active commands.

## Version 0.2.10 · Object control styling

- Restyled the text-box delete control as a compact neutral icon.
- Aligned its border, colour and hover treatment with Qards' blue selection controls.
- Preserved one-click deletion and keyboard accessibility.

## Version 0.2.9 · Inline delete and transition presets

- Selected text boxes display an × button at their top-right corner for immediate deletion.
- Added Dissolve, Wipe, Push and Split to the transition presets.
- Apply transition to all Qards copies the current Qard's effect and duration across the deck.
- Transition choices and durations persist in autosave and editable JSON.

## Version 0.2.8 · Text object manipulation

- Delete the selected text box using the inspector button or Delete/Backspace outside text editing.
- Rotate text boxes using the circular rotation handle or a precise angle field.
- Rotation is preserved in autosave, JSON exports and slideshow rendering.
- Selection styling now follows the focused text box.

## Version 0.2.7 · PowerPoint-style presenting

- Presentation slides use the full viewport while preserving the 16:9 aspect ratio.
- Click the slide or press Right Arrow to advance; Left Arrow returns to the previous Qard.
- Space, Enter and Page Down also advance; Escape exits the slideshow.
- Presenter controls fade away until hovered or focused.
- Text scales proportionally with the presentation viewport.

## Version 0.2.6 · Presentation and fullscreen

- Presenter now navigates all Qards with on-screen previous/next buttons.
- Keyboard controls: arrows, Space, Page Up/Down and Escape.
- Per-Qard entrance transitions: None, Fade, Slide Left, Slide Right and Zoom.
- Configurable transition duration (100–3000 ms), retained in autosave and JSON export.
- Separate fullscreen editor control in the header and View ribbon.
- Reduced-motion preference disables transition animations.

## Version 0.2.5 · Ribbon workspace

- Replaced the crowded single-row toolbar with Home, Insert, Design and View tabs.
- Grouped frequent actions as compact icon controls; import/export moved into a File dropdown.
- Added a version badge beside the Qards logo and moved autosave status to the top-right header.
- Reserved ribbon sections for future shapes, media, themes and presentation features.

## Version 0.2.4 · Alignment icons

- Replaced Left, Centre and Right text alignment labels with compact SVG icons.
- Added hover tooltips, accessible labels and selected-state highlighting.

## Version 0.2.3 · Inspector visibility fix

- Restored the missing Text Inspector HTML container required by the typography editor.
- Added a visible **Text Inspector** toolbar toggle.
- Responsive inspector stays available as a slide-out panel on narrow windows.
- Fixes the JavaScript rendering error caused by the missing inspector container.

## Version 0.2.2 · Text editing fix

- Clicking inside a text box now focuses editable text without triggering drag capture.
- Move text boxes using the Move handle; resize with the bottom-right handle.
- Existing typography inspector and autosave are retained.

## Branding update

- Uses the uploaded approved Qards PNG wordmark in light and dark modes.
- Uses the uploaded PNG favicon rather than the earlier approximate SVG.

## Version 0.2.1 · Advanced typography

- Google Fonts selector (38 families) alongside system fonts, loaded on demand when online.
- Per-text-box font family, size, colour, bold, italic and underline.
- Adjustable leading (line height) and kerning/tracking (letter spacing).
- Configurable text shadow with X/Y offsets, blur and colour.
- Typography settings retained in browser autosave and editable JSON exports.
- Offline use falls back to installed fonts when web fonts are unavailable.

## Version 0.2.0 · Editable text objects

- Select, drag and resize text boxes on the qard.
- Add and delete independent text objects.
- Inspector controls for position, dimensions, font family, font size, text colour, bold, italic and alignment.
- Autosave and editable JSON export now retain object geometry and formatting.
- Older v0.1 slides migrate to the object model when opened.

## Version 0.1.1 · Visual refresh

- Rebuilt the workspace with a dedicated navigation rail and refined editor panels.
- Added branded square-Q SVG wordmarks for light and dark modes, plus favicon.
- Retained the existing editor features and local document storage.

## Version 0.1 · Foundation

- Elegant presentation workspace with squarish Q wordmark
- Light and dark interface themes
- Editable slide titles and subtitles
- Qard thumbnails, add, duplicate, and delete
- Basic layouts and slide colours
- Undo and redo, browser autosave
- Editable JSON export and import
- Full-screen slide preview

## Getting started

Open `index.html` in a modern browser. No installation or build process is needed. To publish, enable GitHub Pages from the `main` branch and repository root in Settings → Pages.

## Roadmap

| Release | Focus |
| --- | --- |
| 0.1 | App foundation and branding |
| 0.2 | Rich text, objects, alignment, drag-and-drop |
| 0.3 | Template library and theme engine |
| 0.4 | Images, shapes, charts, tables, speaker notes |
| 0.5 | Transitions, animations, presenter experience |
| 0.6 | Import/export enhancements and file reliability |
| 0.7 | Smart layouts, reusable components and polish |
| 1.0 | Stable presentation editor release |

## Development conventions

Each release updates this README. Preserve a recoverable Git commit before modifying existing working code. Prefer small, testable updates with stable data compatibility.

MIT licensed.
