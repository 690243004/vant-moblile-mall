<template>
  <div class="container">
    <CartHeader :isEdit.sync="isEdit" />
    <CartList
      v-for="(item, index) in matrixCartList"
      :key="index"
      :sData="item"
    />
    <van-submit-bar
      :price="isEdit ? 3050 : null"
      :button-text="submitBarText"
      @submit="onSubmit"
    >
      <van-checkbox
        :checked-color="themeColor"
        class="all-check-btn"
        v-model="checked"
        >全选</van-checkbox
      >
    </van-submit-bar>

    <div class="submit-bar"></div>

    <BackToTop />
  </div>
</template>

<script>
import CartHeader from "@c/CartHeader";
import CartList from "@c/CartList";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("cart");
import { SubmitBar, Checkbox } from "vant";
export default {
  data() {
    return {
      checked: true,
      isEdit: true
    };
  },
  components: {
    CartHeader,
    CartList,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox
  },
  computed: {
    ...mapGetters(["model", "cartList"]),
    submitBarText() {
      return this.isEdit ? "提交订单" : "移除";
    },
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
    ...mapActions(["fetchCartList"]),
    onSubmit() {
      // 提交订单
      this.$router.push("/ConfirmOrder");
    }
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

<style lang="scss" scoped>
.van-submit-bar {
  bottom: 50px;
  .all-check-btn {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.submit-bar {
  height: 50px;
}
</style>
