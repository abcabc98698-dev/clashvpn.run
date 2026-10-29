import type {
  AirportBrand,
  BrandFaq,
  BrandPlan,
  BrandSeoMeta,
  BrandTier,
  BenchmarkNode,
  ClientSupportMode,
  DataStatus,
  SpeedtestEvidence,
  UnlockMatrix,
} from "./brands-types";
import { BRANDS_TOP } from "./brands-top";
import { BRANDS_MID } from "./brands-mid";
import { BRANDS_ARCHIVE } from "./brands-archive";

export type {
  AirportBrand,
  AirportBrand as BrandEntry,
  BrandFaq,
  BrandPlan,
  BrandSeoMeta,
  BrandTier,
  BenchmarkNode,
  ClientSupportMode,
  DataStatus,
  SpeedtestEvidence,
  UnlockMatrix,
};

export const DATA_STATUS_META: Record<
  DataStatus,
  { label: string; badgeClass: string; description: string }
> = {
  measured: {
    label: "实测数据 (Measured)",
    badgeClass: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
    description: "包含 2026-08-11 批次客户端真实测速原图或实测节点记录",
  },
  vendor: {
    label: "品牌披露 (Vendor)",
    badgeClass: "border-sky-400/40 bg-sky-400/10 text-sky-300",
    description: "基于品牌官方公开套餐、协议与线路架构整理，未包含于 2026-08-11 截图包",
  },
  commercial: {
    label: "商业合作 (Commercial)",
    badgeClass: "border-purple-400/40 bg-purple-400/10 text-purple-300",
    description: "含推广返佣链接或专属渠道优惠码披露",
  },
  editorial: {
    label: "编辑判断 (Editorial)",
    badgeClass: "border-accent/40 bg-accent/10 text-accent",
    description: "基于协议、专线架构与价格梯度得出的综合选型建议",
  },
  unverified: {
    label: "待核实 (Unverified)",
    badgeClass: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    description: "历史汇总记录或部分参数待进一步核实，建议优先选择前排已实测品牌",
  },
};

export const BRANDS: AirportBrand[] = [
  ...BRANDS_TOP,
  ...BRANDS_MID,
  ...BRANDS_ARCHIVE,
];

export function getBrandBySlug(slug: string): AirportBrand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}

export function getPrimaryBrand(): AirportBrand {
  return BRANDS[0];
}

export function getTopBrands(limit = 10): AirportBrand[] {
  return BRANDS.filter((b) => b.rank <= limit);
}

export function getEvaluatedBrands(): AirportBrand[] {
  return BRANDS.filter((b) => b.tier !== "archive");
}

export function getArchiveBrands(): AirportBrand[] {
  return BRANDS.filter((b) => b.tier === "archive");
}

export function getBrandsWithSpeedtest(): AirportBrand[] {
  return BRANDS.filter((b) => Boolean(b.speedtestImage?.file));
}

export function getDataStatusLabel(status: DataStatus): string {
  return DATA_STATUS_META[status].label;
}
