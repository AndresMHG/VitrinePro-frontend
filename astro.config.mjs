// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [{
        provider: fontProviders.google(),
          name: "Inter",
          cssVariable: "--font-inter"
      }]
  },
  integrations: [vue()]
});