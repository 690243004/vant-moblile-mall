import {} from "@/api/home";
import { ActionContext } from "vuex";
import { CartList } from "@/types";
import { getCartList } from "@/api/cart";

interface State {
  cartList: CartList;
}

const initState: State = {
  cartList: {
    list: [],
    sidMap: {}
  }
};

const actions = {
  async fetchCartList(context: ActionContext<State, any>) {
    try {
      const responseData = await getCartList();
      const { data, code } = responseData.data;
      if (code === 200) {
        context.commit("setCartList", data);
      }
    } catch (e) {
      console.log(e);
    }
  }
};

const getters = {
  model: (state: State) => state,
  cartList: (state: State): CartList => state.cartList
};

const mutations = {
  setCartList(state: State, payload: CartList) {
    state["cartList"] = payload;
  }
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations
};
