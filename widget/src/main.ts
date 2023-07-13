import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.config.productionTip = false

App.router = router
Vue.customElement('vue-widget', App)