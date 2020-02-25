import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import home from "./modules/home";
import cart from "./modules/cart";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasLogin: false
  },
  mutations: {
    setHasLogin(state, value) {
      state.hasLogin = value;
    }
  },
  actions: {
    updateLoginState(context: ActionContext<any, any>, payload: boolean) {
      context.commit("setHasLogin", payload);
    }
  },
  modules: {
    home,
    cart
  }
});
