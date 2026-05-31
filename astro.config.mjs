// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Player2610.github.io',
  base: '/portfolio_elec',
  integrations: [sitemap()],
});