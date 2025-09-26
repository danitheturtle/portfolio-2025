import { loadEnv } from 'vite';
import { ViteUserConfig } from 'astro';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import { makeConfig } from './vite.config.ts';

process.env = {
  ...process.env,
  ...loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), ''),
};
const { VITE_UI_PORT: uiPort = '8080' } = process.env;

export default defineConfig({
  output: 'static',
  integrations: [react()],
  compressHTML: false,
  outDir: './dist',
  server: {
    port: parseInt(uiPort ?? '8080'),
  },
  vite: makeConfig({ dirname: './' }) as ViteUserConfig,
  build: {
    inlineStylesheets: 'never'
  }
});
