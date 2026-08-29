import { describe, it, expect } from 'vitest';
import { SITE, canonical, truncateMeta, breadcrumbJsonLd, articleJsonLd, deviceProductJsonLd } from '@lib/seo';
import type { Device } from '@lib/types';

describe('site config', () => {
  it('knows its own origin and name', () => {
    expect(SITE.url).toBe('https://readertweaks.com');
    expect(SITE.name).toBe('ReaderTweaks');
  });
});

describe('canonical', () => {
  it('joins a path onto the origin and keeps a trailing slash', () => {
    expect(canonical('/devices/kobo/libra-colour/')).toBe('https://readertweaks.com/devices/kobo/libra-colour/');
  });
  it('normalises a missing leading slash and adds a trailing one', () => {
    expect(canonical('guides')).toBe('https://readertweaks.com/guides/');
  });
  it('leaves the bare origin as a single slash', () => {
    expect(canonical('/')).toBe('https://readertweaks.com/');
  });
});

describe('truncateMeta', () => {
  it('leaves short strings alone', () => {
    expect(truncateMeta('short text')).toBe('short text');
  });
  it('cuts long strings on a word boundary with an ellipsis, under the limit', () => {
    const long = 'word '.repeat(60).trim();
    const out = truncateMeta(long, 160);
    expect(out.length).toBeLessThanOrEqual(160);
    expect(out.endsWith('…')).toBe(true);
    expect(out).not.toMatch(/ …$/);
  });
});

describe('breadcrumbJsonLd', () => {
  it('produces a BreadcrumbList with positioned, absolute-URL items', () => {
    const ld = breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Devices', path: '/devices/' },
      { name: 'Kobo Libra Colour', path: '/devices/kobo/libra-colour/' },
    ]);
    expect(ld['@type']).toBe('BreadcrumbList');
    expect(ld.itemListElement).toHaveLength(3);
    expect(ld.itemListElement[0]).toMatchObject({ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://readertweaks.com/' });
    expect(ld.itemListElement[2].item).toBe('https://readertweaks.com/devices/kobo/libra-colour/');
  });
});

describe('articleJsonLd', () => {
  it('builds an Article node with dates in ISO form and an absolute URL', () => {
    const ld = articleJsonLd({
      title: 'Install KOReader on the Kobo Libra Colour',
      description: 'Step by step.',
      path: '/devices/kobo/libra-colour/koreader/install/',
      lastUpdated: new Date('2026-08-01T00:00:00Z'),
    });
    expect(ld['@type']).toBe('Article');
    expect(ld.headline).toContain('KOReader');
    expect(ld.dateModified).toBe('2026-08-01T00:00:00.000Z');
    expect(ld.mainEntityOfPage).toBe('https://readertweaks.com/devices/kobo/libra-colour/koreader/install/');
    expect(ld.publisher.name).toBe('ReaderTweaks');
  });
});

describe('deviceProductJsonLd', () => {
  const libra: Device = {
    slug: 'libra-colour',
    name: 'Kobo Libra Colour',
    shortName: 'Libra Colour',
    brand: 'kobo',
    status: 'complete',
    order: 1,
    releaseYear: 2024,
    summary: 'Colour e-ink reader.',
    specs: { screenSize: '7 in', color: true, waterproof: true },
  };
  it('describes the device as a Product with its brand', () => {
    const ld = deviceProductJsonLd(libra, 'Kobo');
    expect(ld['@type']).toBe('Product');
    expect(ld.name).toBe('Kobo Libra Colour');
    expect(ld.brand).toMatchObject({ '@type': 'Brand', name: 'Kobo' });
    expect(ld.category).toBe('E-reader');
  });
});
