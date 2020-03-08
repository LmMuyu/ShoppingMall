<template>
  <div id="category">
    <category-head class="categoryhead" />
    <category-left-menu :categoryTitle="categoryTitle" />
  </div>
</template>

<script>
import categoryLeftMenu from "./subcomponents/categoryLeftMenu";
import categoryHead from "./subcomponents/categoryHead";

import { getCategory } from "network/category";

export default {
  components: {
    categoryLeftMenu,
    categoryHead
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
</style>