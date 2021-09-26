import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import store from './store'
import 'virtual:windi.css'

const messages = Object.fromEntries(
    Object.entries(
        import.meta.globEager('../locales/*.y(a)?ml'))
        .map(([key, value]) => {
        const yaml = key.endsWith('.yaml')
        return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
})

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App).use(router).use(store).use(i18n).use(createMetaManager())

await router.isReady()
app.mount('#app')
