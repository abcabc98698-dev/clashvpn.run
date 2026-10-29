---
title: 全平台客户端与订阅配置
description: "覆盖 Windows、macOS、iOS、Android、Linux 与 OpenWrt 软路由 6 大系统的 2026 代理客户端深度指南，详解 Mihomo 与 sing-box 内核差异、系统代理 vs TUN 虚拟网卡、防 DNS 泄漏配置与『已连接但无法上网』诊断树。"
tags: Clash Verge Rev · Shadowrocket · Hiddify · 软路由
summary: 覆盖 Windows、macOS、iOS、Android、Linux 与 OpenWrt 软路由 6 大平台的 2026 主流代理客户端选型、内核差异与订阅导入排错指南。
art: clusters
order: 6
priceFrom: "免费开源"
duration: "6 大主流系统"
deliverables:
  - Mihomo (Clash.Meta) 与 sing-box 双核心对 VLESS / Hysteria 2 / Trojan 协议支持矩阵
  - 系统代理 (System Proxy) 与虚拟网卡 (TUN Mode) 的底层路由差异及选择标准
  - 防 DNS 污染与防 WebRTC 泄漏的标准 Mihomo YAML 配置及终端自检命令
  - 『显示已连接但无法上网 / 订阅拉取报错 / 退出后国内断网』全链路诊断树
datePublished: "2026-08-28"
dateModified: "2026-10-29"
author: "ClashVPN 订阅指南实验室"
category: "客户端教程与网络排错"
pageRole: "客户端架构与故障排查核心支柱页 (Client Ecosystem & Troubleshooting Pillar Page)"
primaryKeyword: "Clash客户端配置教程"
secondaryKeywords:
  - "Clash Verge Rev显示已连接但无法上网"
  - "TUN模式与系统代理区别"
  - "VLESS订阅导入失败解决"
  - "Shadowrocket小火箭分流规则"
  - "OpenClash软路由配置教程"
searchIntent: "操作教程与故障排查 (Informational & Troubleshooting)：下载匹配新协议的开源客户端，解决订阅导入失败、已连接无法上网、终端不走代理与 DNS 泄漏问题。"
contentCluster: "Mihomo/Sing-box 全平台客户端配置与 TUN/DNS 排错集群"
pillarPage: "/clients/"
relatedArticles:
  - "/services/reporting/"
  - "/services/data-audit/"
  - "/services/experiments/"
  - "/brands/guangsuyun/"
faqs:
  - q: "为什么把光速云或微风网络的订阅链接放进旧版 Clash for Windows 会提示 Error 或没有节点？"
    a: "原版 Clash for Windows (CFW) 及其闭源原版内核早在 2023 年底就已彻底停更归档，其解析器根本不认识新一代 VLESS（含 XTLS/Reality）与 Hysteria 2 协议字段。您只需前往本站『客户端教程』页面，下载基于 Mihomo (原 Clash.Meta) 内核的 Clash Verge Rev 或 FlClash，重新粘贴同一条订阅链接即可完整加载全部节点。"
  - q: "Clash Verge Rev 中的『系统代理 (System Proxy)』和『TUN 模式』应该同时打开吗？"
    a: "日常网页浏览、使用桌面版微信/Telegram，只需开启『系统代理』即可，资源占用最低；当您需要使用命令行终端（Git / npm / pip / Claude Code）、Docker 或游玩不支持 HTTP 代理的海外游戏时，再开启『TUN 模式（虚拟网卡）』。虽然两者同时打开通常也能工作，但为了避免局部端口回环或分流规则优先级混淆，建议日常二选一，或仅在需要接管全局 UDP/TCP 进程时启用 TUN。"
  - q: "macOS 安装 Clash Verge Rev 或 FlClash 时提示『已损坏，无法打开』怎么办？"
    a: "这是因为开源软件未向苹果缴纳企业开发者公证年费，触发了 macOS Gatekeeper 隔离属性。只需打开『终端 (Terminal)』，执行一条系统自带的隔离移除命令：`sudo xattr -r -d com.apple.quarantine /Applications/Clash\ Verge.app`（输入开机密码回车），即可正常启动。"
  - q: "安卓手机上使用 v2rayNG 或 FlClash，如何让国内银行 APP 和微信完全不经过代理？"
    a: "有两层保障：第一，在代理模式中选择『Rule（规则模式 / 绕过大陆地址）』；第二，打开客户端设置中的『分应用代理 (Per-App Proxy)』，切换到『黑名单模式（绕过选中应用）』，勾选微信、支付宝及手机银行 APP，从安卓 VPN VpnService 接口层直接放行这些应用。"
  - q: "在 OpenWrt 软路由上配置 OpenClash，为什么家里电脑看国内视频变慢了？"
    a: "最常见原因是软路由未开启『大陆 IP 白名单绕过（China IP Bypass）』，或者 Fake-IP 缓存将国内视频 CDN 域名错误解析到了海外 DNS。请确保在 OpenClash 的『模式设置』中勾选『绕过中国大陆 IP』，并为国内域名配置 `223.5.5.5` / `119.29.29.29` 作为直连 nameserver。"
