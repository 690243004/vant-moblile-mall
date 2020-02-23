<template>
  <div class="container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-search
        class="mall-search"
        v-model="currentValue"
        shape="round"
        show-action
        :background="themeColor"
        placeholder="请输入搜索关键词"
      >
        <div class="mall-search-text" slot="action">搜索</div>
        <div slot="label">广州</div>
      </van-search>
      <div class="search-holder"></div>

      <!-- 轮播区域 -->
      <van-swipe
        :indicator-color="themeColor"
        class="my-swipe"
        :autoplay="3000"
      >
        <van-swipe-item v-for="(item, index) in model.scrollImages" :key="index"
          ><van-image class="swipe-image" fit="fill" :src="item"
        /></van-swipe-item>
      </van-swipe>

      <!--  九宫格区域-->
      <div class="gird-area">
        <van-grid :column-num="5" :icon-size="30">
          <van-grid-item
            v-for="(e, i) in girdList"
            :key="i"
            :icon="e.icon"
            :text="e.text"
          />
        </van-grid>
      </div>

      <OnReachBottom :onLoad="onLoad">
        <div class="b">
          <ul
            class="entity-wrapper"
            v-for="(item, index) in matirxList"
            :key="index"
          >
            <EntityItem />
            <EntityItem />
          </ul>
        </div>
      </OnReachBottom>
    </van-pull-refresh>

    <BackToTop />
  </div>
</template>

<script>
import { Search, Swipe, SwipeItem, Image, Grid, GridItem } from "vant";
import { createNamespacedHelpers } from "vuex";
import EntityItem from "@c/EntityItem";
import OnReachBottom from "@c/OnReachBottom";
const { mapGetters, mapActions, mapMutations } = createNamespacedHelpers(
  "home"
);
export default {
  data() {
    return {
      currentValue: "",
      isLoading: false,
      girdList: [
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp",
          text: "京东超市"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp",
          text: "数码电器"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp",
          text: "京东服饰"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp",
          text: "京东生鲜"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp",
          text: "京东到家"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp",
          text: "充值缴费"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp",
          text: "9.9血拼"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp",
          text: "领卷"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t17116/175/2673385904/6610/50f5ef50/5b03b7aeNf3a7fa37.png.webp",
          text: "借钱"
        },
        {
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp",
          text: "PLUS会员"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["model", "entityParams"]),
    matirxList() {
      const list = this.entityParams.list;
      return list.reduce((account, current, index) => {
        if (index % 2 === 0) {
          return [...account, [list[current], list[current + 1]]];
        }
        return [...account];
      }, []);
    }
  },
  methods: {
    ...mapActions(["fetchAdvertisment", "fetchEntityList"]),
    ...mapMutations(["setEntityParams"]),
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    onLoad() {
      const { page, size, total } = this.entityParams;
      console.log(page, size, total);
      if (page * size < total) {
        this.setEntityParams({
          value: {
            ...this.entityParams,
            page: page + 1
          },
          isInit: true
        });
        return this.fetchEntityList();
      }
    }
  },
  mounted() {
    this.fetchAdvertisment();
    this.fetchEntityList();
  },
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    EntityItem,
    OnReachBottom
  }
};
</script>

<style lang="scss" scoped>
.mall-search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 50px;
  .mall-search-text {
    color: #fff;
  }
}
.search-holder {
  height: 50px;
}
.swipe-image {
  width: 100%;
  height: 150px;
}
.b {
  box-sizing: border-box;
  padding: 6.25px 6.25px 4px;
  background: #fff;
}
.entity-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}

.gird-area {
  margin-top: -3px;
}
</style>
