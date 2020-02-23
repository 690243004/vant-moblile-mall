<template>
  <div class="container">
    <div class="tab-area">
      <van-tabs
        sticky
        swipeable
        v-model="activeName"
        :swipe-threshold="tabList.length"
      >
        <van-tab
          :key="i"
          v-for="(t, i) in tabList"
          :title="t"
          name="i"
        ></van-tab>
      </van-tabs>
    </div>
    <div class="tab-holder"></div>
    <div class="order-content">
      <Order />
      <Order />
      <Order />
    </div>

    <BackToTop />
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import Order from "@c/Order";
export default {
  data() {
    return {
      activeName: "a",
      tabList: ["全部", "待发货", "已发货", "未收货", "已收货"]
    };
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    Order
  }
};
</script>

<style lang="scss" scoped>
.tab-area {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.tab-holder {
  height: 38px;
}
</style>
