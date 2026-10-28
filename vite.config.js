import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Disable CSS minification to prevent lightningcss/rolldown crashes on Vercel
    cssMinify: false,
  },
});