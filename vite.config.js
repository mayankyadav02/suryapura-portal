import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async')) {
            return 'react-vendor';
          }
          if (id.includes('framer-motion') || id.includes('gsap') || id.includes('@studio-freight/lenis')) {
            return 'motion-vendor';
          }
          if (id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'ui-vendor';
          }
        },
      },
    },
  },
});