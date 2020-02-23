<template>
  <div id="app">
    <router-view />
    <van-tabbar route :active-color="themeColor">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item to="/order" icon="orders-o">
        订单
      </van-tabbar-item>
      <van-tabbar-item to="/my" icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style></style>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  data() {
    return {};
  },
  name: "Layout",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>
