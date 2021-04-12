import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from "./store";

Vue.config.productionTip = false
Vue.use(Vuelidate);

// Vue.createApp(App).use(router).mount('#app');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
