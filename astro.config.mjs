import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from './src/lib/rehype-external-links.mjs';

// https://astro.build
export default defineConfig({
  site: 'https://readertweaks.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/search/') && !page.includes('/subscribe/'),
    }),
  ],
});
