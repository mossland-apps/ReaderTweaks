import type { Device } from './types';

/** Leading number from a screen-size string like "7 in" or "11.8 in". */
export function screenInches(device: Device): number | undefined {
  const raw = device.specs.screenSize;
  if (!raw) return undefined;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n : undefined;
}

/**
 * Pick a sensible set of devices to compare against: same-brand siblings first
 * (closest screen size, then catalogue order), then the closest-size devices
 * from other brands.
 */
export function comparisonTargets(device: Device, all: Device[], limit = 3): Device[] {
  const self = screenInches(device);
  const sizeGap = (d: Device) => {
    const s = screenInches(d);
    return self !== undefined && s !== undefined ? Math.abs(s - self) : Number.POSITIVE_INFINITY;
  };
  const others = all.filter((d) => d.slug !== device.slug);

  const sameBrand = others
    .filter((d) => d.brand === device.brand)
    .sort((a, b) => sizeGap(a) - sizeGap(b) || a.order - b.order);

  const otherBrand = others
    .filter((d) => d.brand !== device.brand)
    .sort(
      (a, b) =>
        sizeGap(a) - sizeGap(b) ||
        b.releaseYear - a.releaseYear ||
        a.name.localeCompare(b.name),
    );

  return [...sameBrand, ...otherBrand].slice(0, limit);
}

export interface CompareRow {
  label: string;
  values: string[]; // aligned to the devices array
  differs: boolean;
}

type Accessor = (d: Device) => string | boolean | undefined;

const yesNo = (v: boolean) => (v ? 'Yes' : 'No');

const SPEC_FIELDS: { label: string; get: Accessor }[] = [
  { label: 'Screen size', get: (d) => d.specs.screenSize },
  { label: 'Resolution', get: (d) => d.specs.resolution },
  { label: 'Colour screen', get: (d) => d.specs.color },
  { label: 'Front light', get: (d) => d.specs.frontlight },
  { label: 'Warm light', get: (d) => d.specs.warmLight },
  { label: 'Storage', get: (d) => d.specs.storage },
  { label: 'Waterproof', get: (d) => d.specs.waterproof },
  { label: 'Page-turn buttons', get: (d) => d.specs.physicalButtons },
  { label: 'Stylus support', get: (d) => d.specs.stylusSupport },
  { label: 'Audio support', get: (d) => d.specs.audioSupport },
  { label: 'Weight', get: (d) => d.specs.weight },
];

function render(v: string | boolean | undefined): string {
  if (v === undefined) return '—';
  if (typeof v === 'boolean') return yesNo(v);
  return v;
}

/** Build an aligned comparison table for two or more devices. */
export function compareRows(devices: Device[]): CompareRow[] {
  const rows: CompareRow[] = [];

  for (const field of SPEC_FIELDS) {
    const values = devices.map((d) => render(field.get(d)));
    if (values.every((v) => v === '—')) continue;
    rows.push({ label: field.label, values, differs: new Set(values).size > 1 });
  }

  const released = devices.map((d) => String(d.releaseYear));
  rows.push({
    label: 'Released',
    values: released,
    differs: new Set(released).size > 1,
  });

  return rows;
}
