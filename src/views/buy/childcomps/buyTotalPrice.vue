<template>
  <div class="dibar">
    <van-cell title="商品价格" :border="false" :value="isprice | priceFilte" />
    <van-cell title="运费" value="0" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isprice: 0
    };
  },
  mounted() {
    this.$bus.$on("addition", (price, quantity) => {
      this.isprice = price * quantity;
    });

    this.isprice = this.information.lownowprice;
  },
  computed: {
    ...mapGetters(["information"])
  },
  watch: {
    information() {
      this.isprice = this.information.lownowprice;
    },
    deep: true
  },
  filters: {
    priceFilte(value) {
      return "¥" + parseInt(value);
    }
  }
};
</script>

<style scoped>
.dibar {
  box-shadow: 0 -2px #fafafa;
}
</style>