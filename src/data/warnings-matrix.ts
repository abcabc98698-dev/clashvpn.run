import {
  BRANDS as AIRPORT_BRANDS,
  DATA_STATUS_META,
  getBrandBySlug,
  type AirportBrand,
  type BrandTier,
  type DataStatus,
} from "./brands";

export {
  AIRPORT_BRANDS,
  DATA_STATUS_META,
  getBrandBySlug,
  type AirportBrand,
  type BrandTier,
  type DataStatus,
};

export type RiskSeverity = "critical" | "high" | "medium";

export interface SafeAlternativeLink {
  name: string;
  href: string;
  reason: string;
}

export interface RiskScoringSignal {
  id: string;
  code: string;
  title: string;
  severity: RiskSeverity;
  severityLabel: string;
  weight: number;
  category: string;
  leadTimeWindow: string;
  symptomDetail: string;
  rootCauseMechanism: string;
  technicalVerification: string;
  verificationCommand: string;
  userActionSop: string[];
  safeAlternatives: SafeAlternativeLink[];
}

export interface HistoricalFailureArchetype {
  id: string;
  code: string;
  name: string;
  riskLevel: string;
  typicalLifecycle: string;
  financialModelTrap: string;
  rootCauseAnatomy: string;
  earlyWarningMetrics: string[];
  historicalLesson: string;
  preventionRule: string;
  recommendedAlternativeLabel: string;
  recommendedAlternativeHref: string;
}

export interface OutageDiagnosticStep {
  stepNumber: string;
  id: string;
  title: string;
  timeEstimate: string;
  targetFaultType: string;
  diagnosticPrinciple: string;
  windowsCommand: string;
  unixCommand: string;
  expectedNormalOutput: string;
  trueRunawayIndicator: string;
  localFaultFix: string;
  relatedInternalLink: {
    label: string;
    href: string;
  };
}

export interface DisasterRecoveryCombo {
  id: string;
  code: string;
  title: string;
  targetAudience: string;
  annualizedCostEstimate: string;
  failoverRto: string;
  primarySlot: {
    brandName: string;
    brandSlug: string;
    brandHref: string;
    planLabel: string;
    lineAndProtocol: string;
    roleDescription: string;
  };
  backupSlot: {
    brandName: string;
    brandSlug: string;
    brandHref: string;
    planLabel: string;
    lineAndProtocol: string;
    roleDescription: string;
  };
  architectureHighlight: string;
  isolationAnalysis: string;
  setupGuideLink: {
    label: string;
    href: string;
  };
}

export interface FinancialExpectedValueRow {
  strategyName: string;
  billingPattern: string;
  upfrontOutlay: string;
  month3ExitScamLoss: string;
  annualExpectedCost: string;
  lineDegradationResilience: string;
  continuitySla: string;
  verdict: string;
  isRecommended?: boolean;
}

export interface WarningFaqItem {
  q: string;
  a: string;
  category: string;
  relatedLinks: Array<{ label: string; href: string }>;
}

/**
 * 10 Quantitative Technical & Operational Exit-Scam Warning Indicators.
 * Weights are calibrated so checking any 4-5 high/critical indicators crosses the 60-point danger threshold,
 * and total raw sum is capped at 100 in the interactive calculator.
 */
