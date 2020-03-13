<template>
  <div class="homeswipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipeimg" :key="index">
        <img class="image" :src="item.image" @load="imageLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "homeswipe",
  props: {
    swipeimg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isimageload: false
    };
  },
  methods: {
    imageLoad() {
      if (!this.isimageload) {
        this.$emit("swiperLoad");
        this.isimageload = true;
      }
    }
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  width: 150px;
  background-color: #eeeeee;
  border-bottom: 7px solid #eeeeee;
}

.image {
  width: 100%;
  height: 100%;
}
</style>