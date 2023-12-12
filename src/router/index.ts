import {
    createMemoryHistory, createRouter, createWebHashHistory, createWebHistory, RouterHistory
} from 'vue-router';
import routes from './routes';

export type RouterHistoryType = 'MemoryHistory' | 'WebHashHistory' | 'WebHistory';

const historyFuncMap: {
    [key in RouterHistoryType]: (base?: string) => RouterHistory
} = {
    'WebHashHistory': createWebHashHistory,
    'MemoryHistory': createMemoryHistory,
    'WebHistory': createWebHistory
};

function getHistoryFunc(routerHistory?: RouterHistoryType) {
    return routerHistory && Object.keys(historyFuncMap).includes(routerHistory)
        ? historyFuncMap[routerHistory]
        : historyFuncMap.MemoryHistory;
}

const router = createRouter({
    history: getHistoryFunc(import.meta.env.VITE_ROUTER_HISTORY)(),
    routes
});

router.beforeEach((to, _from, next) => {
    to?.meta?.title && (document.title = to.meta.title);
    next();
});

export default router;