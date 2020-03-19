<template>
  <div class="loading">
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <van-loading color="#1989fa" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>