export const RISK_SCORING_SIGNALS: RiskScoringSignal[] = [
  {
    id: "sig-01",
    code: "01",
    title: "01. 突击推出超低价三年付/永久买断促销",
    severity: "critical",
    severityLabel: "高危红灯 (Critical · +18分)",
    weight: 18,
    category: "财务现金流异常",
    leadTimeWindow: "跑路前 7–21 天极高发",
    symptomDetail:
      "非传统大促节点（或借周年庆、清退名义）突然在面板弹窗推出 3 折~5 折的「两年付/三年付/永久无限流量买断卡」，甚至宣称「买一年送两年、仅限前 200 名」，且不支持任何按比例退订。",
    rootCauseMechanism:
      "正规 IEPL/IPLC 专线机场的深港/沪日跨境内网带宽与国内 BGP 入口均按月向电信运营商或上游IDC结算，属于典型的高固定月度刚性成本模型。当运营方出现上游专线欠费、用户增长停滞或准备卷款清盘时，最直接的变现手段就是通过远低于硬件成本的超长周期折扣进行最后一次资金归集（Exit Liquidity Harvesting）。",
    technicalVerification:
      "核算该促销套餐折算后的「单 GB 流量价格」与「月均折算价」。若宣称全 IEPL 专线却将三年付月均成本压低至 ¥3/月以下且承诺每月上百 GB 1 倍率流量，违背基本专线带宽边际成本定律（当前深港 IEPL 批发成本普遍在 ¥120–¥220/Mbps/月以上）。",
    verificationCommand:
      "# 财务盈亏平衡速算公式（在终端或表格核算）\n# 若 (三年付促销总价 / 36个月) < ¥5 且宣称全节点 1 倍率 IEPL 专线 -> 触发财务庞氏预警",
    userActionSop: [
      "立即停止任何季付以上周期的续费操作，切勿被「限时绝版折扣」诱导锁死沉没成本。",
      "若当前账号仍有剩余周期，开启高频使用消耗剩余额度，并导出保存现有节点 YAML 备份。",
      "提前购入一份独立运营品牌的月付或小额按量包（如光速云 ¥25/月或唯兔云 ¥100/100GB 永久包）完成冷备挂载。",
    ],
    safeAlternatives: [
      {
        name: "光速云（2020老牌 · 月付¥25 / 轻量年付¥99）",
        href: "/brands/guangsuyun/",
        reason: "2020年稳健运营至今，具备 2026-08-11 实测截图，定价符合 IEPL 双专线真实成本结构。",
      },
      {
        name: "百元级平价专线成本拆解指南",
        href: "/services/pricing/",
        reason: "详细核算 ¥75–¥118/年区间正规专线机场的真实带宽成本底线。",
      },
    ],
  },
  {
    id: "sig-02",
    code: "02",
    title: "02. IEPL/IPLC 专线入口静默降级为普通公网直连",
    severity: "critical",
    severityLabel: "高危红灯 (Critical · +16分)",
    weight: 16,
    category: "底层链路降级",
    leadTimeWindow: "跑路前 10–30 天高发",
    symptomDetail:
      "节点名称依然挂着「IEPL 深港专线 01」「IPLC 沪日金融级」字样，但实际连接延迟从原本稳定的 22ms–35ms 暴增至 90ms–220ms，且每隔数天出现端口被 GFW 封锁的情况。",
    rootCauseMechanism:
      "运营方因资金链紧张停止向国内 BGP 中转机房或 IEPL 专线供应商续费，私下将订阅中的节点入口域名解析（A/AAAA 记录）直接改回海外廉价 VPS 的公网 IP（如普通 NTT、Cogent 或廉价美西机房直连），企图用节点名欺骗不看路由追踪的普通用户。",
    technicalVerification:
      "导出 Clash 订阅 YAML 文件，提取节点的 `server` 域名，在本地终端执行 `nslookup` 与 `tracert`/`mtr`。若解析出的入口 IP 归属地不在中国大陆境内（如广东、上海、江苏、浙江 BGP 机房），而是直接指向香港、日本或美国的海外 ASN，即证实专线入口已被裁撤。",
    verificationCommand:
      "nslookup <节点server域名> 223.5.5.5\ntracert -d -h 15 <节点server域名>",
    userActionSop: [
      "通过路由追踪截图固定「货不对板」证据，切勿继续续费该品牌的所谓高价专线套餐。",
      "在 Clash 客户端中将该机场降级为低优先级备用组，避免晚高峰因公网直连丢包导致视频会议或 SSH 中断。",
      "切换至经 2026-08-11 珠海联通 5Gbps 后端实测验证的真 IEPL/IPLC 专线品牌。",
    ],
    safeAlternatives: [
      {
        name: "IEPL 与 IPLC 专线底层架构审计专题",
        href: "/services/data-audit/",
        reason: "手把手教你通过 MTR 跃点与 RTT 抖动鉴别真假专线。",
      },
      {
        name: "微风网络（IEPL 专线 + VLESS 实测香港 25ms）",
        href: "/brands/weifeng/",
        reason: "含 2026-08-11 原始测速图，全线 IEPL + VLESS 架构。",
      },
    ],
  },
  {
    id: "sig-03",
    code: "03",
    title: "03. 面板 SSL 证书过期超过 48 小时未自动续期",
    severity: "medium",
    severityLabel: "观察黄灯 (Medium · +8分)",
    weight: 8,
    category: "运维基础设施失管",
    leadTimeWindow: "失联或无人值守前兆",
    symptomDetail:
      "访问机场官网面板或客户端拉取订阅链接时，浏览器弹出 `NET::ERR_CERT_DATE_INVALID` 警告，或 Clash Verge Rev 更新订阅报错 `x509: certificate has expired or is not yet valid`，且持续超过 48 小时无人修复。",
    rootCauseMechanism:
      "现代机场面板（V2Board / Xboard / SSPanel）普遍通过 Acme.sh 或 Caddy 配置 Let's Encrypt 证书自动续期。若证书过期超过 48 小时仍未恢复，通常意味着：面板宿主机的 Crontab 守护进程崩溃、Cloudflare API Token 失效、域名即将到期未续费，或核心技术运维人员已彻底放弃日常巡检（处于“半弃管”状态）。",
    technicalVerification:
      "使用 `openssl s_client` 或 `curl -vI` 检查订阅域名与主站域名的 TLS 证书 `notAfter` 时间戳，并核查是否还有备用防失联域名正常运作。",
    verificationCommand:
      "curl -vI https://<机场订阅域名> 2>&1 | findstr /i \"expire subject issuer\"",
    userActionSop: [
      "切勿在客户端长期开启 `skip-cert-verify: true`（跳过证书校验），否则极易遭遇中间人流量劫持（MITM）。",
      "检查该机场官方 Telegram 频道是否有更换主域名公告；若全渠道静默超过 72 小时，立即启动备用订阅切换。",
    ],
    safeAlternatives: [
      {
        name: "Clash 订阅导入与 TLS 证书校验排障指南",
        href: "/services/customer-analysis/",
        reason: "详解 x509 证书报错根因与安全更新订阅的标准流程。",
      },
    ],
  },
  {
    id: "sig-04",
    code: "04",
    title: "04. Telegram 官方群开启全员禁言或删除历史群组",
    severity: "high",
    severityLabel: "中危橙灯 (High · +14分)",
    weight: 14,
    category: "社群与舆情封控",
    leadTimeWindow: "跑路前 3–14 天极高发",
    symptomDetail:
      "官方 Telegram 交流群突然以「配合整顿」「清理广告机器人」为由开启长期全员禁言（Slow Mode 设为无限或直接 Mute），踢出询问节点掉线的老用户，甚至直接解散数千人的聊天群，仅保留单向发布的频道。",
    rootCauseMechanism:
      "当大面积节点离线或专线欠费拔线已经发生时，为防止老用户在群内揭露真相、阻碍新用户继续充值促销套餐，运营方会第一时间掐断用户之间的横向信息互通（Information Siloing），为最后的资金收割或销毁数据争取时间窗口。",
    technicalVerification:
      "观察 TG 频道最近 5 条公告的发布频率与评论区开放状态；若在开启全员禁言的同时仍在置顶推送「限时充值返利/三年付特惠」，风险等级直接升至最高级。",
    verificationCommand:
      "# 舆情交叉核验清单：\n# 1. TG 群是否全员禁言 > 72h？\n# 2. 禁言期间是否仍在置顶发打折码？\n# 3. 管理员账号是否改为 Deleted Account？",
    userActionSop: [
      "一旦发现「全员禁言 + 置顶大促」同时出现，100% 视为高危跑路信号，严禁充值一分钱。",
      "立即登录面板将个人绑定邮箱（若用了常用邮箱）留意后续垃圾邮件风险，并重置或销毁不再使用的订阅 Token。",
    ],
    safeAlternatives: [
      {
        name: "微风网络（7×24小时在线客服 + 夜间 AI 值守）",
        href: "/brands/weifeng/",
        reason: "服务响应机制完善，实测表现稳定透明。",
      },
      {
        name: "暮光加速（7×24小时客服响应 + 多端支持）",
        href: "/brands/muguang/",
        reason: "定位远程办公团队与多终端个人，沟通渠道顺畅。",
      },
    ],
  },
  {
    id: "sig-05",
    code: "05",
    title: "05. 工单响应 SLA 从 24 小时恶化至 7 天无回复",
    severity: "medium",
    severityLabel: "观察黄灯 (Medium · +9分)",
    weight: 9,
    category: "客服与工单停摆",
    leadTimeWindow: "跑路前 14–45 天高发",
    symptomDetail:
      "面板提交的财务账单未到账、订阅无法拉取或节点大面积超时工单，超过 5–7 个自然日处于 `Pending`（待处理）状态，或被系统脚本统一批量直接关闭（Closed without reply）。",
    rootCauseMechanism:
      "中小型机场往往是 1–2 人的兼职团队甚至单人运营（One-man Airport）。当主理人因个人原因、上游纠纷或收益下滑失去维护意愿时，最先停摆的就是耗时费力的工单系统，随后才会演变为节点彻底失联。",
    technicalVerification:
      "发送一条包含具体技术参数（如某节点端口不通的 tcping 结果）的低优先级测试工单，实测其首次人工响应时长（First Response Time）。",
    verificationCommand:
      "# 工单健康度基准：\n# 优秀：< 12小时人工回复 | 正常：12–36小时 | 预警：> 72小时无响应或机械关单",
    userActionSop: [
      "对于工单超过 7 天无人处理的机场，将其标记为「仅用完存量、到期即弃」，取消自动续费提醒。",
      "日常主力切换至具备明确客服值守机制与近期实测背书的前十品牌。",
    ],
    safeAlternatives: [
      {
        name: "2026 综合排名前十 (Top 10) 专线机场总表",
        href: "/guides/#top10-matrix",
        reason: "横向对比前十品牌的成立年份、客服机制与 2026-08-11 实测证据。",
      },
    ],
  },
  {
    id: "sig-06",
    code: "06",
    title: "06. 支付网关频繁更换为个人收款码或仅限加密货币",
    severity: "high",
    severityLabel: "中危橙灯 (High · +10分)",
    weight: 10,
    category: "收单通道风控",
    leadTimeWindow: "跑路前 7–30 天或合规高压期",
    symptomDetail:
      "原本正常的支付宝/微信在线聚合收银台突然下线，改为要求用户向不明个人收款码转账并手工贴交易单号，或突然强制要求所有套餐仅支持 USDT-TRC20 / XMR 门罗币支付且最低充值门槛大幅提高。",
    rootCauseMechanism:
      "一方面可能是其合作的第四方易支付（Epay）通道因投诉率过高被风控冻结，甚至被易支付平台卷走结算款导致机场自身现金流断裂；另一方面，若突然全面切为无追索权的纯加密货币且伴随超低价长周期促销，往往是规避资金溯源、准备清盘的标志。",
    technicalVerification:
      "在面板点击创建订单（无需实际支付），观察跳转的网关域名与商户名称是否频繁报错 `商户状态异常` 或要求私聊发送转账截图。",
    verificationCommand:
      "# 支付安全红线：\n# 严禁向任何要求「私聊发微信/支付宝口令红包」的非标渠道打款！",
    userActionSop: [
      "绝不参与任何要求私聊转账或高门槛加密货币起充的促销活动。",
      "若确需使用 USDT 支付以保护个人隐私，仅限在运营 3 年以上且支持月付/小额包的头部品牌中使用。",
    ],
    safeAlternatives: [
      {
        name: "光速云（支持支付宝 / 微信 / USDT 正规网关）",
        href: "/brands/guangsuyun/",
        reason: "支付通道稳定，支持 ¥25 月付极速版低门槛验货。",
      },
    ],
  },
  {
    id: "sig-07",
    code: "07",
    title: "07. 晚高峰全节点丢包率 >35% 且持续两周无扩容公告",
    severity: "high",
    severityLabel: "中危橙灯 (High · +11分)",
    weight: 11,
    category: "容量超售恶化",
    leadTimeWindow: "跑路前 15–60 天慢性恶化",
    symptomDetail:
      "每晚 20:00–23:30 黄金时段，香港、日本、新加坡全线节点延迟从 30ms 飙升至 400ms+，丢包率突破 35%–60%，4K 视频卡成幻灯片，且连续两周以上没有任何带宽扩容或线路割接维护公告。",
    rootCauseMechanism:
      "典型的高倍率超售（Overselling）晚期症状。运营方在不增加上游 IEPL 端口带宽（如仅租用 200Mbps–500Mbps 专线母鸡）的前提下，无节制售卖廉价年付套餐，导致晚高峰并发吞吐彻底击穿母鸡网卡队列上限，形成恶性拥塞崩溃。",
    technicalVerification:
      "在晚高峰 21:00 左右运行连续 100 次 ICMP/TCP 拨测或查看 MAI-TEST-BOT / Speedtest 多线程吞吐衰减比例。",
    verificationCommand:
      "ping -n 50 <入口IP或域名>\n# 观察 Lost (丢包率) 是否 > 30% 以及最大/最小 RTT 极差是否 > 250ms",
    userActionSop: [
      "利用支持基于 UDP/QUIC 拥塞控制的 Hysteria 2 协议节点（如一翻云、星岛梦）缓解本地弱网丢包，或直接更换上游母鸡带宽充裕的主力专线。",
      "参考本站 2026-08-11 珠海联通 5Gbps 后端 32 线程实测原图筛选高吞吐品牌。",
    ],
    safeAlternatives: [
      {
        name: "一翻云（IEPL 物理专线 + Hysteria 2 / VLESS-Reality 三协议）",
        href: "/brands/yifanyun/",
        reason: "支持 Hysteria 2 抗丢包协议，含 2026-08-11 原始测速图。",
      },
      {
        name: "星岛梦（IEPL + IPLC 双线 + Hysteria 2 支持）",
        href: "/brands/xingdaomeng/",
        reason: "2021年老牌运营，含 ¥75/年入门档与 2026-08-11 实测图。",
      },
    ],
  },
  {
    id: "sig-08",
    code: "08",
    title: "08. 强制锁死闭源客户端且移除标准 Clash/Sing-box 订阅导出",
    severity: "medium",
    severityLabel: "观察黄灯 (Medium · +8分)",
    weight: 8,
    category: "客户端锁定风险",
    leadTimeWindow: "架构变更或运营策略收紧期",
    symptomDetail:
      "面板突然关闭「一键导入 Clash / Shadowrocket / 通用订阅 URL」功能，强制要求所有用户下载安装其独有的闭源客户端（且部分未签名客户端触发 Windows Defender 告警），软路由（OpenWrt）与 Apple TV 用户彻底无法继续使用。",
    rootCauseMechanism:
      "客观而言，部分正规新手机场（如飞猫云、无忧链接、Firefly、闪跃）采用专属客户端是为了「防小白配置出错 + 防止订阅链接被爬虫盗用/合租滥用」，这本身**不等于跑路**。但若一家原本承诺支持通用订阅的小作坊在未提前告知、不提供退款通道的情况下突然一刀切锁死未签名闭源壳，且客户端内置不明后台常驻进程，则需高度警惕供应链安全与锁定风险。",
    technicalVerification:
      "区分「正规免配置专属客户端品牌」与「高危未签名木马壳」：核查安装包是否具备合法数字签名、是否在沙箱（VirusTotal / 微步在线）存在剪贴板读取或远控行为，以及是否影响了您的软路由/多端分流刚需。",
    verificationCommand:
      "certutil -hashfile <客户端安装包.exe> SHA256\n# 将 SHA256 哈希提交至 VirusTotal 核查是否存在恶意注入行为",
    userActionSop: [
      "若您使用软路由（OpenClash/PassWall）、Linux 或需要自定义 Mihomo `proxy-providers` 故障转移，选型时请直接锁定支持「通用订阅导出」的品牌（如光速云、微风网络、唯兔云、一翻云）。",
      "若偏好专属客户端省心模式，仅选择经过本站实测建档的透明品牌（如飞猫云），切勿运行来路不明的电报群私发安装包。",
    ],
    safeAlternatives: [
      {
        name: "6大系统开源代理客户端官方 GitHub 下载库",
        href: "/clients/",
        reason: "提供 Clash Verge Rev、FlClash、Mihomo Party、Sing-box 官方纯净发布源。",
      },
      {
        name: "光速云（自研客户端 + 第三方通用订阅双支持）",
        href: "/brands/guangsuyun/",
        reason: "既可免配置登录，又完整保留 Clash/Shadowrocket 通用订阅导入。",
      },
    ],
  },
  {
    id: "sig-09",
    code: "09",
    title: "09. 上游云计算/专线供应商欠费导致大区节点成片离线",
    severity: "critical",
    severityLabel: "高危红灯 (Critical · +17分)",
    weight: 17,
    category: "上游供应链违约",
    leadTimeWindow: "跑路前 1–7 天临终信号",
    symptomDetail:
      "香港、日本或新加坡整个大区的 10–20 个节点在同一秒钟（常见于每月 1 日、15 日或月底账单日零点）全部变为 `Timeout`，仅剩一两个极其卡顿的美国廉价公网节点苟延残喘。",
    rootCauseMechanism:
      "专线大区母鸡在月底账单日因未续费被上游机房（如深港 IEPL 供应商、Equinix 托管商或 AWS/GCP 账单清算系统）执行自动化停机（Suspend / Termination）。若超过 48 小时未能补缴账单恢复上线，说明运营方现金流已彻底枯竭或决定弃盘。",
    technicalVerification:
      "在 Clash 面板对全部节点执行并发 URL-Test，观察离线节点是否按「同一入口 IP 段」或「同一地区倍率组」成片整齐失效。",
    verificationCommand:
      "# 检查是否属于同一上游入口 IP 整段拔线：\n# 打开 Clash 节点列表 -> 观察离线节点的入口域名是否共享同一 CNAME 记录",
    userActionSop: [
      "立即在 Clash 客户端将流量切换至预置的异构备份机场（Backup Provider）或 Cloudflare WARP 应急通道。",
      "保存面板账单与剩余流量截图，停止在该平台的一切资金投入。",
    ],
    safeAlternatives: [
      {
        name: "唯兔云（IPLC 专线 · ¥100/100GB 起永久不限时包）",
        href: "/brands/weituyun/",
        reason: "适合作为异构 Trojan/IPLC 永久流量热备池，主力断线秒级接管。",
      },
      {
        name: "主力月付 + 永久不限时按量包双冗余架构指南",
        href: "/services/experiments/",
        reason: "深度拆解如何用每年多花 ¥15–¥30 的极低成本实现全年 99.99% 零断网。",
      },
    ],
  },
  {
    id: "sig-10",
    code: "10",
    title: "10. 频繁改名换壳（马甲机场）或同源站群洗白历史差评",
    severity: "medium",
    severityLabel: "观察黄灯 (Medium · +9分)",
    weight: 9,
    category: "品牌声誉洗白",
    leadTimeWindow: "周期性收割（每 6–12 个月换壳一次）",
    symptomDetail:
      "新上线的所谓「高端专线机场」，其前端面板 CSS 样式、套餐命名梯度（如一模一样的四档流量与折扣比例）、节点命名格式、甚至订阅后端的入口 CNAME 域名，与几个月前刚跑路或口碑崩盘的某机场完全一致。",
    rootCauseMechanism:
      "行业内存在批量孵化的「站群矩阵」或「马甲换壳盘」。部分团队共用同一套上游节点池与财务收单通道，通过开设十几个不同名字的前端面板分散风控；一旦某个子品牌差评过多或促销圈钱完成，便关停旧域名、换个新 Logo 重新投放 AFF 推广。甚至当用户买了一家做主力、另一家做备份时，一旦母站群拔线，两家会同时瘫痪（共模故障）。",
    technicalVerification:
      "比对两家机场的套餐表格结构、优惠码命名规律（如统一为季9/半85/年8/三年6折）以及订阅解析出的入口 IP/ASN。本站 42 家品牌库已专门对同源站群（如一云梯/飞鸟/龙猫云历史同源记录，以及 Firefly 主站与历史归档条目）做了显式穿透标注。",
    verificationCommand:
      "# 同源站群穿透核验法：\n# 对比机场 A 与机场 B 的节点入口 CNAME 及 ASN 是否完全重合",
    userActionSop: [
      "配置主备双机场时，严禁选择同一站群或同一上游面板的马甲品牌，必须确保「主力 VLESS/IEPL + 备份 Trojan/Hysteria2 异构协议与独立上游」。",
      "查阅下方《42家收录机场实时核验状态与风险雷达》，核对每个品牌的成立年份、数据口径与同源备注。",
    ],
    safeAlternatives: [
      {
        name: "42家机场品牌完整档案与同源关系穿透库",
        href: "/brands/",
        reason: "明确区分 17 家实测原图品牌、11 家厂商披露品牌与 14 家历史归档/同源观察品牌。",
      },
    ],
  },
];

