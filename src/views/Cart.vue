<template>
  <div class="container">
    <CartHeader />
    <CartList
      v-for="(item, index) in matrixCartList"
      :key="index"
      :sData="item"
    />
  </div>
</template>

<script>
import CartHeader from "@c/CartHeader";
import CartList from "@c/CartList";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions, mapMutations } = createNamespacedHelpers(
  "cart"
);
export default {
  components: {
    CartHeader,
    CartList
  },
  computed: {
    ...mapGetters(["model", "cartList"]),
    matrixCartList() {
      const r = {};
      const { sidMap, list } = this.cartList;
      Object.keys(sidMap).forEach(key => {
        r[key] = {
          sid: key,
          sname: sidMap[key],
          list: []
        };
      });
      list.forEach(cart => {
        const sid = cart.sid;
        if (r[sid]) {
          r[sid].list.push(cart);
        }
      });
      return r;
    }
  },
  methods: {
    ...mapActions(["fetchCartList"])
  },
  mounted() {
    this.fetchCartList().then(() => {
      console.log(this.model);
      console.log(this.cartList);
      console.log(this.matrixCartList);
    });
  }
};
</script>

<style lang="scss" scoped></style>
