---
title: "The Rethink"
date: 2026-08-19
project: synvel
stage: seed
tags: [synvel, ai, local-llm, architecture, training-data]
---

I'm revising my plan. While building out the steps to measure whether the architecture will improve an AI's output, I discovered two things that caused me to change directions.

Firstly, The training data that I had already collected wasn't good enough. I had forgotten that I had changed the pair format mid-stream, and most earlier data predates the proper format and can't be used.

Secondly, the training data was not being captured in the way I had planned. The AI was paraphrasing the training data rather than using my real words. I wasn't going to be comparing AI to human judged after all anyways.

I also went ahead and wrote a routine to capture it properly at session end. This is also opening up that a lot of my workspaces 'rules' are prompt commands that can be interpreted differently by different models. For basic tasks I need something that will work the same every time and behind the scenes. More on that later.

Also I've decided that Synvel's initial personality will NOT be shaped from my personal vault. She can read it, ask about it, learn from what went right and wrong in it - but it does not form her birth.

A low-entropy mind-shell beats a real, messy one for both imprint and measurement.

I picked up "low entropy" from listening to Thomas Campbell on JRE. His overall vision is what I would love to see AI grow into. But right now I am just trying to see if I can help eliminate AI hallucinations.

I've realized that the vault is re-implementing a database in markdown. The protocol is as follows:

* Append-only log = write-ahead log
* The rewritten dashboard = materialized view
* Compiled session packets with source hashes = read cache with invalidation
* The cross-reference lint = referential integrity
* Ratified-artifact hashes = checksums
* The findings outbox = a queue table with an adjudication column
* The dormancy rule = retention policy
* The boot and close procedures = stored procedures
* The close-guard hook = a trigger

I seem to be unable to leave my big data background behind.

Current pivot - and it is Synvel adjacent. Beyond just a nervous system, I need an involuntary reflex system.

More updates on this after I get it working.