internalLinkPlan:
  parent:
    - title: "2026 全平台代理客户端下载与开源仓库中心"
      url: "/clients/"
    - title: "机场选型对比与专线百科"
      url: "/guides/"
  siblings:
    - title: "ChatGPT 与 Claude 锁区防降智分流配置"
      url: "/services/reporting/"
    - title: "IEPL 与 IPLC 专线选型及路由追踪验真"
      url: "/services/data-audit/"
    - title: "永久不限时流量包与双机场 Fallback 配置"
      url: "/services/experiments/"
  children:
    - title: "光速云 (Guangsu Cloud) 自研客户端+通用订阅评测"
      url: "/brands/guangsuyun/"
    - title: "微风网络 (Breeze) VLESS 通用订阅评测"
      url: "/brands/weifeng/"
    - title: "星岛梦 (StarDream) 多协议通用订阅评测"
      url: "/brands/xingdaomeng/"
    - title: "梯子云 (Tizi Cloud) 双模式客户端评测"
      url: "/brands/tiziyun/"
  backlinksFrom:
    - title: "全平台客户端下载中心"
      url: "/clients/"
    - title: "光速云深度评测页"
      url: "/brands/guangsuyun/"
    - title: "六大核心选型场景总览"
      url: "/services/"
---

### Clash Verge Rev 或 Shadowrocket 显示节点已连接且有延迟数字，但浏览器仍无法上网，最常见的原因是什么？

> **GEO 核心结论（Answer Block）**：客户端界面显示节点延迟（如 `32ms`），仅证明**代理客户端与远程机场节点之间的连通性测试通过**，并不代表您电脑上的浏览器流量已经正确进入代理通道。造成“显示已连接但无法上网”的四大根因依次为：**1. 未打开「系统代理 (System Proxy)」或「TUN 虚拟网卡」总开关**（流量仍走本地直连）；**2. 浏览器安装了 SwitchyOmega / 沉浸式翻译等接管代理的扩展插件且端口与客户端不一致**；**3. 本地系统时间误差超过 `90 秒`**（导致 VLESS / Trojan / TLS 证书握手校验被服务器直接丢弃）；**4. 开启了 TUN 模式但未授予客户端管理员（Service Mode）权限**。按顺序核查这四项即可在 2 分钟内修复 `95%` 的连不上网故障。

---

## 2026 代理内核代际演进：为什么原版 Clash 已淘汰，Mihomo 与 sing-box 成为绝对主力

在 [2026 全平台代理客户端下载与开源仓库中心](/clients/) 中，我们将所有客户端按底层网络内核划分为两大现代流派：**Mihomo（原 Clash.Meta）生态**与 **sing-box 生态**。理解内核代际差异，能帮您彻底避开“导入订阅报错”的弯路：

