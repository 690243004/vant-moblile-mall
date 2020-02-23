<template>
  <div class="o-card">
    <img
      class="img"
      src="https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/96514/13/11504/200349/5e362f30Ee96c508f/78d99f9aa44c1408.jpg!q70.dpg.webp"
    />
    <div class="info">
      <span class="sku-name"
        ><van-tag type="danger" class="mall-tag">自营</van-tag>良品铺子
        芝麻枣夹核桃 红枣类果干零食特产 新疆大枣 208g</span
      >
      <div class="info-bottom">
        <span class="price">29.9</span>
        <span class="cent-unit">元</span>
        <span class="sku-num">x 1</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Tag } from "vant";
export default {
  components: {
    [Tag.name]: Tag
  }
};
</script>

<style lang="scss" scoped>
.o-card {
  overflow: hidden;
  height: 77px;
  margin-bottom: 20px;
  background-color: #fff;
}

.img {
  width: 62px;
  height: 77px;
  float: left;
  margin-right: 14px;
}

.info {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.info-bottom {
  position: absolute;
  bottom: 10px;
  width: 100%;
  line-height: 18px;
}

.price {
  color: red;
  font-size: 18px;
  line-height: 20px;
}

.sku-name {
  font-size: 14px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cent-unit {
  margin-left: 6px;
}

.cent-unit,
.sku-num {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

.sku-num {
  float: right;
}

.mall-tag {
  vertical-align: 1px;
  margin-right: 5px;
}
</style>
