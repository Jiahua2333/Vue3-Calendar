import { createRouter, createWebHistory } from 'vue-router'
import Day from "@/views/Day.vue";


const routes = [
    {
        path:"/",
        name:"day",
        component:Day,
    },
    {
        path:"/month",
        name:"month",
        component:() => import('../views/Month.vue'),
    },
    {
        path:"/year",
        name:"year",
        component:() => import('../views/Year.vue'),
    },
    {
        path:"/:pathMatch(.*)*",
        name:"default",
        redirect:"/",
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
