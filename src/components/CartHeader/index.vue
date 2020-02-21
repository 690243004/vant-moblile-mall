<template>
  <div class="cart-header" :style="{ backgroundColor: themeColor }">
    <span class="cart-header-logo">GKD商城</span>
    <van-button size="small" class="cart-header-btn" icon="star-o"
      >编辑</van-button
    >
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  }
};
</script>

<style lang="scss" scoped>
.cart-header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  &-logo {
    font-weight: 400;
    font-size: 17px;
    color: #fff;
  }

  &-btn {
    // color: #fff;
  }
}
</style>
