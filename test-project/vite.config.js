import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,  // Set the Vite development server port to 5001
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
  // Add this line to serve the 3dwebclient as static assets
  assetsInclude: ['3dcitydb-web-map-2.0.0/**/*'],
});
