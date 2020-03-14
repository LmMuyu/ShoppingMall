<template>
  <div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="wdaw">
      <!-- <span slot="tip">你的收货地址不支持同城送,</span> -->
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  methods: {
    wdaw() {
      console.log(11);
    }
  }
};
</script>

<style scoped>
</style>