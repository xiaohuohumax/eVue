import { request } from '@/util/request';

const base = '/user';

interface User {
    id: string,
    name: string
}

export const queryById = (id: string) =>
    request<null, User>({
        url: `${base}/query/${id}`,
        method: 'POST'
    });
