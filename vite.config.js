import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    // Disable lightningcss to prevent serverless build crashes on Vercel
    transformer: 'postcss',
  },
});