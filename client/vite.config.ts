/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      process: 'process/browser',
      util: 'util',
      "@public": path.resolve(__dirname, "./public"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@features': path.resolve(__dirname, './src/features'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@test': path.resolve(__dirname, './src/test'),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: path.resolve(__dirname, './src/test/setupTest.ts'),
    include: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    reporters: ['verbose']
  }
})
