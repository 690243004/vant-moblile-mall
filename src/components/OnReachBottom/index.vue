<template>
  <div>
    <slot></slot>
    <div v-show="isRefresh" class="tip-area">正在加载中..</div>
  </div>
</template>

<script>
import { getScroller } from "../util";
export default {
  props: {
    onLoad: {
      type: Function
    }
  },
  data() {
    return {
      isRefresh: false,
      scrollerContainer: null,
      remove: null
    };
  },
  methods: {
    bfsScroller() {
      // vant 里面是通过 overflowY这个属性判断一个元素是否为滚动的
      // 而且它并不是靠bfs找的滚动元素，而是靠DOM里面的一个属性parentNode查找的
      this.scrollerContainer = getScroller(this.$el);
    },
    addScrollEvent() {
      if (this.scrollerContainer) {
        const event = e => {
          // 1.获取DOM相关属性
          const { scrollTop, clientHeight, scrollHeight } = e.target;
          // 2. 判断是否到达底部
          if (scrollTop + clientHeight === scrollHeight) {
            this.isRefresh = true;
            const promise = this.onLoad && this.onLoad();
            // 3. 触发onload事件
            if (promise instanceof Promise) {
              // 4. 为promise添加回调事件
              promise.finally(() => (this.isRefresh = false));
            }
          }
        };
        this.scrollerContainer.addEventListener("scroll", event);
        this.remove = () =>
          this.scrollerContainer.removeEventListener("scroll", event);
      }
    },
    onReachBottom() {
      return null;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bfsScroller();
      this.addScrollEvent();
    });
  },
  beforeDestroy() {
    this.remove && this.remove();
  }
};
</script>
<style>
.tip-area {
  text-align: center;
  line-height: 1.4;
  font-size: 14px;
}
</style>
