interface ImportMetaEnv {
    // 日志等级
    readonly VITE_LOGGER_LEVEL: import('loglevel').LogLevelDesc;
    // 路由模式
    readonly VITE_ROUTER_HISTORY?: import('@/router').RouterHistoryType;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
