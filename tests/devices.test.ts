import { describe, it, expect } from 'vitest';
import {
  deviceHref,
  sectionHref,
  deviceStatusLabel,
  groupDevicesByBrand,
  articlesForSection,
  overviewArticle,
  relatedComparisons,
} from '@lib/devices';
import type { Brand, Device, Article, Comparison } from '@lib/types';

const kobo: Brand = { slug: 'kobo', name: 'Kobo', order: 1, blurb: 'Rakuten Kobo' };
const kindle: Brand = { slug: 'kindle', name: 'Kindle', order: 2, blurb: 'Amazon Kindle' };

const libra: Device = {
  slug: 'libra-colour',
  name: 'Kobo Libra Colour',
  shortName: 'Libra Colour',
  brand: 'kobo',
  status: 'complete',
  order: 1,
  releaseYear: 2024,
  summary: 'Colour e-ink, physical buttons, stylus support.',
  specs: {},
};
const clara: Device = {
  slug: 'clara-bw',
  name: 'Kobo Clara BW',
  shortName: 'Clara BW',
  brand: 'kobo',
  status: 'in-progress',
  order: 2,
  releaseYear: 2024,
  summary: 'Compact 6-inch black-and-white reader.',
  specs: {},
};
const paperwhite: Device = {
  slug: 'paperwhite',
  name: 'Kindle Paperwhite',
  shortName: 'Paperwhite',
  brand: 'kindle',
  status: 'in-progress',
  order: 1,
  releaseYear: 2024,
  summary: 'The default mainstream e-reader.',
  specs: {},
};

describe('URL builders', () => {
  it('builds a nested device hub URL with trailing slash', () => {
    expect(deviceHref(libra)).toBe('/devices/kobo/libra-colour/');
  });
  it('builds a section URL under the device', () => {
    expect(sectionHref(libra, 'koreader')).toBe('/devices/kobo/libra-colour/koreader/');
  });
});

describe('deviceStatusLabel', () => {
  it('maps status codes to reader-facing words', () => {
    expect(deviceStatusLabel('complete')).toBe('Complete');
    expect(deviceStatusLabel('in-progress')).toBe('In progress');
  });
});

describe('groupDevicesByBrand', () => {
  it('returns brands in brand order, each with its devices in device order', () => {
    const grouped = groupDevicesByBrand([paperwhite, clara, libra], [kindle, kobo]);
    expect(grouped.map((g) => g.brand.slug)).toEqual(['kobo', 'kindle']);
    expect(grouped[0].devices.map((d) => d.slug)).toEqual(['libra-colour', 'clara-bw']);
    expect(grouped[1].devices.map((d) => d.slug)).toEqual(['paperwhite']);
  });
  it('omits brands that have no devices', () => {
    const empty: Brand = { slug: 'boox', name: 'BOOX', order: 3, blurb: '' };
    const grouped = groupDevicesByBrand([libra], [kobo, empty]);
    expect(grouped.map((g) => g.brand.slug)).toEqual(['kobo']);
  });
});

describe('article helpers', () => {
  const mk = (over: Partial<Article>): Article => ({
    slug: over.slug ?? 'x',
    pageSlug: over.pageSlug ?? over.slug ?? 'x',
    title: over.title ?? 'X',
    device: over.device ?? 'libra-colour',
    section: over.section ?? 'guides',
    type: over.type ?? 'guide',
    summary: '',
    lastUpdated: over.lastUpdated ?? new Date('2026-01-01'),
    order: over.order ?? 0,
    draft: over.draft ?? false,
    body: '',
  });

  it('returns only non-draft articles for the given device + section, in order', () => {
    const arts = [
      mk({ slug: 'b', section: 'guides', order: 2 }),
      mk({ slug: 'a', section: 'guides', order: 1 }),
      mk({ slug: 'c', section: 'guides', order: 3, draft: true }),
      mk({ slug: 'd', section: 'koreader', order: 1 }),
      mk({ slug: 'e', section: 'guides', order: 1, device: 'clara-bw' }),
    ];
    expect(articlesForSection(arts, 'libra-colour', 'guides').map((a) => a.slug)).toEqual(['a', 'b']);
  });

  it('excludes the overview article from the section list and returns it separately', () => {
    const arts = [
      mk({ slug: 'ov', section: 'calibre', type: 'overview', order: 0 }),
      mk({ slug: 'g1', section: 'calibre', type: 'guide', order: 1 }),
    ];
    expect(overviewArticle(arts, 'libra-colour', 'calibre')?.slug).toBe('ov');
    expect(articlesForSection(arts, 'libra-colour', 'calibre').map((a) => a.slug)).toEqual(['g1']);
  });
});

describe('relatedComparisons', () => {
  it('finds published comparisons that reference the device on either side', () => {
    const cmps: Comparison[] = [
      { slug: 'libra-vs-clara', title: 'Libra Colour vs Clara BW', deviceA: 'libra-colour', deviceB: 'clara-bw', summary: '', verdict: '', lastUpdated: new Date('2026-01-01'), draft: false, body: '' },
      { slug: 'pw-vs-clara', title: 'Paperwhite vs Clara BW', deviceA: 'paperwhite', deviceB: 'clara-bw', summary: '', verdict: '', lastUpdated: new Date('2026-01-01'), draft: false, body: '' },
      { slug: 'draft-one', title: 'Draft', deviceA: 'libra-colour', deviceB: 'paperwhite', summary: '', verdict: '', lastUpdated: new Date('2026-01-01'), draft: true, body: '' },
    ];
    expect(relatedComparisons(cmps, 'libra-colour').map((c) => c.slug)).toEqual(['libra-vs-clara']);
  });
});
