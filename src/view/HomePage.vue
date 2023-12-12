<template>
    <h2>Page Home</h2>
    <RouterLink to="/about">
        <button>Anout</button>
    </RouterLink>
    <button @click="queryUser">axios</button>
    <button @click="defineStore.add">count: {{ defineStore.count }}</button>
    <HelloWorld :msg="'Hello World'"/>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { queryById } from '@/api/user.api';
import { useDefineStore } from '@/store/define.store';
import logger from '@/util/logger';

const defineStore = useDefineStore();

function queryUser() {
    const id = new Date().getTime().toString();
    queryById(id)
        .then(res => {
            const userInfo = JSON.stringify(res, undefined, 4);
            alert(userInfo);
            logger.info(userInfo);
        })
        .catch(err => {
            alert(err.message);
            logger.error(err);
        });
}
</script>