/**
 * 6 Major Airport Failure & Exit-Scam Archetypes in the Industry.
 */
export const HISTORICAL_FAILURE_ARCHETYPES: HistoricalFailureArchetype[] = [
  {
    id: "archetype-01",
    code: "TYPE-01",
    name: "低价不限流量公网直连资金盘崩盘型",
    riskLevel: "极高危 (生命周期通常 < 4 个月)",
    typicalLifecycle: "1–4 个月（靠低价裂变拉新 -> 晚高峰带宽挤兑 -> 机房封号停机）",
    financialModelTrap:
      "打出「¥5/月不限流量」「¥39包年永久无限用」口号，吸引大量 PT 下载、24 小时挂机爬虫与视频采集重度用户。",
    rootCauseAnatomy:
      "国际互联网不存在真正的「零成本无限带宽」。此类小作坊底层往往租用几台月付 $5–$10 的廉价美西或亚太普通公网 VPS（甚至利用云厂商免费试用赠金账户），既无国内 BGP 中转，也无 IEPL 专线。一旦几百名重度用户涌入，不出两周就会跑满机房流量配额或触发云厂商风控封号，而微薄的 ¥5 客单价根本无法覆盖更换 IP 与带宽扩容成本，最终直接关站失联。",
    earlyWarningMetrics: [
      "套餐未标明任何月度流量上限或标注“99999GB/月”",
      "节点全部为直连公网 IP，晚高峰丢包率超过 50%",
      "每逢敏感时期端口成片被 GFW 封锁且数日无法更换新 IP",
    ],
    historicalLesson:
      "合理的流量计费（如 ¥8–¥25/月提供 60GB–200GB IEPL 专线流量）是对全体正常用户网络质量的保护屏障；宣称「白菜价无限流量」的机场 99% 是短命资金盘。",
    preventionRule:
      "坚持选择明码标价、按月重置流量或提供清晰单 GB 计价永久包的正规 IEPL/IPLC 专线品牌。",
    recommendedAlternativeLabel: "光速云（¥99/年 69GB/月 或 ¥25/月 168GB 双专线）",
    recommendedAlternativeHref: "/brands/guangsuyun/",
  },
  {
    id: "archetype-02",
    code: "TYPE-02",
    name: "单上游二道贩子（面板分销）被连带拔线型",
    riskLevel: "高危 (受制于上游母鸡账单周期)",
    typicalLifecycle: "3–9 个月（上游母鸡涨价或跑路 -> 下游数十家分销面板同日全军覆没）",
    financialModelTrap:
      "本身没有任何网络工程运维能力，仅花几百元购买现成转发面板并租用某家“上游批发商”的单条隧道，包装成高端自主专线品牌售卖。",
    rootCauseAnatomy:
      "此类二道贩子机场没有独立的 BGP 入口与多线冗余能力，所有节点的入口 CNAME 指向同一个上游转发商。一旦上游批发商因违规、欠费或纠纷拔掉网线，或者二道贩子未能按时向批发商缴纳月租，其名下所有大区节点会在同一秒钟全部归零，且主理人连基本的排障与切线能力都不具备。",
    earlyWarningMetrics: [
      "所有国家节点共享完全相同的单一国内入口 IP",
      "一旦出现故障，官方公告只会复读“等待上游机房恢复”，毫无应急备用线路",
      "面板高度雷同且无任何独立技术文档或自研能力",
    ],
    historicalLesson:
      "单一线路架构无法抵御上游供应链单点故障（SPOF）。主力机场必须具备双专线或多入口 BGP 调度能力。",
    preventionRule:
      "主力优先选择具备「IEPL 专线 + 企业级内网专线」双架构或 BGP 多入口调度的头部老牌机场。",
    recommendedAlternativeLabel: "查看 IEPL 与 IPLC 专线底层架构选型指南",
    recommendedAlternativeHref: "/services/data-audit/",
  },
  {
    id: "archetype-03",
    code: "TYPE-03",
    name: "节假日三年付/永久买断圈钱跑路型",
    riskLevel: "极高危 (财务欺诈重灾区)",
    typicalLifecycle: "6–18 个月运营期积累口碑 -> 推出 3 折三年付大促 -> 14 天后销号跑路",
    financialModelTrap:
      "前期用正常月付积累一定口碑，随后在双十一、春节或周年庆推出「三年付仅需 ¥88」「¥199 终身无限用」的饥饿营销，利用高额返佣驱动推广者铺天盖地宣传。",
    rootCauseAnatomy:
      "将未来 36 个月的预期收入在 7 天内一次性提前透支归集。由于后续没有持续的新增月付现金流覆盖每个月固定的 IEPL 专线账单，即使主理人起初并非蓄意诈骗，也会在第 4–6 个月陷入入不敷出的财务死局，最终选择关停服务器、注销电报跑路。",
    earlyWarningMetrics: [
      "三年付折扣力度夸张（低于 4 折），而月付价格故意设得极高以逼迫用户买长周期",
      "推广返佣比例突然从常规的 15%–20% 暴涨至 50%–70%",
      "大促期间客服极度热情催单，大促结束后迅速开启群禁言",
    ],
    historicalLesson:
      "买三年付省下的几十块钱，在机场第 3 个月跑路时会变成 100% 的本金归零。真正划算的不限时包应当是「明确标注总流量（如 100GB/247GB）、按量扣费」而非「低价包三年无限用」。",
    preventionRule:
      "严格执行「主力月付（或百元内已实测轻量年付）+ 异构按量不限时备份包」的黄金财务法则，绝不购买小作坊的三年付。",
    recommendedAlternativeLabel: "微风网络（¥200/270GB 按量不限时）& 唯兔云（¥100/100GB 永久包）",
    recommendedAlternativeHref: "/guides/#unlimited-packs",
  },
  {
    id: "archetype-04",
    code: "TYPE-04",
    name: "域名被墙且无防失联备份导致的“假性失联”型",
    riskLevel: "中危 (60% 的所谓“跑路”实为此类故障)",
    typicalLifecycle: "常态化发生（尤其在特殊网络管控窗口期）",
    financialModelTrap:
      "用户误以为机场跑路而匆忙重复购买其他高价套餐，实则是机场主域名与订阅 API 域名遭遇 GFW DNS 污染或 SNI 阻断，而用户未保存备用域名。",
    rootCauseAnatomy:
      "机场的后端节点服务器其实全部正常在线，但用于下发节点列表的「订阅域名（Sub URL）」或「官网主域名」被进了 GFW 黑名单。当客户端尝试定时更新订阅时，DNS 解析返回虚假 IP（如 Facebook/Twitter 黑洞地址）或 TLS 握手被 RST 重置，导致旧订阅被空列表覆盖或客户端误判离线。",
    earlyWarningMetrics: [
      "已导入的旧节点还能勉强连通，但点击「更新订阅」立即报错 Timeout",
      "更换本地 DNS 为 DoH（如 `https://223.5.5.5/dns-query`）或挂上备用梯子后，官网又能正常打开",
    ],
    historicalLesson:
      "没有配置备用订阅与加密 DNS（DoH）的单机场用户，只要遭遇一次订阅域名被墙就会陷入「没梯子就打不开官网换订阅，打不开官网就没梯子」的死锁悖论。",
    preventionRule:
      "参见本文第三章《5分钟真跑路 vs 本地/被墙故障自检决策树》，并在本地常备一个永久不限时备份包或 Cloudflare WARP 零信任通道专门用来救急拉取新订阅。",
    recommendedAlternativeLabel: "Cloudflare WARP 零信任免费救急通道配置",
    recommendedAlternativeHref: "/free/#warp-zero-trust",
  },
  {
    id: "archetype-05",
    code: "TYPE-05",
    name: "强制闭源魔改客户端内置广告/劫持型",
    riskLevel: "高危 (数字资产与隐私安全威胁)",
    typicalLifecycle: "隐蔽潜伏期长（常伪装成免费或超低价公益机场）",
    financialModelTrap:
      "以超低价或免费噱头诱导用户卸载开源 Clash Verge Rev，强制安装其未经审计的魔改客户端并要求授予管理员/Root 权限。",
    rootCauseAnatomy:
      "开源代理生态（Mihomo / Sing-box）的代码完全公开可审计；而部分劣质小作坊通过魔改 Electron 壳或闭源内核，在客户端中植入电商返利劫持代码、浏览器根证书注入（可解密 HTTPS 流量）甚至加密货币剪贴板替换木马。需要注意：这与「飞猫云、无忧链接、Firefly」等正规品牌为降低新手配置门槛提供的官方专属客户端有本质区别。",
    earlyWarningMetrics: [
      "安装包无合法数字签名且在 VirusTotal 上被超过 5 家主流安全引擎标记为 Trojan/ClipBanker",
      "安装后浏览器莫名出现未知根证书，或复制 USDT 地址时尾号被篡改",
    ],
    historicalLesson:
      "免费或极端反常低价的未签名闭源客户端，往往把用户的隐私与数字资产当成真正的变现商品。",
    preventionRule:
      "主力推荐优先采用「开源客户端（Clash Verge Rev / FlClash / Shadowrocket）+ 标准通用订阅导入」模式；若使用专属客户端，仅从本站已核验的正规品牌库中选择。",
    recommendedAlternativeLabel: "前往 6 大系统开源客户端官方 GitHub 校验下载中心",
    recommendedAlternativeHref: "/clients/",
  },
  {
    id: "archetype-06",
    code: "TYPE-06",
    name: "非官方第三方合租拼车/闲鱼淘宝倒卖卷款型",
    riskLevel: "极高危 (100% 无官方售后保障)",
    typicalLifecycle: "7–30 天（车头改密踢人或因多 IP 并发触发机场审计封号）",
    financialModelTrap:
      "在闲鱼、淘宝、电报个人拼车群购买所谓的「大机场成品号」「五人合租季卡」，价格比官网低一半。",
    rootCauseAnatomy:
      "一方面，“车头”将同一个订阅链接超售给几十个买家，极易触发机场后端的在线设备数/并发 IP 审计规则导致账号被永久封禁；另一方面，机场官网面板自带「一键重置订阅 Token」功能，不良卖家在收款确认后只需点击重置，买家的订阅链接立刻失效（返回 401/403），且机场官方绝不会受理非官网直购的二手交易纠纷。",
    earlyWarningMetrics: [
      "卖家只给一条订阅链接（甚至经过第三方短链包装），拒绝提供官网面板独立账户密码",
      "使用几天后流量消耗速度异常飙升（一天莫名跑掉 50GB），随后返回 403 Forbidden",
    ],
    historicalLesson:
      "正規专线机场的入门门槛已经低至 ¥6.58–¥8.25/月（如无忧链接 ¥79/年、光速云 ¥99/年），为了省两三块钱去买二手合租号纯属因小失大。",
    preventionRule:
      "100% 坚持在品牌官网注册独立个人账号并使用官方优惠码直购，绝不购买任何二手成品号或合租订阅链接。",
    recommendedAlternativeLabel: "查看 1元~12元正规专线官网直购低门槛清单",
    recommendedAlternativeHref: "/free/#low-cost-trials",
  },
];

