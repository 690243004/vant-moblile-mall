<template>
  <div class="cart-item">
    <van-checkbox v-model="checked" :checked-color="themeColor"></van-checkbox>
    <div class="cart-item-main">
      <van-image class="cart-item-img" :src="c.href" />
      <div class="cart-item-main-content">
        <div class="name">
          {{ c.name }}
        </div>
        <div class="price">{{ c.price }}</div>
        <div class="stepper-area">
          <van-stepper
            :value="c.num"
            min="1"
            max="8"
            input-width="30px"
            button-size="22px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Image, Checkbox, Stepper } from "vant";

export default {
  props: {
    c: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      value: 1,
      checked: true
    };
  },
  components: {
    [Image.name]: Image,
    [Checkbox.name]: Checkbox,
    [Stepper.name]: Stepper
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  padding-bottom: 20px;
  &-main {
    flex: 1;
    margin-left: 8px;
    display: flex;
    .cart-item-img {
      height: 100px;
      width: 100px;
    }

    &-content {
      flex: 1;
      margin-left: 8px;
      height: 100px;
      position: relative;
      .name {
        font-size: 12px;
        line-height: 20px;
        height: 40px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
      }

      .price {
        position: absolute;
        left: 0;
        font-size: 14px;
        font-weight: 400;
        bottom: 15px;
        color: #f2270c;
        &::before {
          content: "￥";
          font-size: 12px;
        }
      }
    }
  }
}
.stepper-area {
  position: absolute;
  right: 0;
  bottom: 15px;
}
</style>
