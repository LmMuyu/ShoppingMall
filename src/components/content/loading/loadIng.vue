<template>
  <div class="loading">
    <van-loading class="wrapper" :size="size" color="#1989fa" />
  </div>
</template>

<script>
export default {
  props:{
    size:{
      type:Number,
      default(){
        return 16
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>