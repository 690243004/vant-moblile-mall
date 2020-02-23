<template>
  <div class="container">
    <van-nav-bar
      title=" 荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍 6.59英寸升降全面屏"
      left-text="返回"
      right-text="..."
      left-arrow
      @click-left="$router.go(-1)"
    />

    <van-swipe class="d-swipe" :indicator-color="themeColor">
      <van-swipe-item>
        <van-image
          src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105695/5/12887/203565/5e4fa646E1f084f85/5511614f934b4642.jpg!q80.dpg.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105695/5/12887/203565/5e4fa646E1f084f85/5511614f934b4642.jpg!q80.dpg.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105695/5/12887/203565/5e4fa646E1f084f85/5511614f934b4642.jpg!q80.dpg.webp"
        />
      </van-swipe-item>
    </van-swipe>

    <div class="d-info">
      <div class="price">
        <span>￥624.00</span>
        <del>￥765.00</del>
      </div>
      <div class="name">
        荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍 6.59英寸升降全面屏
        全网通6GB+64GB 魅海蓝
      </div>
      <div class="send-place">
        发货地 : 杭州
      </div>
    </div>

    <div class="d-action">
      <van-cell title="选择规格" is-link @click="hasSpecs = true" />
      <van-cell title="商品属性" is-link @click="hasMeta = true" />
      <van-cell
        @click="hasSend = true"
        title="配送至"
        is-link
        :value="currentArea"
      />
    </div>

    <div class="d-content">
      <div class="content-holder">商品详情</div>
      <van-image
        src="//img30.360buyimg.com/sku/jfs/t1/69575/32/11798/397448/5d91726bE68337be7/09ff27589b478944.jpg"
      />
    </div>
    <!-- 导航栏 -->
    <div class="d-submit-bar">
      <div class="d-submit-bar-grip">
        <van-grid :column-num="3" center icon-size="20">
          <van-grid-item icon="chat-o" />
          <van-grid-item icon="star-o" />
          <van-grid-item icon="shopping-cart-o" />
        </van-grid>
      </div>
      <div class="d-submit-bar-btn">
        <div class="add-btn">加入购物车</div>
        <div
          class="buy-btn"
          :style="{ background: themeColor }"
          @click="$router.push('/confirmOrder')"
        >
          立即购买
        </div>
      </div>
    </div>

    <van-popup
      class="specs-popup"
      v-model="hasSpecs"
      closeable
      position="bottom"
    >
      <van-image
        class="specs-popup-img"
        src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105695/5/12887/203565/5e4fa646E1f084f85/5511614f934b4642.jpg!q80.dpg.webp"
      />
      <div class="specs-popup-header">
        <div class="price">￥1999.9</div>
        <div class="name">
          <span>[已选]</span> 荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍
          6.59英寸升降全面屏 全网通6GB+64GB 魅海蓝
        </div>
      </div>
      <div class="specs-popup-main">
        <SpecsGroup v-model="colorValue" label="颜色">
          <SpecsItem>幻影紫</SpecsItem>
          <SpecsItem>炫酷紫</SpecsItem>
        </SpecsGroup>
        <SpecsGroup v-model="verValue" label="版本">
          <SpecsItem>全网通 (4GB 64GB)</SpecsItem>
          <SpecsItem>全网通 (4GB 64GB)</SpecsItem>
          <SpecsItem>全网通 (4GB 64GB)</SpecsItem>
          <SpecsItem>全网通 (4GB 64GB)</SpecsItem>
        </SpecsGroup>
        <SpecsGroup v-model="suitValue" label="套装">
          <SpecsItem>官方标配</SpecsItem>
          <SpecsItem>服务升级套装</SpecsItem>
        </SpecsGroup>
        <div class="specs-popup-num-stepper">
          <span>数量</span>
          <van-stepper></van-stepper>
        </div>
      </div>
      <div class="specs-popup-submit-bar">
        <div class="add-btn">加入购物车</div>
        <div class="purchase-btn" @click="$router.push('/confirmOrder')">
          购买
        </div>
      </div>
    </van-popup>

    <van-popup class="meta-popup" v-model="hasMeta" closeable position="bottom">
      <div class="meta-popup-header">
        商品属性
      </div>
      <div class="van-cell">
        <div class="label">商品编号</div>
        <div class="content">100006947212</div>
      </div>
      <div class="van-cell">
        <div class="label">品牌</div>
        <div class="content">华为(HUAWEI)</div>
      </div>
      <div class="van-cell">
        <div class="label">类型</div>
        <div class="content">荣耀9X</div>
      </div>
    </van-popup>

    <van-popup class="send-popup" v-model="hasSend" closeable position="bottom">
      <div class="send-popup-header">
        配送至
      </div>
      <div class="send-popup-area-list">
        <van-cell
          @click="
            currentArea = e;
            hasSend = false;
          "
          :title="e"
          v-for="(e, i) in myAreaList"
          :key="i"
        >
          <van-icon
            v-show="currentArea === e"
            slot="right-icon"
            name="success"
            style="line-height: inherit;"
          />
        </van-cell>
      </div>

      <van-cell @click="hasArea = true" title="其它区域" is-link> </van-cell>
    </van-popup>

    <van-popup v-model="hasArea" position="bottom">
      <van-area
        @confirm="onAreaSelect"
        @cancel="hasArea = false"
        :area-list="areaList"
      />
    </van-popup>

    <BackToTop />
  </div>
