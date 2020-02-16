import { getScrollImages } from "@/api/home";

interface State {
  scrollImages: string[];
}
const initState: State = {
  scrollImages: []
};

const actions = {
  async fetchAdvertisment() {
    const { data } = await getScrollImages();
    const { code, data } = data.data;
    
    return console.log("fetchAdvertisment");
  }
};

const getters = {
  model: (state: State) => state
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions
};
