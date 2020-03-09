<template>
  <div id="category">
    <category-head class="categoryhead" />
    <category-left-menu :categoryTitle="categoryTitle" class="leftmenu" />
    <category-swiper />
    <scroll class="swiperes" ref="scroll">
      <category-goods :showgoods="showgoods" class="isgoods" />
    </scroll>
  </div>
</template>

<script>
import categoryLeftMenu from "./subcomponents/categoryLeftMenu";
import categoryHead from "./subcomponents/categoryHead";
import categoryGoods from "./subcomponents/categoryGoods";
import categorySwiper from "./subcomponents/categorySwiper";

import Scroll from "components/content/scroll/Scroll";

import { getCategory, getSubcategory } from "network/category";

export default {
  components: {
    categoryLeftMenu,
    categoryHead,
    categoryGoods,
    categorySwiper,
    Scroll
  },
  data() {
    return {
      categoryTitle: [], //axios请求的数据
      categoryGoodsData: [], //利用watch侦听器将categoryTitle赋值给它
      showgoods: {
        categoryShowGoods: [], //展示数据
        titletotal: []
      }
    };
  },
  created() {
    this.getCategory();
    this.dataRequest();
  },
  methods: {
    getCategory() {
      //数据请求
      getCategory().then(res => {
        // console.log(res.category);
        this.categoryTitle = res.category.list;
      });
    },
    getSubcategory() {
      this.categoryGoodsData.filter(item => {
        getSubcategory(item.maitKey).then(res => {
          console.log(res);

          this.showgoods.categoryShowGoods = res.list;
          this.showgoods.titletotal.push(res.info.title);
        });
      });
    },
    dataRequest() {
      let time = null;

      time = setInterval(() => {
        if (this.categoryGoodsData.length !== 0) {
          this.getSubcategory();

          clearInterval(time);
        }
      }, 400);
    }
  },
  // mounted() {
  //   this.$nextTick(() => {});
  // },
  // updated() {},
  watch: {
    categoryTitle() {
      this.categoryGoodsData = this.categoryTitle;
    },
    deep: true
  }
};
</script>

<style scoped>
#category {
  height: 100%;
  width: 100%;
}
.categoryhead {
  position: relative;
  z-index: 9999;
}
.leftmenu {
  float: left;
}
.isgoods {
  float: right;
  width: calc(100% - 110px);
}
.swiperes {
  height: calc(100% - 149px - 50px);
}
</style>