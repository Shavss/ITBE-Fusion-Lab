import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Vite development server port
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  assetsInclude: ['3dcitydb-web-map-2.0.0/**/*'],
});
