import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portifolio/',
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
