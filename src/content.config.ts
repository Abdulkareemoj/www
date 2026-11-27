import { defineCollection} from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array
	const lowercaseItems = array.map((str) => str.toLowerCase())
	const distinctItems = new Set(lowercaseItems)
	return Array.from(distinctItems)
}

const post = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().max(60),
			description: z.string().min(50).max(160),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z
				.object({
					src: image(),
					alt: z.string()
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional()
		})
})

const work = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		dateStart: z.coerce.date(),
		dateEnd: z.union([z.coerce.date(), z.string()])
	})
})

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
		demoURL: z.string().optional(),
		repoURL: z.string().optional(),
		imageUrl: z.string().url(),
		ogImage: z.string().optional(),
		altText: z.string(),
		heroVideo: z.string().url().optional()
	})
})

export const collections = { post, work, projects }
