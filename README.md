# portal_site

Personal portal: author portal + devlog + app/game showcase. Astro, static, local-first.
Scope doc: mdb_vault `_system/domains/jaijai/projects/2026-07-01_PORTAL_SITE_V1_SCOPE.md`.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
```

## Publish a devlog entry
Drop a markdown file in `src/content/log/` with frontmatter:
```
---
title: "..."
date: 2026-07-02
project: quest-planner   # optional
stage: seed              # seed | growing | evergreen
tags: []
---
```

## Later (when the domain is earned)
`npm run build` → static `dist/`; set `site` in astro.config.mjs; deploy to GitHub Pages.
