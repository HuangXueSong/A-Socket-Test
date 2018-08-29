// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

import '@/assets/css/reset.css'
import '@/assets/css/tool.css'

let io = socketio('http://172.20.25.177:5001')
Vue.use(VueSocketio,io);

Vue.prototype.$axios = axios
// Vue.prototype.$axios.defaults.baseURL = 'http://test.node.com'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})