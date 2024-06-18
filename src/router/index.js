import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '@/pages/Start.vue'
import Quiz from '@/pages/Quiz.vue'
import Result from '@/pages/Result.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start,
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
    },
    {
        path: '/result/:key',
        name: 'Result',
        component: Result,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
