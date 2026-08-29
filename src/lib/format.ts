import type { Device } from './types';

const MONTH_YEAR = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatMonthYear(date: Date): string {
  return MONTH_YEAR.format(date);
}

export interface SpecRow {
  label: string;
  value: string;
}

const yesNo = (v: boolean) => (v ? 'Yes' : 'No');

/**
 * Flatten a device's specs into labelled rows for the hub spec table.
 * Fields that were not provided are skipped; the release year is always shown.
 */
export function specRows(device: Device): SpecRow[] {
  const s = device.specs;
  const rows: Array<SpecRow | null> = [
    { label: 'Released', value: String(device.releaseYear) },
    s.screenSize ? { label: 'Screen size', value: s.screenSize } : null,
    s.resolution ? { label: 'Resolution', value: s.resolution } : null,
    s.ppi ? { label: 'Pixel density', value: s.ppi } : null,
    s.color !== undefined ? { label: 'Colour screen', value: yesNo(s.color) } : null,
    s.frontlight !== undefined ? { label: 'Front light', value: yesNo(s.frontlight) } : null,
    s.warmLight !== undefined ? { label: 'Warm light', value: yesNo(s.warmLight) } : null,
    s.storage ? { label: 'Storage', value: s.storage } : null,
    s.waterproof !== undefined ? { label: 'Waterproof', value: yesNo(s.waterproof) } : null,
    s.physicalButtons !== undefined
      ? { label: 'Page-turn buttons', value: yesNo(s.physicalButtons) }
      : null,
    s.stylusSupport !== undefined ? { label: 'Stylus support', value: yesNo(s.stylusSupport) } : null,
    s.audioSupport !== undefined ? { label: 'Audio support', value: yesNo(s.audioSupport) } : null,
    s.os ? { label: 'Operating system', value: s.os } : null,
    s.formats && s.formats.length ? { label: 'Native formats', value: s.formats.join(', ') } : null,
    s.weight ? { label: 'Weight', value: s.weight } : null,
    s.dimensions ? { label: 'Dimensions', value: s.dimensions } : null,
  ];
  return rows.filter((r): r is SpecRow => r !== null);
}
