import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import store from './store'
import './index.css'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App).use(router).use(store).use(createMetaManager())

await router.isReady()
app.mount('#app')
