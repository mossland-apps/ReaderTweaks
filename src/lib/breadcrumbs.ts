import type { Brand, Device, SectionSlug } from './types';
import type { Crumb } from './seo';
import { sectionLabel } from './sections';
import { deviceHref } from './devices';

/**
 * The canonical breadcrumb trail for anything under a device:
 * Home / Devices / <Brand> / <Device> [/ <Section> [/ <Leaf>]]
 * Feed the result to both <Breadcrumbs> and breadcrumbJsonLd so the visible
 * trail and the structured data never drift apart.
 */
export function deviceTrail(
  brand: Brand,
  device: Device,
  section?: SectionSlug,
  leaf?: Crumb,
): Crumb[] {
  const trail: Crumb[] = [
    { name: 'Home', path: '/' },
    { name: 'Devices', path: '/devices/' },
    { name: brand.name, path: `/devices/${brand.slug}/` },
    { name: device.shortName, path: deviceHref(device) },
  ];
  if (section) {
    trail.push({ name: sectionLabel(section), path: `${deviceHref(device)}${section}/` });
  }
  if (leaf) trail.push(leaf);
  return trail;
}
