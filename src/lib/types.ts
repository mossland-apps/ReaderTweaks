// Plain data shapes shared by the site pages and the pure logic in src/lib.
// Astro pages map `getCollection()` entries into these so the logic stays
// testable without the Astro content runtime.

export type SectionSlug =
  | 'guides'
  | 'koreader'
  | 'calibre'
  | 'customization'
  | 'troubleshooting'
  | 'accessories'
  | 'comparisons';

export interface Section {
  slug: SectionSlug;
  label: string;
  /** One line shown on the device hub and in section navigation. */
  blurb: string;
}

export interface Brand {
  slug: string;
  name: string;
  order: number;
  blurb: string;
  homepage?: string;
}

export type DeviceStatus = 'complete' | 'in-progress';

export type KoreaderSupport = 'official' | 'community' | 'experimental' | 'none';

export interface DeviceSpecs {
  screenSize?: string;
  resolution?: string;
  ppi?: string;
  color?: boolean;
  frontlight?: boolean;
  warmLight?: boolean;
  storage?: string;
  waterproof?: boolean;
  physicalButtons?: boolean;
  stylusSupport?: boolean;
  audioSupport?: boolean;
  os?: string;
  formats?: string[];
  weight?: string;
  dimensions?: string;
}

export interface Device {
  slug: string;
  name: string;
  shortName: string;
  brand: string; // brand slug
  status: DeviceStatus;
  order: number;
  releaseYear: number;
  summary: string;
  specs: DeviceSpecs;
  aliases?: string[];
  koreaderSupport?: KoreaderSupport;
  illustration?: string;
}

export type ArticleType = 'overview' | 'guide' | 'fix' | 'list';

export type Difficulty = 'Easy' | 'Moderate' | 'Advanced';

/** One numbered step in a step-by-step guide. */
export interface GuideStep {
  instruction: string; // short imperative line
  detail?: string; // the fuller "why and how" explanation
  image?: string; // path under /guide-images/
  imageAlt?: string;
  warning?: string;
  tip?: string;
  command?: string;
  commandCaption?: string;
}

export interface LinkRef {
  text: string;
  href: string;
}

export interface Article {
  slug: string;
  pageSlug: string; // short URL segment within device + section
  title: string;
  device: string; // device slug
  section: SectionSlug;
  type: ArticleType;
  summary: string;
  lastUpdated: Date;
  order: number;
  draft: boolean;
  body: string;
  difficulty?: Difficulty;
  estimatedTime?: string;
  whatYouNeed?: string[];
  // Guide metadata — valuable because KOReader / Kindle procedures change often.
  software?: string;
  softwareVersion?: string;
  testedDevice?: string; // device slug; defaults to `device`
  lastTested?: Date;
  prerequisites?: LinkRef[];
  steps?: GuideStep[];
  nextStep?: LinkRef;
  related?: LinkRef[];
  searchTerms?: string[];
  compareWith?: string[]; // device slugs, comparisons overview only
}

export interface SoftwareEntry {
  slug: string;
  name: string;
  kind: 'app' | 'plugin' | 'tool';
  parent?: string; // software slug, for plugins
  summary: string;
  aliases: string[];
  currentVersion?: string;
  homepage?: string;
}

export interface TroubleshootingFix {
  title: string;
  rationale?: string; // why this works
  steps: string[];
  note?: string;
}

export interface DecisionBranch {
  label: string; // "Nothing happens"
  hint?: string;
  href: string; // anchor (#fix-1) or URL
}

export interface DecisionTree {
  question: string;
  branches: DecisionBranch[];
}

export interface TroubleshootingEntry {
  slug: string;
  pageSlug: string;
  title: string;
  device: string; // device slug
  section: 'troubleshooting';
  software?: string;
  softwareVersion?: string;
  summary: string;
  symptoms: string[];
  beforeYouStart: string[];
  mostCommonCause: string;
  fixes: TroubleshootingFix[];
  recovery?: string;
  related: LinkRef[];
  searchTerms: string[];
  decisionTree?: DecisionTree;
  difficulty: Difficulty;
  estimatedTime?: string;
  lastTested: Date;
  lastUpdated: Date;
  draft: boolean;
  body: string;
}

export interface LearnArticle {
  slug: string;
  title: string;
  summary: string;
  category: 'koreader' | 'concepts' | 'software' | 'formats' | 'buying';
  lastUpdated: Date;
  order: number;
  body: string;
  relatedDevices?: string[];
}

export type AccessoryCategory =
  | 'case'
  | 'stylus'
  | 'reading-light'
  | 'screen-protector'
  | 'stand'
  | 'charger'
  | 'other';

export interface Accessory {
  slug: string;
  name: string;
  category: AccessoryCategory;
  devices: string[]; // device slugs; empty means universal
  maker?: string;
  affiliateUrl?: string;
  vendor?: string;
  blurb: string;
  priceBand?: '$' | '$$' | '$$$';
  lastUpdated: Date;
  body?: string;
}

export interface Comparison {
  slug: string;
  title: string;
  deviceA: string; // device slug
  deviceB: string; // device slug
  summary: string;
  verdict: string;
  lastUpdated: Date;
  draft: boolean;
  body: string;
}

export interface BrandGroup {
  brand: Brand;
  devices: Device[];
}
