// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

let io = socketio('http://172.20.25.177:5001')
Vue.use(VueSocketio,io);

Vue.prototype.io = io;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})