# Qards Next · v0.5.0-alpha.2

An **isolated prototype** on `develop/smart-qards-engine`. The existing GitHub Pages app is unchanged.

## Run

```sh
cd next
npm install
npm run dev
npm test
npm run build
```

## Implemented

- React + TypeScript + Vite scaffold.
- Konva rendering of one Smart Qard type (Feature Cards).
- Add/remove/edit cards and automatic grid reflow.
- A basic freeform drag experiment (not persisted).
- Pure layout-function tests.

## Limitations

This is **not yet** a production editor or a complete 96-type library. No production integration, import/export, project persistence, slide thumbnails, transitions, accessibility validation or browser QA. Dependencies have not yet been installed or benchmarked in the execution environment. The prototype's freeform mode does not preserve dragged positions.

## Architecture decisions pending

- Compare custom React/Konva prototype with PPTist-based integration before committing to migration.
- Add versioned shared document schema and content overflow policy.
- Introduce Yoga for complex constraints, Dagre for diagrams, ECharts for charts and PptxGenJS for export only after adapter tests.
- Preserve `main` as the current stable application until parity tests pass.

## Alpha 2 changes

- Added `src/document.ts`: versioned typed presentation, slide, object, background and content schema.
- Added `src/layout.ts`: reusable grid/stack/row layout calculations, layout variants, content overflow warnings and conversion of Smart Qards to freeform text objects.
- Adapted the initial Feature Cards prototype to the new schema.
- Extended unit tests for document validation, conversion and alternate layouts.

**Still unverified:** npm installation, TypeScript compilation, unit test execution and browser rendering. This branch is intentionally not deployed to GitHub Pages.
