<template>
  <div class="order">
    <div class="order-header">
      <div class="o-left">
        <span class="o-id">订单编号 : 47372379274371</span>
        <span class="o-way">收货方式 : 快递</span>
      </div>
      <div class="o-state">待收货</div>
    </div>

    <div class="o-main">
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>

    <div class="o-footer">
      <span class="o-total-num">
        共
        <span class="primary">1</span>件商品(含运费
        <span class="primary">6.0</span>)
      </span>
      <span class="o-total-price">
        合计
        <span class="o-price">4399</span>
        元
      </span>
    </div>
  </div>
</template>

<script>
import OrderItem from "@c/OrderItem";
export default {
  components: {
    OrderItem
  }
};
</script>

<style lang="scss" scoped>
.order {
  background: #fff;
  padding: 0 14px;
  margin-bottom: 5px;
  overflow: hidden;
  &-header {
    height: 50px;
    position: relative;
    border-bottom: 1px solid #ddd;
    .o-left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      .o-id {
        font-size: 14px;
      }
      .o-way {
        color: #999;
        font-size: 12px;
        display: block;
      }
    }
    .o-state {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      font-size: 15px;
    }
  }

  .o-main {
    padding-top: 10px;
  }

  .o-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px dotted #eee;
  }
  .o-total-num {
    margin-left: auto;
    color: #999;
    font-size: 12px;
    margin-right: 20px;
    white-space: nowrap;
  }
  .o-total-price {
    font-size: 14px;
    white-space: nowrap;
  }
  .o-price {
    color: red;
  }
}
</style>
