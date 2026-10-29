import { SITE } from "../config";

/**
 * Canonical internal route hierarchy.
 * All page routes enforce trailing slashes for strict SEO canonicalization.
 */
export const ROUTES = {
  home: "/",
  brands: "/brands/",
  brandTopPicks: "/brands/#top-picks",
  brandDetail: (slug: string) => `/brands/${slug.replace(/^\/+|\/+$/g, "")}/`,
  clients: "/clients/",
  guides: "/guides/",
  free: "/free/",
  faq: "/faq/",
  warnings: "/warnings/",
  services: "/services/",
  serviceDetail: (slug: string) => `/services/${slug.replace(/^\/+|\/+$/g, "")}/`,
  serviceAnchor: (slug: string) => `/services/#${slug.replace(/^\/+|\/+$/g, "")}`,
  contact: "/contact/",
  enquiry: "/contact/#enquiry",
  thanks: "/thanks/",
  sitemap: "/sitemap-index.xml",
  robots: "/robots.txt",
} as const;

/**
 * Centralized internal static asset paths.
 */
export const ASSETS = SITE.assets;

/**
 * Normalizes a pathname so directory routes always end with "/" and file routes never do.
 */
export function normalizePathname(pathname: string): string {
  const clean = (pathname || "/").split("?")[0].split("#")[0].replace(/\/+/g, "/");
  if (clean === "/") return "/";
  const lastSegment = clean.split("/").filter(Boolean).pop() ?? "";
  const isFile = lastSegment.includes(".");
  if (isFile) {
    return clean.replace(/\/+$/, "");
  }
  return clean.endsWith("/") ? clean : `${clean}/`;
}

/**
 * Resolves an absolute, canonical URL for a page pathname against the configured site origin.
 */
export function canonicalUrl(pathname: string, base: URL | string = SITE.url): string {
  const origin = new URL(typeof base === "string" ? base : base.href);
  return new URL(normalizePathname(pathname), origin.origin).href;
}

/**
 * Resolves an internal asset path or URL to an absolute URL on the canonical domain.
 */
export function assetUrl(pathOrUrl: string, base: URL | string = SITE.url): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const origin = new URL(typeof base === "string" ? base : base.href);
  const normalized = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return new URL(normalized, origin.origin).href;
}
