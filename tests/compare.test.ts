import { describe, it, expect } from 'vitest';
import { screenInches, comparisonTargets, compareRows } from '@lib/compare';
import type { Device } from '@lib/types';

const mk = (over: Partial<Device> & { slug: string }): Device => ({
  name: over.name ?? over.slug,
  shortName: over.shortName ?? over.slug,
  brand: over.brand ?? 'kobo',
  status: over.status ?? 'complete',
  order: over.order ?? 0,
  releaseYear: over.releaseYear ?? 2024,
  summary: '',
  specs: over.specs ?? {},
  ...over,
});

const libra = mk({
  slug: 'libra-colour',
  shortName: 'Libra Colour',
  brand: 'kobo',
  order: 1,
  releaseYear: 2024,
  specs: { screenSize: '7 in', color: true, waterproof: true, physicalButtons: true, storage: '32 GB' },
});
const clara = mk({
  slug: 'clara-bw',
  shortName: 'Clara BW',
  brand: 'kobo',
  order: 2,
  releaseYear: 2024,
  specs: { screenSize: '6 in', color: false, waterproof: false, physicalButtons: false, storage: '16 GB' },
});
const sage = mk({
  slug: 'sage',
  shortName: 'Sage',
  brand: 'kobo',
  order: 3,
  releaseYear: 2021,
  specs: { screenSize: '8 in', color: false, waterproof: true, physicalButtons: true, storage: '32 GB' },
});
const paperwhite = mk({
  slug: 'paperwhite',
  shortName: 'Paperwhite',
  brand: 'kindle',
  order: 1,
  releaseYear: 2024,
  specs: { screenSize: '7 in', color: false, waterproof: true, physicalButtons: false, storage: '16 GB' },
});
const remarkable = mk({
  slug: 'remarkable-paper-pro',
  shortName: 'Paper Pro',
  brand: 'remarkable',
  order: 1,
  releaseYear: 2024,
  specs: { screenSize: '11.8 in', color: true, physicalButtons: false },
});

const all = [libra, clara, sage, paperwhite, remarkable];

describe('screenInches', () => {
  it('parses the leading number from a screen-size string', () => {
    expect(screenInches(libra)).toBe(7);
    expect(screenInches(remarkable)).toBe(11.8);
  });
  it('is undefined when there is no screen size', () => {
    expect(screenInches(mk({ slug: 'x' }))).toBeUndefined();
  });
});

describe('comparisonTargets', () => {
  it('never includes the device itself', () => {
    const t = comparisonTargets(libra, all);
    expect(t.some((d) => d.slug === 'libra-colour')).toBe(false);
  });

  it('prefers same-brand devices first', () => {
    const t = comparisonTargets(libra, all, 3);
    // The first picks should be the other Kobos.
    expect(t.slice(0, 2).every((d) => d.brand === 'kobo')).toBe(true);
    expect(t.map((d) => d.slug)).toContain('clara-bw');
    expect(t.map((d) => d.slug)).toContain('sage');
  });

  it('fills remaining slots with the closest-size device from another brand', () => {
    const t = comparisonTargets(libra, all, 3);
    // 7in Paperwhite is a closer match than the 11.8in reMarkable.
    expect(t.map((d) => d.slug)).toContain('paperwhite');
    expect(t.map((d) => d.slug)).not.toContain('remarkable-paper-pro');
  });

  it('respects the limit', () => {
    expect(comparisonTargets(libra, all, 2)).toHaveLength(2);
  });
});

describe('compareRows', () => {
  it('returns one row per comparable spec, values aligned to the device order', () => {
    const rows = compareRows([libra, clara, paperwhite]);
    const screen = rows.find((r) => r.label === 'Screen size');
    expect(screen?.values).toEqual(['7 in', '6 in', '7 in']);
  });

  it('renders booleans as Yes / No and missing values as a dash', () => {
    const rows = compareRows([libra, remarkable]);
    const buttons = rows.find((r) => r.label === 'Page-turn buttons');
    expect(buttons?.values).toEqual(['Yes', 'No']);
    const storage = rows.find((r) => r.label === 'Storage');
    expect(storage?.values).toEqual(['32 GB', '—']);
  });

  it('flags rows where the devices differ', () => {
    const rows = compareRows([libra, clara]);
    expect(rows.find((r) => r.label === 'Colour screen')?.differs).toBe(true);
    expect(rows.find((r) => r.label === 'Released')?.differs).toBe(false);
  });

  it('always includes the release year row', () => {
    const rows = compareRows([libra, clara]);
    expect(rows.find((r) => r.label === 'Released')?.values).toEqual(['2024', '2024']);
  });
});
