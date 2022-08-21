import { createRouter, createWebHashHistory } from "vue-router";

import Home from '@/views/Index.vue'
// import Login from '@/components/Login.vue'
import Login from '@/views/Login.vue'
const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/",
        name: "Login",
        component: Login
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router