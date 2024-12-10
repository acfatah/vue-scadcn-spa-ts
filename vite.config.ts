import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { resolvers } from './src/components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer, tailwind()],
    },
  },
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      vueTemplate: true,
      dirs: [
        'src/components/helpers',
      ],
      imports: [
        'vue',
        'vue-router',
        {
          'vee-validate': [
            'useForm',
          ],
        },
      ],
    }),
    Components({
      dirs: [
        'src/components/ui',
        'src/components/extras',
        'src/components/layouts',
      ],
      resolvers,
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
