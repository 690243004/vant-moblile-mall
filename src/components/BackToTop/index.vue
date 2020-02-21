<template>
  <div
    class="back-to-top"
    v-show="isVisible"
    :style="{ background: themeColor }"
    @click="goTop"
  >
    <van-icon name="down" />
  </div>
</template>
<script>
import { getScroller } from "../util";
import { Icon } from "vant";
const SPEEDRATE = 2;
export default {
  data() {
    return {
      scrollerContainer: null,
      isVisible: false,
      remove: null
    };
  },
  methods: {
    addScrollEvent() {
      if (this.scrollerContainer) {
        const event = e => {
          const { scrollTop } = e.target;
          this.isVisible = scrollTop > 50 ? true : false;
        };
        this.scrollerContainer.addEventListener("scroll", event);
        this.remove = () =>
          this.scrollerContainer.removeEventListener("scroll", event);
      }
    },
    goTop() {
      window.requestAnimationFrame(() => {
        const scrollTop = this.scrollerContainer.scrollTop;
        if (scrollTop > 0) {
          this.scrollerContainer.scrollTo(0, scrollTop / SPEEDRATE);
          this.goTop();
        }
      });
    }
  },
  mounted() {
    this.scrollerContainer = getScroller(this.$el);
    this.addScrollEvent();
  },
  beforeDestroy() {
    this.remove && this.remove();
  },
  components: {
    [Icon.name]: Icon
  }
};
</script>
<style>
.back-to-top {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 30px;
  height: 30px;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
  border-radius: 4px;
}
.back-to-top i {
  transform: rotate(180deg);
  color: #fff;
}
</style>
