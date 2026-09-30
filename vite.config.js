import { resolve } from 'path';
import { defineConfig } from 'vite';

// Multi-page static site: index.html + help.html, deployed as-is to S3.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        help: resolve(__dirname, 'help.html'),
      },
    },
  },
});
