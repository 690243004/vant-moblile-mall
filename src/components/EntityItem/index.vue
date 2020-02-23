<template>
  <li class="entity-item">
    <router-link to="/detail">
      <div class="image-area">
        <p class="p-img">
          <van-image
            class="sceneImg"
            src="https://res0.vmallres.com/pimages//wapFrontLocation/content/f7MxrMaE1S77xJTDoLcR.jpg"
          ></van-image>
        </p>
      </div>
      <div class="text-area">
        <p class="p-name">
          <span><em>荣耀9X PRO</em></span>
        </p>
        <p class="p-price">
          <span><b>￥1999</b></span>
        </p>
      </div>
    </router-link>
  </li>
</template>

<script>
import { Image } from "vant";
export default {
  components: {
    [Image.name]: Image
  }
};
</script>

<style lang="scss" scoped>
.entity-item {
  flex: 1;
  max-width: 50%;
  overflow: hidden;
}
.entity-item:nth-child(2n) {
  padding-left: 6.25px;
}
.image-area {
  height: 178px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  .p-img {
    height: 178px;
    width: 178px;
    position: absolute;
    left: 50%;
    .sceneImg {
      margin-left: -80%;
      height: 100%;
      width: initial;
      max-width: initial;
      vertical-align: top;
    }
  }
}
.p-name {
  padding: 8.3px 12.5px 0 10px;
  margin: 0 auto;
  span {
    line-height: 1.4;
    font-size: 13.5px;
    word-break: break-all;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333;
    white-space: normal;
    max-height: initial;
    display: -webkit-box;
    text-align: center;
    overflow: hidden;
  }
}
.p-price {
  padding: 4px 0 16.5px 0;
  span {
    line-height: 1;
    word-break: break-all;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333;
    white-space: normal;
    max-height: initial;
    display: -webkit-box;
    text-align: center;
    overflow: hidden;
    b {
      font-size: 13.5px;
      color: #ca141d;
      font-weight: normal;
    }
  }
}
</style>
