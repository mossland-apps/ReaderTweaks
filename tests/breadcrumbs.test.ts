import { describe, it, expect } from 'vitest';
import { deviceTrail } from '@lib/breadcrumbs';
import { breadcrumbJsonLd } from '@lib/seo';
import type { Brand, Device } from '@lib/types';

const kobo: Brand = { slug: 'kobo', name: 'Kobo', order: 1, blurb: '' };
const libra: Device = {
  slug: 'libra-colour',
  name: 'Kobo Libra Colour',
  shortName: 'Libra Colour',
  brand: 'kobo',
  status: 'complete',
  order: 1,
  releaseYear: 2024,
  summary: '',
  specs: {},
};

describe('deviceTrail', () => {
  it('builds Home / Devices / Brand / Device', () => {
    const trail = deviceTrail(kobo, libra);
    expect(trail.map((c) => c.name)).toEqual(['Home', 'Devices', 'Kobo', 'Libra Colour']);
    expect(trail.map((c) => c.path)).toEqual([
      '/',
      '/devices/',
      '/devices/kobo/',
      '/devices/kobo/libra-colour/',
    ]);
  });

  it('adds the section when given', () => {
    const trail = deviceTrail(kobo, libra, 'koreader');
    expect(trail.map((c) => c.name)).toEqual([
      'Home',
      'Devices',
      'Kobo',
      'Libra Colour',
      'KOReader',
    ]);
    expect(trail[4].path).toBe('/devices/kobo/libra-colour/koreader/');
  });

  it('adds a leaf page after the section', () => {
    const trail = deviceTrail(kobo, libra, 'koreader', {
      name: 'Installation',
      path: '/devices/kobo/libra-colour/koreader/install/',
    });
    expect(trail.map((c) => c.name)).toEqual([
      'Home',
      'Devices',
      'Kobo',
      'Libra Colour',
      'KOReader',
      'Installation',
    ]);
  });

  it('feeds breadcrumbJsonLd to a valid BreadcrumbList', () => {
    const ld = breadcrumbJsonLd(deviceTrail(kobo, libra, 'troubleshooting'));
    expect(ld['@type']).toBe('BreadcrumbList');
    expect(ld.itemListElement).toHaveLength(5);
    expect(ld.itemListElement[4].item).toBe(
      'https://readertweaks.com/devices/kobo/libra-colour/troubleshooting/',
    );
  });
});
