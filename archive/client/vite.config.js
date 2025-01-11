import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,  // Set the Vite development server port to 5001
  },
  build: {
    rollupOptions: {
      input: '/public/index.html',  // Explicitly set the HTML entry point
    },
  },
  publicDir: 'public',  // Ensure Vite uses the correct folder
  esbuild: {
    jsx: 'transform', // This tells Vite to transform JSX in .js files.
  },
});
