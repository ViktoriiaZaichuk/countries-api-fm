import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import CountryView from '@/views/CountryView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/:alpha3Code',
            name: 'Country',
            component: CountryView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFoundView,
        }
    ]
});

export default router;
