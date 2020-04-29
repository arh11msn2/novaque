// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { defaults } from 'axios';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const token = localStorage.getItem('auth_token');
defaults.headers.common.Authorization = `Bearer ${token}`;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
