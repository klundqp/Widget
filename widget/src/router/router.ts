import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = new VueRouter({
  mode: "history",
  base: "",
  routes: routes,
  linkActiveClass: "active"
})

export default router
