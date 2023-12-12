import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';


function resolve(...paths: string[]) {
    return path.resolve(__dirname, ...paths);
}

// https://vitejs.dev/config/
export default defineConfig({
    envDir: 'env',
    plugins: [
        vue(),
        viteMockServe({
            mockPath: 'mock/api',
            localEnabled: true,
            prodEnabled: false,
            watchFiles: true
        })
    ],
    resolve: {
        alias: {
            '@': resolve('src/'),
            '#': resolve('./')
        }
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve('index.html'),
                appConfig: resolve('app.config.ts')
            },
            output: {
                entryFileNames({ name, isEntry }) {
                    return isEntry && name === 'appConfig'
                        ? 'app.config.js'
                        : 'assets/[name]-[hash].js';
                },
            }
        }
    }
});
