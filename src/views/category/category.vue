<template>
  <div id="category">
    <div v-if="loding">
      <lod-ing />
    </div>

    <div v-if="!loding">
      <div v-if="this.$route.meta.comdisp">
        <category-head class="categoryhead" @searchfor="isSearchfor" />
        <category-left-menu
          :categoryTitle="categoryTitle"
          @menuvlaue="vlaueidnex"
          class="leftmenu"
        />
        <scroll class="scroll" ref="scroll" :bounce="false">
          <category-swiper :SwiperData="categorySwiperData" />
          <category-goods class="isgoods" :categoryleftmenudata="categoryShowGoods" />
        </scroll>
      </div>
    </div>

    <router-view class="view"></router-view>
  </div>
</template>

<script>
import categoryLeftMenu from "./subcomponents/categoryLeftMenu";
import categoryHead from "./subcomponents/categoryHead";
import categoryGoods from "./subcomponents/categoryGoods";
import categorySwiper from "./subcomponents/categorySwiper";

import lodIng from "components/content/loading/loadIng";
import Scroll from "components/content/scroll/Scroll";

import { getCategory, getSubcategory } from "network/category";
// import { debounce } from "common/debounce.js";

export default {
  components: {
    categoryLeftMenu,
    categoryHead,
    categoryGoods,
    categorySwiper,
    Scroll,
    lodIng
  },
  data() {
    return {
      categoryTitle: [], //axios请求的数据
      categorySwiperData: [], //轮播图数据
      categoryShowGoods: {
        //分类数据
        categorytitle: "",
        categoryleftmenudata: []
      },
      goodsData: [],
      goodsShow: {},
      loding: true
    };
  },
  created() {
    this.categorydata();
  },
  methods: {
    getCategory() {
      //数据请求
      getCategory().then(({ category }) => {
        // console.log(category);
        this.categoryTitle = category.list;
      });
    },
    vlaueidnex(maitKey = 3627) {
      getSubcategory(maitKey).then(({ info, list }) => {
        this.loding = false
        const goods = this.categoryShowGoods;

        goods.categorytitle = info.title;
        goods.categoryleftmenudata = list;

        for (let index = 0; index < 3; index++) {
          this.categorySwiperData.push(list[index]);
        }
      });
    },
    isSearchfor() {
      this.$router.push("category/searchfor").catch(err => {
        err;
      });
    },
    categorydata() {
      if (this.categoryTitle.length === 0) {
        this.getCategory();
        this.vlaueidnex();
      }
    }
  },
  mounted() {},
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
.view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>