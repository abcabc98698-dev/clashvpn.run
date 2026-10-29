export type DataStatus = "measured" | "vendor" | "commercial" | "editorial" | "unverified";

export type BrandTier = "primary" | "top10" | "standard" | "archive";

export type ClientSupportMode = "both" | "custom-only" | "third-party" | "unverified";

export interface BrandPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
  note?: string;
}

export interface BenchmarkNode {
  region: string;
  latency: string;
  download: string;
  date?: string;
}

export interface SpeedtestEvidence {
  file: string;
  testedAt: string;
  protocolDisplayed: string;
  toolFamily: string;
  backendNote: string;
  dateConfidence: string;
  reviewNote?: string;
}

export interface UnlockMatrix {
  aiSupported: string[];
  aiConditional: string[];
  streamingSupported: string[];
  streamingConditional: string[];
  dataStatus: DataStatus;
  note: string;
}

export interface BrandFaq {
  q: string;
  a: string;
}

export interface BrandSeoMeta {
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailQuestions: string[];
  searchIntent: string;
  decisionStage: "认知阶段 (Awareness)" | "对比评估 (Consideration)" | "订阅转化 (Decision)" | "存量核验 (Verification)";
  cluster: string;
  upstreamHub: string;
  downstreamTarget: string;
  keywordBoundary: string;
  coreConclusion: string;
}

export interface AirportBrand {
  rank: number;
  slug: string;
  name: string;
  alias?: string;
  tier: BrandTier;
  accentColor: string;
  foundedYear: string;
  entryPriceLabel: string;
  monthlyMinPrice: number | null;
  lineType: string;
  protocols: string[];
  clientSupport: ClientSupportMode;
  clientSupportLabel: string;
  regions: string[];
  paymentMethods: string;
  hasUnlimitedTimePack: boolean;
  dataStatus: DataStatus;
  verifiedDate: string;
  updatedDate: string;
  summary: string;
  editorialOverview: string;
  highlights: string[];
  plans: BrandPlan[];
  plansNote?: string;
  benchmark: BenchmarkNode[];
  benchmarkSource: string;
  benchmarkStatus: DataStatus;
  speedtestImage?: SpeedtestEvidence;
  unlock: UnlockMatrix;
  suitableFor: string[];
  notSuitableFor: string[];
  pros: string[];
  limitations: string[];
  riskNotice: string;
  peerComparison: string;
  alternativeSlugs: string[];
  seo: BrandSeoMeta;
  faqs: BrandFaq[];
}