/**
 * 6-Step Technical Diagnostic Protocol: True Exit-Scam vs Local / GFW Block Fault.
 */
export const OUTAGE_DIAGNOSTIC_STEPS: OutageDiagnosticStep[] = [
  {
    stepNumber: "STEP 01",
    id: "step-ntp-tun",
    title: "排查本地系统时钟偏移 (NTP Skew) 与 TUN/系统代理残留锁死",
    timeEstimate: "耗时 30 秒",
    targetFaultType: "本地环境故障（占比约 25%）",
    diagnosticPrinciple:
      "VLESS-Reality、Trojan 与 TLS 1.3 握手对客户端与服务器的时间戳高度敏感，通常要求本地系统时间误差在 ±60 秒以内。若主板 CMOS 电池没电、双系统切换（Windows/Linux 时区冲突）或虚拟机休眠唤醒后时钟偏移超过 90 秒，全节点会瞬间全部报错 `Timeout` 或 `TLS handshake error`，外观与机场跑路完全一样！此外，上次异常关机残留的 Windows 系统代理端口（如 `127.0.0.1:7897`）也会导致断网假象。",
    windowsCommand:
      "# 1. 强制同步 Windows NTP 时间并查看偏移状态\nw32tm /resync /force\nw32tm /query /status\n\n# 2. 检查当前系统代理注册表是否残留锁死\nreg query \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\" /v ProxyEnable",
    unixCommand:
      "# macOS / Linux 检查 UTC 时间与 NTP 同步状态\ndate -u\ntimedatectl status 2>/dev/null || sntp -d time.apple.com",
    expectedNormalOutput:
      "本地 UTC 时间与标准原子钟误差 < 2 秒；关闭代理客户端后 `ProxyEnable` 应自动恢复为 `0x0`。",
    trueRunawayIndicator:
      "系统时间完全精准（误差 < 1秒），且重启电脑或切换至手机 5G 流量热点后，多台不同设备依然同时全部 Timeout。",
    localFaultFix:
      "在系统设置中点击「立即同步时间」，关闭 Clash 的「系统代理」与「TUN 模式」开关后彻底退出重启客户端。",
    relatedInternalLink: {
      label: "Clash TUN 虚拟网卡与系统代理冲突深度排障",
      href: "/services/customer-analysis/",
    },
  },
  {
    stepNumber: "STEP 02",
    id: "step-dns-pollution",
    title: "对比运营商默认 DNS 与加密 DoH 解析，鉴别「订阅域名被墙」",
    timeEstimate: "耗时 45 秒",
    targetFaultType: "GFW 订阅域名 DNS 污染（占比约 35%）",
    diagnosticPrinciple:
      "绝大多数用户以为的「机场跑路」，实际上只是机场的订阅下发域名（Sub URL）被当地运营商 DNS 抢答污染（返回 `127.0.0.1`、`0.0.0.0` 或境外黑洞 IP 如 Facebook/Twitter IP 段）。通过对比默认宽带 DNS 与阿里/腾讯公网 DNS 或 DoH 解析结果，即可在 45 秒内定性。",
    windowsCommand:
      "# 分别用默认 DNS 与阿里公共 DNS 解析你的机场订阅域名\nnslookup <你的机场订阅域名>\nnslookup <你的机场订阅域名> 223.5.5.5\n\n# 通过 curl 调用阿里 JSON DoH 绕过 UDP 53 抢答核验真实 IP\ncurl -s \"https://223.5.5.5/resolve?name=<你的机场订阅域名>&type=A\"",
    unixCommand:
      "dig <你的机场订阅域名> @114.114.114.114 +short\ncurl -s -H \"accept: application/dns-json\" \"https://223.5.5.5/resolve?name=<你的机场订阅域名>&type=A\"",
    expectedNormalOutput:
      "返回正常的 Cloudflare CDN Anycast IP（如 `104.21.x.x` / `172.67.x.x`）或国内/亚太高防负载均衡 IP。",
    trueRunawayIndicator:
      "DoH 返回 `NXDOMAIN`（域名已被注销或未续费停止解析，Status: 3），或 WHOIS 显示域名处于 `clientHold` / `redemptionPeriod` 状态。",
    localFaultFix:
      "若属 DNS 污染，开启你的「备用不限时机场」或「Cloudflare WARP 零信任通道」，在全局代理模式下重新点击更新订阅，或登录机场官网换取最新防失联订阅地址。",
    relatedInternalLink: {
      label: "20+ 全球 DNS 泄露与污染在线自检工具箱",
      href: "/free/#diagnostic-tools",
    },
  },
  {
    stepNumber: "STEP 03",
    id: "step-curl-sub",
    title: "使用 curl -v 模拟 Clash UA 直连拉取订阅 API，诊断 HTTP 状态码",
    timeEstimate: "耗时 60 秒",
    targetFaultType: "订阅 Token 失效 / CDN 521 宕机 / GFW SNI 阻断",
    diagnosticPrinciple:
      "代理客户端拉取订阅失败时往往只笼统提示 `Network Error`。直接在终端使用 `curl -v -A \"clash-verge/v2.0.0\"` 请求订阅链接，可以直观看到停留在哪一层：是 TCP 三次握手超时、TLS ClientHello 被 GFW 发送 RST 阻断，还是服务器返回了明确的 HTTP 状态码（如 `401/403`、`502/521/522`）。",
    windowsCommand:
      "# 模拟 Clash Verge UA 测试订阅接口（请替换为你自己的订阅 URL）\ncurl.exe -v -L -A \"clash-verge/v2.0.2\" --connect-timeout 10 \"https://<你的订阅链接>\" -o NUL",
    unixCommand:
      "curl -v -L -A \"clash.meta/v1.18\" --connect-timeout 10 \"https://<你的订阅链接>\" -o /dev/null",
    expectedNormalOutput:
      "返回 `HTTP/2 200`，且响应头包含 `subscription-userinfo: upload=...; download=...; total=...; expire=...`。",
    trueRunawayIndicator:
      "连续超过 72 小时返回 Cloudflare `HTTP 521 (Web Server Is Down)` / `522 (Connection Timed Out)`（源站面板服务器已彻底关机），或直接 `Connection refused`。",
    localFaultFix:
      "若返回 `401/403`：说明你的订阅 Token 已重置或套餐到期，登录官网复制新链接即可；若在 `TLSv1.3 (OUT), TLS handshake, Client hello` 处报 `Recv failure: Connection was reset`：说明域名遭遇 GFW SNI 阻断，挂前置代理更新订阅即可恢复。",
    relatedInternalLink: {
      label: "订阅拉取 HTTP 403 / 502 / 521 状态码全解",
      href: "/faq/#cat-network",
    },
  },
  {
    stepNumber: "STEP 04",
    id: "step-entry-port",
    title: "探测国内 BGP 专线中转入口 IP 与端口连通性 (Test-NetConnection)",
    timeEstimate: "耗时 60 秒",
    targetFaultType: "国内入口机房割接 vs 全线拔线停机",
    diagnosticPrinciple:
      "即使订阅面板暂时打不开，只要本地客户端还保存着上次拉取的节点配置文件（YAML），就可以打开配置文件找到节点的 `server`（国内入口域名/IP）和 `port`（中转端口），直接测试 TCP 端口是否开放。",
    windowsCommand:
      "# PowerShell 测试节点入口域名与端口的三次握手连通性\nTest-NetConnection -ComputerName <节点server地址> -Port <节点端口号>\n\n# 抽样测试不同地区的 3 个节点入口",
    unixCommand:
      "nc -zv -w 5 <节点server地址> <节点端口号>\n# 或使用 curl 探测 TCP 端口：\ncurl -v telnet://<节点server地址>:<节点端口号>",
    expectedNormalOutput:
      "`TcpTestSucceeded : True`（或 `Connection to ... succeeded!`），证明国内中转入口机房正在正常监听转发。",
    trueRunawayIndicator:
      "香港、日本、新加坡、美国所有节点的国内中转入口端口全部 `TcpTestSucceeded : False`，且入口域名 A 记录被清空或指向 `127.0.0.1`。",
    localFaultFix:
      "若仅个别入口端口不通而其他入口正常，说明该机房正在进行 BGP 入口 IP 轮换，更新订阅或切换至其他可用节点组即可。",
    relatedInternalLink: {
      label: "IEPL 专线国内 BGP 入口架构与端口转发原理",
      href: "/services/data-audit/",
    },
  },
  {
    stepNumber: "STEP 05",
    id: "step-mihomo-logs",
    title: "审查 Mihomo (Clash Meta) 内核 Debug 实时日志定位协议层报错",
    timeEstimate: "耗时 45 秒",
    targetFaultType: "内核协议不兼容 / 认证密码重置 / 远端转发断链",
    diagnosticPrinciple:
      "打开 Clash Verge Rev 或 FlClash 的「日志 (Logs)」面板并将级别调为 `Debug` 或 `Info`，观察发起网页访问时的具体错误栈：不同报错信息直接对应截然不同的故障根因。",
    windowsCommand:
      "# 在客户端【日志】面板检索以下高频特征词：\n# 1. \"i/o timeout\" -> 入口 IP 不通或 UDP/TCP 被本地防火墙拦截\n# 2. \"remote error: tls: bad record mac\" / \"handshake failure\" -> 协议参数或 Reality 公钥不匹配\n# 3. \"EOF\" (连接建立瞬间断开) -> 国内入口正常，但入口到海外落地的专线内网已断开！",
    unixCommand:
      "tail -n 100 ~/.config/clash-verge/clash-verge.log | grep -E \"ERR|WARN|timeout|EOF\"",
    expectedNormalOutput:
      "`[TCP] dialed ... match DomainKeyword(...) using ProxyGroup[节点名]`，无红色 `ERR` 刷屏。",
    trueRunawayIndicator:
      "国内中转入口能建立 TCP 握手，但所有节点在传输数据时立刻返回 `unexpected EOF` 且持续数日——这是典型的「国内前置中转机未到期，但海外落地机/跨境 IEPL 专线已被欠费掐断」铁证。",
    localFaultFix:
      "若日志提示 `unsupported protocol: vless` 或 `hysteria2`，说明你还在使用已停更的古董原版 Clash Premium 内核，升级至内置 Mihomo 内核的 Clash Verge Rev 即可瞬间解决。",
    relatedInternalLink: {
      label: "升级内置 Mihomo 内核的 Clash Verge Rev / FlClash",
      href: "/clients/#desktop",
    },
  },
  {
    stepNumber: "STEP 06",
    id: "step-cross-verify",
    title: "交叉核验本站 42 家实时风险雷达与异构备用订阅切换",
    timeEstimate: "耗时 60 秒",
    targetFaultType: "最终定性与 300ms 灾备接管",
    diagnosticPrinciple:
      "经过前 5 步排查后：若确认订阅域名 NXDOMAIN/521 宕机 + 全节点入口端口关闭/EOF + 官方社群禁言或失联超过 72 小时，即可确诊为实质性跑路或停摆。此时无需焦虑等待，直接启用预置的第二套异构订阅即可恢复全部跨境办公与 AI 生产工作流。",
    windowsCommand:
      "# 在 Clash 客户端切换 Profile 至备份机场，或启用 Mihomo fallback 自动故障转移组：\n# Primary (主力月付) --[Health Check 失败]--> Backup (不限时流量包) --[兜底]--> Cloudflare WARP",
    unixCommand:
      "# 通过 Mihomo RESTful API 立即触发代理组健康检查切换\ncurl -X PUT \"http://127.0.0.1:9090/Selector\" -H \"Content-Type: application/json\" -d '{\"name\":\"Backup-Unlimited-Pool\"}'",
    expectedNormalOutput:
      "业务在 1 分钟内无缝切换至备用专线通道，零业务中断损失。",
    trueRunawayIndicator:
      "确诊原机场失联后，立即在信用卡/支付宝解除一切周期代扣授权，并按下方 4 大异构灾备组合重构双冗余体系。",
    localFaultFix:
      "查阅本页下方《42家收录机场实时核验状态与风险雷达》及《四大异构主备防失联组合》。",
    relatedInternalLink: {
      label: "跳转至下方：四大异构主备防失联架构与 YAML 模板",
      href: "#disaster-recovery-combos",
    },
  },
];

