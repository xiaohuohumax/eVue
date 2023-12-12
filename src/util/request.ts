import axios, { AxiosRequestConfig } from 'axios';

import appConfig from '#/app.config';

export interface Result<D> {
    code: number,
    msg: string,
    data: D
}

const instance = axios.create({
    ...appConfig.axoisConfig
});

instance.interceptors.request.use(config => {
    return config;
}, err => Promise.reject(err));

instance.interceptors.response.use(response => {
    return response.data;
}, err => Promise.reject(err));

export function request<D = null, R = unknown>(config: AxiosRequestConfig<D>) {
    return instance.request<null, Result<R>, D>(config);
}