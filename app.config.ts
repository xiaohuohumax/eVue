import { AxiosRequestConfig } from 'axios';

export interface AppConfig {
    name: string,
    axoisConfig: AxiosRequestConfig,
}

const appConfig: AppConfig =
{
    name: 'eVue',
    axoisConfig: {
        baseURL: '/api'
    }
};

export default appConfig;