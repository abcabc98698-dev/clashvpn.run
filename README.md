<div align="center">

# 🌐 ClashVPN.run 订阅指南与网络可观测性实验室

**42 家主流机场品牌深度评测 · IEPL / IPLC 跨境专线测速快照 · 全平台客户端规则配置与跑路预警矩阵**

[![Astro](https://img.shields.io/badge/Astro-7.3.7-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SEO Health Score](https://img.shields.io/badge/SEO%2FGEO%20Health-98.5%2F100-2EA043?style=flat-square&logo=google&logoColor=white)](https://clashvpn.run)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

[在线预览 ↗](https://clashvpn.run) · [42 家机场品牌库 ↗](https://clashvpn.run/brands/) · [免费资源矩阵 ↗](https://clashvpn.run/free/) · [跑路预警雷达 ↗](https://clashvpn.run/warnings/) · [专线FAQ 60问 ↗](https://clashvpn.run/faq/)

</div>

---

## 📖 项目简介 (Overview)

`clashvpn.run` 是基于 **Astro 7 (SSG)** 构建的现代高性能跨境网络评测与代理协议选型知识库。项目采用 **Content Collections** 驱动与四层站内内容矩阵架构，兼顾纯静态极速渲染（Zero-JS 默认）、严苛的**防连坐风控（340 条外部商业链接 100% `nofollow`）**以及面向 AI 搜索引擎（Google AI Overviews / Perplexity / SearchGPT）的 **GEO (Generative Engine Optimization)** 优化。

### 🌟 核心特色

- ⚡ **极致纯静态构建 (SSG)**：全站 59 个页面全部预渲染为纯静态 HTML，TTFB < 50ms，爬虫 0 渲染阻塞，首屏纯 HTML 携带完整文本与表格。
- 📊 **42 家机场品牌深度档案**：收录 28 家主力测速机场与 14 家归档品牌，保留 **17 份 2026-08-11 原始节点测速证据快照**，按 5 级严格数据口径呈现。
- 🛡️ **三大万字级 SEO / GEO 支柱专题**：
  - **`/free/` 免费资源矩阵**（~3.8 万可见字）：涵盖公益节点风险辨识、Cloudflare WARP 优化、GitHub 开源分流规则库与防降智配置。
  - **`/faq/` 专线与协议 FAQ 百科**（~3.3 万可见字）：包含 56 组 `<details open><summary>` 语义折叠真实问答，覆盖协议、专线拓扑、客户端排错与流媒体解锁。
  - **`/warnings/` 机场跑路预警雷达**（~4.2 万可见字）：业内首个建立在财务预期值与网络探针指标上的机场避坑与失联监测中心。
- 🎯 **六大深度场景长文 (`/services/[id]/`)**：针对 IEPL 专线终端验真、ChatGPT 4.5/Claude 3.7 防降智分流、4K 奈飞跨区、百元年付性价比、按量不限时容灾及 TUN 模式排错输出万字教程。
- 🤖 **完善的 Schema.org 结构化数据**：自动生成 `Organization`、`WebSite`、`WebPage`、`BreadcrumbList`、`TechArticle`、`Service` 与 `FAQPage`，正文与 JSON-LD 100% 同步匹配。
- 🎨 **现代化暗色 UI 与原生动画**：基于 Tailwind CSS v4 与 CSS 原生 Scroll-Driven Animations（`animation-timeline: view()`），手机端自动停用，零第三方繁重 JS 动画库依赖。

---

## 🏗️ 架构拓扑与站内矩阵 (Architecture)

```mermaid
graph TD
  A["/ (首页 Portal)"] --> B["/brands/ (42家机场品牌库)"]
  A --> C["/clients/ (6大客户端教程)"]
  A --> D["/guides/ (专线与协议选型)"]
  A --> E["/free/ (免费资源与开源规则库)"]
  A --> F["/faq/ (机场FAQ 60问百科)"]
  A --> G["/warnings/ (跑路预警与防失联雷达)"]
  A --> H["/services/ (六大深度场景指南)"]
  
  B --> B1["/brands/[slug]/ (42 个独立品牌评测页)"]
  H --> H1["/services/[id]/ (6 篇万字技术实测文章)"]
  
  subgraph 站内四层内链系统 (Topic Matrix)
    B1 -. "回链 / 推荐" .-> A
    B1 -. "横向关联" .-> C
    B1 -. "深度延伸" .-> H1
    H1 -. "归属支柱" .-> H
    E -. "全站矩阵导航" .-> F
    F -. "全站矩阵导航" .-> G
  end
```

---

## 🗂️ 目录结构 (Directory Structure)

```text
clashvpn.run/
├── public/                       # 静态资源 (本地自托管，0 外部不可控 CDN)
│   ├── assets/brand/             # 品牌 SVG 图标、Apple Touch Icon、OG 分享图
│   ├── assets/speedtests/        # 17 份 2026-08-11 真实测速原图存档
│   └── manifest.webmanifest      # PWA 基础元配置
├── src/
│   ├── components/               # 通用组件
│   │   ├── Head.astro            # 全站 SEO Head 系统 (Title, Desc, Canonical, OG, Verification)
│   │   ├── Header.astro          # 顶部主导航 (含 6 大核心支柱入口)
│   │   ├── Footer.astro          # 底部多列导航与合规免责声明
│   │   ├── TopicMatrixNav.astro  # 全站通用四层支柱专题导航矩阵
│   │   ├── ContactForm.astro     # 无 JS 渐进增强联系表单 (带 Honeypot 防垃圾机制)
│   │   └── observatory/          # 暗黑网络可观测性组件 (测速图、解锁矩阵、链路拓扑)
│   ├── content/
│   │   └── services/*.md         # 六大场景技术指南内容源 (Content Collections Schema)
│   ├── data/
│   │   ├── brands.ts             # 42 家机场品牌核心数据源 (协议、价格、测速、优缺点)
│   │   ├── brands-archive.ts     # 14 家归档品牌差异化深度档案
│   │   ├── free-resources.ts     # 免费资源与分流规则库数据库 (~8.3 万字符)
│   │   ├── faq-matrix.ts         # 专线与协议 FAQ 百科数据库 (~6.0 万字符)
│   │   ├── warnings-matrix.ts    # 跑路预警与风险测算数据库 (~8.0 万字符)
│   │   └── links.ts              # 外部商业推广链接隔离层 (严格封装 nofollow sponsored)
│   ├── layouts/
│   │   └── BaseLayout.astro      # 全局母版页
│   ├── lib/
│   │   ├── schema.ts             # JSON-LD 结构化数据生成引擎
│   │   └── urls.ts               # Canonical 绝对路径解析与路由集中管理
│   ├── pages/                    # 路由目录
│   │   ├── index.astro           # 首页 (/)
│   │   ├── brands/               # /brands/ 与 /brands/[slug]/ (42 家品牌评测)
│   │   ├── clients/              # /clients/ (全平台客户端下载与教程)
│   │   ├── guides/               # /guides/ (IEPL vs IPLC 专线架构与协议选型)
│   │   ├── free/                 # /free/ (免费资源与开源分流规则)
│   │   ├── faq/                  # /faq/ (机场FAQ 60问百科)
│   │   ├── warnings/             # /warnings/ (跑路预警与防失联雷达)
│   │   ├── services/             # /services/ 与 /services/[id]/ (场景深度实测)
│   │   ├── contact.astro         # /contact/ (1对1选型诊断与测速投稿)
│   │   ├── thanks.astro          # /thanks/ (提交成功页，noindex)
│   │   ├── 404.astro             # /404.html (404 错误页)
│   │   ├── robots.txt.ts         # 动态生成多引擎抓取规则 robots.txt
│   │   └── sitemap.xml.ts        # 根目录标准 sitemap.xml 接口
│   ├── styles/                   # 样式库 (Tailwind CSS v4 + effects.css 原生动效)
│   └── config.ts                 # 全局业务变量、站点元信息、SEO 站长验证集中配置
├── astro.config.mjs              # Astro 配置文件 (集成 @astrojs/sitemap 与 Tailwind v4)
└── package.json
```

---

## 🛠️ 常用开发命令 (Commands)

本项目采用 `npm` 作为标准包管理器：

| 命令 | 说明 | 验收标准 |
| :--- | :--- | :--- |
| `npm run dev` | 启动本地 Astro 开发服务器 | 默认运行在 `http://localhost:4321` |
| `npm run check` | 对全部 `.astro` 与 `.ts` 执行强类型与内容集合校验 | **必须 0 errors, 0 warnings** |
| `npm run build` | 静态编译全站页面至 `dist/` 目录 | 产出 59 个静态 HTML 与 Sitemap |
| `npm run preview`| 本地预览编译后的 `dist/` 静态站点 | 用于验证生产环境静态资源与路由 |

---

## 🚀 部署指引 (Deployment)

推荐部署于 **Cloudflare Pages**（全球 Edge 节点分发，原生支持静态站点与快速 SSL）：

### 1. Cloudflare Pages 自动构建配置
- **Framework Preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js Version**: `>=22.12.0`（在环境变量中配置 `NODE_VERSION: 22.12.0`）

### 2. 域名与规范化 301 重定向
在 Cloudflare 仪表盘中添加如下规则：
- **Always Use HTTPS**: 开启（强制 HTTP $\to$ HTTPS）
- **Redirect Rules**: 将 `https://www.clashvpn.run/*` 301 永久重定向至 `https://clashvpn.run/$1`（全站统一裸域）

### 3. 环境变量配置 (可选)
如果需要接入各大搜索引擎站长平台的验证代码，可在 Cloudflare Pages 后台设置以下环境变量：
```ini
PUBLIC_GOOGLE_SITE_VERIFICATION="your-google-token"
PUBLIC_BING_SITE_VERIFICATION="your-bing-token"
PUBLIC_BAIDU_SITE_VERIFICATION="your-baidu-token"
PUBLIC_SHENMA_SITE_VERIFICATION="your-shenma-token"
```

---

## 🔍 SEO / GEO 基础设施规范

本项目严格遵循白帽 SEO 与生成式 AI 搜索引擎标准：

1. **唯一正式域名**：全站所有 `<link rel="canonical">`、Open Graph、Twitter Card 及 Schema URL 均强制解析为 `https://clashvpn.run/.../` 绝对地址。
2. **尾部斜杠强制性**：遵循 `trailingSlash: "always"`，全站目录路径必须以 `/` 结尾，避免重复内容惩罚。
3. **外链严格隔离**：全站所有指向外部商业合作站与付费应用商店的链接，统一包裹 `rel="nofollow sponsored noopener noreferrer"`，杜绝连坐风控。
4. **GEO Answer-First 布局**：核心栏目与 42 家品牌详情页首屏均部署语义化 `<blockquote>` 核心结论块，便于 Perplexity / Google AI Overviews 提取零点击答案。
5. **多搜索引擎兼容**：`robots.txt` 明确放行 Googlebot、bingbot、Baiduspider 与 yisouspider（神马/夸克），并同步声明 `/sitemap.xml` 与 `/sitemap-index.xml`。

---

## 📄 开源许可证 (License)

本项目基于 [MIT 许可证](LICENSE) 开源。
