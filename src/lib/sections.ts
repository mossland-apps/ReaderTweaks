import type { Section, SectionSlug } from './types';

/**
 * The seven fixed sections that live beneath every device hub.
 * Order here is the order they appear in navigation everywhere on the site.
 */
export const SECTIONS: readonly Section[] = [
  {
    slug: 'guides',
    label: 'Guides',
    blurb: 'Step-by-step setup and how-to articles for this device.',
  },
  {
    slug: 'koreader',
    label: 'KOReader',
    blurb: 'Installing and living with the KOReader reading app.',
  },
  {
    slug: 'calibre',
    label: 'Calibre',
    blurb: 'Managing your library and sending books with Calibre.',
  },
  {
    slug: 'customization',
    label: 'Customization',
    blurb: 'Fonts, screensavers, gestures and other tweaks.',
  },
  {
    slug: 'troubleshooting',
    label: 'Troubleshooting',
    blurb: 'Fixes for the problems people actually hit.',
  },
  {
    slug: 'accessories',
    label: 'Accessories',
    blurb: 'Cases, styluses and lights worth owning.',
  },
  {
    slug: 'comparisons',
    label: 'Comparisons',
    blurb: 'How this device stacks up against the alternatives.',
  },
] as const;

const BY_SLUG = new Map<string, Section>(SECTIONS.map((s) => [s.slug, s]));

export function getSection(slug: string): Section | undefined {
  return BY_SLUG.get(slug);
}

export function sectionLabel(slug: string): string {
  return BY_SLUG.get(slug)?.label ?? slug;
}

export function isSectionSlug(slug: string): slug is SectionSlug {
  return BY_SLUG.has(slug);
}
