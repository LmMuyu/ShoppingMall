<template>
  <div>
    <category-goods-show
      v-for="(item, index) in showgoods.titletotal"
      :key="index"
      :showgoods="showgoods.categoryShowGoods"
      :title="item"
    />
  </div>
</template>

<script>
import categoryGoodsShow from "./categoryGoodsShow";

export default {
  components: {
    categoryGoodsShow
  },
  props: {
    showgoods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
</style>