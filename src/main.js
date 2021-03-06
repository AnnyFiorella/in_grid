// librería para realizar peticiones REST(endpoints)
import VueAxios from 'vue-axios';
import axios from 'axios';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/main.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueAxios, axios);
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
