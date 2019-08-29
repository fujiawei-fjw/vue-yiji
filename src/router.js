import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Yindao from "./components/Yindao.vue";
import Tuijian from "./components/Tuijian.vue";
import Fabu from "./components/Fabu.vue";
import Geren from "./components/Geren.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Yindao
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/tuijian",
      component: Tuijian
    },
    {
      path: "/fabu",
      component: Fabu
    },
    {
      path: "/geren",
      component: Geren
    }
  ],
  mode: "history"
});
