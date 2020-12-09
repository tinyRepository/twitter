import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import router from "./router";
import store from "./store";
import "@/styles/common.scss";
import "@/styles/variables.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
