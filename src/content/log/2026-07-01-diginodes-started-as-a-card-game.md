---
title: "DigiNodes started as a card game for my mom"
date: 2026-07-01
project: diginodes
stage: seed
tags: [diginodes, design, backwork]
---

DigiNodes didn't start as DigiNodes. It started because Mille Bornes was the game my mom
and I played when I was a kid, before the atari or the nintendo, and I wanted to see if I
could make a version we could play online.

Mille Bornes is a 1954 French card game: race 1000 miles while your opponents throw
hazards at you, play remedies, keep moving. The mechanics are public domain. The theme is
the part I swapped out: an AI agent trying to complete a task across a network. 1000 nodes
instead of 1000 miles. Hazards became firewalls, corrupted memory, forced reboots. The
coup-fourré, the game's big counter-move, became the agent waking up.

The name took 4 tries. Mille Bot, then Million Nodes, then MilliNodes, then DigiNodes.
Naming was harder than the deck math. The logo art went through the same churn, all 4
still runnable (click one to open it live):

<style>
  .logo-board { display: flex; flex-wrap: wrap; gap: 12px; margin: 1rem 0; }
  .logo-board figure { margin: 0; }
  .logo-board figcaption { font-size: 0.8rem; opacity: 0.7; text-align: center; margin-top: 4px; }
  .mini { position: relative; overflow: hidden; border-radius: 6px; border: 1px solid rgba(128,128,128,0.3); }
  .mini img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .mini iframe { border: 0; pointer-events: none; transform-origin: top left; }
  .mini a { position: absolute; inset: 0; z-index: 1; }
</style>
<div class="logo-board">
  <figure>
    <div class="mini" style="width:330px;height:186px">
      <a href="/teasers/mille_nodes_logo_v1.html" target="_blank" rel="noopener"><img src="/teasers/mille_nodes_logo_v1.png" alt="Mille Nodes logo v1" loading="lazy"></a>
    </div>
    <figcaption>v1 - Mille Nodes</figcaption>
  </figure>
  <figure>
    <div class="mini" style="width:330px;height:186px">
      <a href="/teasers/mille_nodes_logo_v2.html" target="_blank" rel="noopener"><img src="/teasers/mille_nodes_logo_v2.png" alt="Mille Nodes logo v2" loading="lazy"></a>
    </div>
    <figcaption>v2 - Mille Nodes</figcaption>
  </figure>
  <figure>
    <div class="mini" style="width:330px;height:186px">
      <a href="/teasers/million_nodes_logo_v3.html" target="_blank" rel="noopener"><img src="/teasers/million_nodes_logo_v3.png" alt="Million Nodes logo v3" loading="lazy"></a>
    </div>
    <figcaption>v3 - Million Nodes</figcaption>
  </figure>
  <figure>
    <div class="mini" style="width:330px;height:186px">
      <a href="/teasers/million_nodes_logo_v4.html" target="_blank" rel="noopener"><img src="/teasers/million_nodes_logo_v4.png" alt="Million Nodes logo v4" loading="lazy"></a>
    </div>
    <figcaption>v4 - Million Nodes (animated, click to run)</figcaption>
  </figure>
</div>

The look was locked early: Tron and OutRun. Glowing grid, dark room, that specific 80s
arcade neon. The first "coming soon" teaser I made went to my mom before anyone else:
<a href="/teasers/millinodes_teaser.html" target="_blank" rel="noopener">the MilliNodes teaser</a>,
and later <a href="/teasers/diginodes_teaser_v1.html" target="_blank" rel="noopener">the DigiNodes version</a>.

The simple card game version shipped first. The robot version is next.
