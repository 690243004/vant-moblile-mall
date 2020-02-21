<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" active-color="#4fc08d">
      <van-tabbar-item to="/" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/cart" name="cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="order" to="order" icon="orders-o">
        订单
      </van-tabbar-item>
      <van-tabbar-item to="/my" name="my" icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style></style>

<script>
import { Tabbar, TabbarItem } from "vant";

const href = window.location.href;
const defaultActive = /(\/#\/)(.*)$/.exec(href)[2];
export default {
  data() {
    return {
      active: defaultActive
    };
  },
  name: "App",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>
