import type { APIRoute } from "astro";
import { SITE } from "../config";
import { canonicalUrl } from "../lib/urls";

export const GET: APIRoute = ({ site }) => {
  const origin = canonicalUrl("/", site ?? SITE.url).replace(/\/+$/, "");
  const body = `# robots.txt for ${SITE.name} (${SITE.url})
User-agent: *
Allow: /
Disallow: /thanks/

User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: yisouspider
Allow: /

Sitemap: ${origin}/sitemap.xml
Sitemap: ${origin}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
