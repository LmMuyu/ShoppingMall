<template>
  <div id="shoppingitems">
    <cart-list-item v-for="(item, index) in cartgoodslist" :key="index" :goodsdata="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  components: {
    CartListItem
  },
  props: {
    cartgoodslist: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
</style>