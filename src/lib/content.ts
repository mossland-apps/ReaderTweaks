// Bridges Astro's content collections to the plain data shapes in ./types so the
// pure logic in ./devices, ./seo etc. stays free of the Astro runtime.
import { getCollection, type CollectionEntry } from 'astro:content';
import type {
  Accessory,
  Article,
  Brand,
  Comparison,
  Device,
  LearnArticle,
  SoftwareEntry,
  TroubleshootingEntry,
} from './types';

export function toBrand(entry: CollectionEntry<'brands'>): Brand {
  return {
    slug: entry.slug,
    name: entry.data.name,
    order: entry.data.order,
    blurb: entry.data.blurb,
    homepage: entry.data.homepage,
  };
}

export function toDevice(entry: CollectionEntry<'devices'>): Device {
  return {
    slug: entry.slug,
    name: entry.data.name,
    shortName: entry.data.shortName,
    brand: entry.data.brand.slug,
    status: entry.data.status,
    order: entry.data.order,
    releaseYear: entry.data.releaseYear,
    summary: entry.data.summary,
    specs: entry.data.specs,
    aliases: entry.data.aliases,
    koreaderSupport: entry.data.koreaderSupport,
    illustration: entry.data.illustration,
  };
}

export function toArticle(entry: CollectionEntry<'articles'>): Article {
  return {
    slug: entry.slug,
    pageSlug: entry.data.pageSlug ?? entry.slug,
    title: entry.data.title,
    device: entry.data.device.slug,
    section: entry.data.section,
    type: entry.data.type,
    summary: entry.data.summary,
    lastUpdated: entry.data.lastUpdated,
    order: entry.data.order,
    draft: entry.data.draft,
    body: entry.body,
    difficulty: entry.data.difficulty,
    estimatedTime: entry.data.estimatedTime,
    whatYouNeed: entry.data.whatYouNeed,
    software: entry.data.software,
    softwareVersion: entry.data.softwareVersion,
    testedDevice: entry.data.testedDevice?.slug,
    lastTested: entry.data.lastTested,
    prerequisites: entry.data.prerequisites,
    steps: entry.data.steps,
    nextStep: entry.data.nextStep,
    related: entry.data.related,
    searchTerms: entry.data.searchTerms,
    compareWith: entry.data.compareWith?.map((r) => r.slug),
  };
}

export function toSoftware(entry: CollectionEntry<'software'>): SoftwareEntry {
  return {
    slug: entry.slug,
    name: entry.data.name,
    kind: entry.data.kind,
    parent: entry.data.parent,
    summary: entry.data.summary,
    aliases: entry.data.aliases,
    currentVersion: entry.data.currentVersion,
    homepage: entry.data.homepage,
  };
}

export function toTroubleshooting(
  entry: CollectionEntry<'troubleshooting'>,
): TroubleshootingEntry {
  return {
    slug: entry.slug,
    pageSlug: entry.data.pageSlug ?? entry.slug,
    title: entry.data.title,
    device: entry.data.device.slug,
    section: 'troubleshooting',
    software: entry.data.software,
    softwareVersion: entry.data.softwareVersion,
    summary: entry.data.summary,
    symptoms: entry.data.symptoms,
    beforeYouStart: entry.data.beforeYouStart,
    mostCommonCause: entry.data.mostCommonCause,
    fixes: entry.data.fixes,
    recovery: entry.data.recovery,
    related: entry.data.related,
    searchTerms: entry.data.searchTerms,
    decisionTree: entry.data.decisionTree,
    difficulty: entry.data.difficulty,
    estimatedTime: entry.data.estimatedTime,
    lastTested: entry.data.lastTested,
    lastUpdated: entry.data.lastUpdated,
    draft: entry.data.draft,
    body: entry.body,
  };
}

export function toLearn(entry: CollectionEntry<'learn'>): LearnArticle {
  return {
    slug: entry.slug,
    title: entry.data.title,
    summary: entry.data.summary,
    category: entry.data.category,
    lastUpdated: entry.data.lastUpdated,
    order: entry.data.order,
    body: entry.body,
    relatedDevices: entry.data.relatedDevices?.map((r) => r.slug),
  };
}

export function toAccessory(entry: CollectionEntry<'accessories'>): Accessory {
  return {
    slug: entry.slug,
    name: entry.data.name,
    category: entry.data.category,
    devices: entry.data.devices.map((r) => r.slug),
    maker: entry.data.maker,
    affiliateUrl: entry.data.affiliateUrl,
    vendor: entry.data.vendor,
    blurb: entry.data.blurb,
    priceBand: entry.data.priceBand,
    lastUpdated: entry.data.lastUpdated,
  };
}

export function toComparison(entry: CollectionEntry<'comparisons'>): Comparison {
  return {
    slug: entry.slug,
    title: entry.data.title,
    deviceA: entry.data.deviceA.slug,
    deviceB: entry.data.deviceB.slug,
    summary: entry.data.summary,
    verdict: entry.data.verdict,
    lastUpdated: entry.data.lastUpdated,
    draft: entry.data.draft,
    body: '',
  };
}

// Convenience loaders used across pages.
export async function loadBrands(): Promise<Brand[]> {
  return (await getCollection('brands')).map(toBrand).sort((a, b) => a.order - b.order);
}

export async function loadDevices(): Promise<Device[]> {
  return (await getCollection('devices')).map(toDevice).sort((a, b) => a.order - b.order);
}

export async function loadArticles(): Promise<Article[]> {
  return (await getCollection('articles')).map(toArticle);
}

export async function loadLearn(): Promise<LearnArticle[]> {
  return (await getCollection('learn', ({ data }) => !data.draft))
    .map(toLearn)
    .sort((a, b) => a.order - b.order);
}

export async function loadAccessories(): Promise<Accessory[]> {
  return (await getCollection('accessories', ({ data }) => !data.draft)).map(toAccessory);
}

export async function loadComparisons(): Promise<Comparison[]> {
  return (await getCollection('comparisons')).map(toComparison);
}

export async function loadSoftware(): Promise<SoftwareEntry[]> {
  return (await getCollection('software')).map(toSoftware).sort((a, b) => a.name.localeCompare(b.name));
}

export async function loadTroubleshooting(): Promise<TroubleshootingEntry[]> {
  return (await getCollection('troubleshooting', ({ data }) => !data.draft)).map(toTroubleshooting);
}
