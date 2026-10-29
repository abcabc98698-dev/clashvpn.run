import type { FaqSchemaInput } from "../lib/schema";

export interface FreeEmergencyChannel {
  id: string;
  name: string;
  provider: string;
  officialUrl: string;
  category: string;
  freeQuota: string;
  protocolStack: string;
  speedExpectation: string;
  unlockCapability: string;
  securityRating: "A+ (官方零信任/开源)" | "A (正规商业免费层)" | "B+ (开发者自建边缘)";
  principle: string;
  bestUseCase: string;
  pros: string[];
  limitations: string[];
  setupCommandOrHint: string;
}

export type RuleCategory = "core" | "ai" | "streaming" | "privacy" | "direct";

export interface OpenSourceRuleProvider {
  id: string;
  name: string;
  repoName: string;
  author: string;
  category: RuleCategory;
  categoryLabel: string;
  githubUrl: string;
  rawExampleUrl: string;
  format: "mrs (Mihomo Binary)" | "yaml (Classical/Domain)" | "list (Plain Ruleset)";
  behavior: "domain" | "ipcidr" | "classical";
  updateInterval: string;
  ruleScale: string;
  summary: string;
  technicalAdvantage: string;
  pitfallNote: string;
  yamlSnippet: string;
}

export type DiagnosticCategory = "ip-purity" | "dns-leak" | "speed-route" | "unlock-check";

export interface DiagnosticTool {
  id: string;
  name: string;
  url: string;
  category: DiagnosticCategory;
  categoryLabel: string;
  targetMetric: string;
  healthyThreshold: string;
  dangerSignal: string;
  cliCommand?: string;
  usageGuide: string;
}

export interface LowBarrierTrialPack {
  rankNote: string;
  slug: string;
  name: string;
  packName: string;
  priceLabel: string;
  monthlyEquivalent: string;
  trafficQuota: string;
  lineArchitecture: string;
  protocol: string;
  clientMode: string;
  couponCode: string;
  dataStatusLabel: string;
  whyBetterThanFree: string;
}

export const RULE_CATEGORY_META: Record<
  RuleCategory,
  { label: string; badgeClass: string; desc: string }
> = {
  core: {
    label: "核心全局底座 (Core Geosite/GeoIP)",
    badgeClass: "border-accent/40 bg-accent/10 text-accent",
    desc: "决定国内外基础分流准确率、DNS 防泄漏与内核内存占用的核心规则引擎。",
  },
  ai: {
    label: "AI 生产力专项 (OpenAI/Claude/Gemini)",
    badgeClass: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
    desc: "精准接管 ChatGPT、Claude、Gemini、Cursor、GitHub Copilot 的主域名与风控探针。",
  },
  streaming: {
    label: "4K 流媒体与跨区 (Netflix/Disney+/TikTok)",
    badgeClass: "border-sky-400/40 bg-sky-400/10 text-sky-300",
    desc: "分离音视频 CDN 测速节点与区域版权校验接口，防止 TikTok 送中或奈飞仅自制剧。",
  },
  privacy: {
    label: "隐私通信与去广告 (Telegram/Anti-Ads)",
    badgeClass: "border-purple-400/40 bg-purple-400/10 text-purple-300",
    desc: "基于 IP-ASN 免解析接管电报推流，并在 DNS 层拦截恶意遥测、开屏广告与追踪器。",
  },
  direct: {
    label: "国内直连与 Apple CDN 加速 (Direct/CN)",
    badgeClass: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    desc: "保障微信、网银、Apple iCloud 国区、Steam 国服 CDN 满速直连，不消耗任何专线流量。",
  },
};

export const DIAGNOSTIC_CATEGORY_META: Record<
  DiagnosticCategory,
  { label: string; code: string; desc: string }
> = {
  "ip-purity": {
    label: "IP 纯净度与欺诈风险审计",
    code: "IP_PURITY_ASN",
    desc: "检验落地 IP 是否为真正的 ISP 住宅/原生地址，量化黑名单历史与万人骑共享程度。",
  },
  "dns-leak": {
    label: "DNS 递归与 WebRTC 穿透审计",
    code: "DNS_WEBRTC_LEAK",
    desc: "排查本地运营商 DNS 抢答、浏览器 UDP STUN 真实内网/公网 IP 裸奔与 ECH 加密状态。",
  },
  "speed-route": {
    label: "吞吐测速与全球 BGP 路由追踪",
    code: "THROUGHPUT_BGP_MTR",
    desc: "测量晚高峰真实流媒体 CDN 码率、抖动 (Jitter)、丢包率及海底光缆 AS 自治域跳数。",
  },
  "unlock-check": {
    label: "AI 风控与流媒体版权区位探针",
    code: "AI_STREAM_UNLOCK",
    desc: "一键核验 OpenAI 地区支持、Netflix 非自制剧版权代码及 YouTube 4K 实时连接速率。",
  },
};

