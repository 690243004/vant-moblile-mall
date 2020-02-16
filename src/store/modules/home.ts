import { getScrollImages, getEntityList } from "@/api/home";
import { ActionContext } from "vuex";

interface Entity {
  href: string;
  name: string;
  price: number;
}

export interface EntityParams {
  total: number;
  list: Entity[];
  page: number;
  size: number;
}

interface State {
  scrollImages: string[];
  entityParams: EntityParams;
}

const initState: State = {
  scrollImages: [],
  entityParams: {
    total: 0,
    list: [],
    page: 1,
    size: 10
  }
};

const actions = {
  async fetchAdvertisment(context: ActionContext<State, any>) {
    try {
      const responseData = await getScrollImages();
      const { data, code } = responseData.data;
      if (code === 200) {
        context.commit("setScrollImages", data);
      }
    } catch (e) {
      console.log(e);
    }
  },
  async fetchEntityList(context: ActionContext<State, any>, isInit?: boolean) {
    try {
      const responseData = await getEntityList(context.state.entityParams);
      const { code, data } = responseData.data;
      if (code === 200) {
        context.commit("setEntityParams", { isInit, value: data });
      }
    } catch (e) {
      console.log(e);
    }
  }
};

const getters = {
  model: (state: State) => state,
  entityParams: (state: State) => state.entityParams
};

const mutations = {
  setScrollImages(state: State, payload: string[]) {
    state["scrollImages"] = payload;
  },
  setEntityParams(
    state: State,
    payload: { value: EntityParams; isInit?: boolean }
  ) {
    const { value, isInit } = payload;
    const { total, list, page, size } = value;
    state["entityParams"].total = total;
    state["entityParams"].page = page;
    state["entityParams"].size = size;
    state["entityParams"].list = isInit
      ? list
      : state["entityParams"].list.concat(list);
  }
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations
};
