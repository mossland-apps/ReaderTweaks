import { describe, it, expect } from 'vitest';
import { SECTIONS, getSection, sectionLabel, isSectionSlug } from '@lib/sections';

describe('device sections', () => {
  it('defines exactly the seven fixed sections in order', () => {
    expect(SECTIONS.map((s) => s.slug)).toEqual([
      'guides',
      'koreader',
      'calibre',
      'customization',
      'troubleshooting',
      'accessories',
      'comparisons',
    ]);
  });

  it('every section has a human label and a short blurb', () => {
    for (const s of SECTIONS) {
      expect(s.label.length).toBeGreaterThan(0);
      expect(s.blurb.length).toBeGreaterThan(0);
    }
  });

  it('looks up a section by slug', () => {
    expect(getSection('koreader')?.label).toBe('KOReader');
    expect(getSection('nope')).toBeUndefined();
  });

  it('exposes a label helper that falls back to the slug', () => {
    expect(sectionLabel('calibre')).toBe('Calibre');
    expect(sectionLabel('mystery')).toBe('mystery');
  });

  it('recognises valid section slugs', () => {
    expect(isSectionSlug('troubleshooting')).toBe(true);
    expect(isSectionSlug('store')).toBe(false);
  });
});
