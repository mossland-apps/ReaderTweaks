import { describe, it, expect } from 'vitest';
import { formatMonthYear, specRows } from '@lib/format';
import type { Device } from '@lib/types';

describe('formatMonthYear', () => {
  it('renders a date as "Month YYYY"', () => {
    expect(formatMonthYear(new Date('2026-08-15T12:00:00Z'))).toBe('August 2026');
  });
});

describe('specRows', () => {
  const device: Device = {
    slug: 'libra-colour',
    name: 'Kobo Libra Colour',
    shortName: 'Libra Colour',
    brand: 'kobo',
    status: 'complete',
    order: 1,
    releaseYear: 2024,
    summary: '',
    specs: {
      screenSize: '7 in',
      resolution: '1680 x 1264',
      color: true,
      waterproof: true,
      physicalButtons: true,
      stylusSupport: true,
      audioSupport: false,
      storage: '32 GB',
    },
  };

  it('returns labelled rows, booleans rendered as Yes/No', () => {
    const rows = specRows(device);
    const map = Object.fromEntries(rows.map((r) => [r.label, r.value]));
    expect(map['Screen size']).toBe('7 in');
    expect(map['Colour screen']).toBe('Yes');
    expect(map['Audio support']).toBe('No');
    expect(map['Storage']).toBe('32 GB');
  });

  it('skips spec fields that were not provided', () => {
    const rows = specRows(device);
    expect(rows.find((r) => r.label === 'Weight')).toBeUndefined();
  });

  it('always includes the release year', () => {
    const rows = specRows(device);
    expect(rows.find((r) => r.label === 'Released')?.value).toBe('2024');
  });
});
