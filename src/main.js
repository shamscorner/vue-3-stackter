import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import './index.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App).use(router).use(createPinia()).use(createMetaManager())

await router.isReady()
app.mount('#app')
