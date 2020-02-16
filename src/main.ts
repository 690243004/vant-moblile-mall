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

Vue.config.productionTip = false;

Vue.prototype.themeColor = "#4fc08d";
Vue.use(PullRefresh);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
