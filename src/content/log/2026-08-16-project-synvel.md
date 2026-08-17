---
title: "Project Synvel"
date: 2026-08-16
project: synvel
stage: seed
tags: [synvel, ai, local-llm, architecture]
---

Time to make a post about Synvel, a Synthetic Virtual Environment Lifeform. I've been kicking around this idea for a while now, so I thought I'd take a moment to write it down in the public space.

The name "Synvel" comes from an old World of Warcraft character name I liked and would reuse. The idea of Synvel is to build a system that uses an LLM as a thinking piece, but not the focus. The LLM (brain) is just one organ of many which together make up the system. The brain becomes swappable, so as newer and better models come out nothing else has to be modified.

While doing research on how to improve my own AI powered Obsidian KB vault, and the need to automate many of the 'thinking' tasks; I stumbled upon two ideas. The first is the subsumption architecture, which was developed by Rodney Brooks back in 1986. In this system, you have layers of simple behaviors that don't need a central planner. It seems like a really elegant way to build complex systems that can operate in complex environments. The second idea is active inference, which was developed by Karl Friston. This is the idea that the brain is really good at predicting what's going to happen next, and that it uses this prediction to guide its behavior. From what I can tell in the limited research I've done: the idea has not 'taken off' because the math gets really complicated when you try to apply it to an open world, but it produced good results in a controlled lab.

Merging these two ideas reignited the spark in me to finish planning out what Synvel could be. Can I build a system that can learn and improve on its own? There is a lot of ego in that question. What can some random B-tier engineer in East TN do to contribute to AI development? My theory: the LLM is really just the thinker in the middle, the brain of the operation. The rest of the system is made up of organs that can interact with the world and with each other. As humans we tend to get caught in the trap that we are only our 'brains' too.

I've already started building out some of the components of Synvel. I have a large plain-text knowledge base that I use as a memory layer. The feeling layer is a small monitor that watches for patterns in my behavior recorded in the KB or current session and pushes back when it sees something it doesn't like. A separate project called Sylas will be the eyes, ears, and mouth. To proof out the self learning aspect I have a small model that's being trained on my own writing, creating key pairs from editing done and using them to feed back into unsloth for a training round. This is barely a week into use, so I'll need to wait a while to see if the plan will play out.

This might end up just producing an outrageously expensive Tamagotchi knock off, but we'll see.
