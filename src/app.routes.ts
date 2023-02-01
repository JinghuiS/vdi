import { createRouter, createWebHashHistory } from 'vue-router'

export const AppRoutes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./app/test/test.vue')
        }
    ]
})
