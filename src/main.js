import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "@/router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueQrcodeReader from "vue-qrcode-reader";

// Import and define layouts
import onlineLayout from "@/layouts/online";
import offlineLayout from "@/layouts/offline";
import inGameLayout from "@/layouts/inGame";

Vue.component('online-layout', onlineLayout);
Vue.component('offline-layout', offlineLayout);
Vue.component('inGame-layout', inGameLayout);

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueQrcodeReader);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

