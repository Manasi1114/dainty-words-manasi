// This file configures Astro (our web framework)
// You don't need to change anything here to get started!

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://daintyduck.netlify.app/',
  integrations: [sitemap()]
});