import { defineCollection, z } from 'astro:content';
// 1. Import glob loader dari astro/loaders
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  // 2. Tambahkan loader untuk membaca file mdx di folder src/content/blog
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    publishDate: z.string()
  })
});

export const collections = {
  'blog': blogCollection,
};