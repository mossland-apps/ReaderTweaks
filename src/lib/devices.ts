import type {
  Article,
  Brand,
  BrandGroup,
  Comparison,
  Device,
  DeviceStatus,
  SectionSlug,
} from './types';

/** `/devices/{brand}/{device}/` — the permanent hub URL for a device. */
export function deviceHref(device: Device): string {
  return `/devices/${device.brand}/${device.slug}/`;
}

/** `/devices/{brand}/{device}/{section}/` */
export function sectionHref(device: Device, section: SectionSlug): string {
  return `${deviceHref(device)}${section}/`;
}

export function deviceStatusLabel(status: DeviceStatus): string {
  return status === 'complete' ? 'Complete' : 'In progress';
}

/**
 * Group devices under their brand, keeping brand order and device order.
 * Brands with no devices are dropped so the homepage grid never shows an
 * empty column.
 */
export function groupDevicesByBrand(devices: Device[], brands: Brand[]): BrandGroup[] {
  const orderedBrands = [...brands].sort((a, b) => a.order - b.order);
  const groups: BrandGroup[] = [];
  for (const brand of orderedBrands) {
    const owned = devices
      .filter((d) => d.brand === brand.slug)
      .sort((a, b) => a.order - b.order);
    if (owned.length > 0) {
      groups.push({ brand, devices: owned });
    }
  }
  return groups;
}

/**
 * Non-draft, non-overview articles for one device + section, in author order.
 * The overview article (the section's intro) is handled by `overviewArticle`.
 */
export function articlesForSection(
  articles: Article[],
  deviceSlug: string,
  section: SectionSlug,
): Article[] {
  return articles
    .filter(
      (a) =>
        a.device === deviceSlug &&
        a.section === section &&
        a.type !== 'overview' &&
        !a.draft,
    )
    .sort((a, b) => a.order - b.order);
}

export function overviewArticle(
  articles: Article[],
  deviceSlug: string,
  section: SectionSlug,
): Article | undefined {
  return articles.find(
    (a) =>
      a.device === deviceSlug &&
      a.section === section &&
      a.type === 'overview' &&
      !a.draft,
  );
}

/** Published comparisons that involve this device on either side. */
export function relatedComparisons(
  comparisons: Comparison[],
  deviceSlug: string,
): Comparison[] {
  return comparisons
    .filter((c) => !c.draft && (c.deviceA === deviceSlug || c.deviceB === deviceSlug))
    .sort((a, b) => a.title.localeCompare(b.title));
}
