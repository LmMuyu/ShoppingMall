<template>
  <div>
    <swiper ref="swiper" :autoplay="true">
      <div :slot="`swiper${index+1}`" v-for="(item, index) in SwiperData" :key="index">
        <img :src="item.image" alt />
      </div>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/content/swiper/Swiper";

export default {
  props: {
    SwiperData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper
  }
};
</script>

<style scoped>
img{
  width: 100%;
  height: 120px;
}
</style>