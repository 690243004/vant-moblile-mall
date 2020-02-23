<template>
  <div @click="onClick" :class="computedClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      active: false,
      index: null
    };
  },
  computed: {
    computedClass() {
      const c = "specs-item";
      return this.active ? c + " specs-item-active" : c;
    }
  },
  methods: {
    bindRelation() {
      const children = this.$parent.children;
      this.index = children.length;
      if (children.indexOf(this) === -1) {
        children.push(this);
      }
    },
    initActive() {
      const active = this.$parent.value;
      this.active = this.name ? active === this.name : active === this.index;
    },
    onClick() {
      this.$parent.onChange(this.name || this.index);
    }
  },
  mounted() {
    this.bindRelation();
    this.initActive();
  }
};
</script>

<style lang="scss" scoped>
.specs-item {
  padding: 8px 16px;
  font-size: 12px;
  color: #333;
  background: #f7f7f7;
  border-radius: 4px;
}
.specs-item-active {
  background: red;
  color: #fff;
}
</style>
