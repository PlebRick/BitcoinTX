import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'frontend', // Set frontend as the working directory
  build: {
    outDir: '../dist', // Output to BitcoinTX/dist
    rollupOptions: {
      input: 'frontend/index.html', // Path to index.html relative to the project root
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/frontend/src', // Alias for cleaner imports
    },
  },
});
