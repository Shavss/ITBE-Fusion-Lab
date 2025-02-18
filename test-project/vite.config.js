import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development or production)
  const env = import.meta.env;

  return {
    plugins: [react()],
    server: {
      port: 5001,  // Updated port as per your Docker requirement
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL || 'http://localhost:5001', // Use environment variable or fallback
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
      'import.meta.env': env,  // Ensure Vite environment variables are used correctly
    },
  };
});
