import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入vant样式
import "vant/lib/index.css";
// 导入自定义样式
import "@/assets/scss/app.scss";
import "@/mock";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
