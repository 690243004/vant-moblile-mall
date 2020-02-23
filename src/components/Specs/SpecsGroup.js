import "./SpecsGroup.scss";

export default {
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    label: {
      type: String
    }
  },
  data() {
    return {
      children: [] // record refs slots VNode
    };
  },
  mounted() {
    // this.setActiveItem();
  },
  watch: {
    value: {
      handler: function() {
        this.setActiveItem();
      }
    }
  },
  methods: {
    setActiveItem() {
      this.children.forEach((item, index) => {
        if (item.name) {
          item.active = item.name === this.value;
        } else {
          item.active = index === this.value;
        }
      });
    },
    onChange(value) {
      this.$emit("input", value);
    }
  },
  render: function render(h) {
    return h(
      "div",
      {
        class: ["specs-group"]
      },
      [
        this.label === undefined
          ? null
          : h(
              "div",
              {
                class: ["specs-group-label"]
              },
              this.label
            ),
        h(
          "div",
          {
            class: ["specs-group-main"]
          },
          this.$slots.default
        )
      ]
    );
  }
};
