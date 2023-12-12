import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'HomePage',
                component: () => import('@/view/HomePage.vue'),
                meta: {
                    title: 'Home'
                }
            },
            {
                path: 'about',
                name: 'AboutPage',
                component: () => import('@/view/AboutPage.vue'),
                meta: {
                    title: 'About'
                }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFoundPage',
        component: () => import('@/view/NotFoundPage.vue'),
        meta: {
            title: '404 Not found'
        }
    }
];

export default routes;