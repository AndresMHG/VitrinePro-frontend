// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import path from 'path';

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
  integrations: [vue()],
  output: 'static',
  outDir: './docs',
  base: '/VitrinePro-frontend/',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
  },
});