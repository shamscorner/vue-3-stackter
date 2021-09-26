import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }), 
        Pages(), 
        Layouts(), 
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],
      
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],             
        }),
        WindiCSS(),
        // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            include: [path.resolve(__dirname, 'locales/**')],
        }),
        ],

    server: {
        fs: {
          strict: false,
        },
    },
})
