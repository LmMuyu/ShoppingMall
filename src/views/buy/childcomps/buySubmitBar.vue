<template>
  <div>
    <van-submit-bar :price="prices | price" button-text="提交订单" @submit="wdaw">
      <!-- <span slot="tip">你的收货地址不支持同城送,</span> -->
    </van-submit-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    wdaw() {
      console.log(11);
    }
  },
  computed: {
    ...mapGetters(["information"]),
    prices() {
      const { lownowrrice, count } = this.information;
      return lownowrrice * count;
    }
  },
  filters: {
    price(value) {
      return parseInt(value) * 100;
    }
  }
};
</script>

<style scoped>
.van-submit-bar__text {
  text-align: left;
}
</style>