/**
 * Centralized affiliate registration links & coupon registry.
 * Compliance rule: All outbound affiliate links MUST read from this module and use
 * `target="_blank" rel="nofollow sponsored noopener"`.
 * Never hard-code affiliate links inside Markdown files.
 */

export const AFFILIATE_REL = "nofollow sponsored noopener" as const;

export const AFFILIATE_DISCLOSURE =
  "含推广链接：通过本站链接注册可能为本站带来联盟佣金，用于支持实验室带宽与节点巡检成本，不会增加您的支付价格。" as const;

export interface BrandLinkEntry {
  slug: string;
  name: string;
  /** Official / affiliate registration URL. Empty string if historical brand lacks a verified active link. */
  registerUrl: string;
  promoCode?: string;
  promoBenefit?: string;
  promoRestriction?: string;
  linkFormatWarning?: string;
  verifiedDate: string;
}

export const BRAND_LINKS: Record<string, BrandLinkEntry> = {
  guangsuyun: {
    slug: "guangsuyun",
    name: "光速云",
    registerUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    promoCode: "AMM",
    promoBenefit: "新人优惠券；半年9折 / 年付8折 / 两年75折 / 三年7折",
    promoRestriction: "99元/年轻量版与147永久套餐为特惠定价，不叠加折扣",
    verifiedDate: "2026-10-19",
  },
  feimaoyun: {
    slug: "feimaoyun",
    name: "飞猫云",
    registerUrl: "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    promoCode: "flycat888",
    promoBenefit: "新用户优惠码（约8折档优惠）",
    verifiedDate: "2026-10-19",
  },
  weifeng: {
    slug: "weifeng",
    name: "微风网络",
    registerUrl: "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    promoCode: "flat888",
    promoBenefit: "新用户优惠码（约9折档优惠）",
    verifiedDate: "2026-10-19",
  },
  muguang: {
    slug: "muguang",
    name: "暮光加速",
    registerUrl: "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    promoCode: "muguang5555",
    promoBenefit: "渠道记录专属码（下单前建议向7×24客服核实当期折扣）",
    verifiedDate: "2026-10-19",
  },
  dalaoyun: {
    slug: "dalaoyun",
    name: "大佬云",
    registerUrl: "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    promoCode: "dly888",
    promoBenefit: "季付及以上 7 折",
    verifiedDate: "2026-10-19",
  },
  xingdaomeng: {
    slug: "xingdaomeng",
    name: "星岛梦",
    registerUrl: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    promoCode: "nmw888",
    promoBenefit: "新用户专享优惠码",
    verifiedDate: "2026-10-19",
  },
  ermaoyun: {
    slug: "ermaoyun",
    name: "二猫云",
    registerUrl: "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    promoCode: "ermao5555",
    promoBenefit: "新用户专享优惠码",
    verifiedDate: "2026-10-19",
  },
  wuyoulianjie: {
    slug: "wuyoulianjie",
    name: "无忧链接",
    registerUrl: "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    promoCode: "wuyou666",
    promoBenefit: "新用户专享优惠码",
    verifiedDate: "2026-10-19",
  },
  weituyun: {
    slug: "weituyun",
    name: "唯兔云",
    registerUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    promoCode: "weitu666",
    promoBenefit: "新用户专享优惠码",
    verifiedDate: "2026-10-19",
  },
  firefly: {
    slug: "firefly",
    name: "Firefly",
    registerUrl: "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    promoCode: "firefly",
    promoBenefit: "全场 8 折",
    promoRestriction: "年付版（¥96/年）不适用",
    verifiedDate: "2026-10-19",
  },
  yuzhouyun: {
    slug: "yuzhouyun",
    name: "宇宙云",
    registerUrl: "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    promoCode: "YUZHOU553",
    promoBenefit: "历史资料记录新用户 8 折（当期有效性待核实）",
    verifiedDate: "2026-10-19",
  },
  u1s1: {
    slug: "u1s1",
    name: "U1S1",
    registerUrl: "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    promoCode: "akaka",
    promoBenefit: "渠道优惠码",
    verifiedDate: "2026-10-19",
  },
  lingmao: {
    slug: "lingmao",
    name: "灵猫网络",
    registerUrl: "https://vip01.civetnet.com/#/?code=8MIAyxak",
    promoCode: "lingmao",
    promoBenefit: "8 折优惠（另有备用码 lmao888）",
    promoRestriction: "年付小包（¥85/年）不适用",
    verifiedDate: "2026-10-19",
  },
  jilianyun: {
    slug: "jilianyun",
    name: "极连云",
    registerUrl: "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    promoCode: "ji8888",
    promoBenefit: "渠道专享优惠码",
    verifiedDate: "2026-10-19",
  },
  guangnianti: {
    slug: "guangnianti",
    name: "光年梯",
    registerUrl: "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    promoCode: "gnt6666",
    promoBenefit: "渠道专享优惠码",
    verifiedDate: "2026-10-19",
  },
  yifanyun: {
    slug: "yifanyun",
    name: "一翻云",
    registerUrl: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    promoCode: "1FLYYUN",
    promoBenefit: "9 折优惠（另有渠道码 yfy6666）",
    verifiedDate: "2026-10-19",
  },
  sogoyun: {
    slug: "sogoyun",
    name: "SOGO云",
    registerUrl: "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    promoCode: "SOGO10000",
    promoBenefit: "9 折优惠（另有渠道码 sss777）",
    verifiedDate: "2026-10-19",
  },
  kexinyun: {
    slug: "kexinyun",
    name: "可信云",
    registerUrl: "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    promoCode: "kkk333",
    promoBenefit: "渠道专享优惠码",
    verifiedDate: "2026-10-19",
  },
  sujie: {
    slug: "sujie",
    name: "速界",
    registerUrl: "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    promoCode: "sss1111",
    promoBenefit: "渠道专享优惠码",
    verifiedDate: "2026-10-19",
  },
  shanyue: {
    slug: "shanyue",
    name: "闪跃",
    registerUrl: "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    promoCode: "shanyue",
    promoBenefit: "8 折优惠",
    promoRestriction: "仅限闪动 / 飞跃 / 瞬移 / 跃迁月付档，年付版不适用",
    verifiedDate: "2026-10-19",
  },
  quanqiuyun: {
    slug: "quanqiuyun",
    name: "全球云",
    registerUrl: "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    promoCode: "qq88",
    promoBenefit: "8 折优惠（另有渠道码 qqy7777）",
    verifiedDate: "2026-10-19",
  },
  shandianshu: {
    slug: "shandianshu",
    name: "闪电鼠",
    registerUrl: "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    promoCode: "sd88",
    promoBenefit: "季付及以上 7 折",
    verifiedDate: "2026-10-19",
  },
  yunjiexian: {
    slug: "yunjiexian",
    name: "云界线",
    registerUrl: "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    promoCode: "yjx888",
    promoBenefit: "季付及以上 7 折",
    linkFormatWarning: "该品牌原始链接格式缺少 #/ 路由段，访问前请确认页面正常加载。",
    verifiedDate: "2026-10-19",
  },
  liulianyun: {
    slug: "liulianyun",
    name: "榴莲云",
    registerUrl: "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    promoCode: "ll88",
    promoBenefit: "季付及以上 7 折",
    verifiedDate: "2026-10-19",
  },
  shenxing: {
    slug: "shenxing",
    name: "神行加速",
    registerUrl: "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    promoCode: "xs0077",
    promoBenefit: "新用户 7 折",
    verifiedDate: "2026-10-19",
  },
  huanqiuti: {
    slug: "huanqiuti",
    name: "环球梯",
    registerUrl: "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    promoCode: "HQ66",
    promoBenefit: "季付及以上 7 折",
    linkFormatWarning: "该品牌原始链接格式缺少 #/ 路由段，访问前请确认页面正常加载。",
    verifiedDate: "2026-10-19",
  },
  yinxingren: {
    slug: "yinxingren",
    name: "隐形人",
    registerUrl: "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    promoCode: "moon80",
    promoBenefit: "8 折优惠（另有渠道码 yxr888）",
    verifiedDate: "2026-10-19",
  },
  tiziyun: {
    slug: "tiziyun",
    name: "梯子云",
    registerUrl: "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    promoCode: "tiziyun",
    promoBenefit: "新用户专享优惠码",
    verifiedDate: "2026-10-19",
  },
  // 29-42: Historical archive brands
  wgetcloud: {
    slug: "wgetcloud",
    name: "WgetCloud",
    registerUrl: "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    promoBenefit: "历史归档入口（当期优惠码待核实）",
    verifiedDate: "2026-08-24",
  },
  baiyueguang: {
    slug: "baiyueguang",
    name: "白月光",
    registerUrl: "https://www.sibker.com/register?invite_code=gg6puAId",
    promoBenefit: "历史归档入口（当期优惠码待核实）",
    verifiedDate: "2026-08-24",
  },
  flyingbird: {
    slug: "flyingbird",
    name: "FlyingBird 飞鸟机场",
    registerUrl: "",
    promoCode: "theo",
    promoBenefit: "历史记录：theo（9折）/ year85（年付85折）；独立入口待核实",
    verifiedDate: "2026-08-09",
  },
  cyberguard: {
    slug: "cyberguard",
    name: "CyberGuard",
    registerUrl: "https://cyberguard.best/#/register?code=AxXNNYng",
    promoBenefit: "历史归档入口（当期优惠码待核实）",
    verifiedDate: "2026-08-23",
  },
  longmaoyun: {
    slug: "longmaoyun",
    name: "龙猫云",
    registerUrl: "",
    promoBenefit: "历史记录：季9/半85/年8/三年6折；独立入口待核实",
    verifiedDate: "2026-08-09",
  },
  fatcat: {
    slug: "fatcat",
    name: "FATCAT 肥猫云",
    registerUrl: "",
    promoBenefit: "历史记录：季9/半85/年8/三年6折；独立入口待核实",
    verifiedDate: "2026-08-09",
  },
  tntcloud: {
    slug: "tntcloud",
    name: "TNTCloud",
    registerUrl: "",
    promoCode: "TNT85",
    promoBenefit: "历史记录：85折（限量包不支持）；独立入口待核实",
    verifiedDate: "2026-08-09",
  },
  qingyunti: {
    slug: "qingyunti",
    name: "青云梯",
    registerUrl: "",
    promoCode: "qyt85",
    promoBenefit: "历史记录：qyt85（85折）/ qyt80（8折）；独立入口待核实",
    verifiedDate: "2026-08-09",
  },
  shanshuiyun: {
    slug: "shanshuiyun",
    name: "山水云",
    registerUrl: "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    promoBenefit: "历史归档入口（当期优惠码待核实）",
    verifiedDate: "2026-08-24",
  },
  lingdongyun: {
    slug: "lingdongyun",
    name: "灵动云",
    registerUrl: "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    promoBenefit: "历史归档入口（优惠码待核实）",
    verifiedDate: "2026-08-09",
  },
  langwang: {
    slug: "langwang",
    name: "浪网",
    registerUrl: "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    promoBenefit: "历史归档入口（优惠码待核实）",
    verifiedDate: "2026-08-09",
  },
  edgenova: {
    slug: "edgenova",
    name: "EdgeNova 边缘节点",
    registerUrl: "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    promoCode: "TH888",
    promoBenefit: "历史记录：新用户 8 折",
    verifiedDate: "2026-08-09",
  },
  yinghuochong: {
    slug: "yinghuochong",
    name: "萤火虫（历史档案）",
    registerUrl: "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    promoCode: "firefly",
    promoBenefit: "历史记录：新用户 8 折（与 Firefly 同系历史记录）",
    verifiedDate: "2026-08-09",
  },
  sslar: {
    slug: "sslar",
    name: "SSLAR",
    registerUrl: "",
    promoCode: "ko3eTt0w",
    promoBenefit: "历史记录：8 折；独立入口待核实",
    verifiedDate: "2026-08-09",
  },
};

export function getBrandLink(slug: string): BrandLinkEntry | undefined {
  return BRAND_LINKS[slug];
}
