# Qards Next · v0.5.0-alpha.1

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
