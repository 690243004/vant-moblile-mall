<template>
  <div class="cart-list">
    <div class="cart-list-header">
      <van-checkbox v-model="checked" :checked-color="themeColor">{{
        sname
      }}</van-checkbox>
    </div>

    <div class="cart-list-main">
      <CartItem v-for="(c, i) in list" :key="i" :c="c" />
    </div>
  </div>
</template>

<script>
import { Checkbox } from "vant";
import CartItem from "@c/CartItem";
export default {
  props: {
    sData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    sname() {
      return this.sData.sname;
    },
    list() {
      return this.sData.list;
    }
  },
  data() {
    return {
      checked: true
    };
  },
  components: {
    CartItem,
    [Checkbox.name]: Checkbox
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  padding: 0 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  &-header {
    height: 40px;
    display: flex;
  }
}
</style>
