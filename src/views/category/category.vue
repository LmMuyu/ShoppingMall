<template>
  <div id="category">
    <category-head class="categoryhead" />
    <category-left-menu :categoryTitle="categoryTitle" class="leftmenu" />
    <category-godos />
  </div>
</template>

<script>
import categoryLeftMenu from "./subcomponents/categoryLeftMenu";
import categoryHead from "./subcomponents/categoryHead";
import categoryGodos from "./subcomponents/categoryGoods";

import { getCategory } from "network/category";

export default {
  components: {
    categoryLeftMenu,
    categoryHead,
    categoryGodos
  },
  data() {
    return {
      categoryTitle: []
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      //数据请求
      getCategory().then(res => {
        console.log(res.category);
        this.categoryTitle = res.category.list;
      });
    }
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
  background-color: #f0f0f0;
}
.categoryhead {
  position: relative;
  z-index: 9999;
}
.leftmenu{
  float: left;
}
</style>