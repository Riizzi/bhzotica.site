import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://bhz-optica.vercel.app',
  redirects: { '/espaco': '/atendimento' },
});