/**
 * 4 Concrete "Primary Monthly/Light-Annual + Heterogeneous Unlimited-Time Backup" Combos
 * using real verified brands from src/data/brands.ts.
 */
export const DISASTER_RECOVERY_COMBOS: DisasterRecoveryCombo[] = [
  {
    id: "combo-01",
    code: "COMBO 01 · 全能主力 + 免配置/按量双保险",
    title: "主力【光速云】双专线 + 灾备【飞猫云 / 唯兔云】¥19.9级与不限时包",
    targetAudience: "远程办公、跨境电商、全终端主力用户（追求极致晚高峰稳定性与零配置兜底）",
    annualizedCostEstimate: "主力 ¥25/月（或轻量版 ¥99/年）+ 灾备一次性按量投入（折合月均冗余成本 < ¥3）",
    failoverRto: "Mihomo 自动切换 < 300ms / 独立客户端秒级切换",
    primarySlot: {
      brandName: "光速云 (Guangsu Cloud)",
      brandSlug: "guangsuyun",
      brandHref: "/brands/guangsuyun/",
      planLabel: "极速版 ¥25/月（168GB）或 轻量版 ¥99/年（69GB/月）| 另有 ¥147/247GB 永久包",
      lineAndProtocol: "IEPL 专线 + 企业级内网双专线 · VLESS 协议（支持通用订阅 + 自研客户端）",
      roleDescription:
        "2020 年老牌榜首主力，承担日常 95% 的 4K 流媒体、代码拉取与跨境业务高并发流量，香港实测 22ms / 529Mbps。",
    },
    backupSlot: {
      brandName: "飞猫云 (Feimao) / 唯兔云 (V2Yun)",
      brandSlug: "feimaoyun",
      brandHref: "/brands/feimaoyun/",
      planLabel: "飞猫云学生版 ¥84/年（¥7/月）或 唯兔云 ¥19.9/月普通版 & ¥100/100GB 永久不限时包",
      lineAndProtocol: "飞猫云独立专属客户端（免配订阅防污染） / 唯兔云 IPLC + Trojan 通用订阅",
      roleDescription:
        "提供双重异构冗余：若偏好桌面/手机端完全独立于 Clash 的一键救急客户端可选飞猫云；若需写进 Mihomo `proxy-providers` 实现自动故障转移，则搭配唯兔云 ¥100/100GB（或微风网络 ¥200/270GB）永久不限时包。",
    },
    architectureHighlight:
      "「VLESS 双专线主力 + Trojan/独立客户端冷备」：两家分属完全独立的运营团队与上游机房，彻底杜绝单点拔线与订阅域名同时被墙的死锁风险。",
    isolationAnalysis:
      "协议异构（VLESS vs Trojan/自研隧道）、线路异构（IEPL+企业内网 vs 独立优化/IPLC）、客户端异构（Clash 通用订阅 vs 专属客户端直连）。",
    setupGuideLink: {
      label: "查看主备双订阅高可用冗余完整实验报告",
      href: "/services/experiments/",
    },
  },
  {
    id: "combo-02",
    code: "COMBO 02 · 同源站群排雷与异构升级方案",
    title: "解析【FlyingBird 飞鸟 + 龙猫云 ¥15档】同源风险 & 异构双 IPLC/IEPL 升级组合",
    targetAudience: "习惯搜索老牌 IPLC 机场（如飞鸟、龙猫云）并希望构建真正物理隔离双备份的进阶玩家",
    annualizedCostEstimate: "主力月付 ¥18–¥25 + 异构永久流量包 ¥100/100GB（一次购买可用 1–2 年）",
    failoverRto: "< 300ms（Mihomo URL-Test / Fallback 自动探活）",
    primarySlot: {
      brandName: "FlyingBird 飞鸟机场（历史对照）→ 升级主力：光速云 / 光年梯",
      brandSlug: "flyingbird",
      brandHref: "/brands/flyingbird/",
      planLabel: "飞鸟青铜历史记录 ¥15/月（100GB）→ 现役实测推荐：光速云 ¥25/月 或 光年梯 ¥18/月（110GB）",
      lineAndProtocol: "历史 SS + IPLC 全专线 → 现役升级为 IEPL 专线 + VLESS 协议（含 2026-08-11 实测图）",
      roleDescription:
        "老玩家常问能否用「主力 FlyingBird + 备用龙猫云（¥15/月 VIP1）」。经本站档案库穿透核实：FlyingBird 与龙猫云同属「一云梯/飞鸟同源站群」，若同时购买这两家，一旦母站群上游维护或拔线将面临共模同时断网！因此主力建议升级为独立运营且有当期实测图的「光速云」或「光年梯」。",
    },
    backupSlot: {
      brandName: "龙猫云（同源对照）→ 异构灾备：一翻云 / 唯兔云永久不限时包",
      brandSlug: "longmaoyun",
      brandHref: "/brands/longmaoyun/",
      planLabel: "龙猫云历史记录 ¥15/月（周期制）→ 异构灾备：一翻云 ¥100/100GB 永久包（Hysteria2 三协议）",
      lineAndProtocol: "IEPL 物理专线 + 原生住宅 IP · Hysteria 2 / VLESS-Reality / Shadowsocks 三协议并存",
      roleDescription:
        "用真正「永不过期」的一翻云 ¥100/100GB（或二猫云 ¥99/100GB）按量包替代周期制备用卡，平时 0 流量损耗，主力维护时通过 Hysteria 2 协议瞬间顶上。",
    },
    architectureHighlight:
      "经典避坑案例：戳破「同一站群下不同马甲互为备份」的伪冗余假象，实现真正的「跨站群 + 跨协议（VLESS + Hysteria 2 + SS）」物理级隔离。",
    isolationAnalysis:
      "规避一云梯/飞鸟/龙猫云同源站群共模风险；备份端采用一翻云三协议架构，即使遇到极端 TCP 阻断也能靠基于 QUIC 的 Hysteria 2 穿透。",
    setupGuideLink: {
      label: "对比光速云、一翻云与历史同源品牌参数差异",
      href: "/brands/",
    },
  },
  {
    id: "combo-03",
    code: "COMBO 03 · 百元级轻量年付 + 专线应急热备",
    title: "百元级年付【青云梯 ¥96/年对照 & 星岛梦/二猫云】+ 灾备【闪跃 / 二猫云不限时包】",
    targetAudience: "预算严格控制在百元左右的学生党、轻度查资料与流媒体用户",
    annualizedCostEstimate: "年付基座 ¥75–¥96/年（折 ¥6.25–¥8/月）+  ¥99 永久不限时包（多年分摊）",
    failoverRto: "< 500ms 自动切换或客户端一键切换",
    primarySlot: {
      brandName: "青云梯（¥96/年历史标杆）& 现役实测：星岛梦 (¥75/年) / 光速云 (¥99/年)",
      brandSlug: "qingyunti",
      brandHref: "/brands/qingyunti/",
      planLabel: "青云梯历史记录 ¥96/年（60GB/月）| 现役实测：星岛梦 ¥75/年（50GB/月）或 光速云 ¥99/年（69GB/月）",
      lineAndProtocol: "企业级 IPLC / IEPL 专线 · Trojan / Hysteria 2 / VLESS",
      roleDescription:
        "针对搜索「青云梯 ¥96/年小包」的用户：因青云梯当前处于无独立新测入口的历史归档状态，推荐优先启用同属百元级且拥有 2026-08-11 实测图的「光速云 ¥99/年」或「星岛梦 ¥75/年」作为日常低成本主力。",
    },
    backupSlot: {
      brandName: "闪跃 (FlashLeap) / 二猫云 (2Mao Cloud)",
      brandSlug: "shanyue",
      brandHref: "/brands/shanyue/",
      planLabel: "闪跃月付闪动档（8折码 shanyue 后 ¥19.2/月 150GB）或 二猫云 ¥99/100GB 永久不限时包",
      lineAndProtocol: "闪跃纯 IPLC 骨干网专属客户端 / 二猫云 IEPL + VLESS 通用订阅（含 2026-08-11 实测图）",
      roleDescription:
        "当百元级轻量年付套餐在月底流量告急或遇到机房割接时，由二猫云 ¥99/100GB 永久流量包或闪跃纯 IPLC 专线无缝补位，彻底告别月底限速焦虑。",
    },
    architectureHighlight:
      "「低门槛百元级专线年付 + 按量溢出缓冲池」：既享受了年付折算 ¥6–¥8/月的极低日常单价，又用按量包消除了小流量年付月底不够用的痛点。",
    isolationAnalysis:
      "将固定月度配额（60–69GB/月）与弹性永久配额（100GB 永不过期）解耦，资金敞口严格锁定在百元安全线以内。",
    setupGuideLink: {
      label: "百元级（¥75–¥118/年）平价年付机场避坑与精算指南",
      href: "/services/pricing/",
    },
  },
  {
    id: "combo-04",
    code: "COMBO 04 · AI 生产力/跨境专精 + 零信任免费永不失联基座",
    title: "AI/TikTok 专精【无忧链接 / 速界】+ 终极保底【Cloudflare WARP 免费零信任通道】",
    targetAudience: "高频使用 ChatGPT / Claude / Cursor 的开发者、TikTok 跨境运营及零成本灾备爱好者",
    annualizedCostEstimate: "专精套餐 ¥79/年（或 ¥108/100GB 永久包）+ 灾备层 ¥0（Cloudflare 官方免费零信任）",
    failoverRto: "< 300ms（Mihomo dialer-proxy 链式代理或 fallback 兜底）",
    primarySlot: {
      brandName: "无忧链接 (WorryFree) / 速界 (SpeedWorld)",
      brandSlug: "wuyoulianjie",
      brandHref: "/brands/wuyoulianjie/",
      planLabel: "无忧链接 MINI ¥79/年（¥6.58/月）& ¥108/100GB 永久包 | 速界 ¥25/月（150GB AI专项）",
      lineAndProtocol: "跨境直连与 AI/流媒体优化专线 · 1 倍率不限速（速界支持 IEPL + VLESS 通用订阅）",
      roleDescription:
        "针对 ChatGPT、Claude、Gemini 与 TikTok 跨区场景深度优化，提供高纯净度原生落地 IP 与低门槛永久流量包。",
    },
    backupSlot: {
      brandName: "Cloudflare WARP+ / Zero Trust 免费零信任通道",
      brandSlug: "guangsuyun",
      brandHref: "/free/#warp-zero-trust",
      planLabel: "¥0 永久免费（Cloudflare 官方全球 Anycast 骨干网，不限流量）",
      lineAndProtocol: "WireGuard / MASQUE 协议 · 优选 Endpoint IP + Mihomo 原生 wireguard 出站",
      roleDescription:
        "作为永不跑路的上市公司级免费基础设施：一可用于当主力机场订阅域名被墙时救急拉取新订阅；二可通过 Mihomo `dialer-proxy` 将机场专线作为前置、Cloudflare WARP 作为落地出口，免费获取极其干净的 Cloudflare 原生双栈 IP 彻底解决 ChatGPT 403 拦截！",
    },
    architectureHighlight:
      "「商业专线高吞吐入口 + Cloudflare 零信任免费出口」：不仅实现了 ¥0 边际成本的终极防失联兜底，还顺带解锁了链式代理（Chain Proxy）原生 IP 洗白能力。",
    isolationAnalysis:
      "商业机场与全球最大 CDN 巨头 Cloudflare 形成跨维度冗余；只要互联网底层 UDP/MASQUE 尚未完全断绝，即可保证永不失联。",
    setupGuideLink: {
      label: "一键获取 Cloudflare WARP 零信任 WireGuard 配置与链式代理教程",
      href: "/free/#warp-zero-trust",
    },
  },
];

