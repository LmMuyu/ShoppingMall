<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <slot name="swiper1"></slot>
      </div>
      <div class="swiper-slide">
        <slot name="swiper2"></slot>
      </div>
      <div class="swiper-slide">
        <slot name="swiper3"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "swiper",
  props:{
    autoplay:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  data() {
    return {
      mySwiper: null
    };
  },
  mounted() {
    const _this = this;
    this.mySwiper = new Swiper(".swiper-container", {
      autoHeight: "auto",
      resistanceRatio: 0,
      roundLengths: true,
      slidesPerView: "auto",
      autoplay:this.autoplay,
      mousewheel: {
        forceToAxis: true
      },
      on: {
        slideChangeTransitionStart() {
          _this.$bus.$emit("activeindex", _this.mySwiper.activeIndex);
        }
      }
    });
  }
};
</script>

<style scoped>
</style>