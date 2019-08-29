import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import router from "./router";
import "./rem";
import "./plugins/element";
import PUBLICURL from "../constants";
Vue.prototype.$publicUrl = PUBLICURL;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  VueAwesomeSwiper,
  router
}).$mount("#app");
