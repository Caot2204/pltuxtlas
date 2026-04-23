import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const places = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base:"./src/data/places" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    hero: image(),
    category: z.string(),
    ubication: z.string(),
    images: z.array(image()),
    youtubeIds: z.array(z.string())
  })
});

export const collections = { places }