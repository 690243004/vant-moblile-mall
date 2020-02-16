<template>
  <div class="container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-search
        class="mall-search"
        v-model="currentValue"
        shape="round"
        show-action
        :background="themeColor"
        placeholder="请输入搜索关键词"
      >
        <div slot="action">搜索</div>
        <div slot="label">清远</div>
      </van-search>
      <van-swipe
        :indicator-color="themeColor"
        class="my-swipe"
        :autoplay="3000"
      >
        <van-swipe-item v-for="(item, index) in model.scrollImages" :key="index"
          ><van-image class="swipe-image" fit="fill" :src="item"
        /></van-swipe-item>
      </van-swipe>
      <OnReachBottom :onLoad="onLoad">
        <div class="b">
          <ul
            class="entity-wrapper"
            v-for="(item, index) in matirxList"
            :key="index"
          >
            <EntityItem />
            <EntityItem />
          </ul>
        </div>
      </OnReachBottom>
    </van-pull-refresh>

    <BackToTop />
  </div>
</template>

<script>
import { Search, Swipe, SwipeItem, Image } from "vant";
import { createNamespacedHelpers } from "vuex";
import EntityItem from "../components/EntityItem";
import OnReachBottom from "@c/OnReachBottom";
import BackToTop from "@c/BackToTop";
const { mapGetters, mapActions, mapMutations } = createNamespacedHelpers(
  "home"
);
export default {
  data() {
    return {
      currentValue: "",
      isLoading: false
    };
  },
  computed: {
    ...mapGetters(["model", "entityParams"]),
    matirxList() {
      const list = this.entityParams.list;
      return list.reduce((account, current, index) => {
        if (index % 2 === 0) {
          return [...account, [list[current], list[current + 1]]];
        }
        return [...account];
      }, []);
    }
  },
  methods: {
    ...mapActions(["fetchAdvertisment", "fetchEntityList"]),
    ...mapMutations(["setEntityParams"]),
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    onLoad() {
      const { page, size, total } = this.entityParams;
      console.log(page, size, total);
      if (page * size < total) {
        this.setEntityParams({
          value: {
            ...this.entityParams,
            page: page + 1
          },
          isInit: true
        });
        return this.fetchEntityList();
      }
    }
  },
  mounted() {
    this.fetchAdvertisment();
    this.fetchEntityList();
  },
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    EntityItem,
    OnReachBottom,
    BackToTop
  }
};
</script>

<style lang="scss" scoped>
.mall-search {
  height: 50px;
}
.swipe-image {
  width: 100%;
  height: 150px;
}
.b {
  box-sizing: border-box;
  padding: 6.25px 6.25px 4px;
  background: #fff;
}
.entity-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}
</style>
