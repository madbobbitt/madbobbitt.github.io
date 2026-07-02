---
title: "The sprites are drawn at 1x"
date: 2026-07-01
project: bobbot
stage: seed
tags: [webcomic, pixel-art, backwork]
---

The b0b-bot webcomic cast exists as pixel sprites. The working model from day one: I'm the
creative director, the AI is the hands. The rule that made it work was writing direction
like I'm describing the image to someone who can draw but can't read my mind.

Pixel art has a scale trick to it. The actual sprite is tiny, a 1x grid you could fit on a
thumbnail. Everything you see is that grid blown up 8x or 12x. The vault has every version
at every scale: b0b-bot v2, v3, v4, each run kept its receipts.

<style>
  .sprite-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end; margin: 1rem 0; }
  .sprite-row figure { margin: 0; }
  .sprite-row figcaption { font-size: 0.8rem; opacity: 0.7; text-align: center; margin-top: 4px; }
  .sprite-row img { display: block; height: 200px; width: auto; image-rendering: pixelated; border-radius: 6px; border: 1px solid rgba(128,128,128,0.3); }
  .full-img { display: block; max-width: 100%; border-radius: 6px; border: 1px solid rgba(128,128,128,0.3); margin: 1rem 0; }
</style>
<div class="sprite-row">
  <figure><img src="/sprites/bobbot_v2_8x.png" alt="b0b-bot sprite v2 at 8x" loading="lazy"><figcaption>v2</figcaption></figure>
  <figure><img src="/sprites/bobbot_v3_8x.png" alt="b0b-bot sprite v3 at 8x" loading="lazy"><figcaption>v3</figcaption></figure>
  <figure><img src="/sprites/bobbot_v4_8x.png" alt="b0b-bot sprite v4 at 8x" loading="lazy"><figcaption>v4</figcaption></figure>
</div>

<img class="full-img" src="/sprites/bobbot_v4_compare_q.png" alt="b0b-bot v4 compare sheet" loading="lazy">

My favorite artifact from this run is CHpT's chest. The design is a yellow post-it note
with a gold header bar and a coffee-ring stain. The direction that locked it: "thin
semi-circle, not thick." That's the level of specific it takes.

<div class="sprite-row">
  <figure><img src="/sprites/chpt_v2d_headbody_8x.png" alt="CHpT with the post-it note chest" loading="lazy"><figcaption>CHpT, post-it chest, final</figcaption></figure>
</div>

One lesson that cost a few sessions: patching over a reference image produces garbage
(artifacts, residual colors, bleed). A clean rebuild from scratch on the same grid beats
the overlay approach every time.

<img class="full-img" src="/sprites/cast_lineup_v5_normalized.png" alt="Full cast lineup, v5" loading="lazy">

I am definitely going to need to find a better process, not happy with the initial
results.
