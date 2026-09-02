/**
 * Rehype plugin: mark outbound links in rendered Markdown.
 *
 * Any <a> whose href points to another website gets target="_blank", a safe
 * rel, a data-external hook and the `is-external` class. The runtime script in
 * BaseLayout uses data-external to show a "you are leaving" confirmation, and
 * global.css uses `.is-external` for the ↗ marker. Doing this at build time
 * means the new-tab behaviour and marker work even before/without JavaScript.
 *
 * Dependency-free: walks the hast tree directly rather than pulling in
 * unist-util-visit.
 */

const DEFAULT_INTERNAL_HOSTS = ['readertweaks.com', 'www.readertweaks.com'];

function isExternal(href, internalHosts) {
  if (!href || typeof href !== 'string') return false;
  const trimmed = href.trim();
  if (trimmed === '' || trimmed.startsWith('#')) return false;
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return false;
  let url;
  try {
    url = new URL(trimmed, 'https://readertweaks.com');
  } catch {
    return false;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
  return !internalHosts.includes(url.host);
}

function decorate(node, internalHosts) {
  const props = (node.properties = node.properties || {});
  if (!isExternal(props.href, internalHosts)) return;

  props.target = '_blank';

  const rel = new Set(
    Array.isArray(props.rel)
      ? props.rel
      : typeof props.rel === 'string'
        ? props.rel.split(/\s+/).filter(Boolean)
        : [],
  );
  rel.add('nofollow');
  rel.add('noopener');
  rel.add('noreferrer');
  props.rel = [...rel];

  const className = new Set(
    Array.isArray(props.className)
      ? props.className
      : typeof props.className === 'string'
        ? props.className.split(/\s+/).filter(Boolean)
        : [],
  );
  className.add('is-external');
  props.className = [...className];

  props.dataExternal = '';
}

function walk(node, internalHosts) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'element' && node.tagName === 'a') {
    decorate(node, internalHosts);
  }
  const children = node.children;
  if (Array.isArray(children)) {
    for (const child of children) walk(child, internalHosts);
  }
}

export default function rehypeExternalLinks(options = {}) {
  const internalHosts = options.internalHosts || DEFAULT_INTERNAL_HOSTS;
  return (tree) => {
    walk(tree, internalHosts);
    return tree;
  };
}
