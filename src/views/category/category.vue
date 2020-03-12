<template>
  <div id="category">
    <div v-if="classification">
      <category-head class="categoryhead" @searchfor="isSearchfor" />
      <category-left-menu :categoryTitle="categoryTitle" @menuvlaue="vlaueidnex" class="leftmenu" />
      <scroll class="scroll" ref="scroll">
        <category-swiper />
        <category-goods class="isgoods" :categoryleftmenudata="categoryShowGoods" />
      </scroll>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import categoryLeftMenu from "./subcomponents/categoryLeftMenu";
import categoryHead from "./subcomponents/categoryHead";
import categoryGoods from "./subcomponents/categoryGoods";
import categorySwiper from "./subcomponents/categorySwiper";

import Scroll from "components/content/scroll/Scroll";

import { getCategory, getSubcategory } from "network/category";
import { debounce } from "common/debounce.js";
//getSubcategory
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
      categoryShowGoods: {
        //分类数据
        categorytitle: "",
        categoryleftmenudata: []
      },
      classification: true, //本组件显示隐藏
      goodsData: [],
      goodsShow: {}
    };
  },
  created() {
    this.getCategory();
    this.vlaueidnex();
  },
  methods: {
    getCategory() {
      //数据请求
      getCategory().then(res => {
        console.log(res.category);
        this.categoryTitle = res.category.list;

        if (res) {
          for (const val of res.list) {
            this.goodsData.push(val.maitKey);
          }
        }

        if (this.goodsData.lenght !== 0) {
          this.goodsData.forEach(item => {
            this.goodsShow[item] = [];
          });
        }
      });
    },
    vlaueidnex(maitKey = 3627) {
      getSubcategory(maitKey).then(res => {
        // console.log(res);

        this.categoryShowGoods.categorytitle = res.info.title;
        this.categoryShowGoods.categoryleftmenudata = res.list;
      });
    },
    isSearchfor() {
      this.$router.push("category/searchfor");
      this.classification = false;
    }
  },
  mounted() {
    this.$bus.$on("imageload", () => {
      let imgload = debounce(this.$refs.scroll.refresh, 150);

      imgload();
    });

    this.$bus.$on("statuschange", () => {
      this.classification = true;
    });
  },
  watch: {
    deep: true
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.categoryhead {
  position: relative;
  z-index: 9999;
}
.leftmenu {
  float: left;
}
.scroll {
  position: absolute;
  top: 49px;
  right: 0;
  left: 110px;
  bottom: 50px;
  /* background-color: rgb(255, 0, 0); */
}
</style>