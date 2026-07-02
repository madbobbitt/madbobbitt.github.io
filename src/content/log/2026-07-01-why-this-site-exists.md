---
title: "Why this site exists (and why it was built in an afternoon)"
date: 2026-07-01
project: portal
stage: seed
tags: [meta, architecture, ai-assisted]
---

First entry -

Long time developer, but recently 'leveled-up' with the advancements in AI assistance. The
uncomfortable truth about the current state of creative work: "made with AI" reads as
"low effort" to a lot of people, and sometimes they're right. The answer isn't to hide
the tool. It's to show the work.

So this site has one structural rule: **every finished thing links back to the log entries
that built it.** Design decisions, rejected options, scope cuts, failure modes.

Some notes on this first build, in that spirit:

- **Stack:** Astro. The site is markdown files rendered to static HTML, a devlog entry is
  literally a file dropped in a folder. Next.js was considered and rejected: there's no
  server logic here, and shipping a React runtime to render text is overkill.
- **Scope:** five pages and a play directory. There's a well-known trap where a personal
  site becomes a "digital garden" with bidirectional links, confusing navigation,
  exciting UI elements for the sake of having them, and zero published entries. I took exactly one idea from that world
  (the seed/growing/evergreen badge you see on entries) and fenced off the rest.
- **Process:** scoped in conversation with an AI against my own project notes, scaffolded
  by the AI, reviewed and directed by me. Total elapsed time: one session.

Setting this site up in one afternoon - basically free. Having a working developer's log
to track progress - priceless.
