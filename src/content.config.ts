import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		// Preserve the exhibition `date` frontmatter so it can feed JSON-LD
		// (`datePublished`) in src/components/Head.astro.
		schema: docsSchema({
			extend: z.object({
				date: z.string().optional(),
			}),
		}),
	}),
};
