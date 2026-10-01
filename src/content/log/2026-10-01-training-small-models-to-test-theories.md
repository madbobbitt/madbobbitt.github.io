---
title: "Training Small Models to Test Theories"
date: 2026-10-01
project: synvel
stage: seed
tags: [synvel, ai, local-llm, fine-tuning]
---

I'm starting to play with the idea of training small models to test out my theories for a larger 'organism'. The idea is to train a small local model (organ) to perform a single task, with a simple script that checks its work.

One of the first needs is  a simple model that can extract facts from a passage, listing the facts in pre-defined format of (thing / property / value). The model is trained on a dataset of 110 examples from my own notes, spot-checked by me, with 10 general examples mixed in.

The model is run on an RTX 3070 with 8 GB of memory, and the training run takes about 4 minutes with Llama 3.1 8B, QLoRA, and the Unsloth Desktop.

It was able to find 20 of 26 facts, and 22 of 26 after a second run with longer examples. There was a small hiccup on catching phrasing of words. I've added a check for that.

The results of the final training run:

<img src="/synvel/extractor-training-final-v1-2026-10-01.png" alt="Final training run: training loss, gradient norm, learning rate and eval loss curves" loading="lazy" style="max-width:100%;height:auto;">

A simple model was able to perform the task of fact extraction from a passage with a high degree of accuracy.
