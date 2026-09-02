import { SITE } from './seo';

/**
 * Hosts that count as "this site". Anything else with an http(s) scheme is
 * treated as an outbound link: it opens in a new tab and, at runtime, shows a
 * "you are leaving ReaderTweaks" confirmation first.
 */
const INTERNAL_HOSTS = new Set<string>([
  new URL(SITE.url).host, // readertweaks.com
  `www.${new URL(SITE.url).host}`, // www.readertweaks.com
]);

/**
 * True when `href` points to another website.
 *
 * False for relative links, in-page anchors, `mailto:`/`tel:` and links back to
 * readertweaks.com. Never throws on malformed input — returns false instead.
 */
export function isExternalHref(href: string | null | undefined): boolean {
  if (!href) return false;
  const trimmed = href.trim();
  if (trimmed === '') return false;
  // Fast path for the common internal cases.
  if (trimmed.startsWith('#')) return false;
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return false;
  let url: URL;
  try {
    url = new URL(trimmed, SITE.url);
  } catch {
    return false;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
  return !INTERNAL_HOSTS.has(url.host);
}

/**
 * Merge `rel` tokens, keeping any already present and always adding the safety
 * set for outbound links.
 */
function mergeRel(existing?: string | null): string {
  const tokens = new Set(
    (existing ?? '')
      .split(/\s+/)
      .map((t) => t.trim())
      .filter(Boolean),
  );
  tokens.add('noopener');
  tokens.add('noreferrer');
  tokens.add('nofollow');
  return [...tokens].join(' ');
}

export interface ExternalLinkAttrs {
  target?: '_blank';
  rel?: string;
  class?: string;
  'data-external'?: string;
}

/**
 * Attributes to spread onto an `<a>` so an outbound link opens in a new tab, is
 * marked visually, and is picked up by the leaving-site confirmation script.
 *
 * Returns an empty object for internal links, so it is safe to spread
 * unconditionally: `<a href={href} {...externalLinkAttrs(href)}>`.
 */
export function externalLinkAttrs(
  href: string | null | undefined,
  opts: { rel?: string; class?: string } = {},
): ExternalLinkAttrs {
  if (!isExternalHref(href)) {
    return opts.class ? { class: opts.class } : {};
  }
  const className = ['is-external', opts.class].filter(Boolean).join(' ');
  return {
    target: '_blank',
    rel: mergeRel(opts.rel),
    class: className,
    'data-external': '',
  };
}
