import { defineConfig, loadEnv, UserConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

export const makeConfig = ({
  dirname,
  mode = 'development',
}: {
  dirname: string;
  mode: string | undefined;
}): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  const { VITE_UI_PORT: uiPort = '8080' } = process.env;
  return {
    cacheDir: '../node_modules/.vite',
    root: dirname,
    server: {
      port: parseInt(uiPort ?? '8080'),
      strictPort: true,
    },
    plugins: [reactPlugin(), tsconfigPaths(), tailwindcss()],
    css: {
      postcss: './postcss.config.js',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    },
    envPrefix: ['VITE_'],
    build: {
      outDir: './dist',
      minify: process.env.NODE_ENV === 'development' ? false : true,
      sourcemap: process.env.NODE_ENV === 'development' ? false : true,
    },
  };
};
export default defineConfig(
  makeConfig({ dirname: './', mode: process.env.NODE_ENV })
);
