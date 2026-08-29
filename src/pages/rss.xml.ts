import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { loadLearn } from '../lib/content';
import { SITE } from '../lib/seo';

export async function GET(context: APIContext) {
  const learn = await loadLearn();
  return rss({
    title: `${SITE.name} — Guides`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: learn.map((a) => ({
      title: a.title,
      description: a.summary,
      link: `/guides/${a.slug}/`,
      pubDate: a.lastUpdated,
    })),
  });
}
