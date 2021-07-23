import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App).use(router).use(createMetaManager())

await router.isReady()
app.mount('#app')