</template>

<script>
import {
  Popup,
  Swipe,
  SwipeItem,
  Image,
  Cell,
  Grid,
  GridItem,
  NavBar,
  Stepper,
  Icon,
  Area
} from "vant";
import SpecsGroup from "@c/Specs/SpecsGroup";
import SpecsItem from "@c/Specs/SpecsItem";
export default {
  data() {
    return {
      hasSpecs: false,
      hasMeta: false,
      hasSend: false,
      hasArea: false,
      colorValue: 1,
      verValue: 1,
      suitValue: 1,
      currentArea: "广东广州市越秀区水荫路",
      myAreaList: [
        "广东广州市越秀区水荫路",
        "广东广州市黄埔区鱼珠区",
        "广东东莞市麻涌镇沿江西一路"
      ],
      areaList: {
        // eslint-disable-next-line prettier/prettier
        "province_list": {
          110000: "北京市",
          120000: "天津市"
        },
        // eslint-disable-next-line prettier/prettier
        "city_list": {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        // eslint-disable-next-line prettier/prettier
        "county_list": {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      }
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Cell.name]: Cell,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [NavBar.name]: NavBar,
    [Popup.name]: Popup,
    [Stepper.name]: Stepper,
    [Icon.name]: Icon,
    [Area.name]: Area,
    SpecsGroup,
    SpecsItem
  },
  methods: {
    onAreaSelect(e) {
      this.currentArea = e.reduce((s, i) => {
        return s + i.name;
      }, "");
      this.hasSend = false;
      this.hasArea = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.common {
  background: #fff;
  margin-top: 10px;
}

.d-info {
  @extend .common;
  padding: 10px 20px;

  .price {
    span {
      color: #ca141d;
      font-size: 16px;
    }
    del {
      color: #999;
      font-size: 12px;
      margin-left: 10px;
    }
  }
  .name {
    font-size: 16px;
    font-weight: 600;
  }
  .send-place {
    color: #999;
    font-size: 14px;
    margin-top: 10px;
  }
}

.d-action {
  @extend .common;
}

.d-content {
  @extend .common;
  .content-holder {
    text-align: center;
    line-height: 40px;
  }
}

.d-submit-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 100;
  display: flex;
  &-grip {
    width: 40%;
  }
  &-btn {
    flex: 1;
    display: flex;
    .add-btn {
      background: #ffbc00;
    }
    > div {
      flex: 1;
      line-height: 50px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
  }
}

.specs-popup {
  overflow-y: visible !important;
  &-img {
    position: absolute;
    left: 10px;
    width: 100px;
    height: 100px;
    z-index: 19000;
    top: -10px;
    background: #fff;
  }
  &-header {
    height: 90px;
    box-sizing: border-box;
    padding-left: 120px;
    padding-right: 40px;
    .price {
      color: #ca141d;
      font-size: 20px;
      line-height: 50px;
    }
    .name {
      margin-top: 10px;
      font-size: 12px;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      span {
        color: #999;
      }
    }
  }

  &-main {
    @extend .common;
    height: 300px;
    overflow: auto;
    box-sizing: border-box;
    padding-bottom: 20px;
  }

  &-submit-bar {
    height: 50px;
    display: flex;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    > div {
      flex: 1;
    }
    .add-btn {
      color: #fff;
      background: #ffbc00;
    }
    .purchase-btn {
      color: #fff;
      background: #ca141d;
    }
  }
  &-num-stepper {
    line-height: 30px;
    font-size: 12px;
    color: #999;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
  }
}

.meta-popup {
  padding-bottom: 50px;
  &-header {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
  }
  .van-cell {
    font-weight: 400;
    .label {
      width: 30%;
    }
    .content {
      width: 70%;
    }
  }
}

.send-popup {
  padding-bottom: 20px;
  &-header {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    margin-left: 10px;
  }
  &-area-list {
    i {
      color: #ca141d;
    }
  }
  &-other-btn {
    margin-top: 10px;
  }
}
</style>