export const FREE_EMERGENCY_CHANNELS: FreeEmergencyChannel[] = [
  {
    id: "cloudflare-warp-zero-trust",
    name: "Cloudflare WARP / Zero-Trust 零信任通道",
    provider: "Cloudflare, Inc. (NYSE: NET)",
    officialUrl: "https://1.1.1.1/",
    category: "官方零信任 WireGuard / MASQUE 边缘网络",
    freeQuota: "不限流量（Zero Trust 免费层支持最高 50 个团队席位）",
    protocolStack: "WireGuard (UDP 2408/1701/500) / MASQUE (HTTP/3 QUIC)",
    speedExpectation: "直连视运营商受阻情况 5–80Mbps；作为专线链式落地可达 300Mbps+",
    unlockCapability: "自带 Cloudflare 原生 Anycast IP，对 OpenAI / Google 免验证码极度友好",
    securityRating: "A+ (官方零信任/开源)",
    principle:
      "依托 Cloudflare 遍布全球 310+ 城市的边缘 Anycast 节点。在国内直接连接时，由于默认 Endpoint IP 大面积受 UDP QOS 干扰，通常需配合优选 Endpoint IP 工具或切换至基于 HTTP/3 的 MASQUE 协议；而在进阶用法中，通过开源工具 wgcf 提取标准 WireGuard 私钥与公钥，将其配置为 Mihomo (Clash Meta) 的 dialer-proxy 链式落地节点，即可用机场的 IEPL 专线负责过墙传输、用免费的 Cloudflare WARP 负责清洗出口 IP 纯净度。",
    bestUseCase:
      "1) 主力订阅到期失联时的临时救急拉取新订阅；2) 作为机场节点的链式落地层（Dialer-Proxy），彻底解决万人骑机场 IP 频繁触发 Google reCAPTCHA 验证码或 ChatGPT 403 拦截的问题。",
    pros: [
      "Cloudflare 官方出品，无任何第三方恶意嗅探、无流量劫持风险，隐私合规性全球顶级",
      "完全免费且不限制月度流量总额，Zero Trust 团队版还可自定义 Split Tunnel 分流策略",
      "出口 IP 拥有极高的 Cloudflare 声誉权重，几乎不会触发 Cloudflare 5秒盾死循环验证",
    ],
    limitations: [
      "中国大陆三网直连默认 Endpoint (engage.cloudflareclient.com) 丢包率高，晚高峰直连不稳定",
      "出口 IP 按照就近 Anycast 原则分配，直连时常识别为香港或美国，不支持任意指定小众国家",
      "Netflix 等部分流媒体会将 Cloudflare WARP IP 识别为已知代理，仅解锁自制剧 (Originals Only)",
    ],
    setupCommandOrHint: "wgcf register && wgcf generate # 生成标准 wgcf-profile.conf 提取 PrivateKey 与 Reserved 字段",
  },
  {
    id: "protonvpn-free-tier",
    name: "ProtonVPN Free 官方永久免费无流量限制层",
    provider: "Proton AG (瑞士日内瓦隐私安全机构)",
    officialUrl: "https://protonvpn.com/free-vpn",
    category: "瑞士严格隐私法保护的商业 VPN 免费层",
    freeQuota: "永久免费、不限月度流量（限制单设备在线，随机分配美/荷/日/罗/波 5 国节点）",
    protocolStack: "WireGuard / OpenVPN / Stealth (基于 TLS 的混淆穿透协议)",
    speedExpectation: "10Mbps – 60Mbps（高峰期受免费池拥挤度影响）",
    unlockCapability: "支持基础 Google / GitHub / Wikipedia 访问，不支持流媒体跨区与 P2P 下载",
    securityRating: "A+ (官方零信任/开源)",
    principle:
      "由瑞士 Proton Mail 团队维护，所有客户端代码完全开源并通过独立第三方安全审计。免费版由付费用户交叉补贴，不记录用户活动日志（No-Logs Policy），也不向广告商出售带宽。其独有的 Stealth 协议会将 VPN 流量封装在常规 HTTPS TLS 握手中，具备一定的防火墙穿透能力。",
    bestUseCase:
      "当所有机场订阅全部失效、且急需在安全无嗅探的环境下访问海外邮箱、GitHub 仓库或购买新主力专线机场时的「第一安全逃生舱」。",
    pros: [
      "客户端 100% 开源审计，瑞士司法管辖，绝无免费野鸡机场的证书中间人劫持与木马后门",
      "真正的不限制月度流量额度，无诱导广告弹窗，账号仅需邮箱即可注册",
    ],
    limitations: [
      "国内直连其官网与 API 常被阻断，需提前在有网时下载安装包并登录账号备用",
      "2024 年改版后免费版不再允许手动挑选具体服务器，由系统自动随机指派 5 个免费国家之一",
      "跨境公网直连在晚高峰延迟较高（180ms–350ms），不适合日常高频生产力办公",
    ],
    setupCommandOrHint: "在客户端 Settings -> Protocol 中切换为 Stealth (TCP 443) 模式以提升国内直连握手成功率。",
  },
  {
    id: "windscribe-free-10gb",
    name: "Windscribe Free 10GB/月多国应急通道",
    provider: "Windscribe Limited (加拿大安大略)",
    officialUrl: "https://windscribe.com/",
    category: "老牌抗封锁多协议商业免费层",
    freeQuota: "验证邮箱后每月免费重置 10GB 流量（未验证邮箱为 2GB/月）",
    protocolStack: "WireGuard / IKEv2 / WStunnel (WebSocket over TLS) / Stealth (stunnel)",
    speedExpectation: "15Mbps – 85Mbps（覆盖美、加、英、香港、德、法、荷等 10 个免费地区）",
    unlockCapability: "部分节点可解锁基础 AI 问答与 YouTube 1080P，内置 R.O.B.E.R.T. DNS 级广告拦截",
    securityRating: "A (正规商业免费层)",
    principle:
      "Windscribe 针对高审查网络环境专门开发了 WStunnel（将 OpenVPN 流量包裹在 WebSocket + TLS 443 端口中）与 Stealth 协议，并提供了绕过 SNI 审查的 Circumvent Censorship 开关。每月 10GB 的免费额度每月自动重置，且罕见地在免费层开放了包括香港、美西、英国、德国在内的 10 个地区手动选点。",
    bestUseCase:
      "每个月作为「断网急救包」常驻电脑与手机，10GB 流量足够应付主力机场维护停机期间的 Telegram 收发、网页查阅与紧急订阅更新。",
    pros: [
      "免费层允许手动选择香港、美国、英国、德国、荷兰等 10 个国家/地区，比 Proton 随机分配更可控",
      "内置 WStunnel 与 Stealth 两种专门针对 DPI 深度包检测的混淆协议，应急连通率较高",
      "支持生成自定义 DNS 过滤规则，无恶意劫持行为",
    ],
    limitations: [
      "每月硬性上限 10GB 流量，观看几个 4K 视频即会耗尽，不可作为主力梯使用",
      "香港免费节点在晚高峰负载极高，延迟抖动明显",
    ],
    setupCommandOrHint: "开启 Preferences -> Connection -> Circumvent Censorship (绕过审查) 并优先选用 WStunnel 端口 443。",
  },
  {
    id: "cloudflare-workers-pages-ech",
    name: "Cloudflare Workers / Pages 边缘无服务器自建应急",
    provider: "Cloudflare Developer Platform",
    officialUrl: "https://developers.cloudflare.com/workers/",
    category: "Serverless 边缘计算自建通道（仅限开发者个人自用）",
    freeQuota: "每日免费 100,000 次请求（UTC 0点重置）",
    protocolStack: "VLESS over WebSocket + TLS 1.3 + ECH (Encrypted Client Hello)",
    speedExpectation: "20Mbps – 120Mbps（取决于自选优选域名或反代 IP 质量）",
    unlockCapability: "借由 ProxyIP 反代或 NAT64 转换可访问全球常规网站",
    securityRating: "B+ (开发者自建边缘)",
    principle:
      "利用 Cloudflare Workers 或 Pages Functions 提供的每日 10 万次免费 Serverless 调用配额，部署轻量级 WebSocket 转发脚本。配合支持 TLS 1.3 ECH (Encrypted Client Hello) 的 Mihomo 或 Sing-box 客户端，可以将真实的 Workers 子域名隐藏在 Cloudflare 公共外层 SNI (cloudflare-ech.com) 之后，避免子域名被 SNI 阻断。",
    bestUseCase:
      "具备基础 JavaScript/Cloudflare 账号操作能力的开发者，用于构建完全私有、零月租成本的个人极端断网备用通道。",
    pros: [
      "代码与密钥完全掌握在自己手中，零资金成本，无需购买海外 VPS 服务器",
      "结合 ECH (Encrypted Client Hello) 与优选 CDN IP 后，抗干扰能力优于传统直连 VPS",
    ],
    limitations: [
      "严禁公开分享或大流量 BT/视频滥用，否则极易触发 Cloudflare 1101 错误或账号封禁警告",
      "每次 HTTP/WebSocket 握手均消耗请求配额，重度网页浏览可能在晚间触及每日 10 万次上限",
      "维护优选 IP 与 NAT64 落地需要一定网络工程知识，不适合追求省心的新手",
    ],
    setupCommandOrHint: "在 Mihomo 节点配置中启用 ech-opts: { enable: true, query-server-name: cloudflare-ech.com }。",
  },
  {
    id: "github-codespaces-ssh-tunnel",
    name: "GitHub Codespaces 开发者 SSH 动态端口转发",
    provider: "GitHub, Inc. (Microsoft Azure 基础设施)",
    officialUrl: "https://github.com/features/codespaces",
    category: "云端开发环境 SSH SOCKS5 隧道",
    freeQuota: "GitHub 普通账号每月免费赠送 120 核时（即双核实例每月免费运行 60 小时）+ 15GB 存储",
    protocolStack: "SSH Dynamic Port Forwarding (-D) over GitHub CLI / Azure Relay",
    speedExpectation: "10Mbps – 50Mbps（底层走微软 Azure 美西/东南亚/欧洲机房骨干网）",
    unlockCapability: "微软 Azure 原生机房 IP，适合拉取 Docker 镜像、npm/pip 依赖与查阅技术文档",
    securityRating: "A+ (官方零信任/开源)",
    principle:
      "每个 GitHub 账号每月均享有 60 小时（2-core）的免费云端容器环境 Codespaces。只要本地能通过 GitHub CLI (gh) 建立认证，即可执行 `gh codespace ssh -- -D 10808 -N` 在本地启动一个绝对加密的 SOCKS5 代理端口，所有流量通过微软 Azure 全球云机房转发。",
    bestUseCase:
      "程序员在公司内网或特殊网络环境下，临时需要拉取海外代码库、查阅 StackOverflow 或下载新的 Mihomo 客户端二进制包。",
    pros: [
      "基于标准 OpenSSH 协议与微软 Azure 官方中继，安全性极高，无需安装任何第三方代理软件",
      "无需信用卡即可使用 GitHub 免费月度配额，用完即停不产生账单",
    ],
    limitations: [
      "仅限按需开启（每月 60 小时），忘记关闭 Codespace 实例会在几天内耗尽当月免费核时",
      "仅提供 TCP 转发（不支持原生 UDP），不适合长期挂后台或手机端日常使用",
    ],
    setupCommandOrHint: "gh codespace ssh -c <codespace-name> -- -D 127.0.0.1:10808 -q -C -N",
  },
  {
    id: "tailscale-exit-node-mesh",
    name: "Tailscale / ZeroTier 异地组网 Exit-Node 出口中继",
    provider: "Tailscale Inc.",
    officialUrl: "https://tailscale.com/",
    category: "开源控制面 WireGuard Mesh 虚拟局域网",
    freeQuota: "Personal 免费计划支持最多 3 名用户、100 台设备接入",
    protocolStack: "WireGuard (Noise Protocol Framework) + DERP 全球加密中继",
    speedExpectation: "P2P 打洞成功后跑满物理宽带；走官方 DERP 中继时约 5–25Mbps",
    unlockCapability: "完全取决于您配置为 Exit Node 的海外设备（如亲友海外家宽、Oracle 永久免费云主机或 Apple TV）",
    securityRating: "A+ (官方零信任/开源)",
    principle:
      "如果你或海外亲友家里有一台常开的 Apple TV、软路由，或者持有甲骨文云 (Oracle Cloud Free Tier) 永久免费 ARM 实例，只需在两端安装开源的 Tailscale 并开启 `--advertise-exit-node`，即可零配置构建端到端 WireGuard 私密专线，无需在公网暴露任何容易被扫描封锁的代理端口。",
    bestUseCase:
      "拥有海外亲友家庭宽带（100% 真实海外住宅原生 IP）或免费云主机的进阶玩家，打造绝不撞车的私人原生 IP 落地。",
    pros: [
      "不在公网暴露任何固定 TCP/UDP 监听端口，彻底免疫主动探测与端口封锁",
      "若以海外亲友家宽作为 Exit Node，可获得 Scamalytics 0 分的顶级真实家庭住宅 IP",
    ],
    limitations: [
      "本身是组网工具而非公共代理服务，前提是您必须自己拥有一台位于海外的设备或免费层云实例作为出口",
      "跨国 UDP 打洞失败回退至公共 DERP 中继服务器时，带宽会受到明显限制",
    ],
    setupCommandOrHint: "tailscale up --advertise-exit-node # 在海外节点执行并在管理后台批准 Exit Node 权限",
  },
];

