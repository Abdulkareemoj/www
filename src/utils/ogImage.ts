import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import { type ComponentChildren, h } from "preact";
import satori from "satori";
import sharp from "sharp";

import { siteConfig } from "@/site.config";

type OgImageBase = {
	title: string;
	description: string;
};

export type OgImageProps =
	| (OgImageBase & {
			kind: "post";
	  })
	| (OgImageBase & {
			kind: "project";
			imageUrl: string;
			altText: string;
	  })
	| (OgImageBase & {
			kind: "page";
			details: string[];
	  });

const ibmPlexSansRegularData = readFile(
	resolve(
		process.cwd(),
		"node_modules",
		"@fontsource",
		"ibm-plex-sans",
		"files",
		"ibm-plex-sans-latin-400-normal.woff",
	),
);
const ibmPlexSansBoldData = readFile(
	resolve(
		process.cwd(),
		"node_modules",
		"@fontsource",
		"ibm-plex-sans",
		"files",
		"ibm-plex-sans-latin-700-normal.woff",
	),
);

const ink = "#f4f4f6";
const body = "#d2d2da";
const line = "#383842";
const accent = "#8b93f5";

function editorialText(value: string) {
	return value.replace(/[\u2010-\u2015\u2212]/g, "-").replace(/\u2192/g, "->");
}

function titleText(value: string, fontSize: number) {
	return h(
		"div",
		{
			style: {
				width: "100%",
				display: "flex",
				flexWrap: "wrap",
				alignContent: "center",
				columnGap: 8,
				fontSize,
				lineHeight: 1.03,
				fontWeight: 700,
				letterSpacing: -1.2,
			},
		},
		editorialText(value)
			.trim()
			.split(/\s+/)
			.map((word) =>
				h("span", { style: { display: "flex", whiteSpace: "nowrap" } }, word),
			),
	);
}

function frame(children: ComponentChildren) {
	return h(
		"div",
		{
			style: {
				width: 1200,
				height: 630,
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "48px 64px 40px",
				background: "#1a1a24",
				color: ink,
				fontFamily: "IBM Plex Sans",
			},
		},
		children,
	);
}

function footer(detail: string) {
	return h(
		"div",
		{
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				paddingTop: 13,
				borderTop: `1px solid ${line}`,
				color: body,
				fontSize: 16,
			},
		},
		[
			h(
				"div",
				{ style: { display: "flex", fontWeight: 700 } },
				siteConfig.title,
			),
			h("div", { style: { display: "flex" } }, detail),
		],
	);
}

function postCard({
	title,
	description,
}: Extract<OgImageProps, { kind: "post" }>) {
	return frame([
		h(
			"div",
			{
				style: {
					display: "flex",
					alignItems: "stretch",
					gap: 58,
					flex: 1,
					paddingTop: 16,
					paddingBottom: 16,
				},
			},
			[
				h(
					"div",
					{
						style: {
							width: 650,
							display: "flex",
							alignItems: "center",
						},
					},
					titleText(title, title.length > 42 ? 50 : 56),
				),
				h(
					"div",
					{
						style: {
							width: 360,
							boxSizing: "border-box",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: 28,
							paddingLeft: 32,
							borderLeft: `1px solid ${line}`,
						},
					},
					[
						h(
							"div",
							{
								style: {
									display: "flex",
									color: body,
									fontSize: 27,
									lineHeight: 1.3,
								},
							},
							editorialText(description),
						),
					],
				),
			],
		),
		footer(" · Notes on building things"),
	]);
}