| 代理内核流派 | 代表性图形客户端 (点击可去客户端中心下载) | VLESS (XTLS/Reality) | Hysteria 2 (QUIC) | Trojan / SS2022 | Clash 规则覆写与策略组 | 最佳适用人群 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Mihomo (Clash.Meta) 内核** | **Clash Verge Rev**、**FlClash**、Clash Mi、CMFA、OpenClash、Nikki | **原生完整支持 ✓** | **原生完整支持 ✓** | **原生完整支持 ✓** | **100% 兼容并扩展 YAML 语法** | 桌面端、安卓与软路由主力首选（完美兼容 [光速云](/brands/guangsuyun/)、[微风网络](/brands/weifeng/) 等 VLESS 专线） |
| **sing-box 统一内核** | **Hiddify**、**Karing**、SFA / SFI / SFM、HomeProxy | **原生完整支持 ✓** | **原生完整支持 ✓** | **原生完整支持 ✓** | 支持自动转换或原生 JSON 规则 | 追求 Windows / Mac / iOS / Android 多端界面一致的新手与进阶用户 |
| **iOS 自研高性能内核** | **Shadowrocket (小火箭)**、**Stash**、Quantumult X、Surge 5 | **完整支持 ✓** | **完整支持 ✓** | **完整支持 ✓** | 各自支持规则分流与重写脚本 | iPhone / iPad / Apple TV 苹果生态主力 |
| **已停更旧版 Clash 原核 (2023前)** | 原版 Clash for Windows (CFW)、旧版 CFA | **不支持 ✗ (导入为空)** | **不支持 ✗** | 仅支持基础版 | 旧版语法，存在安全漏洞 | **强烈建议立即卸载并迁移至 Clash Verge Rev 或 FlClash** |

---

## 系统代理 (System Proxy) 与虚拟网卡 (TUN Mode) 的底层路由差异及适用边界

许多用户在配置客户端时分不清什么时候该开 `System Proxy`、什么时候该开 `TUN Mode`。两者在操作系统网络栈中的拦截层级截然不同：

1. **系统代理 (System Proxy — 传输层/应用层 HTTP & SOCKS5 监听)**：
   - **工作原理**：客户端在本地监听 `127.0.0.1:7890`（或 `7897`），并修改 Windows 注册表 `Internet Settings` 或 macOS 网络偏好设置中的系统代理地址。
   - **优点**：无需安装虚拟网卡驱动、无需管理员权限、CPU 开销极低，Chrome / Edge / Safari 浏览器与支持系统代理的应用即刻生效。
   - **局限性**：命令行工具（`git`、`curl`、`npm`、`pip`）、部分 Electron/UWP 应用以及绝大多数端游默认忽略系统 HTTP 代理设置。
2. **虚拟网卡模式 (TUN Mode — 网络层 L3 IP 数据包全量接管)**：
   - **工作原理**：客户端通过 `wintun.dll`（Windows）或 `utun`（macOS/iOS/Android）在系统内创建一张高优先级虚拟网卡，在三层路由表将所有进程的 `TCP / UDP / ICMP` 流量透明导向 Mihomo 或 sing-box 内核。
   - **优点**：**真正接管全机所有软件**（包括终端 CLI、Docker、Cursor/Copilot 插件、游戏客户端），无需逐个软件填代理端口。
   - **开启前提**：在 Windows / macOS 上首次开启 TUN 模式前，必须在 Clash Verge Rev 的「设置 → 系统设置 → 服务模式 (Service Mode)」中点击**安装服务 (Install)**，赋予内核创建虚拟网卡的系统级权限。

---

## 防 DNS 污染与防 WebRTC 泄漏的标准配置模板与终端自检命令

如果您的节点明明连上了，但打开部分海外网站依然跳转到错误页面，或者访问 [ChatGPT 与 Claude 解锁指南](/services/reporting/) 中的大模型服务时被识破真实地理位置，往往是因为 **DNS 解析抢答或泄漏**。

### 1. Mihomo (Clash Verge Rev / FlClash) 防 DNS 泄漏标准配置片段

```yaml
# Mihomo 防 DNS 污染与 TUN 虚拟网卡稳定配置参考
dns:
  enable: true
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  # 避免本地局域网设备与特殊校验域名被 Fake-IP 干扰
  fake-ip-filter:
    - "*.lan"
    - "*.local"
    - "time.*.com"
    - "ntp.*.com"
    - "+.msftconnecttest.com"
    - "+.msftncsi.com"
  # 国内默认解析 DNS（用于解析机场入口域名与国内直连分流）
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query

tun:
  enable: true
  stack: mixed
  dns-hijack:
    - "any:53"
    - "tcp://any:53"
  auto-route: true
  auto-detect-interface: true
```

