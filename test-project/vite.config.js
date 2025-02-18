import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const backendUrl = process.env.VITE_BACKEND_URL || 'http://localhost:5001';

  return {
    plugins: [react()],
    server: {
      port: 5001,
      proxy: {
        '/api': {
          target: backendUrl,
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
    define: {
      'import.meta.env.VITE_BACKEND_URL': JSON.stringify(backendUrl),  // Ensure Vite environment variables are set correctly
    },
  };
});
