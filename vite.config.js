import { defineConfig } from 'vite';
import path from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    base: '/goit-js-hw-12/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(__dirname, 'src/index.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor';
          },
          entryFileNames: '[name].js',
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      SortCss({ sort: 'mobile-first' }),
    ],
  };
});