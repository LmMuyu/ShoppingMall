<template>
  <div class="screen">
    <van-skeleton title avatar  :row="3" />
    <van-skeleton title avatar  :row="5" />
    <van-skeleton title avatar  :row="7" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.screen {
  height: 100vh;
  background-color: #ffffff;
}
</style>