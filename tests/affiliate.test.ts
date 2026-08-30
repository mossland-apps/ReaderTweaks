import { describe, it, expect } from 'vitest';
import { amazonSearch, withAmazonTag, isAmazonUrl } from '@lib/affiliate';

describe('isAmazonUrl', () => {
  it('recognises amazon storefronts', () => {
    expect(isAmazonUrl('https://www.amazon.com/dp/B0ABC')).toBe(true);
    expect(isAmazonUrl('https://amazon.co.uk/s?k=case')).toBe(true);
    expect(isAmazonUrl('https://smile.amazon.de/x')).toBe(true);
  });
  it('rejects everything else', () => {
    expect(isAmazonUrl('https://kobo.com')).toBe(false);
    expect(isAmazonUrl('not a url')).toBe(false);
    expect(isAmazonUrl('https://notamazon.com/amazon.com')).toBe(false);
  });
});

describe('amazonSearch', () => {
  it('builds a search URL for the query', () => {
    const url = amazonSearch('Kobo Sage SleepCover', '');
    expect(url).toBe('https://www.amazon.com/s?k=Kobo+Sage+SleepCover');
  });
  it('appends the associate tag when one is given', () => {
    const url = amazonSearch('reading light', 'readertweaks-20');
    expect(url).toBe('https://www.amazon.com/s?k=reading+light&tag=readertweaks-20');
  });
  it('url-encodes special characters in the query', () => {
    expect(amazonSearch('USB-C cable & charger', '')).toBe(
      'https://www.amazon.com/s?k=USB-C+cable+%26+charger',
    );
  });
});

describe('withAmazonTag', () => {
  it('adds the tag to an untagged amazon URL', () => {
    expect(withAmazonTag('https://www.amazon.com/dp/B0ABC', 'readertweaks-20')).toBe(
      'https://www.amazon.com/dp/B0ABC?tag=readertweaks-20',
    );
  });
  it('replaces an existing tag param', () => {
    expect(
      withAmazonTag('https://www.amazon.com/dp/B0ABC?tag=someone-else-20&x=1', 'readertweaks-20'),
    ).toBe('https://www.amazon.com/dp/B0ABC?tag=readertweaks-20&x=1');
  });
  it('leaves non-amazon URLs untouched', () => {
    expect(withAmazonTag('https://kobo.com/x', 'readertweaks-20')).toBe('https://kobo.com/x');
  });
  it('returns the URL unchanged when no tag is set', () => {
    expect(withAmazonTag('https://www.amazon.com/dp/B0ABC', '')).toBe(
      'https://www.amazon.com/dp/B0ABC',
    );
  });
});