/**
 * Quantitative Financial Expected Value (EV) & Risk Exposure Comparison Table.
 */
export const FINANCIAL_EXPECTED_VALUE_TABLE: FinancialExpectedValueRow[] = [
  {
    strategyName: "方案 A：盲目冲动型（高危小作坊三年付大促）",
    billingPattern: "一次性锁死 36 个月（如某新站 ¥180/三年付）",
    upfrontOutlay: "¥180（单点全仓）",
    month3ExitScamLoss: "净亏损 ¥165（本金损失率 91.7%，且瞬间彻底断网失联）",
    annualExpectedCost: "¥240–¥360/年（因频繁踩雷重买导致实际支出翻倍）",
    lineDegradationResilience: "0（一旦第 2 个月专线偷换为公网直连，既无法退款又舍不得扔，被迫忍受卡顿）",
    continuitySla: "< 85%（遭遇单点拔线或域名被墙即完全断网）",
    verdict: "绝对禁止（典型负期望值赌博）",
    isRecommended: false,
  },
  {
    strategyName: "方案 B：传统单点型（单一机场无备份裸奔年付）",
    billingPattern: "仅购买 1 家机场年付（无备用订阅、无 WARP）",
    upfrontOutlay: "¥150–¥260",
    month3ExitScamLoss: "净亏损 ¥110–¥195（且需在断网状态下四处寻找新梯子）",
    annualExpectedCost: "¥150–¥260/年",
    lineDegradationResilience: "低（遇到海底光缆故障或上游机房割接时，晚高峰无路可退）",
    continuitySla: "95.0%–98.0%（存在订阅域名被墙导致的假性失联死锁风险）",
    verdict: "存在单点故障隐患（建议补充一个不限时小包）",
    isRecommended: false,
  },
  {
    strategyName: "方案 C：黄金稳健型（主力月付/实测轻量年付 + 异构永久不限时包）",
    billingPattern: "主力光速云(¥25/月或¥99/年) + 灾备唯兔云/一翻云(¥100/100GB永久包)",
    upfrontOutlay: "主力 ¥25 + 永久包 ¥100（永久包可用 2–3 年，年均分摊仅 ¥33）",
    month3ExitScamLoss: "最大敞口仅 ¥0–¥25（随时无损停订切换，沉没成本趋近于零）",
    annualExpectedCost: "¥132–¥330/年（资金完全自主可控，每一分钱都花在实测高峰带宽上）",
    lineDegradationResilience: "极高（任何一家晚高峰抖动，Mihomo 在 300ms 内自动切流至异构专线池）",
    continuitySla: "99.99%（跨团队 + 跨协议 + 跨上游物理隔离，全年零断网）",
    verdict: "全站首选黄金标准（风险敞口最小、SLA 最高）",
    isRecommended: true,
  },
  {
    strategyName: "方案 D：极客零成本冗余型（百元实测专线 + Cloudflare WARP 零信任）",
    billingPattern: "主力光速云/星岛梦/无忧链接(¥75–¥99/年) + 免费 WARP WireGuard 兜底",
    upfrontOutlay: "¥75–¥99 + 灾备层 ¥0",
    month3ExitScamLoss: "风险敞口极低（均选自 2026-08-11 实测/头部核验库，且有免费层保底）",
    annualExpectedCost: "¥75–¥99/年（折合每月仅 ¥6.25–¥8.25）",
    lineDegradationResilience: "高（平时跑 IEPL 专线，AI 风控时挂载 WARP 链式落地洗白 IP）",
    continuitySla: "99.9%（永不失联，随时可通过 WARP 免费更新任何被墙订阅）",
    verdict: "学生党与 AI 开发者极致性价比之选",
    isRecommended: true,
  },
];

