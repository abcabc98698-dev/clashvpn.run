import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const linkRefSchema = z.object({
  title: z.string(),
  url: z.string(),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    /** Unique SEO meta description for the dedicated article page. */
    description: z.string().optional(),
    /** The short line under the title on the 3D staircase card. */
    tags: z.string(),
    /** Concise executive summary shown on the /services/ hub page and header lead. */
    summary: z.string(),
    /** Lower comes first. */
    order: z.number().default(100),
    /** The card's line animation (see src/components/ServiceArt.astro). */
    art: z.enum(["grid", "bars", "forecast", "curve", "bells", "clusters"]),
    /** Starting price reference, e.g. "¥99/年". */
    priceFrom: z.string().optional(),
    /** Typical billing/usage mode, e.g. "支持年付/不限时". */
    duration: z.string().optional(),
    /** Key takeaways / deliverables checklist. */
    deliverables: z.array(z.string()).default([]),

    /** Editorial & Topic Cluster Metadata (Sections 18, 26, 36, 37) */
    datePublished: z.string().optional(),
    dateModified: z.string().optional(),
    author: z.string().default("ClashVPN 订阅指南实验室"),
    category: z.string().optional(),
    pageRole: z.string().optional(),
    primaryKeyword: z.string().optional(),
    secondaryKeywords: z.array(z.string()).default([]),
    searchIntent: z.string().optional(),
    contentCluster: z.string().optional(),
    pillarPage: z.string().optional(),
    relatedArticles: z.array(z.string()).default([]),

    /** 5-8 High-value non-overlapping long-tail FAQs for the article & FAQPage Schema */
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .default([]),

    /** CMS / Editorial 4-Layer Internal Link Plan (not rendered as raw YAML to readers) */
    internalLinkPlan: z
      .object({
        parent: z.array(linkRefSchema).default([]),
        siblings: z.array(linkRefSchema).default([]),
        children: z.array(linkRefSchema).default([]),
        backlinksFrom: z.array(linkRefSchema).default([]),
      })
      .optional(),
  }),
});

export const collections = { services };
