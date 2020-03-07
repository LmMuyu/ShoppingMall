<template>
  <div ref="wrapper" class="wrapper">
    <div class="scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    PullUpLoading: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  created() {},
  methods: {
    scrollTo(time="800") {
      this.scroll.scrollTo(0, 0, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
      this.refresh();
    },
    refresh() {
      this.scroll.refresh();
    },
    getScrollY() {
      //判断scroll有没有值
      return this.scroll ? this.scroll.y : 0;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.PullUpLoading || {
        threshold: -50
      },
      scrollbar: this.fade  //滚动条
    });
    //监听滚动并将y值传出
    this.scroll.on("scroll", position => {
      this.$emit("monitor", position.y);
    });
    //监听上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("PullUp");
    });
  }
};
</script>

<style scoped>
</style>
