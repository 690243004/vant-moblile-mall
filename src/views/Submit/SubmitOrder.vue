<template>
  <div class="container">
    <van-nav-bar
      title="确认订单"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="count-down-area">
      剩余付款时间 :
      <van-count-down :time="time" />
    </div>

    <div class="meta-area">
      <van-cell title="订单编号" value="439962175450" />
      <van-cell class="count-cell" title="实付金额" value="￥ 10000.00" />
    </div>

    <div class="purchase-way-area">
      <van-radio-group v-model="radio" :checked-color="themeColor">
        <van-cell-group>
          <van-cell title="选择支付方式" />
          <van-cell clickable @click="radio = '1'">
            <div class="pay-way-slot" slot="title">
              <img class="slot-img" :src="zhifubaoImg" />
              <span class="slot-text">支付宝支付</span>
            </div>
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell clickable @click="radio = '2'">
            <div class="pay-way-slot" slot="title">
              <img class="slot-img" :src="weichatImg" />
              <span class="slot-text">微信支付</span>
            </div>
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>

    <div class="action-submit-bar" @click="$router.push('/successPurchase')">
      去支付
    </div>
  </div>
</template>

<script>
import { CountDown, Cell, CellGroup, Radio, RadioGroup, NavBar } from "vant";
import zhifubaoImg from "@/assets/images/zhifubao.png";
import weichatImg from "@/assets/images/weichat.png";
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      radio: "1",
      zhifubaoImg,
      weichatImg
    };
  },
  components: {
    [CountDown.name]: CountDown,
    [RadioGroup.name]: RadioGroup,
    [CellGroup.name]: CellGroup,
    [Radio.name]: Radio,
    [NavBar.name]: NavBar,
    [Cell.name]: Cell
  }
};
</script>

<style lang="scss" scoped>
.count-down-area {
  background: #fff;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 14px;
  .van-count-down {
    color: #ca141d;
    margin-left: 5px;
    line-height: 40px;
  }
}

.meta-area {
  margin-top: 10px;
  .count-cell {
    .van-cell__value {
      color: #ca141d;
    }
  }
}

.purchase-way-area {
  margin-top: 10px;
  .pay-way-slot {
    display: flex;
    align-items: center;
    .slot-img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .slot-text {
      font-size: 16px;
      font-weight: bold;
    }
  }
}

.action-submit-bar {
  background: #ca141d;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
}
</style>