export const OPEN_SOURCE_RULE_PROVIDERS: OpenSourceRuleProvider[] = [
  {
    id: "metacubex-geosite-mrs",
    name: "MetaCubeX 官方 Geosite / GeoIP (.mrs 二进制极速规则集)",
    repoName: "MetaCubeX/meta-rules-dat",
    author: "MetaCubeX (Mihomo 内核官方团队)",
    category: "core",
    categoryLabel: "核心全局底座",
    githubUrl: "https://github.com/MetaCubeX/meta-rules-dat",
    rawExampleUrl: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs",
    format: "mrs (Mihomo Binary)",
    behavior: "domain",
    updateInterval: "每 6 小时自动构建同步 (GitHub Actions)",
    ruleScale: "覆盖 1400+ 分类标签、超 180,000 条域名与 CIDR",
    summary:
      "Mihomo (Clash Meta) 内核官方维护的新一代二进制 `.mrs` 规则仓库。相比传统 YAML 或纯文本规则集，`.mrs` 采用紧凑的前缀树序列化结构，内存占用降低 65% 以上，规则加载与冷启动速度提升 5–8 倍。",
    technicalAdvantage:
      "支持在 Mihomo 中直接通过 `format: mrs` 按需按标签懒加载（如仅拉取 `cn.mrs`、`geolocation-!cn.mrs`、`openai.mrs`），无需下载几十兆的完整 Geosite.dat，是 2026 年软路由（OpenClash）与移动端省内存首选。",
    pitfallNote:
      "`.mrs` 二进制格式仅限 Mihomo (Clash Meta) 内核客户端（如 Clash Verge Rev、FlClash、OpenClash Meta）解析；停更的老旧原版 Clash 内核无法识别。",
    yamlSnippet: `rule-providers:
  geosite-noncn:
    type: http
    behavior: domain
    format: mrs
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs"
    path: ./ruleset/geosite-noncn.mrs
    interval: 86400
  geosite-cn:
    type: http
    behavior: domain
    format: mrs
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs"
    path: ./ruleset/geosite-cn.mrs
    interval: 86400

rules:
  - RULE-SET,geosite-cn,DIRECT
  - RULE-SET,geosite-noncn,🚀 节点选择`,
  },
  {
    id: "loyalsoldier-clash-rules",
    name: "Loyalsoldier 经典每日构建 Clash 分流规则集",
    repoName: "Loyalsoldier/clash-rules",
    author: "Loyalsoldier",
    category: "core",
    categoryLabel: "核心全局底座",
    githubUrl: "https://github.com/Loyalsoldier/clash-rules",
    rawExampleUrl: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/proxy.txt",
    format: "yaml (Classical/Domain)",
    behavior: "domain",
    updateInterval: "每日北京时间 06:30 自动聚合上游源",
    ruleScale: "proxy.txt 约 42,000+ 域名 | direct.txt 约 78,000+ 域名 | cncidr 约 8,500+ 网段",
    summary:
      "中文开源社区历史最久、Star 数最高的标准 Clash `rule-providers` 仓库之一。基于 v2fly/domain-list-community、china-list 与 MaxMind GeoLite2 每日定时编译，结构极其清晰（direct / proxy / reject / private / apple / icloud / telegramcidr）。",
    technicalAdvantage:
      "采用标准 YAML payload 格式，兼容所有新老 Clash 内核、Stash 以及各类订阅转换器，白名单与黑名单边界极度克制，几乎不会发生误杀国内政务/银行网站的情况。",
    pitfallNote:
      "由于包含完整的 YAML 文本列表，`direct.txt` 体积约 1.5MB，在内存仅有 128MB 的老旧硬路由上建议改用上方的 MetaCubeX `.mrs` 格式。",
    yamlSnippet: `rule-providers:
  loyalsoldier-proxy:
    type: http
    behavior: domain
    url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/proxy.txt"
    path: ./ruleset/loyalsoldier-proxy.yaml
    interval: 86400
  loyalsoldier-direct:
    type: http
    behavior: domain
    url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/direct.txt"
    path: ./ruleset/loyalsoldier-direct.yaml
    interval: 86400

rules:
  - RULE-SET,loyalsoldier-direct,DIRECT
  - RULE-SET,loyalsoldier-proxy,🚀 节点选择`,
  },
  {
    id: "acl4ssr-online-full",
    name: "ACL4SSR 全能多策略组自动分流规则库",
    repoName: "ACL4SSR/ACL4SSR",
    author: "ACL4SSR Team",
    category: "core",
    categoryLabel: "核心全局底座",
    githubUrl: "https://github.com/ACL4SSR/ACL4SSR",
    rawExampleUrl: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list",
    format: "list (Plain Ruleset)",
    behavior: "classical",
    updateInterval: "持续社区 PR 维护更新",
    ruleScale: "涵盖 40+ 独立业务模块（LocalAreaNetwork / BanAD / ChinaDomain / ProxyGFWlist 等）",
    summary:
      "Subconverter 订阅转换器的默认标准规则库。其核心理念是将局域网、国内直连、去广告、微软服务、苹果服务、电报、奈飞、AI 等拆分为颗粒度极细的 `.list` 规则碎片，方便在订阅转换时一键生成带国旗图标的策略组。",
    technicalAdvantage:
      "与 Subconverter 生态无缝咬合，提供 `ACL4SSR_Online_Full_NoAuto.ini`、`ACL4SSR_Online_Mini.ini` 等十余套现成远程配置模板，开箱即用。",
    pitfallNote:
      "ACL4SSR 默认使用 `classical` 行为模式逐行匹配，当叠加过多 `.list` 时匹配效率低于 `domain` 树模式；建议在 Mihomo 中配合精简版模板使用。",
    yamlSnippet: `rule-providers:
  acl4ssr-lan:
    type: http
    behavior: classical
    format: text
    url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list"
    path: ./ruleset/acl4ssr-lan.list
    interval: 86400
  acl4ssr-gfw:
    type: http
    behavior: classical
    format: text
    url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list"
    path: ./ruleset/acl4ssr-gfw.list
    interval: 86400

rules:
  - RULE-SET,acl4ssr-lan,DIRECT
  - RULE-SET,acl4ssr-gfw,🚀 节点选择`,
  },
  {
    id: "blackmatrix7-openai-claude",
    name: "Blackmatrix7 AI 生产力专项规则 (OpenAI / Claude / Gemini / Copilot)",
    repoName: "blackmatrix7/ios_rule_script",
    author: "blackmatrix7",
    category: "ai",
    categoryLabel: "AI 生产力专项",
    githubUrl: "https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/OpenAI",
    rawExampleUrl: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml",
    format: "yaml (Classical/Domain)",
    behavior: "classical",
    updateInterval: "每周多批次上游同步",
    ruleScale: "涵盖 OpenAI、Anthropic Claude、Google Gemini、Perplexity、Cursor 全部鉴权与静态资源域名",
    summary:
      "为什么明明挂了美国节点，打开 ChatGPT 还是提示 `Unable to load site` 或 403？因为 OpenAI 除了 `chatgpt.com` 主域名外，还调用了 `oaistatic.com`、`oaiusercontent.com`、Auth0 登录鉴权及 Intercom/Sentry/Stripe 风控探针。只要其中任何一个子域名漏回国内直连或走了香港节点，就会触发区域封禁。",
    technicalAdvantage:
      "Blackmatrix7 的 OpenAI 与 Claude 独立规则集把所有关联 CDN、WebSocket 推送、OAuth 认证及前端遥测域名一网打尽，确保 100% 关联请求锁定在同一个纯净原生 IP 节点上。",
    pitfallNote:
      "务必将 AI 规则放置在全局分流列表的最顶端（高于常规 Google/Microsoft/Cloudflare 规则），并指向固定国家节点（如日本/新加坡/美西），严禁指向短间隔 url-test 自动测速组，防止对话中途切换 IP 触发封号。",
    yamlSnippet: `rule-providers:
  ai-openai:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml"
    path: ./ruleset/ai-openai.yaml
    interval: 43200
  ai-claude:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Claude/Claude.yaml"
    path: ./ruleset/ai-claude.yaml
    interval: 43200
  ai-gemini:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Gemini/Gemini.yaml"
    path: ./ruleset/ai-gemini.yaml
    interval: 43200

rules:
  - RULE-SET,ai-openai,🤖 AI原生专线
  - RULE-SET,ai-claude,🤖 AI原生专线
  - RULE-SET,ai-gemini,🤖 AI原生专线`,
  },
  {
    id: "blackmatrix7-netflix-disney",
    name: "Blackmatrix7 4K 流媒体专项规则 (Netflix / Disney+ / HBO Max)",
    repoName: "blackmatrix7/ios_rule_script",
    author: "blackmatrix7",
    category: "streaming",
    categoryLabel: "4K 流媒体与跨区",
    githubUrl: "https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Netflix",
    rawExampleUrl: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Netflix/Netflix.yaml",
    format: "yaml (Classical/Domain)",
    behavior: "classical",
    updateInterval: "持续同步全球流媒体 CDN 节点池",
    ruleScale: "包含 nflxvideo.net 音视频流、fast.com 测速及 bamgrid/dssott (Disney+) 全部边际域名及 ASN IP 段",
    summary:
      "流媒体平台通常采用「网页主站域名 + 独立视频流分发域名（如 `nflxvideo.net`、`dssott.com`）+ AWS/CloudFront IP 直连」的三层架构。如果只分流了 `netflix.com`，视频流本身可能会走错策略组导致画质锁死 480P 或报错 `tvq-pb-101`。",
    technicalAdvantage:
      "完整收录 Netflix Open Connect CDN 的 IPv4/IPv6 CIDR 网段与 Disney+ 的 BAMTech 认证接口，允许用户将高带宽消耗的流媒体流量单独路由至 1 倍率大带宽节点（如新加坡/台湾 IEPL）。",
    pitfallNote:
      "使用此规则时请确保代理客户端已开启 `sniffer`（域名嗅探），以便识别部分电视盒子端直接发起的 IP 硬编码流媒体请求。",
    yamlSnippet: `rule-providers:
  stream-netflix:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Netflix/Netflix.yaml"
    path: ./ruleset/stream-netflix.yaml
    interval: 86400
  stream-disney:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Disney/Disney.yaml"
    path: ./ruleset/stream-disney.yaml
    interval: 86400

rules:
  - RULE-SET,stream-netflix,🎬 流媒体解锁
  - RULE-SET,stream-disney,🎬 流媒体解锁`,
  },
  {
    id: "blackmatrix7-tiktok-unlock",
    name: "Blackmatrix7 TikTok 跨区防黑屏与字节海外域名隔离集",
    repoName: "blackmatrix7/ios_rule_script",
    author: "blackmatrix7",
    category: "streaming",
    categoryLabel: "4K 流媒体与跨区",
    githubUrl: "https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/TikTok",
    rawExampleUrl: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TikTok/TikTok.yaml",
    format: "yaml (Classical/Domain)",
    behavior: "classical",
    updateInterval: "高频维护",
    ruleScale: "涵盖 byteoversea.com、ibytedtos.com、ipstatp.com、muscdn.com、tiktokv.com 等百余条核心规则",
    summary:
      "TikTok 是对分流规则顺序最敏感的应用：其底层使用了大量与国内抖音同源的字节跳动边缘域名（如 `byteoversea.com`、`tiktokv.com`）。如果基础国内规则将字节系域名一刀切放入 `DIRECT`，TikTok 就会立即检测到中国大陆 IP 从而触发黑屏（No internet connection）。",
    technicalAdvantage:
      "将 TikTok 海外 API 与国内字节跳动业务精准剥离，只要把本规则置于 `ChinaMax / Direct` 规则之前，即可在免拔卡版本或网页端稳定跨区至日本、台湾、美区或英区。",
    pitfallNote:
      "香港地区自 2020 年起已停止运营 TikTok 官方服务，切勿将 TikTok 策略组指向香港节点，否则同样会显示网络无连接；请固定指向台湾、日本、新加坡或美国节点。",
    yamlSnippet: `rule-providers:
  stream-tiktok:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TikTok/TikTok.yaml"
    path: ./ruleset/stream-tiktok.yaml
    interval: 86400

rules:
  # 必须置于所有 GeoSite-CN / ByteDance 直连规则上方！
  - RULE-SET,stream-tiktok,🎵 TikTok跨区(非香港)`,
  },
  {
    id: "metacubex-telegram-ipcidr",
    name: "MetaCubeX Telegram 官方数据中心 IP-CIDR & ASN 免解析规则",
    repoName: "MetaCubeX/meta-rules-dat",
    author: "MetaCubeX",
    category: "privacy",
    categoryLabel: "隐私通信与去广告",
    githubUrl: "https://github.com/MetaCubeX/meta-rules-dat/tree/meta/geo/geoip",
    rawExampleUrl: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs",
    format: "mrs (Mihomo Binary)",
    behavior: "ipcidr",
    updateInterval: "每 6 小时同步 BGP 路由表",
    ruleScale: "完整覆盖 Telegram DC1–DC5 (迈阿密/阿姆斯特丹/新加坡) 全部 IPv4 与 IPv6 CIDR",
    summary:
      "Telegram 客户端在收发消息、加载图片与语音通话时，根本不走传统 HTTP 域名请求，而是直接向 DC1–DC5 的固定 IP 段发起 MTProto 加密连接。如果分流规则只配置了 `t.me` 域名，桌面端与移动端 Telegram 就会一直转圈显示 `Connecting...`。",
    technicalAdvantage:
      "配合 `no-resolve` 标记直接匹配目标 IP 网段，在客户端发起 TCP 连接的第一毫秒即命中代理隧道，无需触发本地 DNS 解析，彻底杜绝向运营商暴露正在连接 Telegram 服务器的行为。",
    pitfallNote:
      "在 `rules` 中引用任何 `ipcidr` 类型的规则集时，务必在末尾加上 `,no-resolve` 参数，避免内核为了匹配 IP 规则而对普通域名发起阻塞式 DNS 预解析。",
    yamlSnippet: `rule-providers:
  telegram-ip:
    type: http
    behavior: ipcidr
    format: mrs
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs"
    path: ./ruleset/telegram-ip.mrs
    interval: 86400

rules:
  - RULE-SET,telegram-ip,📲 电报专线,no-resolve`,
  },
  {
    id: "blackmatrix7-apple-cn-direct",
    name: "Blackmatrix7 Apple CN & iCloud 国内 CDN 满速直连分流集",
    repoName: "blackmatrix7/ios_rule_script",
    author: "blackmatrix7",
    category: "direct",
    categoryLabel: "国内直连与 Apple CDN 加速",
    githubUrl: "https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Apple",
    rawExampleUrl: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple.yaml",
    format: "yaml (Classical/Domain)",
    behavior: "classical",
    updateInterval: "持续同步 Apple 全球 Akamai/贵州云上艾珀 CDN",
    ruleScale: "涵盖 App Store 下载、macOS 系统更新、iCloud 照片同步与 Apple Music 约 600+ 规则",
    summary:
      "很多苹果用户开启代理后会发现：iPhone 更新 iOS 固件或 iCloud 相册同步不仅极慢，还在一夜之间跑光了几十 GB 的宝贵专线机场流量。这是因为未将 Apple 在中国大陆有 CDN 节点的域名（如 `ls.apple.com`、`mzstatic.com`、`icloud-content.com`）与需要代理的海外服务（如 Apple Intelligence / TestFlight 国际版）区分开。",
    technicalAdvantage:
      "精准放行国内拥有 Akamai 边缘节点的 App Store 与系统更新流量走本地千兆宽带直连，同时不影响美区 App Store 账号切换与 Apple TV+ 跨区代理。",
    pitfallNote:
      "若您需要使用 iOS 18.2+ / macOS 15.2+ 的 Apple Intelligence 人工智能特性，需将 `guzzoni.apple.com` 与 `smoot.apple.com` 等特定 Siri 推理域名单独前置指向美国原生 IP 节点。",
    yamlSnippet: `rule-providers:
  apple-direct:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple.yaml"
    path: ./ruleset/apple-direct.yaml
    interval: 86400

rules:
  - DOMAIN-SUFFIX,guzzoni.apple.com,🤖 AI原生专线
  - RULE-SET,apple-direct,DIRECT`,
  },
  {
    id: "awavenue-ads-rule",
    name: "AWAvenue 秋风的规则（零误杀轻量级去广告与反遥测规则集）",
    repoName: "TG-Twilight/AWAvenue-Ads-Rule",
    author: "TG-Twilight",
    category: "privacy",
    categoryLabel: "隐私通信与去广告",
    githubUrl: "https://github.com/TG-Twilight/AWAvenue-Ads-Rule",
    rawExampleUrl: "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml",
    format: "yaml (Classical/Domain)",
    behavior: "domain",
    updateInterval: "高频人工实测校验更新",
    ruleScale: "精选约 1,800+ 条核心国产 App 开屏广告、电视盒子劫持与 SDK 隐私追踪根域名",
    summary:
      "传统的百万级去广告规则（如合并了太多 EasyList 的巨型列表）不仅会撑爆软路由与手机端内存，还极易误杀淘宝返利、京东领券、微信小程序或视频网站正常播放。AWAvenue（秋风的规则）坚持每一条规则均经过抓包验证，专杀国内主流 App 开屏摇一摇广告、HTTPDNS 下发劫持与后台恶意遥测。",
    technicalAdvantage:
      "体积不到 80KB，内存开销近乎为零，同时提供了原生 Mihomo `.mrs` 与 `.yaml` 双格式，拦截 HTTPDNS 广告域名从而防止 App 绕过系统代理。",
    pitfallNote:
      "网络层 DNS 拦截只能屏蔽独立广告域名，无法去除与正片共用同一 CDN 流的分片贴片广告（如 YouTube 视频流内嵌广告需配合浏览器 uBlock Origin 或美区/无广告节点）。",
    yamlSnippet: `rule-providers:
  awavenue-ads:
    type: http
    behavior: domain
    url: "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml"
    path: ./ruleset/awavenue-ads.yaml
    interval: 43200

rules:
  - RULE-SET,awavenue-ads,REJECT`,
  },
  {
    id: "metacubex-geoip-cn-private",
    name: "MetaCubeX GeoIP CN & Private LAN 局域网与大陆 IP 兜底基座",
    repoName: "MetaCubeX/meta-rules-dat",
    author: "MetaCubeX",
    category: "direct",
    categoryLabel: "国内直连与 Apple CDN 加速",
    githubUrl: "https://github.com/MetaCubeX/meta-rules-dat/tree/meta/geo/geoip",
    rawExampleUrl: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs",
    format: "mrs (Mihomo Binary)",
    behavior: "ipcidr",
    updateInterval: "每 6 小时同步 APNIC / BGP.Tools 权威中国大陆路由表",
    ruleScale: "包含 RFC1918 私有局域网段 + 中国大陆三网及教育网/广电全部 IPv4/IPv6 宣告前缀",
    summary:
      "任何一份健壮的 Mihomo / Clash 配置文件，都必须以 `private.mrs`（局域网直连）开篇、以 `cn.mrs`（大陆 IP 直连）+ `MATCH`（漏网流量走代理）收尾。缺少私有网段规则会导致开启 TUN 模式后无法访问家庭 NAS (`192.168.x.x`)、光猫后台或局域网打印机。",
    technicalAdvantage:
      "融合了 APNIC、IPIP.net 与 BGP.Tools 多源验证的中国大陆路由表，准确识别阿里云/腾讯云/华为云最新扩容的国内 IP 段，避免国内联机游戏被误判走海外代理。",
    pitfallNote:
      "务必将 `private` 规则放在 `rules` 的第 1 行，将 `cn` 规则放在 `MATCH` 兜底规则的正上方。",
    yamlSnippet: `rule-providers:
  geoip-private:
    type: http
    behavior: ipcidr
    format: mrs
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.mrs"
    path: ./ruleset/geoip-private.mrs
    interval: 86400
  geoip-cn:
    type: http
    behavior: ipcidr
    format: mrs
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs"
    path: ./ruleset/geoip-cn.mrs
    interval: 86400

rules:
  - RULE-SET,geoip-private,DIRECT,no-resolve
  # ... 此处放置 AI / 流媒体 / GFW 代理规则 ...
  - RULE-SET,geoip-cn,DIRECT,no-resolve
  - MATCH,🚀 节点选择`,
  },
];

