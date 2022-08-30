import { createRouter, createWebHashHistory } from "vue-router";

import Home from '@/views/Index.vue'
import Arcgis from '@/views/Arcgis.vue'
// import Login from '@/components/Login.vue'
import Login from '@/views/Login.vue'
import Ol from '@/views/Ol.vue'
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
    },
    {
        path: "/arcgis",
        name: "Arcgis",
        component: Arcgis
    },
    {
        path: "/ol",
        name: "Ol",
        component: Ol
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router