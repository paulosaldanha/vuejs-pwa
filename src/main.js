// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

Vue.config.productionTip = false;

// NEW - register the service worker
if ('serviceWorker' in navigator) {
  runtime.register();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

 created(){
   store.commit('initializeStore');
 }
});