/**
 * Production-ready Mihomo (Clash Meta) `proxy-providers` + `fallback` YAML Configuration.
 */
export const MIHOMO_FAILOVER_YAML_TEMPLATE = `# ============================================================================
# Mihomo (Clash Meta) 主备异构双机场 300ms 自动故障转移 (Auto-Failover) 标准模板
# 适用客户端：Clash Verge Rev / FlClash / Mihomo Party / OpenWrt OpenClash
# 核心架构：主力月付专线 (Primary) --> 永久不限时灾备包 (Backup) --> 免费 WARP 兜底
# ============================================================================

mixed-port: 7897
allow-lan: true
mode: rule
log-level: info
unified-delay: true          # 开启统一延迟计算（去除握手开销差异，真实反映传输 RTT）
tcp-concurrent: true         # 开启 TCP 并发连接，优先选用最快响应的 IP

# 1. 防污染加密 DNS 架构（彻底根除“订阅域名被当地运营商 DNS 抢答污染”导致的假性失联）
dns:
  enable: true
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://223.5.5.5/dns-query
    - https://doh.pub/dns-query
  # 关键防失联策略：确保机场订阅域名本身通过纯净 DoH 解析
  nameserver-policy:
    "+.gsyvipaff.com,+.v2yunvipaff.com,+.1flyunaff.cc":
      - https://223.5.5.5/dns-query
      - https://1.1.1.1/dns-query#⚡ 01-高可用自动容灾总入口

# 2. 异构多订阅源集合 (Proxy-Providers)
# 优势：主备机场各自独立后台定时更新，互不覆盖，单点故障零传染
proxy-providers:
  # 【主力槽位】例如：光速云 (IEPL + 企业内网双专线 · VLESS 月付或轻量年付)
  Provider-Primary-Monthly:
    type: http
    url: "https://your-primary-airport-sub.example.com/api/v1/client/subscribe?token=REPLACE_WITH_PRIMARY_TOKEN"
    interval: 43200          # 每 12 小时自动静默更新一次
    path: ./providers/primary_guangsuyun.yaml
    health-check:
      enable: true
      url: "https://cp.cloudflare.com/generate_204"
      interval: 120          # 每 120 秒后台轻量探活一次
      timeout: 3000          # 超过 3000ms 无响应即判定该节点失联，触发秒级剔除
      lazy: true

  # 【灾备槽位】例如：唯兔云 / 一翻云 / 微风网络 (永久不过期按量不限时流量包)
  # 平时处于 Standby 热备状态，不消耗哪怕 1MB 流量；仅当主力全军覆没时自动顶上！
  Provider-Backup-Unlimited:
    type: http
    url: "https://your-backup-unlimited-sub.example.com/api/v1/client/subscribe?token=REPLACE_WITH_BACKUP_TOKEN"
    interval: 86400          # 每 24 小时更新一次
    path: ./providers/backup_unlimited_pack.yaml
    health-check:
      enable: true
      url: "https://cp.cloudflare.com/generate_204"
      interval: 180
      timeout: 3500
      lazy: true

# 3. 终极保底：本地内联 Cloudflare WARP 免费零信任节点（永不跑路的第三道防线）
proxies:
  - name: "🛡️ 终极兜底-Cloudflare-WARP-ZeroTrust"
    type: wireguard
    server: 162.159.192.1
    port: 2408
    ip: "172.16.0.2/32"
    public-key: "bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo="
    private-key: "REPLACE_WITH_YOUR_WARP_PRIVATE_KEY"
    udp: true
    mtu: 1280
    remote-dns-resolve: true
    dns: [1.1.1.1, 1.0.0.1]

# 4. 策略组架构：Fallback 严格优先级故障转移 + URL-Test 组内最优寻路
proxy-groups:
  # 总入口：按顺序探测 -> 只要【主力优选组】有任意节点存活，100% 走主力；
  # 一旦主力机场上游拔线或维护，300ms 内无感切入【灾备不限时包】；若两者皆断则切入【免费 WARP】！
  - name: "⚡ 01-高可用自动容灾总入口"
    type: fallback
    proxies:
      - "🚀 主力专线-自动优选 (Primary)"
      - "🛟 灾备不限时包-热备池 (Backup)"
      - "🛡️ 终极兜底-Cloudflare-WARP-ZeroTrust"
    url: "https://cp.cloudflare.com/generate_204"
    interval: 120
    timeout: 3000
    lazy: false

  # 主力机场组内自动选出延迟最低的香港/日本/新加坡 IEPL 节点
  - name: "🚀 主力专线-自动优选 (Primary)"
    type: url-test
    use:
      - Provider-Primary-Monthly
    filter: "^(?!.*(剩余|到期|官网|套餐|倍率:[2-9])).*"
    url: "https://cp.cloudflare.com/generate_204"
    interval: 150
    tolerance: 35            # 延迟波动在 35ms 以内不频繁切换，保持 TCP 长连接稳定

  # 灾备按量包组内自动优选（排除高倍率节点，保护按量包额度）
  - name: "🛟 灾备不限时包-热备池 (Backup)"
    type: url-test
    use:
      - Provider-Backup-Unlimited
    filter: "^(?!.*(剩余|到期|官网|套餐|倍率:[2-9])).*"
    url: "https://cp.cloudflare.com/generate_204"
    interval: 240
    tolerance: 50

  # 链式代理进阶玩法：用主力机场 IEPL 专线做前置，落地走免费 WARP 解锁纯净原生 AI IP
  - name: "🤖 AI-ChatGPT/Claude-原生IP防封专列"
    type: select
    proxies:
      - "🚀 主力专线-自动优选 (Primary)"
      - "🛟 灾备不限时包-热备池 (Backup)"
      - "🛡️ 终极兜底-Cloudflare-WARP-ZeroTrust"`;

/**
 * 10 Deep Long-Tail FAQs on Airport Exit-Scam Assessment, Refund Disputes, Token Security & Disaster Recovery.
 */