function pageCard({
	title,
	description,
	details,
}: Extract<OgImageProps, { kind: "page" }>) {
	const detailRows = details.map((detail, index) =>
		h(
			"div",
			{
				style: {
					display: "flex",
					alignItems: "baseline",
					gap: 18,
					paddingTop: 11,
					paddingBottom: 11,
					borderBottom: `1px solid ${line}`,
				},
			},
			[
				h(
					"div",
					{
						style: {
							display: "flex",
							width: 32,
							flexShrink: 0,
							color: accent,
							fontSize: 14,
							fontWeight: 700,
						},
					},
					String(index + 1).padStart(2, "0"),
				),
				h(
					"div",
					{
						style: {
							display: "flex",
							color: body,
							fontSize: 21,
						},
					},
					detail,
				),
			],
		),
	);

	return frame([
		h(
			"div",
			{
				style: {
					display: "flex",
					alignItems: "center",
					gap: 62,
					flex: 1,
					paddingTop: 16,
					paddingBottom: 16,
				},
			},
			[
				h(
					"div",
					{
						style: {
							width: 580,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: 22,
						},
					},
					[
						h(
							"div",
							{
								style: {
									display: "flex",
								},
							},
							titleText(title, 68),
						),
						h(
							"div",
							{
								style: {
									display: "flex",
									color: body,
									fontSize: 26,
									lineHeight: 1.3,
								},
							},
							editorialText(description),
						),
					],
				),
				h(
					"div",
					{
						style: {
							width: 430,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						},
					},
					detailRows,
				),
			],
		),
		// footer(siteConfig.),
	]);
}

async function projectCard({
	title,
	description,
	imageUrl,
	altText,
}: Extract<OgImageProps, { kind: "project" }>) {
	const response = await fetch(imageUrl, {
		signal: AbortSignal.timeout(45000),
	});
	if (!response.ok) {
		throw new Error(
			`Could not fetch project preview (${response.status}) from ${imageUrl}`,
		);
	}

	const contentType = response.headers.get("content-type")?.split(";")[0];
	if (!contentType?.startsWith("image/")) {
		throw new Error(`Project preview is not an image (${imageUrl})`);
	}

	const source = Buffer.from(await response.arrayBuffer());
	const preview = await sharp(source)
		.resize(1200, 700, { fit: "inside", withoutEnlargement: true })
		.jpeg({ quality: 84 })
		.toBuffer();
	const previewData = `data:image/jpeg;base64,${preview.toString("base64")}`;

	return frame([
		h(
			"div",
			{
				style: {
					display: "flex",
					alignItems: "center",
					gap: 40,
					flex: 1,
					paddingTop: 14,
					paddingBottom: 14,
				},
			},
			[
				h(
					"div",
					{
						style: {
							width: 600,
							height: 420,
							boxSizing: "border-box",
							flexShrink: 0,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						},
					},
					h("img", {
						src: previewData,
						alt: altText,
						width: 600,
						height: 420,
						style: {
							width: 600,
							height: 420,
							objectFit: "contain",
						},
					}),
				),
				h(
					"div",
					{
						style: {
							width: 432,
							height: 420,
							boxSizing: "border-box",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: 22,
						},
					},
					[
						h(
							"div",
							{ style: { display: "flex" } },
							titleText(title, title.length > 26 ? 50 : 54),
						),
						h(
							"div",
							{
								style: {
									display: "flex",
									color: body,
									fontSize: 25,
									lineHeight: 1.3,
								},
							},
							editorialText(description),
						),
					],
				),
			],
		),
		footer(" · Projects "),
	]);
}

export async function renderOgImage(data: OgImageProps) {
	const [ibmPlexSans, ibmPlexSansBold] = await Promise.all([
		ibmPlexSansRegularData,
		ibmPlexSansBoldData,
	]);
	const content =
		data.kind === "post"
			? postCard(data)
			: data.kind === "project"
				? await projectCard(data)
				: pageCard(data);

	const svg = await satori(content, {
		width: 1200,
		height: 630,
		fonts: [
			{ name: "IBM Plex Sans", data: ibmPlexSans, weight: 400 },
			{ name: "IBM Plex Sans", data: ibmPlexSansBold, weight: 700 },
		],
	});

	return new Uint8Array(new Resvg(svg).render().asPng());
}
