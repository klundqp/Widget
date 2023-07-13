import VueRouter from "vue-router";

declare module 'vue/types/vue' {
    
    interface VueConstructor<V extends Vue = Vue> {
        router: VueRouter
    }
}