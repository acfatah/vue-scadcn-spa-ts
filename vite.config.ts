import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer, tailwind()],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
