import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().transform(s => s.trim()),
    date: z.coerce.date(),
    description: z.string().optional(),
    // Language of the post; the site defaults to Spanish
    lang: z.enum(["es", "en"]).default("es"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