export const DIAGNOSTIC_TOOLS_MATRIX: DiagnosticTool[] = [
  // Category 1: IP Purity & Fraud Score (6 tools)
  {
    id: "scamalytics-ip-fraud",
    name: "Scamalytics IP Fraud Risk 欺诈分查询",
    url: "https://scamalytics.com/ip",
    category: "ip-purity",
    categoryLabel: "IP 纯净度与欺诈分",
    targetMetric: "Fraud Score (0–100 欺诈风险评分) & Datacenter/VPN 标记",
    healthyThreshold: "0 – 25 分 (Low Risk，绿色标识，无黑名单历史)",
    dangerSignal: "≥ 65 分 (High/Very High Risk，橙红警告，必弹 Google 验证码或封禁 OpenAI 账号)",
    cliCommand: "curl -s https://ipinfo.io/json",
    usageGuide:
      "开启代理并切换至待测节点后直接打开网页，不仅要看 Fraud Score 分数，还要重点下滑查看『Proxies』小节中的 VPN / Tor / Server 字段是否为 No。",
  },
  {
    id: "ippure-native-radar",
    name: "IPPure 纯净度与原生/广播 IP 一体化雷达",
    url: "https://ippure.com/",
    category: "ip-purity",
    categoryLabel: "IP 纯净度与欺诈分",
    targetMetric: "IP 纯净度系数、ASN 类型 (ISP vs Hosting) 与原生/广播属性判定",
    healthyThreshold: "原生 IP (Native IP) + 住宅/商业宽带属性 (ISP) + 纯净度优良",
    dangerSignal: "广播 IP (Broadcast IP) 且 ASN 归属为廉价机房 (Hosting) + 高风险标记",
    usageGuide:
      "中文界面非常直观：一站式对比 WHOIS 注册国家与 MaxMind / IPInfo 地理定位国家是否一致，快速识破将廉价机房 IP 包装成“原生家宽”的虚假宣传。",
  },
  {
    id: "ping0-cc-risk",
    name: "Ping0.cc 风控画像与节点共享人数估算",
    url: "https://ping0.cc/",
    category: "ip-purity",
    categoryLabel: "IP 纯净度与欺诈分",
    targetMetric: "IP 类型（家庭宽带 / IDC 机房）、风控值及近期共享活跃人数估算",
    healthyThreshold: "风控值 < 35%，共享人数显示为极少或百人以内（精品专线/定制独享）",
    dangerSignal: "风控值 > 75%（红色极高危）且共享人数显示为数千至上万人（典型万人骑公共池）",
    usageGuide:
      "跨境电商（TikTok / Amazon / Shopee）多账号防关联必测工具。若显示为“IDC 机房 IP”且共享人数破万，切勿直接用于登录高价值店铺或绑定海外虚拟卡。",
  },
  {
    id: "ipinfo-io-asn",
    name: "IPInfo.io 权威 ASN 自治域与双 type 字段核验",
    url: "https://ipinfo.io/",
    category: "ip-purity",
    categoryLabel: "IP 纯净度与欺诈分",
    targetMetric: "asn.type 与 company.type 双字段行业分类 + Privacy Detection",
    healthyThreshold: "asn.type 与 company.type 均为 'isp'（如中华电信 Hinet、NTT、AT&T、Cogent ISP）",
    dangerSignal: "type 显示为 'hosting' 且 privacy.vpn / privacy.proxy 为 true",
    cliCommand: "curl -s https://ipinfo.io/ | grep -E 'ip|org|city|country'",
    usageGuide:
      "OpenAI、Claude 与 Stripe 风控系统最核心的上游数据源之一。只有双 `type` 均为 `isp` 或干净商业网络的节点，才能长期稳定调用 Claude 3.7 / GPT-4o 而不降智。",
  },
  {
    id: "abuseipdb-blacklist",
    name: "AbuseIPDB 全球恶意扫描与垃圾邮件黑名单审计",
    url: "https://www.abuseipdb.com/",
    category: "ip-purity",
    categoryLabel: "IP 纯净度与欺诈分",
    targetMetric: "Confidence of Abuse (0%–100% 滥用确信度) 与近 90 天全球网管举报次数",
    healthyThreshold: "Was not found in our database 或 Confidence of Abuse 为 0%",
    dangerSignal: "Confidence of Abuse > 25%，下方列表出现大量 SSH Brute-Force、Web App Attack 或 Spam 记录",
    usageGuide:
      "很多免费节点或廉价机场未禁止 BT 下载与端口扫描，导致出口 IP 被全球云服务器防火墙拉黑。在搜索框输入节点出口 IP 即可查看是否有犯罪前科。",
  },
  {
    id: "ipqualityscore-lookup",
    name: "IPQualityScore (IPQS) 企业级反欺诈与 Bot 探针",
    url: "https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test",
    category: "ip-purity",
    categoryLabel: "IP 纯净度与欺诈分",
    targetMetric: "Fraud Score、Recent Abuse (近期滥用) 与 Bot Status (机器人行为标记)",
    healthyThreshold: "Fraud Score < 30，Recent Abuse: False，Bot Status: False",
    dangerSignal: "Fraud Score ≥ 85 且标记 Active VPN / High Risk Bot Activity",
    usageGuide:
      "PayPal、苹果美区礼品卡下单、海外银行开户最常采购的商业反欺诈引擎。若在此处亮红灯，强行绑卡极易触发秒封风控。",
  },

  // Category 2: DNS & WebRTC Leak Audit (5 tools)
  {
    id: "browserleaks-webrtc",
    name: "BrowserLeaks WebRTC STUN 真实 IP 穿透检测",
    url: "https://browserleaks.com/webrtc",
    category: "dns-leak",
    categoryLabel: "DNS 与 WebRTC 泄漏",
    targetMetric: "Public IP Address (STUN 探测出的公网 IP) 与 WebRTC Local IP",
    healthyThreshold: "Public IP 仅显示你当前的海外代理节点 IP，绝不出现国内电信/联通/移动宽带真实 IP",
    dangerSignal: "Public IP 一栏赫然列出你家里的中国大陆真实公网 IPv4 或 IPv6 地址（致命裸奔）",
    usageGuide:
      "即使开启了系统 HTTP 代理，浏览器内置的 WebRTC UDP 打洞仍可能绕过代理直连 STUN 服务器。若检测到中国 IP，请立即开启客户端 TUN 虚拟网卡模式或安装 WebRTC Control 插件。",
  },
  {
    id: "browserleaks-dns",
    name: "BrowserLeaks DNS Leak 递归解析服务器归属地审计",
    url: "https://browserleaks.com/dns",
    category: "dns-leak",
    categoryLabel: "DNS 与 WebRTC 泄漏",
    targetMetric: "DNS Server ISP & Country（实际向权威域名服务器发起查询的递归 DNS 列表）",
    healthyThreshold: "列表中 100% 为海外 DNS（如 Cloudflare、Google、Quad9 或机场落地机房所在国 DNS）",
    dangerSignal: "列表中混入 China Telecom / China Unicom / China Mobile 或 114.114.114.114 等境内递归节点",
    usageGuide:
      "一旦出现中国境内 DNS，说明海外网站请求虽然走了代理，但你的域名查询记录仍在向本地运营商广播，且会导致流媒体 CDN 分配回国内造成跨区失败。需在 Mihomo 中启用 `fake-ip` 模式。",
  },
  {
    id: "dnsleaktest-extended",
    name: "DNSLeakTest.com 六轮扩展递归泄漏压力测试",
    url: "https://www.dnsleaktest.com/",
    category: "dns-leak",
    categoryLabel: "DNS 与 WebRTC 泄漏",
    targetMetric: "Extended Test (连续 6 轮共 36 次随机子域名并发递归解析结果)",
    healthyThreshold: "点击 Extended Test 后，全部 6 轮返回的 DNS 服务器均位于海外且与代理出口地区吻合",
    dangerSignal: "前两轮正常，但第 4–6 轮并发升高时回退到本地路由器或国内 ISP 的 DNS 服务器",
    cliCommand: "nslookup whoami.akamai.net",
    usageGuide:
      "专门用于抓出「偶发性 DNS 抢答泄漏」。部分配置不当的 `redir-host` 分流会在上游 DoH 响应超时时自动降级回本地明文 UDP 53 端口，通过 Extended Test 可一眼测出。",
  },
  {
    id: "cloudflare-1111-help",
    name: "Cloudflare 1.1.1.1/help 加密 DNS (DoH/DoT) 状态诊断",
    url: "https://one.one.one.one/help/",
    category: "dns-leak",
    categoryLabel: "DNS 与 WebRTC 泄漏",
    targetMetric: "Using DNS over HTTPS (DoH) / DNS over TLS (DoT) & Data Center 边缘节点代码",
    healthyThreshold: "Connected to 1.1.1.1: Yes，且 Data Center 显示为 HKG / NRT / SIN / LAX 等海外三字码",
    dangerSignal: "全部显示 No，或 Data Center 关联异常",
    usageGuide:
      "等待页面自动运行 5 秒完成检测，可清晰确认当前客户端是否正确通过加密隧道访问了 Cloudflare 的哪一座海外机房（例如 HKG 代表香港、NRT 代表东京、SIN 代表新加坡）。",
  },
  {
    id: "mullvad-connection-check",
    name: "Mullvad Connection Check 零信任三合一安全体检",
    url: "https://mullvad.net/en/check",
    category: "dns-leak",
    categoryLabel: "DNS 与 WebRTC 泄漏",
    targetMetric: "Blacklisted IP + DNS Leaks + WebRTC Leaks 三项联合实时扫描",
    healthyThreshold: "Leaking DNS servers: No | Leaking WebRTC IPs: No | Blacklisted: No",
    dangerSignal: "DNS 或 WebRTC 任意一项亮起红色泄漏警报，或 IP 被标记在公开黑名单内",
    usageGuide:
      "由瑞典隐私大厂 Mullvad 提供的无广告极简体检页，打开即自动同步执行黑名单、DNS 递归与 WebRTC 三项核心隐私检查，适合每次修改完 Clash YAML 配置后做最终验收。",
  },

  // Category 3: Throughput Speed & BGP Route (5 tools)
  {
    id: "cloudflare-speedtest",
    name: "Cloudflare Speed Test 延迟抖动与丢包率实验室",
    url: "https://speed.cloudflare.com/",
    category: "speed-route",
    categoryLabel: "吞吐测速与 BGP 路由",
    targetMetric: "Download/Upload 吞吐、Unloaded/Loaded Latency、Jitter (抖动) 与 Packet Loss (丢包率)",
    healthyThreshold: "亚洲 IEPL 专线：延迟 < 55ms，Jitter < 5ms，Packet Loss = 0.0%，下载 > 100Mbps",
    dangerSignal: "Jitter > 35ms 或 Packet Loss > 2%（即使峰值带宽高，视频会议与 SSH 敲命令也会严重卡顿）",
    usageGuide:
      "比传统 Speedtest.net 更科学的地方在于它会分块测试 100kB、1MB、10MB、25MB 真实载荷下的延迟膨胀（Bufferbloat）与 WebRTC UDP 丢包率，是检验 IEPL 专线真伪的照妖镜。",
  },
  {
    id: "fast-com-netflix-cdn",
    name: "Fast.com (Netflix 官方 Open Connect 视频流真实测速)",
    url: "https://fast.com/",
    category: "speed-route",
    categoryLabel: "吞吐测速与 BGP 路由",
    targetMetric: "Netflix 视频 CDN 真实持续下载速率与负载延迟 (Loaded Latency)",
    healthyThreshold: "≥ 35 Mbps（足以秒开 4K UHD HDR 杜比视界高码率片源且拖动进度条零缓冲）",
    dangerSignal: "< 10 Mbps，或点击『显示更多信息』发现服务器位置分流到了错误的国家",
    usageGuide:
      "部分劣质机场会对 Speedtest.net 测速域名进行定向 QoS 提速作弊，但无法伪造 Netflix 自建的 `nflxvideo.net` 视频流服务器。打开 Fast.com 测出的数字才是你晚上看 4K 视频的真实速度。",
  },
  {
    id: "bgp-he-net-toolkit",
    name: "Hurricane Electric BGP Toolkit 全球自治域路由表查询",
    url: "https://bgp.he.net/",
    category: "speed-route",
    categoryLabel: "吞吐测速与 BGP 路由",
    targetMetric: "AS Path 自治系统拓扑图、Peers 上游互联运营商（Tier-1 骨干网 vs 廉价转接）",
    healthyThreshold: "上游直接互联 PCCW、Telstra、NTT、Singtel、Cogent、Lumen 等一级国际运营商",
    dangerSignal: "上游路径绕行复杂或归属于臭名昭著的垃圾邮件/防弹托管自治域 (Bulletproof Hosting ASN)",
    usageGuide:
      "在搜索框输入节点 IP 或 AS 号（如 `AS45102`、`AS13335`），点击『Graph v4』即可查看该落地机房在全球海底光缆中的真实上游拓扑，判断其是否为优质 BGP 线路。",
  },
  {
    id: "itdog-tcping-traceroute",
    name: "ITDog.cn 全国三网多节点 Tcping 与 MTR 路由追踪",
    url: "https://www.itdog.cn/tcping/",
    category: "speed-route",
    categoryLabel: "吞吐测速与 BGP 路由",
    targetMetric: "全国电信/联通/移动 100+ 监测点对机场入口 IP 的 TCP 端口握手延迟与丢包率",
    healthyThreshold: "国内中转/专线入口（如深圳/东莞/上海 BGP）：全国三网绿色连通，平均 TCP 延迟 < 35ms",
    dangerSignal: "特定省份或特定运营商（如全国移动）整片飘红超时（100% 丢包，说明入口 IP 遭省墙或运营商阻断）",
    cliCommand: "curl -Iv --connect-timeout 5 https://www.google.com",
    usageGuide:
      "当遇到“突然连不上节点”时，从 Clash 配置文件中复制节点的 `server` 入口域名或 IP 填入 ITDog 进行 Tcping，5 秒内即可判断是机场服务器宕机还是你本地宽带运营商阻断了入口。",
  },
  {
    id: "ping-pe-global-mtr",
    name: "Ping.pe 全球 30+ 机房实时 ICMP/TCP 丢包波形与 MTR",
    url: "https://ping.pe/",
    category: "speed-route",
    categoryLabel: "吞吐测速与 BGP 路由",
    targetMetric: "全球视角的实时丢包瀑布图 (Loss%) 与逐跳 MTR 路由节点分析",
    healthyThreshold: "海外与国内监测点 Loss% 稳定为 0%，曲线平滑无锯齿状断流",
    dangerSignal: "国内三网监测点 Loss% 飙升至 50%–100%，而海外监测点 0% 丢包（典型跨境防火墙端口封锁）",
    usageGuide:
      "支持同时查看『全球机房 -> 目标 IP』的实时连续 Ping 图表，点击右侧 `[MTR]` 按钮还能直接展开每一跳路由器的主机名，看清流量究竟在哪一跳骨干网发生拥塞。",
  },

  // Category 4: AI & Streaming Unlock Probes (4 tools)
  {
    id: "lmc999-region-check",
    name: "RegionRestrictionCheck 流媒体与 AI 解锁开源检测脚本",
    url: "https://github.com/lmc999/RegionRestrictionCheck",
    category: "unlock-check",
    categoryLabel: "AI 与流媒体解锁探针",
    targetMetric: "Netflix / Disney+ / YouTube Premium / TikTok / ChatGPT / Claude 全平台跨区状态",
    healthyThreshold: "Netflix: Yes (Region: TW/SG/JP/US) 非自制剧全解锁 + OpenAI: Yes + TikTok: Normal",
    dangerSignal: "Netflix: Originals Only (仅自制剧) 或 Failed | TikTok: Blocked/CN",
    cliCommand: "bash <(curl -L -s check.unlock.media)",
    usageGuide:
      "GitHub 上最权威的流媒体解锁检测开源项目。不仅适用于在 Linux / macOS 终端走代理实测当前节点的真实版权区位，也是各大评测实验室制作解锁矩阵表的底层标准工具。",
  },
  {
    id: "openai-cdn-cgi-trace",
    name: "OpenAI / Cloudflare 边缘握手 Trace 探针",
    url: "https://chatgpt.com/cdn-cgi/trace",
    category: "unlock-check",
    categoryLabel: "AI 与流媒体解锁探针",
    targetMetric: "loc= (OpenAI 识别到的两字母国家代码)、warp= 状态、tls=TLSv1.3 与 sni= 加密状态",
    healthyThreshold: "loc=US / SG / JP / TW / GB / DE（非 CN/HK/RU/BY/IR 等受限地区代码）且 tls=TLSv1.3",
    dangerSignal: "loc=CN 或 loc=HK（香港与大陆均在 OpenAI 官方禁止服务名单内，必报 Unsupported Country）",
    cliCommand: "curl -x http://127.0.0.1:7897 -s https://chatgpt.com/cdn-cgi/trace",
    usageGuide:
      "排障 ChatGPT 最快的一行命令或浏览器书签。无需登录账号，直接打开该链接看 `loc=` 后面的两个字母：只要显示 `loc=HK` 或 `loc=CN`，说明你的 AI 分流规则根本没生效！",
  },
  {
    id: "youtube-stats-for-nerds",
    name: "YouTube Stats for Nerds (详细统计信息 Connection Speed 探针)",
    url: "https://www.youtube.com/",
    category: "unlock-check",
    categoryLabel: "AI 与流媒体解锁探针",
    targetMetric: "Connection Speed (Kbps 实时连接速率)、Network Activity、Buffer Health 与 Dropped Frames",
    healthyThreshold: "4K 60fps 视频：Connection Speed ≥ 45,000 Kbps (约 45Mbps)，Buffer Health > 15s",
    dangerSignal: "Connection Speed 卡在 5,000 Kbps 以下，且 vp09/av01 编码下频繁转圈缓冲",
    usageGuide:
      "随便点开一个 YouTube 4K 60帧视频，在画面上右键点击『详细统计信息 (Stats for nerds)』，重点观察第 9 行 `Connection Speed`，它真实反映了节点对 Google Video (QUIC/TCP) 的持续吞吐能力。",
  },
  {
    id: "ipcheck-ing-dashboard",
    name: "IPCheck.ing 开源多源 IP 归属、WebRTC 与网速全能仪表盘",
    url: "https://ipcheck.ing/",
    category: "unlock-check",
    categoryLabel: "AI 与流媒体解锁探针",
    targetMetric: "国内外 6 组 IP 数据源对比 + WebRTC + DNS 泄露 + Google/GitHub/ChatGPT 连通延迟矩阵",
    healthyThreshold: "国内显示本地宽带 IP（分流直连正常），国外显示代理节点 IP，且下方连通性卡片全绿",
    dangerSignal: "国内外 IP 完全相同（说明处于 Global 全局模式或规则失效，国内流量也在白白消耗机场额度）",
    usageGuide:
      "开源项目 `jason5ng32/MyIP` 的官方在线实例。同时发起国内（淘宝/IPIP）与海外（Cloudflare/IPInfo）多路请求，一眼验证你的 Clash『国内直连、国外代理』分流规则是否精准工作。",
  },
];

