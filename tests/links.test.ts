import { describe, it, expect } from 'vitest';
import { isExternalHref, externalLinkAttrs } from '@lib/links';

describe('isExternalHref', () => {
  it('treats other websites as external', () => {
    expect(isExternalHref('https://toltec-dev.org/')).toBe(true);
    expect(isExternalHref('http://mobileread.com/forums')).toBe(true);
    expect(isExternalHref('https://www.amazon.com/s?k=case')).toBe(true);
    expect(isExternalHref('//example.com/path')).toBe(true);
  });

  it('treats our own site and relative links as internal', () => {
    expect(isExternalHref('/devices/kobo/')).toBe(false);
    expect(isExternalHref('/about/#funding')).toBe(false);
    expect(isExternalHref('#fix-1')).toBe(false);
    expect(isExternalHref('https://readertweaks.com/guides/')).toBe(false);
    expect(isExternalHref('https://www.readertweaks.com/')).toBe(false);
  });

  it('is not fooled by lookalike hostnames', () => {
    expect(isExternalHref('https://readertweaks.com.evil.example/')).toBe(true);
    expect(isExternalHref('https://notreadertweaks.com/')).toBe(true);
  });

  it('ignores non-web schemes and junk', () => {
    expect(isExternalHref('mailto:hello@readertweaks.com')).toBe(false);
    expect(isExternalHref('tel:+15551234')).toBe(false);
    expect(isExternalHref('javascript:void(0)')).toBe(false);
    expect(isExternalHref('')).toBe(false);
    expect(isExternalHref(undefined)).toBe(false);
    expect(isExternalHref(null)).toBe(false);
    expect(isExternalHref('   ')).toBe(false);
  });
});

describe('externalLinkAttrs', () => {
  it('returns new-tab + safe rel + hooks for an external link', () => {
    const a = externalLinkAttrs('https://toltec-dev.org/');
    expect(a.target).toBe('_blank');
    expect(a['data-external']).toBe('');
    expect(a.class).toBe('is-external');
    const rel = (a.rel ?? '').split(' ');
    expect(rel).toContain('noopener');
    expect(rel).toContain('noreferrer');
    expect(rel).toContain('nofollow');
  });

  it('merges caller-supplied rel and class', () => {
    const a = externalLinkAttrs('https://www.amazon.com/dp/x', {
      rel: 'sponsored',
      class: 'btn btn--ghost',
    });
    expect(a.class).toBe('is-external btn btn--ghost');
    expect((a.rel ?? '').split(' ')).toContain('sponsored');
    expect((a.rel ?? '').split(' ')).toContain('noopener');
  });

  it('returns nothing extra for an internal link', () => {
    expect(externalLinkAttrs('/guides/')).toEqual({});
    expect(externalLinkAttrs('#anchor')).toEqual({});
  });

  it('keeps a caller class on an internal link but adds no external hooks', () => {
    expect(externalLinkAttrs('/guides/', { class: 'nextstep' })).toEqual({ class: 'nextstep' });
  });
});
