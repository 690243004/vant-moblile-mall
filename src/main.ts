import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入vant样式
import "vant/lib/index.css";
// 导入自定义样式
import "@/assets/scss/app.scss";
import "@/mock";
import { PullRefresh } from "vant";
import BackToTop from "@c/BackToTop/index.vue";
// 导入有赞本地样式
import "vant/lib/icon/local.css";

Vue.config.productionTip = false;

Vue.prototype.themeColor = "#eb3c3c";
Vue.use(PullRefresh);
Vue.component("BackToTop", BackToTop);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
