import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-nojekyll',
      closeBundle() {
        const nojekyllSrc = join(process.cwd(), '.nojekyll')
        const nojekyllDest = join(process.cwd(), 'dist', '.nojekyll')
        if (existsSync(nojekyllSrc)) {
          copyFileSync(nojekyllSrc, nojekyllDest)
        }
      },
    },
  ],
  base: '/',
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})

