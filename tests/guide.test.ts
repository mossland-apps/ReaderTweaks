import { describe, it, expect } from 'vitest';
import { howToJsonLd, parseDurationToISO } from '@lib/guide';
import type { Article } from '@lib/types';

const base: Article = {
  slug: 'libra-colour-koreader-install',
  pageSlug: 'install',
  title: 'Install KOReader on the Kobo Libra Colour',
  device: 'libra-colour',
  section: 'koreader',
  type: 'guide',
  summary: 'Put KOReader on the Libra Colour without replacing the stock reader.',
  lastUpdated: new Date('2026-08-20'),
  order: 1,
  draft: false,
  body: '',
  difficulty: 'Moderate',
  estimatedTime: '20 minutes',
  whatYouNeed: ['A USB-C cable', 'The KOReader .zip release'],
  steps: [
    { instruction: 'Download the current KOReader release for Kobo', detail: 'Grab the kobo .zip.' },
    { instruction: 'Connect the Libra Colour to your computer' },
    { instruction: 'Copy the files into the .kobo folder' },
  ],
};

describe('parseDurationToISO', () => {
  it('converts minutes', () => {
    expect(parseDurationToISO('20 minutes')).toBe('PT20M');
  });
  it('converts hours', () => {
    expect(parseDurationToISO('2 hours')).toBe('PT2H');
  });
  it('handles a combined form', () => {
    expect(parseDurationToISO('1 hour 30 minutes')).toBe('PT1H30M');
  });
  it('returns undefined for something unparseable', () => {
    expect(parseDurationToISO('a little while')).toBeUndefined();
  });
});

describe('howToJsonLd', () => {
  it('returns null when the guide has no steps', () => {
    expect(howToJsonLd({ ...base, steps: [] }, '/x/')).toBeNull();
  });

  it('builds a HowTo with numbered steps and total time', () => {
    const ld = howToJsonLd(base, '/devices/kobo/libra-colour/koreader/install/');
    expect(ld).not.toBeNull();
    expect(ld!['@type']).toBe('HowTo');
    expect(ld!.name).toContain('KOReader');
    expect(ld!.totalTime).toBe('PT20M');
    expect(ld!.step).toHaveLength(3);
    expect(ld!.step[0]).toMatchObject({ '@type': 'HowToStep', position: 1 });
    expect(ld!.step[0].text).toContain('Download');
    expect(ld!.step[2].position).toBe(3);
  });

  it('lists what-you-need as supplies', () => {
    const ld = howToJsonLd(base, '/x/');
    expect(ld!.supply.map((s: { name: string }) => s.name)).toContain('A USB-C cable');
  });
});
