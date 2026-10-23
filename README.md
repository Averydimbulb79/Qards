# Qards

A browser-based presentation studio for designing and presenting slide-based **qards**.

**[Open Qards](https://averydimbulb79.github.io/Qards/)** · [Source](https://github.com/Averydimbulb79/Qards)

## Current status

Web-first development on `main`. The previous application is preserved in [legacy/](legacy/) and in the complete [pre-transition backup](../../tree/backup/pre-web-first-main). Desktop packaging will follow acceptance of the web version.

## Capabilities

- Slide editing, presentation playback, and responsive layouts.
- Text, backgrounds, gradients, illustrated templates, and design controls.
- File ribbon, project saving/export, and local editing history.

## Planned improvements

Smart Qards, richer layout categories, more consistent editing/presentation rendering, and further performance and UX refinement. Planned features should not be mistaken for working controls.

## Development policy

Develop incremental releases on `main`, keep backup checkpoints, test the hosted web application, and document release changes in the changelog or commit history.

## Smart Qards studio preview (UI refinement)

[Open Smart Qards preview](https://averydimbulb79.github.io/Qards/smart-preview/) — experimental preview alongside the main editor. Updated with the existing Qards logo and navy palette, an icon-led navigation rail, collapsible layout library, content/design inspector tabs, grouped toolbar, hover tooltips, and responsive panel layout. The preview is not yet a replacement for the main editor. The browser deployment and interaction tests remain to be verified.

## Integrated Smart Qards beta

[Open integrated preview](https://averydimbulb79.github.io/Qards/integrated-preview/) — a separate, experimental build using the original Qards interface and assets, with a Smart Qards ribbon, six starter layouts, a layout library, structured item editing, column reflow, and freeform conversion. Smart objects are represented by native slide text objects and persist in the existing project JSON. The production editor remains unchanged. **Browser verification is pending**; this is not a production-ready release.

Backup checkpoint: [`backup/pre-smart-qards-integration-20261023`](../../tree/backup/pre-smart-qards-integration-20261023). The standalone Smart Qards prototype remains available for comparison.
