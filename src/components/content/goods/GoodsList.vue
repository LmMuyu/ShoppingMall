<template>
  <div class="goodslist">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  name: "goodslist",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
  
};
</script>

<style scoped>
</style>