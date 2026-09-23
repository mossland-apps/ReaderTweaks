// Amazon Associates tagging.
// The tag is read from the PUBLIC_AMAZON_TAG build-time environment variable
// (set in the Cloudflare Pages project). When it is unset, links still work —
// they just do not earn a commission.

export const AMAZON_TAG: string =
  (import.meta.env.PUBLIC_AMAZON_TAG as string | undefined)?.trim() || '';

/** True if the URL points at an Amazon storefront on any TLD. */
export function isAmazonUrl(url: string): boolean {
  let host: string;
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    return false;
  }
  const labels = host.split('.');
  const i = labels.indexOf('amazon');
  // "amazon" must be the registrable domain label: amazon.com, amazon.co.uk,
  // www.amazon.de — not notamazon.com or amazon.com.evil.net.
  return i > -1 && i >= labels.length - 3 && i <= labels.length - 2;
}

/** A tagged Amazon search URL for a free-text query. */
export function amazonSearch(query: string, tag: string = AMAZON_TAG): string {
  const qs = new URLSearchParams({ k: query }).toString();
  const base = `https://www.amazon.com/s?${qs}`;
  return tag ? `${base}&tag=${tag}` : base;
}

/** Add or replace the associate tag on an Amazon URL. Non-Amazon URLs pass through. */
export function withAmazonTag(url: string, tag: string = AMAZON_TAG): string {
  if (!tag || !isAmazonUrl(url)) return url;
  try {
    const u = new URL(url);
    u.searchParams.set('tag', tag);
    return u.toString();
  } catch {
    return url;
  }
}

export interface DeviceShopLink {
  href: string;
  label: string;
}

/**
 * The "Shop {device} at Amazon" button for a device hub. The product link is
 * used exactly as supplied (it was generated in Amazon Associates and already
 * carries the tag), so it is not re-tagged. Returns null when the device has no
 * Amazon listing, which hides the button.
 */
export function deviceShopLink(device: {
  name: string;
  amazonUrl?: string;
}): DeviceShopLink | null {
  const href = device.amazonUrl?.trim();
  if (!href || !isAmazonUrl(href)) return null;
  return { href, label: `Shop ${device.name} at Amazon` };
}
