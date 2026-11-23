
export const SITE = {
  url: 'https://readertweaks.com',
  name: 'ReaderTweaks',
  tagline: 'Get more out of your e-reader',
  description:
    'Practical, device-specific setup guides, troubleshooting and customization for Kobo, Kindle, BOOX, PocketBook and reMarkable e-readers.',
} as const;

/** Absolute canonical URL for a site-relative path, always trailing-slashed. */
export function canonical(path: string): string {
  if (path === '/' || path === '') return `${SITE.url}/`;
  let p = path.startsWith('/') ? path : `/${path}`;
  if (!p.endsWith('/')) p += '/';
  return `${SITE.url}${p}`;
}

/** Trim to a meta-description length on a word boundary, adding an ellipsis. */
export function truncateMeta(text: string, limit = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= limit) return clean;
  const slice = clean.slice(0, limit - 1);
  const lastSpace = slice.lastIndexOf(' ');
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : slice.length).trimEnd()}…`;
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonical(c.path),
    })),
  };
}

export interface ArticleLdInput {
  title: string;
  description: string;
  path: string;
  lastUpdated: Date;
  datePublished?: Date;
}

export function articleJsonLd(input: ArticleLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    mainEntityOfPage: canonical(input.path),
    dateModified: input.lastUpdated.toISOString(),
    datePublished: (input.datePublished ?? input.lastUpdated).toISOString(),
    author: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
    publisher: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
  };
}
