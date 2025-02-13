import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import expressiveCode from 'astro-expressive-code'
import { expressiveCodeOptions } from './src/site.config.ts'
import icon from 'astro-icon'
import deno from '@deno/astro-adapter'

// https://astro.build/config
export default defineConfig({
	site: 'https://abdulkareemoj.deno.dev',
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [expressiveCode(expressiveCodeOptions), sitemap(), mdx(), icon()],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		rehypePlugins: [
			rehypeUnwrapImages,
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['nofollow, noopener, noreferrer']
				}
			]
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: ['']
			}
		}
	},
	prefetch: true,
	output: 'server',
	adapter: deno()
})
