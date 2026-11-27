import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";

import { getAllPosts, getUniqueTags } from "@/utils";
import { type OgImageProps, renderOgImage } from "@/utils/ogImage";

export const prerender = true;

const staticPages: Array<{
	slug: string;
	props: Extract<OgImageProps, { kind: "page" }>;
}> = [
	{
		slug: "pages/blog",
		props: {
			kind: "page",
			title: "Blog",
			description:
				"Notes on software development, tools, and things I’m learning.",
			details: ["Guides and essays", "Recent writing"],
		},
	},
	{
		slug: "pages/projects",
		props: {
			kind: "page",
			title: "Projects",
			description: "A collection of software and creative projects I’ve built.",
			details: ["ReadrSync", "MyClipApp", "FReader"],
		},
	},
	{
		slug: "pages/tools",
		props: {
			kind: "page",
			title: "Tools",
			description: "Tools and software I use daily.",
			details: ["VS Code", "Neovim", "Figma", "Firefox"],
		},
	},
	{
		slug: "pages/work",
		props: {
			kind: "page",
			title: "Work",
			description: "Work experience and professional background.",
			details: ["Web development", "Game development"],
		},
	},
	{
		slug: "pages/tags",
		props: {
			kind: "page",
			title: "All Tags",
			description: "A list of topics I’ve written about in my posts.",
			details: ["Web development", "React", "Databases"],
		},
	},
	{
		slug: "pages/guestbook",
		props: {
			kind: "page",
			title: "Guestbook",
			description: "Leave a message.",
			details: ["Messages", "Coming soon"],
		},
	},
	{
		slug: "pages/not-found",
		props: {
			kind: "page",
			title: "404",
			description: "Sorry, we couldn’t find the page you were looking for.",
			details: ["Check the address", "Return to home"],
		},
	},
];

export const getStaticPaths = (async () => {
	const [posts, projects] = await Promise.all([
		getAllPosts(),
		getCollection("projects"),
	]);
	const tags = getUniqueTags(posts);

	return [
		...posts.map((post) => ({
			params: { slug: `blog/${post.id.replace(/\/index$/, "")}` },
			props: {
				kind: "post" as const,
				title: post.data.title,
				description: post.data.description,
			},
		})),
		...projects
			.filter((project) => !project.data.ogImage)
			.map((project) => ({
				params: {
					slug: `projects/${project.id.replace(/\/index$/, "")}`,
				},
				props: {
					kind: "project" as const,
					title: project.data.title,
					description: project.data.description,
					imageUrl: project.data.imageUrl,
					altText: project.data.altText,
				},
			})),
		...staticPages.map(({ slug, props }) => ({
			params: { slug },
			props,
		})),
		...tags.map((tag) => ({
			params: { slug: `tags/${tag}` },
			props: {
				kind: "page" as const,
				title: `Tag: ${tag}`,
				description: `Posts filed under the ${tag} topic.`,
				details: [`#${tag}`, "From the blog"],
			},
		})),
	];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
	const png = await renderOgImage(props as OgImageProps);

	return new Response(png.buffer, {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
