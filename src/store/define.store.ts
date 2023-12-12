import { defineStore, storeToRefs } from 'pinia';

export const useDefineStore = defineStore('define', {
    state: () => ({
        count: 0
    }), 
    actions: {
        add() {
            this.count++;
        }
    }
});

export function useDefineStoreRefs(){
    return storeToRefs(useDefineStore());
}