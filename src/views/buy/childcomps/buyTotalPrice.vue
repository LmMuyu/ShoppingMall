<template>
  <div class="dibar">
    <van-cell title="商品价格" :border="false" :value="price | priceFilte" click="price" />
    <van-cell title="运费" value="0" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["information"]),
    price() {
      const { lownowrrice, count } = this.information;
      return lownowrrice * count;
    }
  },
  filters: {
    priceFilte(value) {
      return "¥" + parseInt(value).toFixed(2);
    }
  }
};
</script>

<style scoped>
.dibar {
  box-shadow: 0 -2px #fafafa;
}
.price {
  font-size: 20px;
  color: red;
}
</style>