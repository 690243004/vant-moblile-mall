<template>
  <div class="container">
    <div class="header-area">
      <div class="meta">
        <van-image
          round
          src="https://www.zdxhyangyan.cn/static/extra/logo.jpg"
        />
        <div class="name">花と水饴、最终电车</div>
      </div>
    </div>

    <van-grid column-num="5" class="order-action-area">
      <van-grid-item v-for="(e, i) in gripList" :key="i">
        <div class="my-grid-item">
          <i :class="`iconfont ${e.icon}`"></i>
          <span class="text">{{ e.name }}</span>
        </div>
      </van-grid-item>
    </van-grid>

    <div class="fuli-area">
      <van-cell title="我的优惠卷" is-link value="全部" />
    </div>

    <div class="user-module-area">
      <van-cell icon="star-o" title="我的收藏" is-link />
      <van-cell icon="location-o" title="收获地址" is-link />
      <van-cell icon="sign" title="实名认证" is-link />
      <van-cell icon="service-o" title="服务中心" is-link />
    </div>

    <div class="setting-area">
      <van-cell title="设置" is-link />
    </div>
  </div>
</template>

<script>
import { Image, Grid, GridItem, Icon, Cell } from "vant";
export default {
  data() {
    return {
      gripList: [
        {
          name: "待支付",
          icon: "icon-daizhifu-"
        },
        {
          name: "待发货",
          icon: "icon-tubiaolunkuo-2"
        },
        {
          name: "已发货",
          icon: "icon-fahuo"
        },
        {
          name: "待收货",
          icon: "icon-tubiaolunkuo-1"
        },

        {
          name: "全部",
          icon: "icon-quanbudingdan"
        }
      ]
    };
  },
  components: {
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Icon.name]: Icon,
    [Cell.name]: Cell
  }
};
</script>

<style lang="scss" scoped>
$liner_background: linear-gradient(left, #eb3c3c, #fffff0);

.header-area {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &::after {
    display: block;
    content: "";
    width: 140%;
    height: 160px;
    position: absolute;
    left: -20%;
    top: 0;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    background: $liner_background;
  }
  // background: linear-gradient(left, #07c160, #fffff0);
  .meta {
    .van-image {
      height: 80px;
      width: 80px;
    }
    text-align: center;
    .name {
      margin-top: 5px;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
.order-action-area {
  margin-top: 10px;
  .my-grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    i {
      font-size: 24px;
    }
    span {
      margin-top: 8px;
      font-size: 12px;
      color: #646566;
    }
  }
}

.user-module-area,
.setting-area,
.fuli-area {
  margin-top: 10px;
}
</style>