export const LOW_BARRIER_TRIAL_PACKS: LowBarrierTrialPack[] = [
  {
    rankNote: "TOP 1 · 榜首双专线全能首选",
    slug: "guangsuyun",
    name: "光速云 (Guangsu Cloud)",
    packName: "轻量年付版 / 147永久不过期套餐 / 极速月付版",
    priceLabel: "¥99/年 | ¥147/永久 | ¥25/月",
    monthlyEquivalent: "折合 ¥8.25/月",
    trafficQuota: "69GB/月 (轻量) | 247GB (永久不限时) | 168GB/月 (极速)",
    lineArchitecture: "IEPL 专线 + 企业级内网专线（双线路架构，最高 2.5Gbps）",
    protocol: "VLESS",
    clientMode: "自研客户端 + Clash / Shadowrocket 通用订阅双支持",
    couponCode: "AMM (常规周期套餐享新人折上折)",
    dataStatusLabel: "2026-08-11 实测原图 (香港 22ms / 529Mbps)",
    whyBetterThanFree:
      "2020年运营至今的老牌标杆，每月仅需一杯豆浆钱（¥8.25/月）即可获得真实 IEPL 双专线与香港×20、日新美各×10 节点，彻底告别免费节点偷跑流量与证书劫持风险。",
  },
  {
    rankNote: "极限底价 · ¥5.6/月 IEPL+VLESS",
    slug: "shandianshu",
    name: "闪电鼠 (Shandianshu)",
    packName: "极限平价年付档（季付及以上享 7 折）",
    priceLabel: "约 ¥67/年（折算）",
    monthlyEquivalent: "折合 ¥5.6/月",
    trafficQuota: "60GB/月（每月重置）",
    lineArchitecture: "IEPL 专线传输",
    protocol: "VLESS",
    clientMode: "自研客户端 + 第三方通用订阅导入",
    couponCode: "sd88 (季付及以上 7 折)",
    dataStatusLabel: "品牌披露 (Vendor 2026-10 核验)",
    whyBetterThanFree:
      "全站 42 家档案中价格门槛最低的规范 VLESS + IEPL 方案之一，每天不到 0.19 元即可拥有独立加密订阅。",
  },
  {
    rankNote: "极限底价 · ¥5.6/月 备用优选",
    slug: "dalaoyun",
    name: "大佬云 (Dalao Cloud)",
    packName: "年付平价入门档（季付及以上享 7 折）",
    priceLabel: "约 ¥67/年（折算）",
    monthlyEquivalent: "折合 ¥5.6/月",
    trafficQuota: "60GB/月（每月重置）",
    lineArchitecture: "IEPL 专线传输",
    protocol: "VLESS",
    clientMode: "自研客户端 + 第三方通用订阅导入",
    couponCode: "dly888 (季付及以上 7 折)",
    dataStatusLabel: "品牌披露 (Vendor 2026-10 核验)",
    whyBetterThanFree:
      "与闪电鼠同属 ¥5.6/月极低成本梯队，支持导入 Clash Verge Rev 与小火箭，适合预算极度敏感的学生党作为备用线路。",
  },
  {
    rankNote: "TOP 2 · 纯新手零配置登录即连",
    slug: "feimaoyun",
    name: "飞猫云 (Feimao Cloud)",
    packName: "飞猫·学生版年付 / 星耀月付版",
    priceLabel: "¥84/年 | ¥25/月",
    monthlyEquivalent: "折合 ¥7.00/月",
    trafficQuota: "50GB/月 (学生版) | 150GB/月 (星耀版)",
    lineArchitecture: "亚太欧美多地区优化线路",
    protocol: "专属客户端托管加密协议",
    clientMode: "官方专属客户端（下载登录即用，免导订阅）",
    couponCode: "flycat888",
    dataStatusLabel: "2026-08-11 实测原图 (香港 21ms / 526Mbps)",
    whyBetterThanFree:
      "完全免去寻找订阅链接、配置 YAML 规则的繁琐门槛，下载官方客户端输入账号密码即可一键连接，且支持 ChatGPT 与 Claude。",
  },
  {
    rankNote: "TOP 7 · 百元内永久不限时包",
    slug: "ermaoyun",
    name: "二猫云 (Ermao Cloud)",
    packName: "二猫年付小包 / 100GB 一次性不限时套餐",
    priceLabel: "¥89/年 | ¥99/100GB不限时 | ¥20/月",
    monthlyEquivalent: "折合 ¥7.42/月",
    trafficQuota: "60GB/月 (年付小包) | 100GB (永久不过期)",
    lineArchitecture: "全线 IEPL 专线（不限设备连接数）",
    protocol: "VLESS",
    clientMode: "定制客户端 + 通用订阅双支持",
    couponCode: "ermao5555",
    dataStatusLabel: "2026-08-11 实测原图 (香港 22ms / 481Mbps)",
    whyBetterThanFree:
      "仅需 ¥99 即可买断 100GB 永久不过期 IEPL 专线流量，且不限制同时在线设备数，作为防失联第二订阅（灾备梯）性价比极高。",
  },
  {
    rankNote: "双端兼备 · 60+ 节点 IEPL",
    slug: "tiziyun",
    name: "梯子云 (Ladder Cloud)",
    packName: "梯子云年付入门档",
    priceLabel: "约 ¥89/年",
    monthlyEquivalent: "折合 ¥7.40/月",
    trafficQuota: "60GB/月（每月重置）",
    lineArchitecture: "IEPL 专线（60+ 节点，含高峰冗余）",
    protocol: "VLESS",
    clientMode: "自研全平台一键客户端 + 通用订阅双支持",
    couponCode: "tiziyun",
    dataStatusLabel: "品牌披露 (Vendor 2026-10 核验)",
    whyBetterThanFree:
      "既能给家里长辈/纯小白用一键客户端登录，自己又能在软路由或 Clash Verge Rev 中导入通用订阅，一举两得。",
  },
  {
    rankNote: "15国广覆盖 · 含不限时包",
    slug: "sogoyun",
    name: "SOGO云 (Sogo Cloud)",
    packName: "小包-年付版 / SOGO基础餐不限时版",
    priceLabel: "¥98/年 | ¥120/120GB不限时",
    monthlyEquivalent: "折合 ¥8.17/月",
    trafficQuota: "60GB/月 (年付) | 120GB (一次性不限时)",
    lineArchitecture: "全线 IEPL 专线 + 三网 BGP 优化（覆盖 15 个国家和地区）",
    protocol: "VLESS",
    clientMode: "自研专属客户端（不限速、不限设备数）",
    couponCode: "SOGO10000 (9折) / sss777",
    dataStatusLabel: "2026-08-11 18:57 傍晚实测原图 (香港 488Mbps)",
    whyBetterThanFree:
      "覆盖港台日新美韩等 15 个国家地区，拥有 18:57 晚高峰前夕真实测速图，适合多地区跨区业务且偏好官方客户端的用户。",
  },
  {
    rankNote: "纯 IPLC 骨干网 · 月付8折",
    slug: "shanyue",
    name: "闪跃 (FlashLeap)",
    packName: "闪跃年付版 / 闪动月付版 (8折后¥19.2)",
    priceLabel: "¥96/年 | ¥19.2/月 (折后)",
    monthlyEquivalent: "折合 ¥8.00/月",
    trafficQuota: "60GB/月 (年付) | 150GB/月 (闪动月付)",
    lineArchitecture: "纯 IPLC 专线 + 骨干网接入",
    protocol: "专属客户端托管协议",
    clientMode: "官方专属客户端（免配置登录即用）",
    couponCode: "shanyue (月付四档享 8 折)",
    dataStatusLabel: "品牌测速表 (香港 23ms / 548Mbps)",
    whyBetterThanFree:
      "纯 IPLC 专线低延迟架构，如果不想直接年付，可用 8 折码 `shanyue` 以 ¥19.2 体验整整一个月 150GB 高速专线流量。",
  },
  {
    rankNote: "历史老牌档案 · 6年资历",
    slug: "qingyunti",
    name: "青云梯 (曾用名 V4Speed)",
    packName: "年付小包 / VIP1 月付档（历史档案核验）",
    priceLabel: "¥96/年 | ¥25/月",
    monthlyEquivalent: "折合 ¥8.00/月",
    trafficQuota: "60GB/月 (年付) | 150GB/月 (VIP1)",
    lineArchitecture: "企业级 IPLC 专线 + 三网优化",
    protocol: "Shadowsocks",
    clientMode: "通用订阅导入（历史档案记录）",
    couponCode: "以官网当期面板为准",
    dataStatusLabel: "历史品牌档案 (2026-08 归档)",
    whyBetterThanFree:
      "代表了百元级（¥96/年，折合 ¥8/月）经典全 IPLC 小包定价模型；若追求当期有效入口与最新实测图，建议优先选同价位的「光速云」或「星岛梦」。",
  },
  {
    rankNote: "IPLC 历史档案 · 15元月付",
    slug: "longmaoyun",
    name: "龙猫云 (Totoro Cloud)",
    packName: "VIP1 月付 / 年付档（历史档案核验）",
    priceLabel: "¥15/月 | ¥144/年",
    monthlyEquivalent: "折合 ¥12.00/月 (年付)",
    trafficQuota: "100GB/月（每月重置）",
    lineArchitecture: "SS + IPLC 全专线",
    protocol: "Shadowsocks",
    clientMode: "通用订阅导入（一云梯/飞鸟同源站群档案）",
    couponCode: "以官网当期面板为准",
    dataStatusLabel: "历史品牌档案 (2026-08 归档)",
    whyBetterThanFree:
      "展示了 ¥15/月单月体验 100GB IPLC 专线的低试错门槛；若需当期独立实测的 15 元级月付或永久包，可对比「唯兔云」(¥14.9/月) 或「光速云」(¥147/247GB永久)。",
  },
];

