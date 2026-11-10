import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://bhz-optica.vercel.app',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
