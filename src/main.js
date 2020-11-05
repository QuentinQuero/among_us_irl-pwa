import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "@/router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import and define layouts
import defaultLayout from "@/layouts/online";
import offlineLayout from "@/layouts/offline";

Vue.component('default-layout', defaultLayout);
Vue.component('offline-layout', offlineLayout);

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