export const WARP_MIHOMO_CHAIN_YAML = `# =====================================================================
# ClashVPN.run 实验室标准模板：机场 IEPL 专线 + Cloudflare WARP 链式落地
# 核心价值：用机场专线解决「国内到海外过墙速度与稳定性」，
#          用免费的 Cloudflare WARP 零信任节点解决「出口 IP 纯净度与 AI 免验证码」
# 适用内核：Mihomo (Clash Meta) v1.18+ (Clash Verge Rev / FlClash / OpenClash)
# =====================================================================

mixed-port: 7897
allow-lan: true
mode: rule
log-level: info
unified-delay: true
tcp-concurrent: true
find-process-mode: strict

# 1. 流量域名嗅探（防止电视端或硬编码 IP 绕过域名分流规则）
sniffer:
  enable: true
  force-dns-mapping: true
  parse-pure-ip: true
  override-destination: false
  sniff:
    HTTP:
      ports: [80, 8080-8880]
      override-destination: true
    TLS:
      ports: [443, 8443]
    QUIC:
      ports: [443, 8443]

# 2. 零泄漏 Fake-IP DNS 架构（国内域名走阿里/腾讯 DoH，海外域名走代理解析）
dns:
  enable: true
  ipv6: false
  listen: 0.0.0.0:1053
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "*.lan"
    - "*.local"
    - "+.msftconnecttest.com"
    - "+.msftncsi.com"
    - "ntp.*.com"
    - "+.pool.ntp.org"
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://cloudflare-dns.com/dns-query
    - https://dns.google/dns-query
  proxy-server-nameserver:
    - https://223.5.5.5/dns-query
    - https://1.12.12.12/dns-query
  nameserver-policy:
    "geosite:cn,private":
      - https://223.5.5.5/dns-query
      - https://1.12.12.12/dns-query

# 3. 节点定义：机场 IEPL 前置节点 + Cloudflare WARP 链式落地节点
proxies:
  - name: "⚡ 机场前置-香港IEPL-01"
    type: vless
    server: hk-iepl.example-airport.com
    port: 443
    uuid: "00000000-0000-0000-0000-000000000000" # 替换为您自己的机场订阅节点参数
    udp: true
    tls: true
    network: ws
    servername: hk-iepl.example-airport.com

  - name: "🛡️ WARP+ 链式纯净落地 (Dialer-Proxy)"
    type: wireguard
    server: 162.159.192.1
    port: 2408
    ip: 172.16.0.2/32
    ipv6: 2606:4700:110:8a3f::2/128       # 替换为 wgcf-profile.conf 中的 Address
    private-key: "YOUR_WARP_PRIVATE_KEY="  # 替换为 wgcf 提取的 PrivateKey
    public-key: "bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo="
    reserved: [0, 0, 0]                    # 可选：填入客户端抓包提取的 3 字节 client_id
    mtu: 1280
    udp: true
    remote-dns-resolve: true
    dns: [1.1.1.1, 1.0.0.1]
    # 关键指令：令 WARP WireGuard 流量完全通过上方的机场 IEPL 专线隧道传输！
    dialer-proxy: "⚡ 机场前置-香港IEPL-01"

proxy-groups:
  - name: "🚀 节点选择"
    type: select
    proxies:
      - "⚡ 机场前置-香港IEPL-01"
      - "🛡️ WARP+ 链式纯净落地 (Dialer-Proxy)"

  - name: "🤖 AI与免验证码专线"
    type: select
    proxies:
      - "🛡️ WARP+ 链式纯净落地 (Dialer-Proxy)"
      - "⚡ 机场前置-香港IEPL-01"

# 4. 引用 GitHub 开源 .mrs / .yaml 规则集
rule-providers:
  ai-openai:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml"
    path: ./ruleset/ai-openai.yaml
    interval: 43200
  ai-claude:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Claude/Claude.yaml"
    path: ./ruleset/ai-claude.yaml
    interval: 43200
  geosite-cn:
    type: http
    behavior: domain
    format: mrs
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs"
    path: ./ruleset/geosite-cn.mrs
    interval: 86400
  geoip-cn:
    type: http
    behavior: ipcidr
    format: mrs
    url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs"
    path: ./ruleset/geoip-cn.mrs
    interval: 86400

rules:
  - RULE-SET,ai-openai,🤖 AI与免验证码专线
  - RULE-SET,ai-claude,🤖 AI与免验证码专线
  - RULE-SET,geosite-cn,DIRECT
  - RULE-SET,geoip-cn,DIRECT,no-resolve
  - MATCH,🚀 节点选择`;

