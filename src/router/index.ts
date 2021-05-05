import { createRouter, createWebHistory } from "vue-router";

const routes: any[] = [
    {
        path: '/login',
        name:'Login',
        component: () => import('./../views/login/login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router