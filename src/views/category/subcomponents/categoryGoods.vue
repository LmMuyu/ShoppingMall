<template>
  <div class="isgoods">
    <Divider orientation="center" class="leftitem">{{categoryleftmenudata.categorytitle}}</Divider>
    <category-goods-show
      v-for="(item, index) in categoryleftmenudata.categoryleftmenudata"
      :key="index"
      :showdata="item"
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
    categoryleftmenudata: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.isgoods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>