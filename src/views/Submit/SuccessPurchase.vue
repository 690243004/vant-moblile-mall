<template>
  <div class="container success-page">
    <div class="success-pay">
      <div class="success-pay-icon">
        <span class="iconfont icon-zhifuchenggong"></span>
      </div>
      <div class="success-pay-text">支付成功!</div>
      <div class="success-pay-skip">
        页面自动跳转，等待时间为<span>{{ skipSenc }}</span
        >s
      </div>
      <div class="success-pay-btn">
        <div @click="skip">点击跳转</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Cell, Field, CellGroup, Button } from "vant";
export default {
  data() {
    return {
      skipSenc: 10,
      orderCent: "",
      tradeTypeName: ""
    };
  },
  components: {
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup
  },
  methods: {
    skip() {
      this.$router.push("/");
    },
    overSkip() {
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
.success-page {
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.success-pay {
  text-align: center;
  padding-top: 46px;
}
.success-pay-icon {
  padding-top: 20px;
  span {
    font-size: 100px;
    color: #ca141d;
  }
}
.success-pay-text {
  font-size: 18px;
}
.success-pay-cent {
  font-size: 30px;
}

.success-pay-skip {
  margin-top: 20px;
  span {
    color: #ca141d;
  }
}

.success-pay-btn {
  margin-top: 20px;
  text-align: center;
  div {
    display: inline-block;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px 20px;
    background: #ca141d;
  }
}
</style>
