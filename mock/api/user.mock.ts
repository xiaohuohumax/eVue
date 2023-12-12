import { mock } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

import result from '../result';


const base = '/api/user';

const methods: MockMethod[] = [
    {
        url: `${base}/query/:id`,
        method: 'post',
        response({ query: { id } }) {
            return result.success({
                data: mock({
                    id,
                    name: '@name',
                })
            });
        }
    }
];

export default methods;