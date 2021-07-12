import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

const app = createApp(App).use(router).use(store).use(createMetaManager())

await router.isReady()
app.mount('#app')
