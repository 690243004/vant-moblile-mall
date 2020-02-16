<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" active-color="#4fc08d">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="friends" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item name="setting" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style></style>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  data() {
    return {
      active: "home"
    };
  },
  name: "App",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>
