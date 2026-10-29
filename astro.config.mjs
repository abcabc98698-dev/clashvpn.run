// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || SITE.url,
  trailingSlash: "always",
  compressHTML: true,
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      // Exclude post-submission utility routes from search indexing.
      filter: (page) => !page.includes("/thanks/") && !page.includes("/404/"),
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        if (path === "/") {
          item.priority = 1.0;
        } else if (path === "/brands/" || path === "/brands/guangsuyun/") {
          item.priority = 0.95;
        } else if (path === "/clients/" || path === "/guides/" || path === "/services/") {
          item.priority = 0.9;
        } else if (path.startsWith("/brands/") || path.startsWith("/services/")) {
          item.priority = 0.85;
        } else {
          item.priority = 0.75;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
