# Qards

A sleek, browser-based presentation studio where every slide is a **qard**.

[Open the Qards web app](https://averydimbulb79.github.io/Qards/)

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
