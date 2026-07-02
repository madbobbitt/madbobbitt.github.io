import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    project: z.string().optional(),
    stage: z.enum(['seed', 'growing', 'evergreen']).default('seed'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { log };
