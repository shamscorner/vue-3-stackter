import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router