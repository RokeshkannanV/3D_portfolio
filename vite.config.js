import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/3DPortfolio/', 
  resolve: {
    alias: {
      'three': 'three/src/Three.js',
    },
  },
  assetsInclude: ['**/*.glb'],
});
