// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import emdash from "emdash/astro";
import { d1, r2 } from "@emdash-cms/cloudflare";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	// EmDash needs on-demand rendering; static pages opt in with `export const prerender = true`
	output: "server",
	integrations: [
		mdx(),
		sitemap(),
		// React powers the EmDash admin UI
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
		}),
	],
	adapter: cloudflare(),
});