export const SUBSTORE_DOCKER_COMPOSE_YAML = `# =====================================================================
# 本地离线部署 Sub-Store + Subconverter 容器编排配置 (docker-compose.yml)
# 安全原则：仅绑定本地回环地址 127.0.0.1，严禁向公网暴露订阅转换端口！
# =====================================================================
services:
  sub-store:
    image: xream/sub-store:latest
    container_name: local-sub-store
    restart: unless-stopped
    environment:
      - SUB_store_FRONTEND_BACKEND_PATH=/secret-local-token-2026
    ports:
      - "127.0.0.1:3001:3001"
    volumes:
      - ./sub-store-data:/opt/app/data

  subconverter:
    image: tindy2013/subconverter:latest
    container_name: local-subconverter
    restart: unless-stopped
    ports:
      - "127.0.0.1:25500:25500"`;

export const FREE_RESOURCE_FAQS: FaqSchemaInput[] = [
  {
    q: "为什么强烈不建议使用 Telegram 频道或网页爬虫抓取的「免费公共 Clash 节点池」？",
    a: "公共爬虫抓取的免费节点（Public Scraper Nodes）存在四大致命安全隐患：第一，中间人流量嗅探（MITM），架设蜜罐节点的攻击者可在出口处记录所有非强制 HSTS 的 Cookie、Session Token 与 API 密钥；第二，恶意 DNS 投毒，免费节点常篡改海外加密货币交易所、网银或软件官网的解析记录至高仿钓鱼站；第三，IP 欺诈分极高（Scamalytics 普遍 90–100 分），几千人共用同一 IP 会导致你的 ChatGPT、Claude 或美区 Apple ID 账号触发关联封号；第四，晚高峰丢包率普遍超过 60%，完全无法承载正常网页加载。",
  },
  {
    q: "Cloudflare WARP 是完全免费的吗？为什么我在国内直接点连接连不上？",
    a: "Cloudflare WARP（1.1.1.1 官方客户端）以及 Zero Trust 50人以内团队版确实完全免费且不限流量。但在国内三网直连时，其默认的 WireGuard 握手机房 IP（162.159.192.x 等）长期遭受跨境 UDP 干扰与限速。解决方法有两种：一是将客户端协议切换为基于 HTTP/3 QUIC 的 MASQUE 模式或使用开源工具优选低丢包 Endpoint IP；二是通过 wgcf 提取密钥后，在 Mihomo 中配合 dialer-proxy 将机场 IEPL 节点作为前置隧道，既能跑满专线带宽，又能白嫖 Cloudflare 原生纯净落地 IP。",
  },
  {
    q: "使用 dialer-proxy 链式代理（机场节点前置 + WARP 落地）会消耗双倍机场流量吗？",
    a: "不会消耗双倍流量。在 Mihomo 的 dialer-proxy 架构下，你的流量仅经过『本地客户端 -> 机场前置节点 -> Cloudflare WARP 边缘机房 -> 目标网站』一条单向链路。机场面板只会统计『本地到机场出口』这一段包裹了 WireGuard 外壳的流量（由于 WireGuard 头部封装开销极小，仅比直连多出约 3%–5% 的 MTU 包头损耗），而 Cloudflare WARP 端完全免费不计费。",
  },
  {
    q: "GitHub 上的 MetaCubeX (.mrs)、Loyalsoldier 与 Blackmatrix7 分流规则集应该选哪一个？",
    a: "三者并非互斥关系，最科学的黄金组合是：底层全局国内外分流（Geosite-CN / Geosite-!CN / GeoIP-CN）优先采用 MetaCubeX 官方维护的 `.mrs` 二进制规则集，因为它内存占用极低、加载速度最快；而顶层的精细化业务分流（如 OpenAI、Claude、Netflix、TikTok）则叠加引用 Blackmatrix7 的专项 YAML 规则集，确保所有关联鉴权与静态资源域名滴水不漏地锁定在指定策略组。",
  },
  {
    q: "为什么绝对不能把主力机场的订阅链接贴到来路不明的「在线订阅转换网站」？",
    a: "订阅链接（Subscription URL）中包含了唯一标识你账户身份的 Token（密码凭证）。当你把订阅链接提交给未知的第三方在线 Subconverter 网站时，对方服务器的 Nginx 访问日志或后台数据库会直接明文记录你的完整订阅 URL。不良站长会将收集到的数万条有效付费订阅打包转卖，或放入所谓的“免费节点分享池”，导致你的百G专线流量在一夜之间被全网爬虫刷空，甚至因并发超限被机场封禁账号。如确需订阅转换，请务必使用本地 Docker 部署的 Subconverter 或开源的 Sub-Store。",
  },
  {
    q: "如何用免费工具在 30 秒内检测我的代理节点是不是真正的「原生 IP (Native IP)」？",
    a: "只需结合两个免费工具即可交叉验证：第一步，打开 ippure.com 或 ping0.cc，查看『IP 归属国』与『广播国』是否一致；第二步，打开 ipinfo.io，检查 JSON 数据中的 `asn.type` 和 `company.type` 两个字段——如果两者均显示为 `isp`（互联网服务提供商），且 Scamalytics 欺诈分低于 25 分，即为高含金量的原生/家宽级 IP；若显示为 `hosting` 且注册国与广播国不符，则为典型的机房广播 IP。",
  },
  {
    q: "开启代理后为什么访问 ChatGPT 依然提示 Unsupported Country (不支持当前国家/地区)？",
    a: "95% 的原因是香港节点误入或分流规则漏网。OpenAI 官方不向中国大陆 (CN) 和中国香港 (HK) 提供服务。请保持当前代理状态，直接在浏览器打开免费诊断探针 `https://chatgpt.com/cdn-cgi/trace`，查看返回的 `loc=` 字段：如果显示 `loc=HK` 或 `loc=CN`，说明你的 AI 分流规则未生效或当前全局选在了香港节点。只需在客户端导入本文提供的 Blackmatrix7 OpenAI 规则集，并将 AI 策略组手动固定在台湾、日本、新加坡或美国节点即可秒解。",
  },
  {
    q: "BrowserLeaks 检测出 WebRTC 泄露了我的国内真实宽带 IP，该如何彻底修复？",
    a: "WebRTC 泄漏是因为浏览器在进行音视频通信或网络探测时，通过 UDP STUN 协议绕过了操作系统的 HTTP 代理直接获取网卡真实 IP。根治方法有两步：第一，在 Clash Verge Rev、FlClash 或 Hiddify 中开启『TUN 模式（虚拟网卡）』并设置 `strict-route: true`，接管全系统所有 UDP 流量；第二，在 Chrome / Edge 浏览器设置中搜索 WebRTC，或安装开源扩展『WebRTC Network Limiter』将其策略设为 Disable non-proxied UDP。",
  },
  {
    q: "预算只有几块钱，与其冒险用高危免费节点，有哪些经过核验的正规专线平替方案？",
    a: "目前正规 IEPL/IPLC 专线机场的入门门槛已经降到了极低水平：例如本站实测榜首「光速云」的轻量版年付仅 ¥99（折合每月 ¥8.25，含 69GB/月双专线流量），还有 ¥147/247GB 永久不过期流量包；极限平价档的「闪电鼠」与「大佬云」年付折合仅 ¥5.6/月（60GB/月 IEPL+VLESS）；纯新手免配置的「飞猫云」学生版年付 ¥84（折合 ¥7/月）；「二猫云」也提供 ¥89/年与 ¥99/100GB 永久不限时包。每月不到一杯奶茶的零头，就能获得无嗅探、晚高峰百兆吞吐的正规加密专线。",
  },
  {
    q: "Sub-Store 相比传统的 Subconverter 订阅转换有什么核心优势？",
    a: "Subconverter 主要用于将单条或多条订阅套入远程 `.ini` 模板生成静态 Clash 配置，不支持复杂的脚本化节点操作；而开源的 Sub-Store 是专为现代多机场用户设计的订阅管理中心，支持把『主力包月机场 + 永久不限时备用包 + 自建 WARP 节点』合并为一个统一的本地私有订阅链接，还支持通过正则表达式自动剔除倍率过高（如 5x/10x）的节点、统一加上国旗 Emoji 重命名，并直接输出适配 Mihomo、Sing-box、Shadowrocket、Stash 与 Loon 的原生格式。",
  },
];
