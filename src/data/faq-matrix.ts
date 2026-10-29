export type FaqCategoryId =
  | "protocol"
  | "billing"
  | "client"
  | "network"
  | "ai"
  | "streaming"
  | "security";

export interface FaqCategoryMeta {
  id: FaqCategoryId;
  code: string;
  label: string;
  anchorId: string;
  badgeClass: string;
  summary: string;
}

export interface FaqMatrixItem {
  id: string;
  category: FaqCategoryId;
  categoryLabel: string;
  q: string;
  shortAnswer: string;
  detailedAnswer: string;
  codeSnippet?: string;
  relatedLinks: Array<{ label: string; href: string }>;
}

export interface ErrorCodeQuickRow {
  codeOrSymptom: string;
  affectedService: string;
  rootCause: string;
  instantFix: string;
  guideHref: string;
}

export const FAQ_CATEGORIES: FaqCategoryMeta[] = [
  {
    id: "protocol",
    code: "CAT 01",
    label: "协议架构与专线原理",
    anchorId: "cat-protocol",
    badgeClass: "border-accent/40 bg-accent/10 text-accent",
    summary: "深入拆解 IEPL 内网专线、IPLC 专线与 BGP 公网中转的物理层差异，以及 VLESS、Trojan、Hysteria 2 与 SS 的抗封锁机制与倍率计费。",
  },
  {
    id: "billing",
    code: "CAT 02",
    label: "购买决策与套餐防坑",
    anchorId: "cat-billing",
    badgeClass: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
    summary: "解答月付、百元级年付（¥75–¥118/年）与永久不限时按量包的最优组合公式，剖析三年付圈钱陷阱与端口峰值带宽。",
  },
  {
    id: "client",
    code: "CAT 03",
    label: "全平台客户端与订阅配置",
    anchorId: "cat-client",
    badgeClass: "border-sky-400/40 bg-sky-400/10 text-sky-300",
    summary: "涵盖 Clash Verge Rev、FlClash、v2rayN、Shadowrocket 与 OpenWrt 软路由的订阅拉取排障、System Proxy 与 TUN 虚拟网卡调优。",
  },
  {
    id: "network",
    code: "CAT 04",
    label: "DNS 污染、IP 纯净度与防泄漏",
    anchorId: "cat-network",
    badgeClass: "border-purple-400/40 bg-purple-400/10 text-purple-300",
    summary: "彻底解决 Fake-IP 配置、WebRTC 暴露真实宽带 IP、原生 IP vs 广播 IP 鉴别、Scamalytics 欺诈分与国内网站变慢故障。",
  },
  {
    id: "ai",
    code: "CAT 05",
    label: "ChatGPT / Claude / 生产力工具风控",
    anchorId: "cat-ai",
    badgeClass: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    summary: "针对 OpenAI 403 Access Denied、Claude 封号、Cursor / Copilot 终端代理掉线及 Cloudflare WARP 链式洗白提供实操方案。",
  },
  {
    id: "streaming",
    code: "CAT 06",
    label: "Netflix / Disney+ / TikTok 流媒体跨区",
    anchorId: "cat-streaming",
    badgeClass: "border-rose-400/40 bg-rose-400/10 text-rose-300",
    summary: "攻克 Netflix 仅显示自制剧、TikTok 黑屏 0 播放量 SIM 卡检测、YouTube 8K 缓冲掉速与 Apple TV 全屋杜比视界网关部署。",
  },
  {
    id: "security",
    code: "CAT 07",
    label: "账号安全、审计规则与防失联灾备",
    anchorId: "cat-security",
    badgeClass: "border-cyan-400/40 bg-cyan-400/10 text-cyan-300",
    summary: "详解端到端 TLS 隐私边界、机场 BT/PT 审计规则、订阅 Token 泄露重置、真假跑路鉴别与主备异构双订阅自动故障转移。",
  },
];

export const ERROR_CODE_LOOKUP_TABLE: ErrorCodeQuickRow[] = [
  {
    codeOrSymptom: "HTTP 403 / Unsupported Country",
    affectedService: "ChatGPT / OpenAI API",
    rootCause: "当前处于全局模式且选中了香港(HK)节点，或 AI 域名漏入高污染机房 IP",
    instantFix: "切换至 Rule 规则模式，将 AI 策略组锁定在台湾/日本/新加坡/美国原生节点",
    guideHref: "/services/reporting/",
  },
  {
    codeOrSymptom: "App Unavailable / 账号秒封",
    affectedService: "Claude 3.7 (Anthropic)",
    rootCause: "节点开启了自动测速轮询（url-test）导致每次对话 IP 跨国跳变触发风控",
    instantFix: "建立独立 AI 手动选择组（type: select），固定单一美西或日本低欺诈分节点",
    guideHref: "/services/reporting/",
  },
  {
    codeOrSymptom: "仅显示自制剧 (Originals Only)",
    affectedService: "Netflix 跨区看片",
    rootCause: "落地机房 IP 已被 Netflix 标记为 Hosting 代理池，或未启用 DNS 解锁分流",
    instantFix: "切换标注「原生解锁/NF」的专线节点（如光速云、飞猫云港/台/新/日专线）",
    guideHref: "/services/demand-forecasting/",
  },
  {
    codeOrSymptom: "黑屏 / 网络无连接 / 0 播放量",
    affectedService: "TikTok 移动端与海外运营",
    rootCause: "App 读取了国内手机卡 MCC/MNC 运营商代码 (460)，或 WebRTC 泄露国内 IP",
    instantFix: "拔除国内 SIM 卡或使用免拔卡重写模块，开启 TUN 严格路由并锁死目标国节点",
    guideHref: "/services/demand-forecasting/",
  },
  {
    codeOrSymptom: "Network Error / SSL Handshake Failed",
    affectedService: "Clash / 小火箭更新订阅",
    rootCause: "正在开着代理拉取订阅，或订阅域名遭本地宽带运营商 DNS 污染/SNI 阻断",
    instantFix: "先关闭系统代理与 TUN 开关再点更新；若仍失败则开启备用机场或更换防失联域名",
    guideHref: "/services/customer-analysis/",
  },
  {
    codeOrSymptom: "开启代理后所有网页打不开 (EOF)",
    affectedService: "全平台代理客户端",
    rootCause: "操作系统本地时间与标准 UTC 时间误差超过 90 秒，导致 TLS/VMess 鉴权拒绝",
    instantFix: "在 Windows/macOS 设置中点击「立即同步 Internet 时间 (time.windows.com)」",
    guideHref: "/warnings/#outage-decision-tree",
  },
];