export const WARNINGS_FAQS: WarningFaqItem[] = [
  {
    q: "怎么判断一家机场是真的跑路了，还是仅仅因为订阅域名被墙（GFW 封锁）？",
    a: "这是最核心的排障分水岭：真跑路通常伴随「源站面板返回 HTTP 521/522 超过 72 小时 + 已缓存的所有旧节点入口端口全部关闭或返回 EOF + 官方 Telegram 群解散或长期全员禁言 + 跑路前曾突击推出超低价三年付促销」。而单纯的域名被墙（假性失联），已导入客户端的旧节点往往还能继续翻墙，仅在点击“更新订阅”或直连打开官网时因 DNS 污染/SNI 阻断报错；此时只需开启备用不限时机场或 Cloudflare WARP 零信任通道，在全局代理下即可正常打开官网并换取最新防失联订阅链接。",
    category: "断网定性与排障",
    relatedLinks: [
      { label: "5分钟真跑路 vs 本地故障自检决策树", href: "#outage-decision-tree" },
      { label: "Cloudflare WARP 免费救急通道", href: "/free/#warp-zero-trust" },
    ],
  },
  {
    q: "为什么防跑路的第一铁律是「拒绝小作坊三年付，坚持主力月付 + 永久不限时备份包」？",
    a: "因为正规 IEPL/IPLC 专线的国内 BGP 入口与深港/沪日内网带宽都是按月向电信运营商刚性结算的。任何远低于带宽成本的三年付促销，本质上都是透支未来现金流的庞氏补贴。采用「主力月付（如光速云 ¥25/月或已实测 ¥99/年轻量版）+ 异构永久不限时流量包（如唯兔云 ¥100/100GB、一翻云 ¥100/100GB 或微风网络 ¥200/270GB）」，能将你的单点最大沉没成本严格控制在 ¥25 以内；且不限时包平时处于 Standby 零损耗状态，买一次可管 1–3 年。",
    category: "财务风控策略",
    relatedLinks: [
      { label: "光速云评测档案（主力双专线首选）", href: "/brands/guangsuyun/" },
      { label: "永久不限时流量包横评与精算", href: "/guides/#unlimited-packs" },
    ],
  },
  {
    q: "配置主备双机场时，为什么不能同时买「飞鸟机场 (FlyingBird)」和「龙猫云」互为备份？",
    a: "因为根据本站 42 家品牌档案库的底层穿透核验，FlyingBird（飞鸟机场）与龙猫云同属「一云梯/飞鸟同源站群」，两者的套餐梯度（¥15/100GB 至 ¥120–150/1000GB）与历史底层架构高度同源。如果主备两家机场属于同一个母站群或共享同一个上游转发母鸡，一旦上游机房割接、欠费或遭到针对性封锁，主备两个订阅会在同一秒钟同时失效（即工程上的“共模故障 Common-Mode Failure”）。真正安全的双冗余必须跨运营主体、跨传输协议（如主力光速云 VLESS + 备份唯兔云 Trojan 或一翻云 Hysteria 2）。",
    category: "同源站群避坑",
    relatedLinks: [
      { label: "FlyingBird 飞鸟历史档案与同源说明", href: "/brands/flyingbird/" },
      { label: "龙猫云历史档案与替代方案", href: "/brands/longmaoyun/" },
    ],
  },
  {
    q: "机场突然取消 Clash 通用订阅链接、强制要求下载官方专属客户端，是准备跑路吗？",
    a: "不能一概而论，需结合品牌背景与客户端安全性综合判断。在 2026 年的行业演进中，不少正规品牌（如排名第 2 的飞猫云、无忧链接、Firefly、闪跃）为了降低纯新手配置 Clash 的门槛，同时防止订阅链接被爬虫盗取或闲鱼拼车滥用，主动采用了「官方专属客户端登录即用」模式，这属于正常的商业产品形态。但如果你需要在 OpenWrt 软路由、Apple TV 或 Clash Verge Rev 中配置多订阅自动故障转移，则必须在选型前认准明确标注「支持第三方通用订阅导入」的品牌（如光速云、微风网络、唯兔云、一翻云）。",
    category: "客户端兼容性",
    relatedLinks: [
      { label: "飞猫云评测（新手免配置专属客户端代表）", href: "/brands/feimaoyun/" },
      { label: "6大系统开源代理客户端下载大全", href: "/clients/" },
    ],
  },
  {
    q: "遇到机场跑路或拒绝履约，通过支付宝、微信或 USDT 支付的钱还能追回吗？",
    a: "实话实说，追回概率极低。绝大多数中小型机场使用的是第四方聚合易支付（Epay）通道，资金在支付瞬间即通过多层个人码或虚拟商品商户T+0/T+1分账结算，且距跑路往往已超过支付平台的争议申诉期；而通过 USDT-TRC20 等加密货币支付在区块链上具有不可逆性。因此，事后维权远不如事前控制风险敞口：第一，绝不单笔充值超过 ¥150 的长周期未验证套餐；第二，新测任何机场先从 ¥15–¥25 月付入手。",
    category: "资金安全与止损",
    relatedLinks: [
      { label: "1元~12元正规专线低门槛验货包对照表", href: "/free/#low-cost-trials" },
      { label: "百元级平价年付机场避坑指南", href: "/services/pricing/" },
    ],
  },
  {
    q: "使用第三方在线「订阅转换 (Subconverter)」网站会把我的机场订阅链接泄露给别人吗？",
    a: "存在极高的泄露风险！互联网上许多来路不明的免费公共订阅转换前端，其后端服务器会静默记录（Log）所有用户提交的原始订阅 URL。不法分子会将收集到的数千条高价值 IEPL 专线订阅打包倒卖到电报群或做成免费爬虫池，导致你的套餐流量在几天内被彻底刷光，甚至因并发 IP 过多被机场封号。安全做法是：直接使用内置 Mihomo 内核的现代客户端（原生支持 VLESS/Hysteria2/Trojan，根本无需在线转换），或在本地通过 Docker 自建 Sub-Store。",
    category: "订阅防盗与隐私",
    relatedLinks: [
      { label: "Sub-Store 本地私有化订阅管理指南", href: "/free/#sub-store" },
      { label: "Clash 订阅安全导入与防泄漏配置", href: "/services/customer-analysis/",
      },
    ],
  },
  {
    q: "发现自己的机场流量消耗异常暴增，怀疑订阅链接已泄露，第一时间该做什么？",
    a: "立即登录该机场的官网用户面板，在「仪表盘」或「个人中心 / 安全设置」中找到 **「重置订阅链接 (Reset Subscription Token / UUID)」** 按钮并点击确认。重置后，旧的订阅 URL 与节点连接密码（UUID/Trojan Password）会瞬间在全球节点后端作废，任何盗用你旧链接的设备都会立即返回 HTTP 401/403 并断开连接；随后你只需复制新生成的订阅 URL 更新到自己的 Clash 客户端即可。",
    category: "订阅防盗与隐私",
    relatedLinks: [
      { label: "跨境专线机场与协议安全 FAQ 60问", href: "/faq/" },
    ],
  },
  {
    q: "如何在 Clash Verge Rev 中设置当主力机场断网时自动切换到备用机场？",
    a: "无需手动来回切换配置文件！只需利用 Mihomo 内核原生的 `proxy-providers`（代理集）与 `fallback`（故障转移策略组）功能。将主力月付机场和永久不限时备用机场分别填入两个 `proxy-provider`，并开启每 120 秒一次的 `https://cp.cloudflare.com/generate_204` 健康检查。当主力机场节点正常时，流量 100% 走主力；一旦主力机场因维护、被墙或跑路导致健康检查超时，Mihomo 会在 300 毫秒内自动将所有流量无缝切入备用不限时包。本文第五章提供了可直接复制使用的完整 YAML 模板。",
    category: "高可用容灾配置",
    relatedLinks: [
      { label: "跳转复制：Mihomo 自动故障转移 YAML 模板", href: "#mihomo-failover-yaml" },
      { label: "主备双订阅高可用冗余深度实验", href: "/services/experiments/" },
    ],
  },
  {
    q: "本站《42家收录机场实时核验状态与风险雷达》中的五级数据口径分别代表什么含义？",
    a: "为坚守客观、可核验的工程原则，我们拒绝任何毫无依据的吹捧或抹黑，将 42 家品牌严格划分为：「实测数据 (Measured, 17家)」代表包含 2026-08-11 批次珠海联通 5Gbps 后端 32 线程原始测速截图；「品牌披露 (Vendor, 11家)」代表具备完整当期套餐、协议与核验入口但未包含在 08-11 截图包中；「待核实/历史记录 (Unverified, 14家)」代表第 29–42 名的早期汇总表归档品牌，因缺乏当期独立入口或实测陈旧，雷达会明确提示优先选择前排已实测品牌。",
    category: "数据合规与方法论",
    relatedLinks: [
      { label: "查看下方 42 家机场实时风险与核验雷达", href: "#brand-risk-radar" },
      { label: "浏览 42 家机场完整评测档案库", href: "/brands/" },
    ],
  },
  {
    q: "如果预算极低，不想花钱买第二家商业机场做备份，有什么完全免费的防失联方案？",
    a: "强烈推荐配置 **Cloudflare WARP（或 Cloudflare Zero Trust 零信任团队版）** 作为永久免费的底层救急基座。通过使用 wgcf 或 WireGuard 提取工具生成标准 WireGuard 配置文件并导入 Clash / Mihomo，并优选国内可达的 Cloudflare Anycast Endpoint IP（如 `162.159.192.x:2408`），即可获得一条不限流量、背靠全球最大 CDN 上市公司的免费应急通道。平时无需开启，一旦主力机场订阅域名被墙，打开 WARP 即可瞬间恢复外网连接并拉取最新订阅。",
    category: "零成本防失联",
    relatedLinks: [
      { label: "Cloudflare WARP 零信任免费提取与优选 IP 教程", href: "/free/#warp-zero-trust" },
    ],
  },
];
