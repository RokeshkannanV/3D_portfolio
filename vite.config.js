// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.glb']
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add the resolve.alias configuration to handle the warning
  resolve: {
    alias: {
      './three': 'three', // Assuming 'three' is a package/module that react-spring is trying to import
    },
  },
  // Add assetsInclude to include '*.glb' files in asset processing
  assetsInclude: ['**/*.glb'],
});
