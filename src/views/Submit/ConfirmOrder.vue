<template>
  <div class="container">
    <van-nav-bar
      title="确认订单"
      left-text="返回"
      right-text="..."
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-cell title="快递配送" is-link icon="gift-o" />
    <van-cell
      title="张三 130902930293"
      label="浙江省 杭州市 西湖区 创新创业园"
      is-link
    />

    <div class="product-area">
      <van-card
        num="2"
        price="7999.00"
        desc="0.490kg/件，金色，256GB"
        title="Apple iPhone XS Max (A2104) 256GB 金色 移动联通电信4G手机 双卡双待"
        thumb="//img10.360buyimg.com/mobilecms/s117x117_jfs/t1/100188/3/12327/337705/5e476fcaE4d414dfd/827bae920b090203.jpg!q70.dpg.webp"
      />
      <van-card
        num="2"
        price="79.00"
        desc="0.840kg/件，机器学习"
        title="Scikit-Learn与TensorFlow机器学习实用指南（影印版）"
        thumb="//img10.360buyimg.com/mobilecms/s117x117_jfs/t8206/221/2490294867/359622/d3b7ef98/59cf5458N10e917db.jpg!q70.dpg.webp"
      />
    </div>

    <div class="product-info">
      <van-cell-group>
        <van-field label="订单备注" placeholder="请输入备注" />
        <van-cell title="商品金额" value="￥4399.00" />
        <van-cell title="邮费" value="￥8.00" />
        <van-cell title="优惠" value="￥10.00" />
        <van-cell title="邮费" value="￥8.00" />
      </van-cell-group>
    </div>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { NavBar, Cell, Card, Field, CellGroup, SubmitBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Card.name]: Card,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [SubmitBar.name]: SubmitBar,
    [Field.name]: Field
  },
  methods: {
    onSubmit() {
      this.$router.push("submitOrder");
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-area {
  margin-top: 10px;
  .van-card {
    background: #fff;
    .van-card__title {
      font-weight: 600;
    }
    .van-card__price-decimal,
    .van-card__price-currency,
    .van-card__price-integer {
      color: #ca141d;
    }
  }
}

.product-info {
  margin-top: 10px;
}
</style>
