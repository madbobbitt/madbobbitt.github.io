---
title: "Math is Fun"
date: 2026-08-12
project: kaiju-defense
stage: seed
tags: [kaiju-defense, godot, gamedev, design, balance]
---

After my first real play through with most of the early base objects, I noticed the pacing was off. I had the enemy firing two missiles pretty early, and the maps felt very small after a few early 'pings'.

The 'math' seemed off too. Waiting prolonged periods of time to gather the energy to fire missiles, something was wrong beyond the feeling. I hit up Google to see if the actual Metal Marines game mechanics were available. That confirmed some things, my initial figures were way off, my map was tiny, and there were several gameplay features I had overlooked. Rather than try to re-invent the wheel, I scaled the proven math down to the gameplay speed that I wanted. Success.

And on the combat front. That math might have been worse. My missiles were one-shotting early defenses, why send in a mech at all if you can just carpet bomb the entire map. Even though nothing does quite smell like napalm in the morning, it was turning into some sort of sim version of missile command. Toned down numbers also scale back the early luck of finding a target and being able to wipe it out before any defenses can be built.

Also formalized the Kaiju island to be the mirror of the player. The idea of there being differences was interesting, but it adds more complexity to a rock/paper/scissors simple combat game than I want to dive into at my current level of being a hobbyist game designer. But I am adding some flavor with the Kaiju 'creep' so the AI won't be a complete push-over.

I've also worked on pacing issues, including spore launchers coming online in stages rather than all at once. A sell command was needed. With the larger maps I went with a view for playing the game: one base on screen at a time, with Tab to switch between them.

While testing scouting the Kaiju base, I noticed the player needed an alert for the missiles. Especially if they scored a hit while off screen.

<img src="/kaiju-defense/incoming-missile-2026-08-11.png" alt="Kaiju Defense debug build: player island mid-game with buildings placed, a hive missile inbound and the advisor alert banner firing" loading="lazy" style="max-width:100%;height:auto;">

This is actually starting to play like a real game. And I had a moment of realization, seeing pixels fly across the screen and alter other pixels: Pong is like the embryo phase for all games. And the bet - that if you deconstruct even the most advanced triple A release, someone was sharing screenshots like these at some point in early development.

<img src="/kaiju-defense/your-island-2026-08-11.png" alt="Kaiju Defense debug build: early-game player island with the Metal Marines-scaled build bar prices visible" loading="lazy" style="max-width:100%;height:auto;">

<img src="/kaiju-defense/scout-view-2026-08-11.png" alt="Kaiju Defense debug build: scout view of the hive board, mostly unrevealed with one flagged tile and revealed organ tiles" loading="lazy" style="max-width:100%;height:auto;">
