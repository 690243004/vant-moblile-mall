<template>
  <div class="container">
    <van-search
      class="mall-search"
      v-model="currentValue"
      shape="round"
      show-action
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    >
      <div slot="action">搜索</div>
      <div slot="label">清远</div>
    </van-search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in model.scrollImages" :key="index"
        >1</van-swipe-item
      >
    </van-swipe>
  </div>
</template>

<script>
import { Search, Swipe, SwipeItem } from "vant";
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("home");
export default {
  data() {
    return {
      currentValue: ""
    };
  },
  computed: {
    ...mapGetters(["model"])
  },
  methods: {
    ...mapActions(["fetchAdvertisment"])
  },
  mounted() {
    this.fetchAdvertisment();
  },
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<style lang="scss" scoped>
.mall-search {
  height: 50px;
}
</style>
