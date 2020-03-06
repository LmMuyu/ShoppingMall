<template>
  <div class="datailswiper">
    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-for="(image, index) in swiperimg" :key="index">
        <img v-lazy="image" class="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    swiperimg: {
      type: Array,
      defaults() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper {
  height: 250px;
}

.image {
  height: 250px;
  width: 100%;
}
</style>