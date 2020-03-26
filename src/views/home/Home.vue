<template>
  <div class="home">
    <tab-control
      :tabcontroltitle="tabcontroltitle"
      @iscontrolvalue="controldata"
      class="fixeds"
      ref="istabcontrol"
      v-show="topnav"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :PullUpLoading="threshold"
      @monitor="isposition"
      @PullUp="loadMore"
    >
      <nav-bar class="navbar">
        <div slot="center">
          <Input search placeholder="搜索商品" size="default" v-model="searchFor" />
        </div>
      </nav-bar>
      <home-swipe :swipeimg="swipeimg" @swiperLoad="iswiper" class="swiper" />
      <display-bar :displaybarimg="displaybarimg" />
      <!-- <recom-class /> -->
      <tab-control
        :tabcontroltitle="tabcontroltitle"
        @iscontrolvalue="controldata"
        ref="tabcontrol"
      />
      <swiper ref="swiper">
        <div slot="swiper1">
          <goods-list :goods="goods['pop'].list" />
        </div>
        <div slot="swiper2">
          <goods-list :goods="goods['new'].list" />
        </div>
        <div slot="swiper3">
          <goods-list :goods="goods['sell'].list" />
        </div>
      </swiper>
      <load-ing class="loading" :size="24" />
    </scroll>
    <back-top @click.native="backclick" v-show="show" />
  </div>
</template>

<script>
//公共,业务组件
import Swiper from "components/content/swiper/Swiper";
import loadIng from "components/content/loading/loadIng";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/content/scroll/Scroll";
//子组件
import HomeSwipe from "./subcomponents/HomeSwipe";
import DisplayBar from "./subcomponents/DisplayBar";
// import RecomClass from "./subcomponents/RecomClass";
//方法
import { getHomeMultidata, getHomeGoodsdata } from "network/home.js";
import { backtopmixin } from "common/mixin.js";

export default {
  name: "Home",
  mixins: [backtopmixin],
  components: {
    NavBar,
    HomeSwipe,
    DisplayBar,
    // RecomClass,
    TabControl,
    GoodsList,
    Scroll,
    loadIng,
    Swiper
  },
  data() {
    return {
      swipeimg: [],
      displaybarimg: [],
      //TabControl页面商品数据
      goods: {
        new: { page: 1, list: [] },
        pop: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      tabcontroltitle: ["流行", "新款", "精选"],
      goodsindex: 0,
      commodity: ["pop", "new", "sell"],
      controlvalue: 0,
      topoffsetTop: 0, //储存组件TabControl的offsetTop
      topnav: false, //储存吸顶效果的状态
      saveY: 0, //储存Y值
      searchFor: "" //搜索栏值
    };
  },
  created() {
    //轮播图和DisplayBar组件数据
    //请求商品数据
    this.getData();
  },
  methods: {
    /**
     * 数据
     */
    getHomeMultidata() {
      getHomeMultidata().then(({ banner, recommend }) => {
        // console.log(res);
        this.swipeimg = banner.list;
        this.displaybarimg = recommend.list;
      });
    },
    getHomeGoodsdata(type) {
      const page = this.goods[type].page;
      getHomeGoodsdata(type, page).then(({ list }) => {
        // console.log(res);
        //核心
        this.goods[type].list.push(...list);
        this.goods[type].page += 1;
      });
    },

    /**
     * 方法事件监听
     */
    controldata(value) {
      this.controlvalue = value;
      //同步两个相同组件内的indexs值
      this.$refs.tabcontrol.indexs = this.$refs.istabcontrol.indexs = this.controlvalue;

      this.swiper.slideTo(value, 200, false);
    },
    isposition(position) {
      //返回头部图标隐藏或显示
      position < -300 ? (this.show = true) : (this.show = false);

      //吸顶效果
      this.topnav = -position > this.topoffsetTop;
    },
    loadMore() {
      //上拉加载更多数据
      this.getHomeGoodsdata(this.wares);
    },
    iswiper() {
      //TabControl组件吸顶
      this.topoffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },
    getData() {
      //主要是为了每次离开home主页再回来时再次发送请求,防止服务器负担过重

      //当this.goods["new"].list的长度等于0时,向后台发送请求获取数据
      if (this.goods["new"].list.length === 0) {
        this.getHomeGoodsdata("pop");
        this.getHomeGoodsdata("new");
        this.getHomeGoodsdata("sell");

        //当this.swipeimg的长度等于0时,向后台发送请求获取数据
        if (this.swipeimg.length === 0) {
          this.getHomeMultidata();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
  mounted() {
    //商品展示左右滑动
    this.$bus.$on("slichtrst", index => {
      this.$refs.tabcontrol.indexs = this.$refs.istabcontrol.indexs = index;
      this.$refs.scroll.refresh();
    });

    this.$bus.$on("activeindex", index => {
      this.$refs.tabcontrol.indexs = this.$refs.istabcontrol.indexs = index;
      this.$refs.tabcontrol.indexs = index;
    });
  },
  activated() {
    this.$refs.scroll && this.$refs.scroll.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  computed: {
    isgoods() {
      return this.goods[this.commodity[this.controlvalue]].list;
    },
    //获取商品完成上拉加载
    wares() {
      return this.commodity[this.controlvalue];
    },
    threshold() {
      //上拉大于100px时刷新数据
      return {
        threshold: -30
      };
    },
    swiper() {
      return this.$refs.swiper.mySwiper;
    }
  },
  watch: {
    goods(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$nextTick(() => {
          this.$refs.scroll.scroll.finishPullUp(); //上拉加载后调用这个函数
        });
      }
    },
    deep: true //深度监听
  }
};
</script>

<style scoped>
.text {
  width: 100%;
  height: 44px;
}
.content,
.scrolls {
  position: absolute;
  bottom: 50px;
  top: 0px;
  left: 0;
  right: 0;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.fixeds {
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 1px 2px #eeeeee;
}
.applis {
  position: absolute;
  top: 0;
  bottom: 0;
}
.loading {
  position: absolute;
  left: 50%;
  bottom: -12px;
  z-index: 999;
}
</style>
