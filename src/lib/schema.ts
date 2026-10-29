import { SITE } from "../config";
import { ASSETS, ROUTES, assetUrl, canonicalUrl, normalizePathname } from "./urls";

const DAY_NAMES = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
} as const;

const SEGMENT_LABELS: Record<string, string> = {
  brands: "机场品牌库",
  clients: "客户端教程",
  guides: "选型对比",
  free: "免费资源与开源规则库",
  faq: "机场FAQ百科",
  warnings: "跑路预警与风险雷达",
  services: "选型场景",
  contact: "选型诊断与反馈",
  thanks: "提交成功",
};

export interface ServiceSchemaInput {
  id: string;
  title: string;
  summary: string;
  priceFrom?: string;
  deliverables?: string[];
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  section?: string;
  keywords?: string[];
}

export interface FaqSchemaInput {
  q: string;
  a: string;
}

export interface ItemListSchemaInput {
  name: string;
  url: string;
  description?: string;
}

export interface PageSchemaOptions {
  site: URL;
  pathname: string;
  title: string;
  description: string;
  image?: string;
  service?: ServiceSchemaInput;
  article?: ArticleSchemaInput;
  faqs?: FaqSchemaInput[];
  itemList?: ItemListSchemaInput[];
  breadcrumbLabel?: string;
}

/**
 * Builds the primary Organization entity from src/config.ts.
 */
export function businessJsonLd(site: URL) {
  const homeUrl = canonicalUrl(ROUTES.home, site);
  return {
    "@context": "https://schema.org",
    "@type": SITE.schemaType,
    "@id": `${homeUrl}#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    slogan: SITE.tagline,
    description: SITE.description,
    url: homeUrl,
    ...(SITE.phone.tel ? { telephone: SITE.phone.tel } : {}),
    email: SITE.email,
    image: assetUrl(ASSETS.ogImage, site),
    logo: {
      "@type": "ImageObject",
      url: assetUrl(ASSETS.appleTouchIcon, site),
      width: 180,
      height: 180,
    },
    areaServed: SITE.areaServed,
    openingHoursSpecification: SITE.hours
      .filter((h) => h.opens && h.closes)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days.map((d) => `https://schema.org/${DAY_NAMES[d]}`),
        opens: h.opens,
        closes: h.closes,
      })),
    sameAs: SITE.social.map((s) => s.href).filter((href) => new URL(href).pathname.length > 1),
  };
}

/**
 * Builds a complete @graph JSON-LD payload for SEO & GEO:
 * - Organization
 * - WebSite
 * - WebPage
 * - BreadcrumbList
 * - Service (when on a dedicated service or brand evaluation route)
 * - TechArticle / Article (when on an in-depth technical scenario guide)
 * - FAQPage (when authentic visible FAQs are provided)
 * - ItemList (when rendering a directory/ranking page)
 */
export function pageGraphJsonLd(options: PageSchemaOptions) {
  const {
    site,
    pathname,
    title,
    description,
    image = ASSETS.ogImage,
    service,
    article,
    faqs,
    itemList,
    breadcrumbLabel,
  } = options;
  const homeUrl = canonicalUrl(ROUTES.home, site);
  const pageUrl = canonicalUrl(pathname, site);
  const orgId = `${homeUrl}#organization`;
  const websiteId = `${homeUrl}#website`;
  const webpageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const orgNode = businessJsonLd(site);
  const { "@context": _ctx, ...orgEntity } = orgNode;

  const normPath = normalizePathname(pathname);
  const segments = normPath.split("/").filter(Boolean);
  const breadcrumbItems: Array<{ "@type": "ListItem"; position: number; name: string; item: string }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "首页",
      item: homeUrl,
    },
  ];

  if (segments.length > 0) {
    const firstSeg = segments[0];
    const firstLabel = SEGMENT_LABELS[firstSeg] ?? (firstSeg.charAt(0).toUpperCase() + firstSeg.slice(1));
    const sectionUrl = canonicalUrl(`/${firstSeg}/`, site);

    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: firstLabel,
      item: segments.length > 1 ? sectionUrl : pageUrl,
    });

    if (segments.length > 1) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 3,
        name: breadcrumbLabel ?? service?.title ?? segments[1],
        item: pageUrl,
      });
    }
  }

  const graph: Record<string, unknown>[] = [
    orgEntity,
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: homeUrl,
      name: SITE.name,
      description: SITE.tagline,
      inLanguage: SITE.lang,
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: pageUrl,
      name: title,
      description,
      inLanguage: SITE.lang,
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: assetUrl(image, site),
      },
      breadcrumb: { "@id": breadcrumbId },
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbItems,
    },
  ];

  if (service) {
    const firstPriceMatch = service.priceFrom?.match(/\d+(?:\.\d+)?/);
    const numericPrice = firstPriceMatch ? firstPriceMatch[0] : undefined;
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.title,
      description: service.summary,
      url: pageUrl,
      provider: { "@id": orgId },
      areaServed: SITE.areaServed,
      ...(numericPrice
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "CNY",
              price: numericPrice,
              url: pageUrl,
            },
          }
        : {}),
    });
  }

  if (article) {
    graph.push({
      "@type": "TechArticle",
      "@id": `${pageUrl}#article`,
      headline: article.headline,
      description: article.description,
      url: pageUrl,
      inLanguage: SITE.lang,
      mainEntityOfPage: { "@id": webpageId },
      author: {
        "@type": "Organization",
        name: article.author ?? SITE.name,
        url: homeUrl,
      },
      publisher: { "@id": orgId },
      ...(article.datePublished ? { datePublished: article.datePublished } : {}),
      ...(article.dateModified ? { dateModified: article.dateModified } : {}),
      ...(article.section ? { articleSection: article.section } : {}),
      ...(article.keywords && article.keywords.length > 0
        ? { keywords: article.keywords.join(", ") }
        : {}),
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  if (itemList && itemList.length > 0) {
    graph.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      name: title,
      numberOfItems: itemList.length,
      itemListElement: itemList.map((entry, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: entry.name,
        url: canonicalUrl(entry.url, site),
        ...(entry.description ? { description: entry.description } : {}),
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/** JSON for a <script type="application/ld+json">, safe against "</script>" in config strings. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
