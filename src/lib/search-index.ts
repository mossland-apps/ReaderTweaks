// Server-only: assembles the searchable document set from every content type.
// Used by /search-index.json and by the /search page.
import {
  loadBrands,
  loadDevices,
  loadArticles,
  loadAccessories,
  loadLearn,
  loadSoftware,
  loadTroubleshooting,
} from './content';
import { SECTIONS } from './sections';
import { deviceHref, sectionHref } from './devices';
import type { SearchDoc } from './search';
import type { Device } from './types';

const clean = (arr: (string | undefined)[]) => arr.filter((s): s is string => !!s);

export async function buildSearchDocs(): Promise<SearchDoc[]> {
  const [brands, devices, articles, accessories, learn, software, troubleshooting] =
    await Promise.all([
      loadBrands(),
      loadDevices(),
      loadArticles(),
      loadAccessories(),
      loadLearn(),
      loadSoftware(),
      loadTroubleshooting(),
    ]);

  const bySlug = new Map(devices.map((d) => [d.slug, d]));
  const brandName = (slug: string) => brands.find((b) => b.slug === slug)?.name;
  const deviceShort = (slug: string) => bySlug.get(slug)?.shortName ?? slug;
  const leafUrl = (deviceSlug: string, section: string, slug: string) => {
    const d = bySlug.get(deviceSlug) as Device | undefined;
    if (!d) return '/devices/';
    return `${sectionHref(d, section as any)}${slug}/`;
  };

  // Where a bare software / plugin result should point until it has its own hub.
  const softwareHub: Record<string, string> = {
    koreader: '/guides/what-is-koreader/',
    calibre: '/guides/calibre-basics/',
  };

  const docs: SearchDoc[] = [];

  for (const d of devices) {
    docs.push({
      id: `device:${d.slug}`,
      type: 'device',
      title: d.name,
      url: deviceHref(d),
      summary: d.summary,
      brand: brandName(d.brand),
      device: d.slug,
      keywords: clean([d.shortName, ...(d.aliases ?? [])]),
    });
    for (const s of SECTIONS) {
      const extra: string[] = [s.label];
      if (s.slug === 'comparisons') {
        const ov = articles.find(
          (a) => a.device === d.slug && a.section === 'comparisons' && a.type === 'overview',
        );
        const rivals = (ov?.compareWith ?? []).flatMap((slug) => {
          const rd = bySlug.get(slug);
          return rd ? [rd.shortName, brandName(rd.brand)] : [];
        });
        extra.push('vs', 'versus', 'compare', 'comparison', ...clean(rivals));
      }
      docs.push({
        id: `section:${d.slug}:${s.slug}`,
        type: 'section',
        title: `${d.shortName} — ${s.label}`,
        url: sectionHref(d, s.slug),
        summary: s.blurb,
        brand: brandName(d.brand),
        device: d.slug,
        section: s.slug,
        keywords: extra,
      });
    }
  }

  for (const sw of software) {
    docs.push({
      id: `software:${sw.slug}`,
      type: 'software',
      title: sw.name,
      url: softwareHub[sw.slug] ?? '/guides/',
      summary: sw.summary,
      software: sw.name,
      keywords: clean([sw.kind, sw.parent, ...sw.aliases]),
    });
  }

  for (const a of articles) {
    if (a.draft || a.type === 'overview') continue;
    docs.push({
      id: `guide:${a.slug}`,
      type: 'guide',
      title: a.title,
      url: leafUrl(a.device, a.section, a.pageSlug),
      summary: a.summary,
      brand: brandName(bySlug.get(a.device)?.brand ?? ''),
      device: a.device,
      software: a.software,
      section: a.section,
      keywords: clean([
        a.software,
        ...(a.searchTerms ?? []),
        ...(a.whatYouNeed ?? []),
        ...(a.steps ?? []).map((s) => s.instruction),
      ]),
    });
  }

  for (const t of troubleshooting) {
    docs.push({
      id: `troubleshooting:${t.slug}`,
      type: 'troubleshooting',
      title: t.title,
      url: leafUrl(t.device, 'troubleshooting', t.pageSlug),
      summary: t.summary,
      brand: brandName(bySlug.get(t.device)?.brand ?? ''),
      device: t.device,
      software: t.software,
      section: 'troubleshooting',
      keywords: clean([
        t.software,
        ...t.searchTerms,
        ...t.symptoms,
        ...t.fixes.map((f) => f.title),
      ]),
    });
  }

  for (const a of accessories) {
    const primary = a.devices[0] ? bySlug.get(a.devices[0]) : undefined;
    docs.push({
      id: `accessory:${a.slug}`,
      type: 'accessory',
      title: a.name,
      url: primary ? `${deviceHref(primary)}accessories/` : '/accessories/',
      summary: a.blurb,
      device: a.devices[0],
      brand: primary ? brandName(primary.brand) : undefined,
      keywords: clean([a.category, a.maker, ...a.devices.map((d) => deviceShort(d))]),
    });
  }

  for (const l of learn) {
    docs.push({
      id: `learn:${l.slug}`,
      type: 'learn',
      title: l.title,
      url: `/guides/${l.slug}/`,
      summary: l.summary,
      keywords: [l.category],
    });
  }

  // Keep the payload lean.
  return docs.map((d) => ({
    ...d,
    keywords: (d.keywords ?? []).map((k) => k.toLowerCase()).slice(0, 40),
  }));
}
