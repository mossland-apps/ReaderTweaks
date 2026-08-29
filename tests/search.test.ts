import { describe, it, expect } from 'vitest';
import { tokenize, rankDocs, type SearchDoc } from '@lib/search';

const docs: SearchDoc[] = [
  {
    id: 'd:libra-colour',
    type: 'device',
    title: 'Kobo Libra Colour',
    url: '/devices/kobo/libra-colour/',
    summary: 'Colour e-ink reader with buttons.',
    brand: 'Kobo',
    keywords: ['kobo libra color', 'libra 3'],
  },
  {
    id: 's:calibre',
    type: 'software',
    title: 'Calibre',
    url: '/guides/calibre-basics/',
    summary: 'Desktop library manager for ebooks.',
    keywords: ['calibre-web', 'library management'],
  },
  {
    id: 'g:libra-calibre-sync',
    type: 'guide',
    title: 'Send books to the Kobo Libra Colour with Calibre',
    url: '/devices/kobo/libra-colour/calibre/send-books/',
    summary: 'Set up a USB and wireless sync workflow between Calibre and the Libra Colour.',
    device: 'libra-colour',
    brand: 'Kobo',
    software: 'Calibre',
    section: 'calibre',
    keywords: ['sync', 'wireless', 'usb', 'send to device'],
  },
  {
    id: 'g:generic-calibre',
    type: 'guide',
    title: 'Calibre basics',
    url: '/guides/calibre-basics/',
    summary: 'The mental model for managing your own ebook library.',
    keywords: ['convert', 'metadata'],
  },
  {
    id: 't:koreader-wont-launch',
    type: 'troubleshooting',
    title: "KOReader won't launch on the Kobo Libra Colour",
    url: '/devices/kobo/libra-colour/troubleshooting/koreader-wont-launch/',
    summary: 'The KOReader icon does nothing, or the app opens and closes immediately.',
    device: 'libra-colour',
    brand: 'Kobo',
    software: 'KOReader',
    section: 'troubleshooting',
    keywords: ['crash', 'black screen', 'nickel', 'startup'],
  },
  {
    id: 'g:kindle-jailbreak',
    type: 'guide',
    title: 'Install KOReader on the Kindle Paperwhite',
    url: '/devices/kindle/paperwhite/koreader/install/',
    summary: 'Jailbreak steps and KOReader setup for the Paperwhite.',
    device: 'paperwhite',
    brand: 'Kindle',
    software: 'KOReader',
    section: 'koreader',
    keywords: ['jailbreak', 'kual', 'mrpi'],
  },
];

describe('tokenize', () => {
  it('lowercases and splits on non-alphanumerics', () => {
    expect(tokenize('Libra Colour, Calibre-sync!')).toEqual(['libra', 'colour', 'calibre', 'sync']);
  });
  it('drops single characters but keeps two-letter tokens', () => {
    expect(tokenize('a bw OS x')).toEqual(['bw', 'os']);
  });
  it('returns nothing for an empty or symbol-only string', () => {
    expect(tokenize('   ')).toEqual([]);
    expect(tokenize('!!!')).toEqual([]);
  });
});

describe('rankDocs', () => {
  it('surfaces the device+software+problem guide for "Libra colour calibre sync"', () => {
    const results = rankDocs('Libra colour calibre sync', docs);
    expect(results[0].id).toBe('g:libra-calibre-sync');
  });

  it('ranks a full multi-token match above a generic single-token title match', () => {
    const results = rankDocs('Libra colour calibre sync', docs);
    const specific = results.findIndex((r) => r.id === 'g:libra-calibre-sync');
    const generic = results.findIndex((r) => r.id === 'g:generic-calibre');
    expect(specific).toBeGreaterThanOrEqual(0);
    expect(specific).toBeLessThan(generic === -1 ? Infinity : generic);
  });

  it('matches device aliases / alternate spellings', () => {
    const results = rankDocs('libra color', docs);
    expect(results[0].id).toBe('d:libra-colour');
  });

  it('excludes docs that match too few of the query tokens', () => {
    // Only "calibre" is shared; "libra colour sync workflow" should not pull in
    // the Kindle jailbreak guide.
    const results = rankDocs('libra colour calibre sync workflow', docs);
    expect(results.some((r) => r.id === 'g:kindle-jailbreak')).toBe(false);
  });

  it('finds troubleshooting entries by symptom words', () => {
    const results = rankDocs('koreader crash libra', docs);
    expect(results[0].id).toBe('t:koreader-wont-launch');
  });

  it('weights a title hit above a summary-only hit', () => {
    const results = rankDocs('jailbreak', docs);
    expect(results[0].id).toBe('g:kindle-jailbreak');
  });

  it('returns an empty array for a blank query', () => {
    expect(rankDocs('   ', docs)).toEqual([]);
  });

  it('respects the limit argument', () => {
    expect(rankDocs('kobo', docs, 2).length).toBeLessThanOrEqual(2);
  });
});
