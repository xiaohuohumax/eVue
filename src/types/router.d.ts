import 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        // 网页title名称
        title?: string
    }
}