export const FAQ_ITEMS: FaqMatrixItem[] = [
  // ==================== CAT 01: PROTOCOL (8 Q&As) ====================
  {
    id: "proto-01",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "IEPL 专线、IPLC 专线与普通 BGP 公网中转在物理层有什么本质区别？",
    shortAnswer:
      "IEPL 与 IPLC 均属于物理隔离公网国际出口的内网专线，数据包不过境公网 GFW 审查队列；而普通 BGP 中转仅在国内机房做转发，出境段依然走拥堵的公网海缆。",
    detailedAnswer:
      "在 OSI 网络模型中，IPLC（国际私有租用线路）工作在物理层/点对点 TDM 专线，而 IEPL（国际以太网专线）工作在二层 MAC 以太网帧交换层，具备更高的端口带宽弹性与更低的封装损耗。两者最核心的价值是：数据从广州/深圳/上海 BGP 入口进入运营商政企内网后，直达香港或东京落地机房，完全绕开公网国际出口的晚高峰拥堵与主动探测。相比之下，廉价的公网中转在晚间 20:00–23:00 及敏感时期极易遭遇 QoS 限速或端口阻断。本站综合排名第 1 的「光速云」即采用 IEPL + 企业级内网双专线冗余架构。",
    codeSnippet: `# Windows PowerShell 探测专线入口 TCP 握手延迟（广深港 IEPL 通常稳定在 15ms–38ms）：
1..5 | ForEach-Object {
  $t = Measure-Command { Test-NetConnection -ComputerName entry.your-airport.com -Port 443 -InformationLevel Quiet }
  Write-Host ("Test #{0}: {1:N1} ms" -f $_, $t.TotalMilliseconds)
}`,
    relatedLinks: [
      { label: "IEPL 与 IPLC 专线选型深度指南", href: "/services/data-audit/" },
      { label: "榜首光速云（IEPL双专线）实测档案", href: "/brands/guangsuyun/" },
    ],
  },
  {
    id: "proto-02",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "2026 年主流协议 VLESS、Trojan、Hysteria 2 与 Shadowsocks (SS) 应该怎么选？",
    shortAnswer:
      "主力全能首选 VLESS 或 Trojan；高丢包弱网（移动宽带/校园网）首选基于 QUIC 的 Hysteria 2；在内网 IEPL 专线上追求极低 CPU 开销（如软路由）可选 Shadowsocks。",
    detailedAnswer:
      "不同协议的工程取舍完全不同：1) VLESS（如光速云、微风网络、灵猫网络）去除了冗余的二次对称加密，配合 XTLS-Reality 握手极快、高并发吞吐最强；2) Trojan（如飞猫云、暮光加速、二猫云）将流量 100% 伪装成标准 HTTPS 网站访问，抗 DPI 深度包检测极其稳健；3) Hysteria 2（如唯兔云、星岛梦、一翻云）基于改良版 UDP QUIC 协议并内置 BBR 拥塞控制，在丢包率高达 15% 的恶劣网络下仍能跑满带宽；4) Shadowsocks (SS2022/AEAD) 在物理隔离的 IEPL 专线上因为不需要额外伪装外壳，加解密最轻快，最适合 OpenWrt 软路由。",
    relatedLinks: [
      { label: "四大代理协议参数对比矩阵", href: "/guides/#protocol-matrix" },
      { label: "一翻云（Hysteria2/VLESS/SS三协议）评测", href: "/brands/yifanyun/" },
    ],
  },
  {
    id: "proto-03",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "什么是机场节点的「计费倍率（0.1x / 1x / 2x / 5x）」？如何避免高倍率吃光流量？",
    shortAnswer:
      "计费倍率是实际消耗流量乘以的扣费系数：使用 2x 倍率节点下载 10GB 文件会扣除套餐 20GB 流量；选型时务必确认主力港/日/新/美专线是否为 1x 标准倍率。",
    detailedAnswer:
      "由于真 IEPL 专线与原生住宅 IP 带宽成本高昂，部分机场会用“月付 10 元给 500GB 流量”吸引眼球，但暗中把稳定的 IEPL 节点设为 3x–5x 倍率，导致实际可用专线流量缩水至 100GB。真正透明的一线品牌（如光速云 25 元/月极速版、微风网络、星岛梦）均承诺全节点或主力专线 1x 标准倍率计费。如果您的订阅中混有高倍率节点，可在本地 Sub-Store 或 Clash 覆写配置中通过正则过滤 `(?i)(2x|3x|5x|高倍率)` 自动将其剔除出自动测速组。",
    relatedLinks: [
      { label: "百元级年付机场真实每GB成本核算", href: "/services/pricing/" },
      { label: "Sub-Store 本地正则过滤高倍率节点教程", href: "/free/#sub-store" },
    ],
  },
  {
    id: "proto-04",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "为什么使用 Hysteria 2 协议时刚连上速度极快，半小时后突然断流或限速？",
    shortAnswer:
      "因为国内部分省市运营商（尤其是跨省移动与校园网）对持续高吞吐的 UDP 端口实施了自动化 QoS 限速或临时黑洞丢包。",
    detailedAnswer:
      "Hysteria 2 底层基于 UDP 的 QUIC 协议。当你在短时间内通过单一 UDP 端口拉取数十 GB 的 4K 视频或大型模型文件时，运营商边缘路由器的流量整形（Traffic Shaping）策略会将其判定为异常 UDP 洪泛并大幅丢包。解决方法有两个：第一，确认机场端已开启 Hysteria 2 的『端口跳跃（Port Hopping，如 20000-50000 端口动态轮换）』功能；第二，在客户端保留 VLESS 或 Trojan（基于 TCP）节点作为主力，仅在跨洋弱网突发下载时切换 Hysteria 2。",
    relatedLinks: [
      { label: "唯兔云（IEPL+Hysteria2+Trojan）档案", href: "/brands/weituyun/" },
      { label: "星岛梦（IPLC+Hysteria2）实测档案", href: "/brands/xingdaomeng/" },
    ],
  },
  {
    id: "proto-05",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "为什么节点列表里的 Ping 延迟只有 35ms，但看 YouTube 4K 或打开网页却很慢？",
    shortAnswer:
      "客户端显示的延迟通常只是到「国内中转入口机房」的延迟或轻量 HTTP 204 握手延迟，并不代表海外落地带宽充裕或丢包率为零。",
    detailedAnswer:
      "机场列表中的延迟测试（URL-Test）发送的仅仅是几百字节的微型探测包（如访问 `generate_204`）。一些超售严重的机场虽然在国内架设了深圳/广州 BGP 中转入口（让你看到的延迟只有 25ms–40ms），但其过境段专线总带宽极其狭窄，或者海外落地机房的国际带宽已被跑满。因此评估一家机场不能只看 Ping 值，必须看多线程持续吞吐（Mbps）与晚高峰抖动——这也是本站坚持用 2026-08-11 批次珠海联通 5Gbps 后端 32 线程实测原图来评估前排品牌的原因。",
    relatedLinks: [
      { label: "查看 17 家含 2026-08-11 实测原图的机场", href: "/brands/" },
      { label: "20+ 全球吞吐测速与路由追踪工具", href: "/free/#diagnostic-tools" },
    ],
  },
  {
    id: "proto-06",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "什么是「双专线冗余架构」？相比单一 IEPL 入口有什么实战价值？",
    shortAnswer:
      "双专线架构同时部署两条物理独立的过境通道（如 IEPL 专线 + 企业级内网专线），当某一条上游运营商链路例行割接或故障时，流量可秒级切换至另一条专线。",
    detailedAnswer:
      "绝大多数中小型机场仅租用单一上游（如单路深港 IEPL 转发），一旦上游机房遭受 DDoS 攻击、光缆施工割接或账期纠纷，全站所有节点就会同时瘫痪数小时至数天。而像榜首「光速云」采用的『IEPL 专线 + 企业级内网专线』双线路架构，在入口与过境层实现了物理级异构冗余，显著降低了单点故障（SPOF）导致的断网概率，非常适合远程办公、跨境直播与高频 API 开发者。",
    relatedLinks: [
      { label: "光速云双专线架构与套餐评测", href: "/brands/guangsuyun/" },
      { label: "主备双机场高可用防失联方案", href: "/warnings/#disaster-recovery-combos" },
    ],
  },
  {
    id: "proto-07",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "开启代理时需要打开本地宽带的 IPv6 支持吗？IPv6 会导致分流失效吗？",
    shortAnswer:
      "除非机场明确提供原生 IPv6 节点，否则建议在 Clash 客户端中将 `ipv6` 设为 `false`，防止浏览器通过本地宽带 IPv6 直连抢跑导致 DNS 污染与真实位置暴露。",
    detailedAnswer:
      "目前国内三大运营商的家宽已全面普及公网 IPv6，但绝大多数机场专线仅支持 IPv4 转发。如果客户端开启了 IPv6 而节点不支持 IPv6，当访问支持双栈的海外网站（如 Google、Netflix、OpenAI）时，操作系统可能会优先发起 AAAA（IPv6）请求并直接走本地运营商宽带直连出境，从而触发 GFW 阻断或向 Netflix 暴露你的国内真实 IPv6 地址。在 Mihomo 配置中保持顶层 `ipv6: false` 并在 `dns` 模块禁用 IPv6 解析是最稳妥的工程实践。",
    relatedLinks: [
      { label: "全平台客户端防泄漏 YAML 标准模板", href: "/services/customer-analysis/" },
    ],
  },
  {
    id: "proto-08",
    category: "protocol",
    categoryLabel: "协议架构与专线原理",
    q: "为什么香港、台湾、日本、新加坡被称为「亚太黄金四区」？日常应该优先连哪个？",
    shortAnswer:
      "因为这四个地区距离中国大陆物理海缆最近（RTT 延迟仅 15ms–68ms），带宽吞吐最高；日常网页与视频优先选香港/台湾，ChatGPT 与 AI 工具优先选日本/新加坡/台湾。",
    detailedAnswer:
      "物理光速决定了跨洋延迟的下限：美西洛杉矶节点即使走顶级 IEPL 专线，跨太平洋海缆往返延迟也在 140ms–175ms 之间；而香港（15–35ms）、台湾（30–50ms）、新加坡（45–65ms）、日本东京/大阪（50–70ms）能提供近乎国内直连的丝滑跟手度。唯一需要注意的是香港节点受 OpenAI 与 Claude 区域政策限制无法直接访问 AI，因此最佳策略是用 Rule 规则模式：默认走香港/日本高速专线，AI 策略组单独锁定新加坡、日本、台湾或美国原生节点。",
    relatedLinks: [
      { label: "ChatGPT 与 Claude 亚太/美西节点分流指南", href: "/services/reporting/" },
    ],
  },

  // ==================== CAT 02: BILLING (8 Q&As) ====================
  {
    id: "bill-01",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "月付套餐、百元级年付套餐与永久不限时流量包，怎么组合最省钱且零跑路风险？",
    shortAnswer:
      "最科学的黄金公式是：主力用已核验的百元级年付（如光速云 ¥99/年）或月付极速版（¥25/月），再配一份 ¥15–¥100 的异构永久不限时流量包作热备。",
    detailedAnswer:
      "单纯买贵价年付会有资金沉淀顾虑，而单纯买小额月付遇到月底流量突然超支或主力机场维护又会抓瞎。通过『主力周期包 + 异构永久不限时包』组合：日常 98% 的视频与办公流量由折合仅 ¥6–¥20/月的 IEPL 主力包承担；同时在客户端挂载一份永不过期的一次性流量包（如光速云 ¥147/247GB 永久包、唯兔云 ¥100/100GB、一翻云 ¥100/100GB 或飞猫云/龙猫云按量包）。不限时包平时不跑流量一分钱不花，一旦主力维护，300ms 自动顶上，年化总成本不到 ¥130 却拥有企业级双线高可用。",
    relatedLinks: [
      { label: "百元级年付平价机场横评与公式", href: "/services/pricing/" },
      { label: "永久不限时流量包深度对比", href: "/services/experiments/" },
    ],
  },
  {
    id: "bill-02",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "为什么绝不建议购买名不见经传的小作坊机场推出的「三年付 3折 / 永久无限流量」促销？",
    shortAnswer:
      "因为 IEPL/IPLC 专线带宽是按月向电信运营商刚性付费的，远低于成本的三年付促销本质是寅吃卯粮的资金盘，往往是跑路前最后一次收割。",
    detailedAnswer:
      "从机房成本结构来看，100Mbps 的深港 IEPL 政企专线加上多线 BGP 入口，每月硬性服务器与带宽支出高达数万元。如果一家没有长期运营口碑的新机场突然在节假日推出『三年付 50 元』或『买断制无限流量』，其收取的预付款根本无法覆盖未来 36 个月的带宽账单。一旦拉新放缓，运营方极易直接拔线跑路（详见本站跑路预警中心的崩盘模型 01）。坚持选择 2020–2025 年持续运营、定价符合专线成本规律的品牌才是正道。",
    relatedLinks: [
      { label: "10大机场跑路前兆量化评分模型", href: "/warnings/#risk-scoring-model" },
      { label: "六大机场崩盘模型与财务期望值表", href: "/warnings/#failure-archetypes" },
    ],
  },
  {
    id: "bill-03",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "百元级年付机场（¥68–¥118/年，折合每月 5–9 元）真的能跑 IEPL 专线吗？会不会很卡？",
    shortAnswer:
      "能跑真 IEPL 专线且不卡，因为正规机场是通过「限制每月流量配额（60GB–100GB/月）」来降低成本，而不是降低专线线路质量。",
    detailedAnswer:
      "很多用户误以为便宜一定没好货，其实正规一线机场的『百元轻量年付档』与『25元月付主力档』共享的是完全相同的 IEPL 专线节点池！机场之所以能把年付定在 ¥68–¥99，是因为轻度用户（日常查 Google、聊 Telegram、用 ChatGPT、偶尔看 1080p YouTube）每月实际消耗仅 30GB–55GB。例如榜首「光速云」¥99/年轻量版（69GB/月）、闪电鼠/大佬云 ¥68/年（60GB/月）、二猫云 ¥89/年（60GB/月），在 2026-08-11 实测中晚高峰照样跑出 400Mbps–900Mbps 吞吐。",
    relatedLinks: [
      { label: "10款 ¥5.6/月起正规专线入门包对照表", href: "/free/#low-cost-trials" },
      { label: "百元级年付机场推荐专题", href: "/services/pricing/" },
    ],
  },
  {
    id: "bill-04",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "机场宣传的「峰值带宽 1Gbps / 2.5Gbps / 10Gbps」是个人独享还是共享端口？",
    shortAnswer:
      "所有商业机场标称的 Gbps 级带宽均为母机端口的共享突发峰值（Shared Burst Bandwidth），个人晚高峰实测能稳定跑出 200Mbps–800Mbps 即属顶级水平。",
    detailedAnswer:
      "如果独享 1Gbps 的深港 IEPL 专线，企业级月租高达数万元人民币，不可能卖几十元一个月。机场标称的 2.5Gbps（如光速云、星岛梦）或 10Gbps（如飞猫云、一翻云），指的是其专线宿主机网卡的物理上限。在非高峰期或多线程测速时，单用户确实能突发冲上 800Mbps–1500Mbps；而在晚间 21:00 高峰期，只要单线程流媒体吞吐稳定在 100Mbps 以上（足以同时流畅播放 4 路 4K 60fps HDR 视频），就证明该机场带宽冗余极其充沛。",
    relatedLinks: [
      { label: "4K/8K 流媒体高吞吐专线实测对比", href: "/services/demand-forecasting/" },
    ],
  },
  {
    id: "bill-05",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "机场套餐的「每月流量重置日」是按自然月 1 号清零，还是按购买日顺延 30 天重置？",
    shortAnswer:
      "目前 90% 采用 V2Board / SSPanel 面板的现代机场均按「订单开通日（账单日）每满 30 天」自动重置流量，而非固定在每月初一。",
    detailedAnswer:
      "例如你在 10 月 19 日购买了光速云或微风网络的年付套餐，那么系统会在每月的 19 日凌晨自动将已用流量归零并恢复满额月度配额。但有两类特殊情况需注意：第一，未用完的当月周期流量不会结转累加到下个月；第二，如果你在月中提前耗尽了当月配额，大部分面板支持在商店页面点击『重置当月流量包（付一个月费立即刷新）』，或者直接启用你在客户端里配好的永久不限时备用流量包撑过月底最后几天。",
    relatedLinks: [
      { label: "永久不限时流量包（永不清零）选购指南", href: "/services/experiments/" },
    ],
  },
  {
    id: "bill-06",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "新入手一家机场后，如何在前 48 小时内科学检验它是否值得长期续费？",
    shortAnswer:
      "聚焦『晚高峰 21:00 吞吐、TCP 握手抖动、ChatGPT/Netflix 原生解锁、客户端通用订阅兼容性』四项硬指标进行 48 小时实测。",
    detailedAnswer:
      "不要在上午或凌晨测速，因为那时连劣质直连机场都很块。正确的 48 小时验货流程是：1) 在晚上 20:30–22:30 打开 Fast.com 或 YouTube 4K 60fps 视频，右键打开『详细统计信息 (Stats for Nerds)』，确认 Connection Speed 稳定在 80,000 Kbps (80Mbps) 以上且 0 掉帧；2) 打开 `ippure.com` 检查主力日/新/美节点的欺诈分是否低于 30；3) 连续使用 ChatGPT 与 Claude 半小时确认无 403 报错；4) 确认支持标准 Clash/Shadowrocket 订阅导出。",
    relatedLinks: [
      { label: "20款在线测速与IP纯净度验货工具库", href: "/free/#diagnostic-tools" },
    ],
  },
  {
    id: "bill-07",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "注册机场时使用什么邮箱和支付方式最安全？需要用真实姓名邮箱吗？",
    shortAnswer:
      "推荐使用 Gmail、Outlook、ProtonMail 或专门用于订阅服务的独立别名邮箱注册，切勿复用网银或工作主密码；支付支持支付宝/微信或 USDT。",
    detailedAnswer:
      "出于基本的数字安全隔离原则（OpSec）：第一，注册任何跨境订阅服务时，密码必须独立生成（切勿与国内微信、网银、主力邮箱共用同一套密码）；第二，部分机场开启了邮箱验证码登录，建议使用海外邮箱（Gmail / Outlook）或无手机号绑定的洁净邮箱，防止邮件被国内邮箱服务商拦截进垃圾箱；第三，如对账单隐私有极高要求，光速云等一线品牌均原生支持 USDT (TRC20) 加密货币结算。",
    relatedLinks: [
      { label: "42家机场支付方式与隐私政策对比", href: "/brands/" },
    ],
  },
  {
    id: "bill-08",
    category: "billing",
    categoryLabel: "购买决策与套餐防坑",
    q: "优惠码（如光速云 AMM、飞猫云 fmy666、微风 flat888）在结算时怎么使用？",
    shortAnswer:
      "在机场官网选择套餐进入订单结算页后，在『优惠码 / Coupon Code』输入框粘贴对应券码并点击『验证』，看到总价自动扣减后再付款。",
    detailedAnswer:
      "使用优惠码有两个常见细节：第一，粘贴券码后务必点击输入框右侧的『核验 / Apply』按钮，确认账单金额已经打折（如年付 8 折、月付 9 折）再发起支付；第二，大部分机场的『特惠秒杀包 / 入门轻量包 / 永久纪念包』（例如光速云的 ¥99/年轻量版与 ¥147 永久套餐）本身已经是折后地板价，不再叠加常规周期券码，而购买常规月付/季付/年付主力套餐则可全额享受折扣。",
    relatedLinks: [
      { label: "全站 28 家主力机场常驻优惠码一键复制表", href: "/brands/" },
    ],
  },

  // ==================== CAT 03: CLIENT (8 Q&As) ====================
  {
    id: "cli-01",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "原版 Clash for Windows (CFW) 已经停更，2026 年 Windows 和 macOS 首选什么客户端？",
    shortAnswer:
      "Windows 与 macOS 桌面端首选开源活跃、内置最新 Mihomo (Clash.Meta) 内核的「Clash Verge Rev」或「FlClash」，技术玩家可选「v2rayN」或「Hiddify」。",
    detailedAnswer:
      "2023 年底原版 Clash for Windows 删库停更后，其内置的旧版内核无法解析 2026 年主流的 VLESS、XTLS-Reality 与 Hysteria 2 协议（会导致导入订阅后节点列表为空或报错）。目前开源社区最权威的继任者是 **Clash Verge Rev**（Tauri 架构，内存占用比 Electron 降低 60%，原生支持服务模式 TUN 网卡与脚本覆写）以及 **FlClash**（Flutter 多端统一 UI，支持 Windows/macOS/Android）。所有官方 GitHub Releases 安装包均可在本站客户端中心一键直连下载。",
    relatedLinks: [
      { label: "6大平台开源客户端 GitHub 官方直连下载", href: "/clients/" },
      { label: "全平台客户端订阅导入与 TUN 深度指南", href: "/services/customer-analysis/" },
    ],
  },
  {
    id: "cli-02",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "iPhone / iPad (iOS) 怎么下载 Shadowrocket（小火箭）或 Stash？国区 App Store 搜不到怎么办？",
    shortAnswer:
      "由于国区 App Store 政策限制，所有代理客户端均需使用「美区/港区等非国区 Apple ID」登录 App Store（切勿在系统 iCloud 设置中登录）后搜索下载。",
    detailedAnswer:
      "在 iOS 设备上安全安装客户端有三步铁律：1) 打开桌面上的蓝色『App Store』图标（注意：**绝对不要在系统设置顶部的 iCloud 处登录陌生海外账号，防止被人开启查找我的 iPhone 远程锁机！**）；2) 点击右上角头像滑到底部退出国区账号，登录你自建的美区/港区 Apple ID，或使用主力机场后台提供的『共享已购小火箭 Apple ID』；3) 搜索 `Shadowrocket`（认准开发者 Shadow Launch Technology Limited，售价 $2.99）或 `Stash` / `Sing-box` 下载，安装完成后立即退回自己的国区账号即可永久使用。",
    relatedLinks: [
      { label: "iOS 苹果端客户端下载与防锁机指南", href: "/clients/#platform-ios" },
    ],
  },
  {
    id: "cli-03",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "点击「更新订阅」报错 Network Error / Timeout / 403 Forbidden 是什么原因？怎么秒修？",
    shortAnswer:
      "最常见的三大原因是：更新订阅时正开着失效的代理开关、客户端 User-Agent 被机场防火墙拦截，或本地运营商 DNS 污染了订阅域名。",
    detailedAnswer:
      "按以下顺序 1 分钟即可排障：第一步，先将客户端的『系统代理 (System Proxy)』和『TUN 模式』全部关闭，用本地直连网络重新点击更新；第二步，如果返回 403 Forbidden，说明机场面板开启了防爬虫 UA 校验，请在 Clash Verge Rev 的订阅右键『编辑信息』中，将 User-Agent 改为 `clash.meta` 或 `ClashforWindows/0.20.39`；第三步，若直连提示 SSL Error 或 Timeout，说明本地宽带 DNS 污染了订阅域名，请将电脑网卡 DNS 改为 `223.5.5.5` 或登录机场官网复制『防失联备用订阅链接』。",
    codeSnippet: `# 在终端测试订阅链接是否被本地 DNS 污染（指定阿里 DoH 绕过本地运营商抢答）：
curl -I -s -H "User-Agent: clash.meta" --doh-url https://dns.alidns.com/dns-query "你的订阅URL"`,
    relatedLinks: [
      { label: "订阅导入报错与网络排障完整手册", href: "/services/customer-analysis/" },
    ],
  },
  {
    id: "cli-04",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "「系统代理 (System Proxy)」和「TUN 虚拟网卡模式」有什么区别？平时该开哪个？",
    shortAnswer:
      "日常浏览网页、看视频开「系统代理」最省电省心；当使用终端命令行（Git/npm/Docker）、Cursor IDE、桌面端 Telegram 或玩外服游戏时需开启「TUN 模式」。",
    detailedAnswer:
      "两者的接管层级完全不同：『系统代理』仅修改操作系统的 HTTP/HTTPS 代理环境变量（如 `127.0.0.1:7897`），Chrome/Edge 浏览器会自动遵守，但命令行终端、UWP 应用、部分 Electron 软件（如 Claude Desktop、Cursor）以及 UDP 游戏流量默认会无视系统代理直接走本地网卡。而『TUN 模式』会在系统底层创建一张三层虚拟网卡（如 `Meta` Wintun 驱动），通过系统路由表强制捕获本机所有进程的全部 TCP/UDP IP 数据包并送入 Mihomo 分流引擎。",
    relatedLinks: [
      { label: "TUN 虚拟网卡模式与 Fake-IP 标准配置", href: "/services/customer-analysis/" },
    ],
  },
  {
    id: "cli-05",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "开启 TUN 模式后，为什么局域网 NAS、无线打印机、微信局域网传文件或内网 OA 连不上了？",
    shortAnswer:
      "因为 TUN 模式开启了 `strict-route` 后接管了全网段路由，且未将局域网私有 IP 段或公司内网域名加入 `route-exclude-address` 与 `fake-ip-filter` 豁免列表。",
    detailedAnswer:
      "当 TUN 虚拟网卡将默认路由指向自己时，如果客户端未正确豁免 RFC1918 私有局域网网段，发往 `192.168.x.x` 或 `10.x.x.x` 的内网数据包也会被送进代理隧道发往海外节点，自然导致内网失联。修复方法是在 Mihomo 的 `tun` 与 `dns` 配置块中显式加入内网网段绕过与 `*.local` / `*.lan` 真实 IP 解析（可直接复制下方配置片段贴入 Clash Verge Rev 的全局扩展覆写配置中）。",
    codeSnippet: `tun:
  enable: true
  stack: mixed
  auto-route: true
  strict-route: true
  # 豁免局域网私有 IP 段，保障 NAS、打印机与公司内网直连：
  route-exclude-address:
    - 192.168.0.0/16
    - 10.0.0.0/8
    - 172.16.0.0/12
    - fd00::/8`,
    relatedLinks: [
      { label: "客户端 TUN 模式与局域网绕过配置详解", href: "/services/customer-analysis/" },
    ],
  },
  {
    id: "cli-06",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "OpenWrt 软路由上用 OpenClash、Nikki (MihomoTProxy) 还是 PassWall 更好？",
    shortAnswer:
      "如果追求精细的图形化分流策略组与 Clash 订阅 100% 兼容，首选 OpenClash 或轻量级的 Nikki；如果是内存较小的硬路由改造，可选 C/Go 编写的 PassWall。",
    detailedAnswer:
      "在家庭透明网关（旁路由或主路由）场景下：1) **OpenClash** 功能最强大，支持 Fake-IP 极速响应、可视化策略组面板与 Sub-Store 联动，但需注意开启『GeoIP MMDB 精简版』以控制内存占用在 120MB 以内；2) **Nikki (原 MihomoTProxy)** 是专为 OpenWrt 23.05/24.10 nftables 防火墙打造的现代轻量级 Mihomo 插件，转发效率极高；3) **PassWall / PassWall2** 适合直连导入单节点或 Sing-box 分流。旁路由部署时请务必关闭旁路由的 DHCP 服务，并将主路由 DHCP 的默认网关与 DNS 指向旁路由 IP。",
    relatedLinks: [
      { label: "OpenWrt 软路由客户端下载与选型", href: "/clients/#platform-router" },
    ],
  },
  {
    id: "cli-07",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "通用订阅导入（Clash / 小火箭）与机场「官方自研专属客户端」各有什么利弊？",
    shortAnswer:
      "官方自研客户端适合纯新手（输入账号密码一键连接，免除配置订阅烦恼）；通用订阅适合进阶用户（支持软路由、自定义分流规则与多机场自动故障转移）。",
    detailedAnswer:
      "在本站收录的 42 家机场中：一部分品牌（如飞猫云、无忧链接、Firefly、闪跃）主打『官方定制客户端登录即用』，其优势是内置了防墙动态域名下发，新手完全不需要懂什么是 YAML 或订阅链接；而以榜首「光速云」、微风网络、暮光加速、星岛梦、唯兔云、一翻云为代表的综合型品牌，则同时提供『官方自研客户端 + 标准第三方通用订阅导入』双支持，既能让新手一键上手，又允许老玩家导入 Clash Verge Rev、Shadowrocket 与 OpenWrt。",
    relatedLinks: [
      { label: "通用订阅 vs 专属客户端支持品牌一览", href: "/clients/#client-mode-compare" },
    ],
  },
  {
    id: "cli-08",
    category: "client",
    categoryLabel: "全平台客户端与订阅配置",
    q: "Mihomo (Clash.Meta) 内核和 Sing-box 内核有什么区别？",
    shortAnswer:
      "Mihomo 完美继承并扩展了 Clash 生态的 YAML 语法与海量规则集，生态最成熟；Sing-box 采用现代 JSON 结构，在移动端（iOS/Android/Apple TV）统一跨平台体验极佳。",
    detailedAnswer:
      "两者都是 2026 年最顶尖的开源代理内核，均全面支持 VLESS-Reality、Hysteria 2、Trojan、TUIC 与 WireGuard。区别在于：Mihomo（驱动 Clash Verge Rev、FlClash、OpenClash）可以直接无缝使用全网所有的 Clash 机场订阅链接与 `.mrs` / `.yaml` 规则集；而 Sing-box（驱动 Hiddify、Karing、SFI/SFA）采用高内聚的 JSON 路由架构，内置原生 TUN 栈，在 Android、iOS 与 Apple TV 端官方客户端完全免费开源。普通桌面用户优先选 Mihomo 系客户端即可。",
    relatedLinks: [
      { label: "Mihomo 与 Sing-box 全平台客户端对比", href: "/clients/" },
    ],
  },

  // ==================== CAT 04: NETWORK & DNS (8 Q&As) ====================
  {
    id: "net-01",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "什么是 DNS 污染与 DNS 泄漏？为什么开启 Mihomo 的 Fake-IP 模式能同时根治这两大问题？",
    shortAnswer:
      "DNS 污染是防火墙抢先返回虚假 IP 导致连不上；DNS 泄漏是客户端把海外域名发给国内运营商解析导致行踪暴露。Fake-IP 让本地瞬间返回虚拟 IP 并由海外节点在远端完成解析，实现 0ms 延迟与零泄漏。",
    detailedAnswer:
      "在传统的 Redir-Host 模式下，当你访问一个海外网站时，本地客户端需要先向 DNS 服务器发起查询并等待真实 IP 返回，这不仅增加了 50ms–200ms 的首包等待时间，一旦 fallback 配错还会向本地宽带运营商泄露你正在访问的目标域名。而在 Mihomo 的 `enhanced-mode: fake-ip` 模式下，客户端拿到域名请求后在 0.1 毫秒内立即返回一个 `198.18.0.x` 虚拟 IP 骗过浏览器立刻建立连接，随后将原始域名字符串通过加密的 IEPL 专线直接发给海外落地节点解析，从物理链路上彻底消灭了本地 DNS 污染与 DNS 泄漏。",
    relatedLinks: [
      { label: "Fake-IP 与 DoH 防泄漏完整 YAML 配置", href: "/services/customer-analysis/" },
      { label: "BrowserLeaks DNS 泄漏在线自检工具", href: "/free/#diagnostic-tools" },
    ],
  },
  {
    id: "net-02",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "怎样查当前节点是不是真正的「原生 IP (Native IP)」或「家宽住宅 ISP」？",
    shortAnswer:
      "通过 ippure.com、ping0.cc 与 ipinfo.io 交叉核验：『IP 注册国 = 广播国』为原生 IP；`asn.type` 与 `company.type` 均为 `isp` 且欺诈分 < 25 为顶级家宽级纯净 IP。",
    detailedAnswer:
      "行业里常说的 IP 属性分为三档：1) **广播 IP（Broadcast IP）**：例如 IP 原本注册在美国 ARIN，被机房通过 BGP 宣告广播到香港使用，这类 IP 看 YouTube 没问题，但看 Netflix 港剧或用港区服务常识别回美国；2) **机房原生 IP（Hosting Native IP）**：注册国与物理所在国一致（如日本注册、日本落地），能完美解锁当地 Netflix 与 ChatGPT；3) **双 ISP 住宅 IP（Residential ISP）**：不仅注册地一致，且归属在当地宽带运营商（如香港 HKT、台湾中华电信 HiNet）名下，是运营 TikTok 与防 Claude 封号的最高等级 IP。",
    codeSnippet: `# 在终端一键查询当前代理出口的 IP 归属地、ASN 与运营商属性：
curl -x http://127.0.0.1:7897 -s https://ipinfo.io/json`,
    relatedLinks: [
      { label: "20+ 全球 IP 纯净度与原生属性检测探针", href: "/free/#diagnostic-tools" },
    ],
  },
  {
    id: "net-03",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "为什么开启代理后，Google 搜东西总是弹出 Cloudflare 旋转验证码或 Google 人机验证？",
    shortAnswer:
      "因为当前选中的热门节点（尤其是排在第 1 位的香港 01 节点）共用人数过多，导致出口 IP 在 Scamalytics / Cloudflare 的风险评分飙升。",
    detailedAnswer:
      "大多数用户导入订阅后习惯直接用列表里的第 1 个节点（如『香港 01』），导致几百人同时用同一个出口 IP 高频请求 Google 搜索与 Cloudflare 站点，触发自动防爬虫阈值。解决方法非常立竿见影：1) 避开编号为 01/02 的扎堆节点，手动选编号靠后的节点（如香港 08、日本 06、新加坡 05）；2) 最彻底的零成本根治法：按照本站免费资源库的教程，在 Mihomo 中为 Google/OpenAI 策略组挂载一层免费的 `Cloudflare WARP (dialer-proxy)` 链式落地，由于 Cloudflare 对自家 WARP 出口拥有最高白名单信任，从此 100% 告别旋转验证码。",
    relatedLinks: [
      { label: "Cloudflare WARP 链式代理免验证码配置教程", href: "/free/#warp-zero-trust" },
    ],
  },
  {
    id: "net-04",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "为什么开了代理之后，访问淘宝、京东、B站、微信图片或国内网银反而变慢甚至打不开？",
    shortAnswer:
      "因为误开了「Global（全局代理）」模式导致国内流量去海外绕了一圈，或者国内域名未被 `geosite:cn` 规则命中而走了远程 DNS 解析。",
    detailedAnswer:
      "国内电商与视频网站均部署了遍布全国各省市的本地 CDN 节点。如果你开启了 Global 全局模式，访问淘宝的数据包会先被发往香港或日本机场节点，再从海外绕回国内服务器，不仅延迟翻了 5 倍，还会白白浪费你的机场套餐流量！正确做法是：1) 永远保持客户端处于 **Rule（规则分流）** 模式；2) 确保配置中的 `default-nameserver` 与 `nameserver` 使用国内高并发 DoH（如阿里 `223.5.5.5` 与腾讯 `119.29.29.29`），保障国内 CDN 解析到离你最近的省内机房。",
    relatedLinks: [
      { label: "GitHub 开源 Geosite-CN 国内直连规则集", href: "/free/#rule-providers" },
    ],
  },
  {
    id: "net-05",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "浏览器在 BrowserLeaks 测试中发现 WebRTC 暴露了真实局域网 IP 和国内公网 IP，怎么封堵？",
    shortAnswer:
      "开启客户端的「TUN 虚拟网卡模式（含 strict-route）」接管 UDP STUN 流量，或在浏览器安装 WebRTC Network Limiter 插件禁用非代理 UDP。",
    detailedAnswer:
      "WebRTC 是 Chrome、Edge、Brave 等现代浏览器内置的实时音视频通信组件。即使你开启了 HTTP 系统代理，网页上的 JavaScript 脚本依然可以调用 WebRTC 的 `RTCPeerConnection` 接口向 STUN 服务器发送底层 UDP 探测包，直接绕过系统代理读取你的物理网卡 IP。TikTok 网页版与部分高风控金融站点常利用此漏洞识破代理。开启 Mihomo 的 TUN 模式（`strict-route: true`）可在内核网卡层拦截所有 STUN UDP 包，实现 100% 隐身。",
    relatedLinks: [
      { label: "BrowserLeaks WebRTC 泄漏在线检测与修复", href: "/free/#diagnostic-tools" },
    ],
  },
  {
    id: "net-06",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "关闭 Clash 客户端后，电脑突然彻底上不了网（国内百度/微信也打不开），怎么一键修复？",
    shortAnswer:
      "这是因为客户端异常退出（如直接关机或强杀进程）未清理 Windows 注册表中的系统代理指向 `127.0.0.1:7897`；重新打开客户端再正常退出，或执行下方命令即可秒恢复。",
    detailedAnswer:
      "当开启了『系统代理』的代理软件遇到蓝屏、断电或被安全卫士强行结束进程时，Windows 的 Internet 设置中依然残留着『使用代理服务器 127.0.0.1:7897』的配置。由于此时客户端已关闭、7897 端口无人监听，浏览器所有请求都会被系统拒绝。只需重新启动一次 Clash Verge Rev 把『系统代理』开关打开再关上，或者在系统『设置 -> 网络和 Internet -> 代理』中关闭手动代理，即可瞬间恢复正常上网。",
    codeSnippet: `# Windows 命令行一键清空残留系统代理并重置 Winsock 网络栈：
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f
ipconfig /flushdns`,
    relatedLinks: [
      { label: "Windows 与 macOS 网络栈重置排障指南", href: "/services/customer-analysis/" },
    ],
  },
  {
    id: "net-07",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "在公司内网或大学校园网（深信服 / 锐捷环境）下为什么部分机场节点连不上？",
    shortAnswer:
      "企业级行为管理防火墙通常会封锁非标准高端口（如 10000–60000 端口）并阻断 UDP 协议；应优先选择使用标准 TCP 443 端口的 VLESS-Reality 或 Trojan 专线节点。",
    detailedAnswer:
      "在严苛的政企内网或校园网环境中，网络管理员往往配置了白名单端口策略（仅放行 TCP 80/443 等常见 Web 端口）并启用了 SSL/DPI 流量审计。此时基于 UDP 高端口的 Hysteria 2 或非标端口的 SS 节点会被内网防火墙直接丢弃。应对策略是：选择支持 **Trojan** 或 **VLESS (443 端口)** 的 IEPL 专线机场（在防火墙看来完全等同于访问普通的国内阿里云/腾讯云 HTTPS 网站），且切勿在装有公司监控探针（EDR/深信服客户端）的办公电脑上直接装代理，可通过随身 Wi-Fi 或树莓派/软路由做物理隔离网关。",
    relatedLinks: [
      { label: "IEPL 专线与 Trojan/VLESS 协议伪装原理", href: "/services/data-audit/" },
    ],
  },
  {
    id: "net-08",
    category: "network",
    categoryLabel: "DNS 污染、IP 纯净度与防泄漏",
    q: "开启 TUN 模式或 WireGuard 链式代理后，部分网站卡在 TLS 握手或图片只加载一半（MTU 问题）怎么调？",
    shortAnswer:
      "这是多层隧道封装导致数据包超过物理网卡 1500 字节上限引发分片丢包；将 Mihomo TUN 的 `mtu` 从 9000 调小至 `1400`（链式 WARP 设为 `1280`）即可解决。",
    detailedAnswer:
      "家宽 PPPoE 拨号的实际有效 MTU 只有 1492 字节，加上 VLESS/Trojan 协议头与 WireGuard/TUN 封装头后，如果客户端发送 1500 字节的大包，而沿途路由器禁用了 ICMP Path MTU Discovery（PMTU 黑洞），就会出现『能 ping 通、小网页秒开、但加载大图或提交长 Prompt 时无限转圈』的典型症状。在 Clash Verge Rev 的 TUN 设置中将 MTU 显式设为 `1400`，即可确保所有加密分片一次顺畅通过。",
    relatedLinks: [
      { label: "客户端 TUN 网卡参数深度调优", href: "/services/customer-analysis/" },
    ],
  },

  // ==================== CAT 05: AI & PRODUCTIVITY (8 Q&As) ====================
  {
    id: "ai-01",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "访问 ChatGPT 报错 403 Access Denied / Unable to load site 是什么原因？怎么 1 分钟修复？",
    shortAnswer:
      "95% 是因为流量误走了香港节点（OpenAI 不支持香港）或落入脏 IP；访问 `chatgpt.com/cdn-cgi/trace` 检查 `loc=` 字段，将 AI 策略组固定到台湾/日本/新加坡/美国原生节点即可。",
    detailedAnswer:
      "OpenAI 的风控网关由 Cloudflare Enterprise 托管，会根据来访 IP 的归属国（`loc`）与 ASN 实时拦截。由于中国香港（HK）不在 OpenAI 官方支持列表内，而香港节点又是延迟最低的节点，如果你的客户端处于『自动选择（url-test）』模式，极易自动切到香港节点导致 ChatGPT 报 403。根治方案：在客户端导入 Blackmatrix7 的 OpenAI 规则集，并创建一个**不含香港节点**的『🤖 AI 专线』策略组，手动锁定在光速云、飞猫云或无忧连接的台湾、日本、新加坡或美国节点。",
    codeSnippet: `# 浏览器或终端访问此探针，确认 loc= 绝对不能是 HK 或 CN：
curl -x http://127.0.0.1:7897 -s https://chatgpt.com/cdn-cgi/trace`,
    relatedLinks: [
      { label: "ChatGPT 与 Claude 解锁配置与防降智完整指南", href: "/services/reporting/" },
      { label: "无忧连接（AI与流媒体专项解锁）评测", href: "/brands/wuyoulianjie/" },
    ],
  },
  {
    id: "ai-02",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "为什么 Claude 3.7 (claude.ai) 这么容易封号？日常使用如何做到零封号？",
    shortAnswer:
      "Anthropic 对「账号会话期间 IP 跨国跳变」与「高风险机房 ASN」是零容忍的；必须将 Claude 域名绑定在固定的单一美西或日本高纯净度节点（`type: select`），严禁放入自动轮询测速组。",
    detailedAnswer:
      "许多用户的 Claude 账号之所以用两天就被 Ban，是因为把 `claude.ai` 和 `anthropic.com` 放在了每 5 分钟自动测速切换一次的 `url-test` 策略组里——上一句对话还是日本东京 IP，下一句突然变成新加坡或美国洛杉矶 IP，Anthropic 的反欺诈引擎会立刻判定账号被盗或共享滥用并直接封禁。防封铁律：1) 策略组必须用 `select` 手动固定同一个美国或日本原生节点；2) 开启 TUN 或防 WebRTC 泄漏；3) 若机场机房 IP 欺诈分偏高，叠加免费 Cloudflare WARP 链式落地。",
    relatedLinks: [
      { label: "Claude 防封号独立策略组 YAML 模板", href: "/services/reporting/" },
    ],
  },
  {
    id: "ai-03",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "怎么判断我的 ChatGPT Plus 账号是不是因为节点 IP 不干净而被「降智」了？",
    shortAnswer:
      "当模型在思考长逻辑时不再显示详细的思维链（Reasoning 折叠框瞬间跳过）、长代码频频截断或拒答率飙升时，即触发了基于高危 IP 的动态算力降级。",
    detailedAnswer:
      "OpenAI 为了防御自动化爬虫逆向工程，当检测到当前会话来自 Scamalytics 欺诈分极高（>75 分）的万人共享机房 IP 时，往往不会直接封停付费 Plus 账号，而是静默将后端路由降级至低配量化算力池（即俗称的“降智”）。恢复满血智商的方法：1) 用 `ippure.com` 挑选一条欺诈分低于 25 分的美国、日本或台湾原生节点（或启用 WARP 链式代理）；2) 清除浏览器中 `chatgpt.com` 的 Cookie 与 Site Data 后重新登录。",
    relatedLinks: [
      { label: "ChatGPT 防降智自检与节点挑选教程", href: "/services/reporting/" },
      { label: "IPPure / Scamalytics 欺诈分在线检测", href: "/free/#diagnostic-tools" },
    ],
  },
  {
    id: "ai-04",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "Cursor、Windsurf、GitHub Copilot 或 VS Code 远程开发经常连接超时或报 SSL 错误怎么配？",
    shortAnswer:
      "在 Clash 客户端中开启「TUN 虚拟网卡模式」，并在 Cursor 设置中勾选 `Http: Proxy Support -> override` 填入本地端口，同时若走 HTTP2 报错可勾选 `Disable HTTP/2`。",
    detailedAnswer:
      "AI 编程 IDE（如 Cursor、Windsurf）底层包含 Node.js 语言服务器、gRPC 流式补全通道与 Electron 渲染进程，单纯依靠系统代理常常出现『代码补全能用，但 Composer / Agent 模式一直转圈报错』的现象。最稳妥的开发者方案是：1) 开启 Clash Verge Rev 的 **TUN 模式** 接管全部子进程；2) 将 `*.cursor.sh`、`*.cursorapi.com`、`*.githubcopilot.com` 统一分流至低抖动的 IEPL 日本或美西专线节点；3) 若公司网络干扰 gRPC，可在 Cursor Settings 中开启 `cursor.general.disableHttp2`。",
    relatedLinks: [
      { label: "开发者 AI 工具链代理与 TUN 配置指南", href: "/services/reporting/" },
    ],
  },
  {
    id: "ai-05",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "为什么切换到美国或日本节点后，访问 Google Gemini 或 NotebookLM 依然提示「目前不支持你所在的国家/地区」？",
    shortAnswer:
      "因为 Google 会同时校验「当前节点 IP」和「Google 账号关联的国家/地区及浏览器位置缓存」；需检查 Google Play/账号地区设置并确保 `googleapis.com` 未漏入香港节点。",
    detailedAnswer:
      "排查 Google Gemini 锁区需分两步：第一步，在无痕窗口（Incognito）中打开 `gemini.google.com`，如果无痕窗口能正常打开，说明是主浏览器的 Cookie 缓存了之前的香港位置，清除 `google.com` 的站点数据即可；第二步，如果无痕窗口登录后依然提示地区不支持，请确保分流规则已将 `gemini.google.com`、`notebooklm.google.com`、`alkalimakersuite-pa.clients6.google.com` 与 `generativelanguage.googleapis.com` 全部指向美国、新加坡或日本节点（切勿漏网去香港）。",
    relatedLinks: [
      { label: "GitHub 开源 OpenAI/Claude/Gemini 分流规则集", href: "/free/#rule-providers" },
    ],
  },
  {
    id: "ai-06",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "在本地终端调用 OpenAI / Anthropic API 或跑 Python LangChain 脚本时，为什么开了系统代理还是连不上？",
    shortAnswer:
      "因为 PowerShell、CMD 与 Python `httpx`/`requests` 库默认不自动读取桌面系统代理；需开启客户端 TUN 模式，或在终端显式导出 `HTTP_PROXY` 与 `HTTPS_PROXY` 环境变量。",
    detailedAnswer:
      "命令行环境与图形浏览器不同，除非你在终端里显式声明代理环境变量，或者启用了三层虚拟网卡（TUN 模式），否则 `python app.py`、`git clone` 和 `npm install` 发出的 TCP 连接会直接走本地物理网卡撞墙超时。你可以在终端配置文件中设置快捷代理函数，或直接在 Clash Verge Rev 中常驻开启 TUN 模式。",
    codeSnippet: `# Windows PowerShell 临时为当前终端会话挂载 Clash 本地混合端口 (默认 7897)：
$env:HTTP_PROXY="http://127.0.0.1:7897"
$env:HTTPS_PROXY="http://127.0.0.1:7897"
$env:ALL_PROXY="socks5://127.0.0.1:7897"`,
    relatedLinks: [
      { label: "全平台客户端端口与终端环境变量指南", href: "/services/customer-analysis/" },
    ],
  },
  {
    id: "ai-07",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "使用 ChatGPT 实时高级语音模式（Advanced Voice Mode）连不上或听不到声音怎么办？",
    shortAnswer:
      "ChatGPT 高级语音模式底层采用 LiveKit (WebRTC UDP) 实时音视频流，要求机场节点必须开启 `udp: true` 支持，且需将 `*.livekit.cloud` 与 `*.turn.livekit.cloud` 纳入 AI 分流规则。",
    detailedAnswer:
      "文字对话走的是标准 HTTPS (TCP)，而点击耳机图标进入实时语音对话时，ChatGPT App 会向 `*.livekit.cloud` 建立低延迟 UDP WebRTC 连接。如果你连不上语音：1) 检查你的分流规则是否漏掉了 `DOMAIN-SUFFIX,livekit.cloud`（建议使用本站免费资源库提供的最新 Blackmatrix7 OpenAI 规则集，已完整收录 LiveKit 域名）；2) 确保手机端开启了 Shadowrocket / Stash 的 UDP 转发，电脑端开启了 TUN 模式；3) 优先选择日本或新加坡低延迟 IEPL 专线。",
    relatedLinks: [
      { label: "Blackmatrix7 OpenAI 完整规则集一键复制", href: "/free/#rule-providers" },
    ],
  },
  {
    id: "ai-08",
    category: "ai",
    categoryLabel: "ChatGPT / Claude / 生产力工具风控",
    q: "有哪些机场在实测中对 ChatGPT、Claude 3.7 和 Gemini 的解锁最省心？",
    shortAnswer:
      "追求稳定高性价比首选 #1 光速云（切台/日/新/美节点）、#2 飞猫云（全节点流媒体与 AI 原生解锁）、#8 无忧连接与 #19 速界。",
    detailedAnswer:
      "根据本站对 42 家品牌的解锁矩阵核验：如果你希望开箱即用、无需折腾复杂的链式代理，排名第 2 的「飞猫云」与排名第 8 的「无忧连接」在服务端内置了完善的流媒体与 AI 原生 DNS 解锁；排名第 1 的「光速云」采用双专线架构，将 AI 策略组指向其台湾、日本、新加坡或美国节点即可稳定使用 Claude 与 ChatGPT；此外 25 元档的「速界」也明确针对海外 AI 工具做了专项优化。",
    relatedLinks: [
      { label: "光速云评测档案", href: "/brands/guangsuyun/" },
      { label: "飞猫云评测档案", href: "/brands/feimaoyun/" },
    ],
  },

  // ==================== CAT 06: STREAMING & TIKTOK (8 Q&As) ====================
  {
    id: "str-01",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "为什么我的 Netflix 账号只能搜到《怪奇物语》等自制剧（Originals），搜不到《绝命毒师》《甄嬛传》等非自制剧？",
    shortAnswer:
      "因为当前节点 IP 已被 Netflix 识别为数据中心代理（Hosting Proxy），触发了『仅放行全球无版权限制的自制剧、隐藏所有第三方授权剧集』的软封锁策略。",
    detailedAnswer:
      "Netflix 早已不再简单粗暴地弹出代理报错页面，而是当检测到你的出口 IP 属于 AWS/Vultr 等公开机房段时，自动将片库降级为『Netflix Originals Only（仅自制剧模式）』。检验方法很简单：在 Netflix 搜索框输入 `81215567` 或搜《绝命毒师 (Breaking Bad)》，如果搜不到，说明当前节点不支持非自制剧解锁。解决方法是切换至机场节点列表中明确标注 **『NF / 原生 / 流媒体解锁』** 的香港、台湾、新加坡或日本专线节点（如光速云、飞猫云、暮光加速、星岛梦）。",
    codeSnippet: `# 在终端快速测试当前节点能否解锁 Netflix 非自制剧（返回 HTTP 200 即为完全解锁，返回 404/403 则仅自制剧）：
curl -x http://127.0.0.1:7897 -s -o /dev/null -w "%{http_code}\\n" https://www.netflix.com/title/81215567`,
    relatedLinks: [
      { label: "4K 流媒体与 Netflix 非自制剧解锁深度指南", href: "/services/demand-forecasting/" },
    ],
  },
  {
    id: "str-02",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "手机或电脑刷 TikTok 为什么黑屏、提示「无网络连接」或发视频永远 0 播放量？",
    shortAnswer:
      "TikTok App 不仅检测代理 IP，还会强制读取手机 SIM 卡运营商代码（中国大陆为 460）与系统区域设置；只要检测到国内 SIM 卡就会直接阻断连接（俗称“送中”）。",
    detailedAnswer:
      "解决 TikTok 黑屏与 0 播放需根据设备分治：1) **桌面网页端（最简单）**：无需拔卡，只需在 Clash 中导入 Blackmatrix7 的 TikTok 规则集，将策略组锁定在台湾、日本、新加坡或美国节点（注意：**TikTok 早已退出香港市场，香港节点同样无法使用 TikTok！**）；2) **iOS / Android 手机端**：必须拔出国内 SIM 卡（或插入海外漫游卡如 Giffgaff/ClubSIM），或使用 Shadowrocket / Stash 的 MitM 重写模块伪装 `carrier_region` 参数，同时将手机系统地区设为美国/日本并开启 TUN 虚拟网卡防 WebRTC 泄漏。",
    relatedLinks: [
      { label: "TikTok 跨区防黑屏与海外运营环境隔离全攻略", href: "/services/demand-forecasting/" },
      { label: "Blackmatrix7 TikTok 完整分流规则集", href: "/free/#rule-providers" },
    ],
  },
  {
    id: "str-03",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "看 YouTube 4K / 8K 60fps 视频时缓冲转圈，打开 Stats for Nerds 发现速度只有几千 Kbps 怎么办？",
    shortAnswer:
      "检查兩点：一是确认 `*.googlevideo.com` 音视频流域名正确命中了高速 IEPL 专线；二是若 UDP QUIC 被本地宽带限速，可在浏览器或客户端禁用 QUIC 强制回退 TCP。",
    detailedAnswer:
      "YouTube 的网页主界面走的是 `youtube.com`，但真正的视频画面数据流来自 `rr1---sn-xxx.googlevideo.com`。如果分流规则缺失导致 `googlevideo.com` 漏到了兜底慢速节点，或者因为 YouTube 默认使用 UDP 443 (HTTP/3 QUIC) 传输视频流而遭到了本地移动/电信宽带的晚高峰 UDP 限速，就会出现卡顿。解决方法：在 Chrome 地址栏输入 `chrome://flags/#enable-quic` 将其设为 `Disabled`，或在 Mihomo 规则中增加一条 `- AND,((NETWORK,UDP),(DST-PORT,443),(DOMAIN-SUFFIX,googlevideo.com)),REJECT`，强制 YouTube 改走满速稳定的 TCP IEPL 专线。",
    relatedLinks: [
      { label: "YouTube 8K 秒开与 QUIC 调优实战", href: "/services/demand-forecasting/" },
    ],
  },
  {
    id: "str-04",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "Disney+ 报错 Error Code 73 / Error Code 83 或无限转圈进不去是什么原因？",
    shortAnswer:
      "Disney+ 对广播 IP 与机房 ASN 的审查比 Netflix 更严苛；Error 73 代表当前节点 IP 所在区域未开通服务或被拉黑，需切换至新加坡、台湾、香港或日本的原生/DNS解锁节点。",
    detailedAnswer:
      "Disney+ 采用 BamGrid 流媒体风控架构，不仅校验 `disneyplus.com`，还会同时校验 `bamgrid.com`、`dssott.com` 与 `disneystreaming.com`。如果你的分流规则只把 `disneyplus.com` 指到了解锁节点，而把 `bamgrid.com` 漏到了其他地区的节点，就会因『前后鉴权 IP 地区不一致』报 Error 83。请务必使用包含完整 BamGrid 域名簇的流媒体规则集，并将整个流媒体策略组统一固定在同一个香港、台湾或新加坡原生解锁节点。",
    relatedLinks: [
      { label: "Disney+ 杜比视界与流媒体规则配置", href: "/services/demand-forecasting/" },
    ],
  },
  {
    id: "str-05",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "如何在客厅 Apple TV 4K 电视盒子上配置机场订阅，实现全家人看 Netflix 4K 与 YouTube？",
    shortAnswer:
      "tvOS 17 及以上系统已原生支持 VPN 接口，可直接在美区 App Store 下载 tvOS 版「Shadowrocket」「Stash」或免费的「Sing-box」，扫码导入光速云或飞猫云订阅即可。",
    detailedAnswer:
      "过去在电视上看 Netflix 4K 必须折腾软路由旁路由，如今在 Apple TV 4K（升级至 tvOS 17+）上极其简单：1) 用已购买过 iOS 小火箭或 Stash 的美区 Apple ID 登录 Apple TV 的 App Store，无需二次付费即可直接下载对应的 tvOS 版本（或免费下载开源的 `Sing-box VT`）；2) 在同一局域网下的手机或电脑上打开客户端通过局域网同步/隔空投送导入订阅；3) 将 Apple TV 节点选在峰值带宽充沛的香港、台湾或新加坡 IEPL 专线（如光速云 2.5Gbps 极速版或飞猫云 10Gbps 专线），即可秒开杜比视界（Dolby Vision）。",
    relatedLinks: [
      { label: "支持 Apple TV / 小火箭的高带宽专线机场推荐", href: "/brands/" },
    ],
  },
  {
    id: "str-06",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "观看机场赠送或自购的 Emby 影视服，怎么配置分流规则才不会消耗双倍流量？",
    shortAnswer:
      "先询问机场客服哪些是「0.1x 低倍率 Emby 专线节点」或是否允许国内直连；将 Emby 服域名单独建立策略组指向指定低倍率节点，切勿走高倍率主力节点。",
    detailedAnswer:
      "一部 4K 原盘电影体积高达 20GB–50GB。如果你直接用 1x 或 2x 倍率的普通节点挂着全局看 Emby，两部电影就会把你整月的套餐流量刷空。正确做法是在 Mihomo 配置中为你的 Emby 服务器域名（如 `*.emby.wtf` 或机场专属影视域名）单独写一条 `DOMAIN-SUFFIX` 规则，指向机场专门提供的『0.1x 观影低倍率节点』或按量计费的便宜大碗节点。",
    relatedLinks: [
      { label: "大流量观影机场与套餐对比", href: "/services/demand-forecasting/" },
    ],
  },
  {
    id: "str-07",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "在 Bilibili（B站）看「仅限港澳台地区」的正版番剧，怎么做到国内视频直连、仅港澳台番剧走代理？",
    shortAnswer:
      "引用开源的 Bilibili 港澳台分流规则集（仅拦截番剧鉴权 API 与港澳台播放链接指向香港/台湾节点），而普通的 `upos-sz-*` 国内视频 CDN 保持 `DIRECT` 直连。",
    detailedAnswer:
      "如果把整个 `bilibili.com` 都扔进香港节点，你看普通 UP 主视频也会消耗机场流量且弹幕加载变慢。借助 Blackmatrix7 或 ACL4SSR 中的 `BiliBiliIntl / BilibiliHMT` 细分规则，客户端只会在你点击带有『僅限港澳台地區』标识的番剧鉴权接口（`api.bilibili.com/pgc/player/web/playurl` 等）时自动走香港或台湾节点完成区域解锁，而日常刷国内视频依然 100% 走本地宽带满速直连。",
    relatedLinks: [
      { label: "GitHub 开源流媒体细分规则库", href: "/free/#rule-providers" },
    ],
  },
  {
    id: "str-08",
    category: "streaming",
    categoryLabel: "Netflix / Disney+ / TikTok 流媒体跨区",
    q: "Spotify、Apple Music 或 YouTube Premium 跨区订阅（如土耳其/尼日利亚/印度区）平时听歌还需要一直挂着对应小众国家节点吗？",
    shortAnswer:
      "不需要！绝大多数正版流媒体会员仅在「首次绑卡开通订阅」那一刻校验对应国家 IP，开通成功后日常使用任何香港/日本/新加坡节点（甚至 Apple Music 直连）均可正常享受会员。",
    detailedAnswer:
      "这是一个非常普遍的认知误区：很多用户为了维持土耳其或尼日利亚低价区会员，以为平时也必须连着高延迟的土耳其节点看视频。实际上，无论是 YouTube Premium、Netflix 还是 Spotify（家庭车首次加入验证地址后），只要完成了账单激活，你的会员权益是全球漫游通用的。日常看 YouTube 4K 尽管放心连延迟只有 20ms 的香港或台湾 IEPL 专线，只在需要专门凑土耳其/巴西本地节点办卡时选择光速云或飞猫云（覆盖土耳其、巴西、阿根廷、泰国、英国、德国等全球冷门地区节点）即可。",
    relatedLinks: [
      { label: "覆盖土耳其/巴西等全球多国节点的主力机场", href: "/brands/guangsuyun/" },
    ],
  },

  // ==================== CAT 07: SECURITY & DISASTER RECOVERY (8 Q&As) ====================
  {
    id: "sec-01",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "使用机场节点上网时，机场后台能看到我在网页上输入的银行密码、聊天记录和 HTTPS 具体内容吗？",
    shortAnswer:
      "只要访问的是正规 `https://` 加密网站且客户端未开启恶意的 `skip-cert-verify: true`，机场节点只能看到你连接的目标域名（SNI）与流量大小，绝对无法解密你的密码与聊天正文。",
    detailedAnswer:
      "现代互联网安全建立在端到端 TLS 1.3 加密之上。当你通过机场访问 GitHub、ChatGPT、Telegram 或网银时，你的浏览器与目标网站服务器之间直接协商了独享的 TLS 会话密钥，机场节点在传输层转发的只是一串完全加密的二进制密文流。**唯一的例外是来路不明的免费蜜罐节点**：如果攻击者在免费节点配置中诱导你开启了 `skip-cert-verify: true`（跳过证书校验）或让你安装了自签名根证书，才会发生中间人解密。因此使用正规专线机场并保持证书校验开启是 100% 安全的。",
    relatedLinks: [
      { label: "公共免费节点蜜罐嗅探原理与安全审计", href: "/free/#honeypot-audit" },
    ],
  },
  {
    id: "sec-02",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "什么是机场面板里的「审计规则 (Audit Rules)」？为什么开着代理下 BT 种子或迅雷会被断网警告？",
    shortAnswer:
      "审计规则是机场在海外落地机房设置的合规防火墙，主要自动拦截两类流量：① BT/PT 种子下载与 P2P 版权侵权流量；② 垃圾邮件发送（SMTP 25端口）与网络扫描攻击。",
    detailedAnswer:
      "在美日欧等海外数据中心（如 Equinix、AWS、Cogent），版权方（DMCA）对 BitTorrent (BT) 盗版下载监控极严。一旦某个代理节点的出口 IP 产生 BT 种子上传流量，海外机房会在几小时内收到 DMCA 投诉并直接拔掉整台服务器的网线。为了保护全体用户的节点不被机房封停，所有正规机场都会在服务端配置审计规则禁止 BT/迅雷/电驴协议。正确习惯是：使用迅雷、qBittorrent、百度网盘或 Steam 更新游戏时，务必确保它们命中 `DIRECT` 国内直连规则，绝不走代理。",
    relatedLinks: [
      { label: "国内下载与 Steam CDN 直连分流规则配置", href: "/free/#rule-providers" },
    ],
  },
  {
    id: "sec-03",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "可以把自己的机场订阅链接分享给几个朋友一起合租使用吗？为什么会被封号？",
    shortAnswer:
      "除明确允许小团队共享的高阶套餐外，个人套餐严禁公开分享或多人异地并发；后端风控一旦检测到同一 Token 在短时间内出现 5 个以上不同省份的公网源 IP，会自动触发封号或限速。",
    detailedAnswer:
      "在区分『自己多设备使用』与『恶意合租/订阅泄露』时，机场后端（如 XrayR / V2bX）统计的不是你装了几台设备，而是**同一时间段内连入中转入口的不同客户端公网 IP 数量**。你自己的电脑、iPad 和手机连在家里同一个路由器 Wi-Fi 下，对外只算 **1 个源 IP**；加上你出门用手机 5G 流量，总共也只有 **2 个并发源 IP**，完全在所有正规机场的合理容忍范围内（通常允许 3–5 个并发 IP）。但如果把链接发给异地的多个朋友，瞬时并发源 IP 飙升就会触发系统的防滥用封禁。",
    relatedLinks: [
      { label: "订阅链接防盗与重置安全指南", href: "/warnings/#warnings-faq" },
    ],
  },
  {
    id: "sec-04",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "发现套餐流量莫名其妙少了几十 GB，怀疑订阅链接已经泄露，怎么立刻止损？",
    shortAnswer:
      "第一时间登录机场官网仪表盘，点击「重置订阅信息 / Reset UUID & Token」，旧链接会立即在全球节点端作废，然后复制新生成的订阅 URL 更新到自己的客户端即可。",
    detailedAnswer:
      "订阅链接泄露通常发生在两类场景：一是你曾把订阅 URL 贴到了不安全的第三方在线订阅转换网站；二是在论坛/群聊发客户端排障截图时忘了给 URL 打码。一旦重置订阅 Token，机场数据库会为你重新生成一串全新的 UUID 与 Trojan 密码，任何缓存在别人电脑或爬虫池里的旧节点配置会在 60 秒内全部返回鉴权失败断开。重置后请务必修改一次机场面板登录密码。",
    relatedLinks: [
      { label: "为什么不能用未知在线转换网站（Sub-Store私有方案）", href: "/free/#sub-store" },
    ],
  },
  {
    id: "sec-05",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "机场官网突然打不开了，怎么在 3 分钟内确认它是真跑路还是换了防失联新域名？",
    shortAnswer:
      "先看客户端里已缓存的节点能不能翻墙：若节点仍能正常上网，100% 是旧官网域名被 GFW 污染，只需开启全局代理或查看客户端节点列表顶部的「通知节点」即可获取最新官网地址。",
    detailedAnswer:
      "由于机场官网域名极易遭到国内运营商 DNS 污染，成熟的老牌机场（如光速云、飞猫云、微风网络）每隔一段时间就会启用新的备用域名，并通过三种渠道下发给老用户：1) **节点列表顶部公告**：在 Clash 客户端点击更新订阅后，排在最前面的 1–2 个虚拟节点名称往往直接写着『最新官网：xxx.com』；2) **Telegram 官方频道与防失联 Bot**；3) **永久地址发布页**。只有当官网返回 521/522、所有专线入口端口全部关闭超过 72 小时且 TG 群解散时，才属于真跑路。",
    relatedLinks: [
      { label: "5分钟『真跑路 vs 假性断网』终端自检决策树", href: "/warnings/#outage-decision-tree" },
    ],
  },
  {
    id: "sec-06",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "购买机场后，第一件必须做的「防失联备份动作」是什么？",
    shortAnswer:
      "立即完成三件事：① 绑定机场后台的 Telegram 防失联机器人（Bot）并加入官方通知频道；② 收藏机场的永久地址发布页；③ 在客户端导入第二家异构协议的不限时备用订阅。",
    detailedAnswer:
      "90% 的用户在断网后之所以陷入孤立无援（既连不上外网看 TG 通知，又打不开机场官网换订阅），就是因为在网络正常时没有做任何防失联准备。当你拥有一条哪怕只有 15 元–100 元的异构永久不限时备用包（或者提前配好了免费的 Cloudflare WARP 零信任节点），任何时候主力机场域名更换，你都能在 3 秒钟内切到备用通道打开 Telegram 获取新订阅，彻底告别失联焦虑。",
    relatedLinks: [
      { label: "四套主力+不限时热备黄金防失联组合", href: "/warnings/#disaster-recovery-combos" },
    ],
  },
  {
    id: "sec-07",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "怎么在 Clash Verge Rev 里把两家不同机场的订阅合并，实现主机场断线自动切副机场？",
    shortAnswer:
      "使用 Mihomo 的 `proxy-providers` 功能分别引入主机场和副机场的订阅 URL，再用 `type: fallback` 策略组将主机场排第一、副机场排第二，即可实现 300ms 全自动故障转移。",
    detailedAnswer:
      "你完全不需要把两个订阅贴到外部网站去合并，Mihomo 内核原生就支持多订阅聚合！在 `proxy-providers` 中定义 `primary-airport`（如光速云）和 `backup-airport`（如唯兔云或飞猫云不限时包），系统会自动独立更新两边的节点池并每 120 秒后台静默测活。平时 100% 流量走排在第一位的光速云；万一遇到半夜机房割接导致主机场全线超时，内核会在你毫无察觉的 300 毫秒内自动把流量切向排第二位的不限时热备池。",
    relatedLinks: [
      { label: "一键复制：Mihomo 主备双机场自动故障转移 YAML", href: "/warnings/#mihomo-failover-yaml" },
    ],
  },
  {
    id: "sec-08",
    category: "security",
    categoryLabel: "账号安全、审计规则与防失联灾备",
    q: "如果遇到当前使用的机场跑路或严重超售，2026 年最稳妥的迁移首选是哪几家？",
    shortAnswer:
      "主力全能首选 #1 光速云（2020年老牌、IEPL+企业内网双专线、¥99/年与¥147永久包）；新手免配置与大带宽首选 #2 飞猫云；高性价比备用首选 #3 微风网络、#9 唯兔云或 #16 一翻云。",
    detailedAnswer:
      "选择迁移替代方案时，务必认准经过本站『2026-08-11 原始测速截图 + 2026-10 品牌资料双核验』的前排梯队：如果你追求综合稳定性最高、既有自研客户端又支持 Clash 通用订阅、且兼顾百元入门与永久包，直接选综合排名第 1 的 **光速云**；如果你讨厌研究配置文件、希望手机电脑登录即用且看重流媒体全解锁，选排名第 2 的 **飞猫云**；如果你需要补充一条 Hysteria 2 抗弱网不限时备份，选 **唯兔云** 或 **一翻云**。",
    relatedLinks: [
      { label: "浏览全部 42 家机场品牌评测与风险状态库", href: "/brands/" },
      { label: "直达 #1 光速云深度评测档案", href: "/brands/guangsuyun/" },
    ],
  },
];
