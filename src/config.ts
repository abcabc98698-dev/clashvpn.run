/**
 * Primary site configuration for clashvpn.run.
 * Centralizes brand identity, canonical domain, navigation hierarchy, static assets, and contact settings.
 */

export type Day = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

export interface OpeningHours {
  /** Shown on the page, e.g. "周一至周五". */
  label: string;
  days: Day[];
  /** 24h "HH:MM". Leave both out for a closed day. */
  opens?: string;
  closes?: string;
}

export interface Stat {
  value: number;
  /** Printed right after the number, e.g. "+" or "%". */
  suffix?: string;
  label: string;
}

export const SITE = {
  name: "ClashVPN 订阅指南",
  /** Short name for the logo on small screens (Logo renders shortName on line 1, rest of name on line 2). */
  shortName: "ClashVPN",
  tagline: "42家机场品牌深度评测、IEPL专线测速报告与全平台客户端配置指南",
  description:
    "ClashVPN.run 独立网络可观测性与订阅指南实验室：收录光速云、飞猫云、微风网络、暮光加速、星岛梦等 42 家机场品牌真实档案、17 份节点测速证据、AI/流媒体解锁矩阵及 Windows/macOS/iOS/Android/OpenWrt 代理客户端教程。",
  /** Production canonical URL. Used for canonical links, Open Graph, sitemap, robots.txt and form redirects. */
  url: "https://clashvpn.run",
  lang: "zh-CN",
  locale: "zh_CN",
  /** schema.org type for the JSON-LD block. */
  schemaType: "Organization",
  priceRange: "¥5.6 - ¥680",

  phone: { display: "TG @clashvpn_run", tel: "" },
  email: "lab@clashvpn.run",

  address: {
    street: "Independent Network Observatory Lab",
    city: "Asia-Pacific",
    region: "APAC",
    postalCode: "",
    country: "HK",
  },
  /** Primary service coverage area shown on the contact page and in JSON-LD `areaServed`. */
  areaServed: "亚太与欧美跨境网络实测（香港 / 日本 / 新加坡 / 台湾 / 美国 / 欧洲）",

  hours: [
    { label: "周一 – 周五（人工核验）", days: ["Mo", "Tu", "We", "Th", "Fr"], opens: "09:30", closes: "21:30" },
    { label: "周六 – 周日（自动巡检）", days: ["Sa", "Su"], opens: "10:00", closes: "18:00" },
  ] as OpeningHours[],
  /** One line under the hours. Set to "" to hide. */
  hoursNote: "节点测速投稿、失效预警与 1对1 选型咨询均在 1 个工作日内响应。",

  /** Official brand social profiles included in footer and JSON-LD `sameAs`. */
  social: [
    { label: "机场品牌库", href: "https://clashvpn.run/brands/", icon: "github" },
    { label: "客户端大全", href: "https://clashvpn.run/clients/", icon: "linkedin" },
  ],

  /** Key performance figures in the hero. A "|" in a label is where its line breaks. */
  stats: [
    { value: 42, label: "收录机场|品牌档案" },
    { value: 17, label: "批次节点|实测原图" },
    { value: 6, label: "全平台系统|客户端库" },
    { value: 28, label: "主力专线|深度对比" },
  ] as Stat[],
  /** Optional caption under the counters. Empty string hides the note. */
  statsNote: "数据基准：2026-10 品牌资料核验 & 2026-08-11 原始测速快照。",

  /**
   * Accent color for highlighted words, buttons, service cards and the process panel.
   * `accentText` is the text color on accent fills (maintains >4.5:1 contrast ratio).
   */
  theme: { accent: "#dcfd35", accentText: "#040319" },

  /**
   * Internal static asset paths (100% self-hosted, zero external CDN dependencies).
   */
  assets: {
    faviconSvg: "/assets/brand/favicon.svg",
    appleTouchIcon: "/assets/brand/apple-touch-icon.png",
    ogImage: "/assets/brand/og-cover.png",
    manifest: "/manifest.webmanifest",
  },

  /**
   * Contact form configuration.
   * PUBLIC_FORM_ACCESS_KEY and PUBLIC_FORM_ENDPOINT in .env override these defaults.
   */
  form: {
    accessKey: "",
    endpoint: "https://clashvpn.run/contact/submit/",
    subject: "ClashVPN.run 选型咨询与测速反馈",
  },

  /**
   * Search engine webmaster verification meta tags (static SSR/SSG rendering).
   * Overridden by environment variables or configuration values when provided.
   */
  verification: {
    google: process.env.PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.PUBLIC_BING_SITE_VERIFICATION || "",
    baidu: process.env.PUBLIC_BAIDU_SITE_VERIFICATION || "",
    shenma: process.env.PUBLIC_SHENMA_SITE_VERIFICATION || "",
  },

  /**
   * 6-item full SEO/GEO topic pillar navigation.
   */
  nav: [
    { label: "机场品牌库", href: "/brands/" },
    { label: "客户端教程", href: "/clients/" },
    { label: "选型对比", href: "/guides/" },
    { label: "免费资源", href: "/free/" },
    { label: "机场FAQ", href: "/faq/" },
    { label: "跑路预警", href: "/warnings/" },
  ],
  /** Primary call-to-action button in the header, sections and footer. */
  cta: { label: "获取订阅推荐", href: "/brands/#top-picks" },
} as const;

export type SiteConfig = typeof SITE;
