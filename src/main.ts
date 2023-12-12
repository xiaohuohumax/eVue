import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@/style/style.css';
import App from '@/App.vue';
import router from '@/router';
import logger from '@/util/logger';
import appConfig from '#/app.config';

(async () => {
    logger.info('app name: ' + appConfig.name);

    const app = createApp(App);

    app.use(createPinia());
    app.use(router);

    // setTimeout(() => app.mount('#app'), 3000);
    app.mount('#app');
})();
