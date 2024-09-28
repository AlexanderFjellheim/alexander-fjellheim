import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z
			.string().
			optional(),
		heroImage2: z
			.string().
			optional(),
		heroImage3: z
			.string().
			optional(),
		heroImage4: z
			.string().
			optional(),
		category: z
			.string()
			.optional(),
		role: z
			.string()
			.optional(),
		team: z
			.array(z.string())
			.optional(),
		duration: z
			.string()
			.optional(),
		technologies: z
			.array(z.string())
			.optional(),
	}),
});

export const collections = { blog };
