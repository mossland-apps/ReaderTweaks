import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://readertweaks.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/search/') && !page.includes('/subscribe/'),
    }),
  ],
});