### 2. 本地终端三步自检命令（验证代理与 TUN 是否真正接管）

打开 Windows PowerShell 或 macOS Terminal，依次运行以下三条命令即可完成端到端诊断：

```powershell
# 1. 检查系统时钟是否准确（与标准时间误差超过 90 秒会导致 VLESS/Trojan 节点全部无法握手）
w32tm /stripchart /computer:time.apple.com /dataonly /samples:3

# 2. 检查当前终端出口 IP 与所在国家代码（验证 TUN 模式或代理端口是否生效）
curl.exe -s https://www.cloudflare.com/cdn-cgi/trace | Select-String "ip=|loc=|warp="

# 3. 检查 Fake-IP 虚拟网卡 DNS 劫持是否正常工作（返回 198.18.x.x 代表 Fake-IP 已接管）
nslookup www.youtube.com
```

---

## 客户端「已连接但无法上网 / 订阅拉取失败 / 退出后断网」全链路故障诊断树

```text
[代理客户端常见三大故障全链路排查树]
 │
 ├─ 故障一：点击「更新订阅」报错 Timeout / Invalid YAML / 节点数为 0
 │   ├─ 检查客户端名称是否为停更的 Clash for Windows ──► 卸载旧版，前往 `/clients/` 下载 Clash Verge Rev 或 FlClash
 │   ├─ 检查当前是否开着失效的旧代理去拉取新订阅 ──────► 先关闭「系统代理」与「TUN 模式」开关，用本地直连更新订阅
 │   └─ 仍无法拉取 ────────────────────────────────────► 登录机场官网后台，尝试更换「备用订阅域名」或一键导入链接
 │
 ├─ 故障二：节点测速一片绿色（如 35ms），但浏览器打不开任何外网
 │   ├─ 检查客户端左侧「系统代理 (System Proxy)」开关 ──► 未开启则立即打开
 │   ├─ 检查浏览器右上角是否有代理扩展插件（如 SwitchyOmega）► 将插件切为「使用系统代理」或直接禁用冲突扩展
 │   └─ 检查电脑右下角系统时间 ────────────────────────► 开启「自动同步互联网时间」并点击立即同步
 │
 └─ 故障三：关掉客户端或重启电脑后，连百度、B站等国内网站都打不开
     └─ 上次异常关机导致系统残留了 `127.0.0.1:7890` 代理指向
         ├─ 方法 A（最快）：重新启动一次 Clash 客户端，手动关掉「系统代理」开关再正常退出
         └─ 方法 B（Windows 设置）：打开 `设置 -> 网络和 Internet -> 代理`，将「使用代理服务器」设为关闭
```

---

## 六大操作系统首选客户端与通用订阅机场快速联动指南

选好客户端后，搭配一家支持标准通用订阅的 [IEPL 与 IPLC 专线机场](/services/data-audit/) 才能发挥最大效能：

- **需要下载各平台官方安装包？** 请直接前往本站 **[2026 全平台代理客户端下载与开源仓库中心 (`/clients/`)](/clients/)**，点击对应系统卡片的 **「GitHub Releases 下载 ↗」** 或 **「App Store 获取 ↗」** 按钮直接下载。
- **哪些主力机场对第三方通用客户端兼容性最好？**
  1. **[光速云 (Guangsu Cloud)](/brands/guangsuyun/)**：行业罕见的**「自研一键客户端 + Clash / Shadowrocket / Mihomo 第三方通用订阅」双支持**标杆。新手可在手机电脑上直接用其自研客户端登录即连；进阶玩家与软路由用户则可复制通用订阅导入 Clash Verge Rev，配合本站提供的 [AI 生产力锁区分流规则](/services/reporting/) 与 [主备双机场自动故障转移配置](/services/experiments/) 实现专业级分流。
  2. **[微风网络 (Breeze)](/brands/weifeng/)**、**[暮光加速 (Twilight)](/brands/muguang/)**、**[星岛梦 (StarDream)](/brands/xingdaomeng/)** 与 **[二猫云](/brands/ermaoyun/)**：均全面支持第三方通用订阅导入，涵盖 VLESS、Trojan、Hysteria 2 与 Shadowsocks 协议，完美适配桌面端、移动端与 OpenWrt 家庭网关。
