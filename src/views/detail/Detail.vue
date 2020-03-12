<template>
  <div class="detail">
    <detail-nav-bar class="isnavbar" :titleNavbar="titleNavbar" @index="scrolltoys" ref="nav" />
    <scroll class="iswiaperr" ref="scroll" @monitor="monitores" :probeType="3">
      <detail-swiper :swiperimg="itemInfo" />
      <detail-display-bar :goods="isgoods" />
      <detail-information :business="business" />
      <detail-goods-info :detailImage="detailImage" :desc="desc" @isimage="imageLoad" />
      <detail-parameters ref="parameters" :parameters="parameters" :comment="comment" />
      <comment ref="comment" :comment="comment" />
      <goods-list ref="recommend" :goods="recommend" />
    </scroll>
    <back-top @click.native="backclick" v-show="show" class="backtop" />
    <div class="actionis">
      <goods-action @shopping="addshopping" class="action" />
    </div>
  </div>
</template>

<script>
import DetailNavBar from "./subcomponents/DetailNavBar";
import DetailSwiper from "./subcomponents/DetailSwiper";
import DetailDisplayBar from "./subcomponents/DetailDisplayBar";
import DetailInformation from "./subcomponents/DetailInformation";
import DetailGoodsInfo from "./subcomponents/DetailGoodsInfo";
import DetailParameters from "./subcomponents/DetailParameters";
import GoodsAction from "./subcomponents/goodsAction";
import Comment from "./subcomponents/Comment";

import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/content/scroll/Scroll";

import {
  getDetail,
  getDetailRecommend,
  Goods,
  Business,
  Parameters
} from "network/detail";
import { debounce } from "common/debounce";
import { backtopmixin } from "common/mixin.js";

export default {
  name: "detail",
  mixins: [backtopmixin],
  data() {
    return {
      iid: null,
      titleNavbar: ["商品", "参数", "评论", "推荐"],
      itemInfo: [], //图片
      isgoods: {}, //商品描述
      business: {},
      desc: {},
      detailImage: [],
      parameters: {},
      comment: {},
      recommend: [],
      themeTopYs: [], //滚到内容组件的位置:Y值
      themeTopy: null,
      indexis: 0, //滚动
      arr: []
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailDisplayBar,
    DetailInformation,
    DetailGoodsInfo,
    DetailParameters,
    GoodsAction,
    GoodsList,
    Scroll,
    Comment
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail();
    this.getDetailRecommend();

    this.$nextTick(() => {
      this.themeTopy = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.parameters.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 150);
    });
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then(res => {
        // console.log(res);
        const data = res.result;
        //轮播图片
        this.itemInfo = data.itemInfo.topImages;
        //商品信息
        this.isgoods = new Goods(data.columns, data.shopInfo, data.itemInfo);
        //商家信息
        this.business = new Business(data.shopInfo);
        //商品描述与照片
        this.detailImage = data.detailInfo.detailImage[0].list;
        this.desc = data.detailInfo;
        //参数
        this.parameters = new Parameters(data.itemParams);
        //评论
        if (data.rate.cRate !== 0) {
          this.comment = data.rate;
        }
      });
    },
    getDetailRecommend() {
      getDetailRecommend().then(res => {
        // console.log(res);
        this.recommend = res.data.list;
      });
    },
    /**
     * 事件
     */
    imageLoad() {
      //防抖处理
      const implement = debounce(this.$refs.scroll.refresh, 100);
      implement();

      //每刷新一张照片获取一次高度
      this.themeTopy();
    },
    scrolltoys(index) {
      //点击标签滚到指定位置
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 1200);
    },
    monitores(position) {
      const navYs = -position;

      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          this.indexis !== i &&
          navYs > this.themeTopYs[i] &&
          navYs < this.themeTopYs[i + 1]
        ) {
          this.indexis = i;
          this.$refs.nav.isindex = i;
        }
      }

      //返回顶部图标隐藏或显示
      position < -300 ? (this.show = true) : (this.show = false);
    },
    //加入购物车获取单个商品参数
    addshopping() {
      const goodsdata = {};

      goodsdata.image = this.itemInfo[0];
      goodsdata.title = this.isgoods.title;
      goodsdata.desc = this.desc.desc;
      goodsdata.iid = this.iid;
      goodsdata.lownowprice = this.isgoods.lownowprice;
      goodsdata.date = Date.now();

      this.$store.dispatch("addcart", goodsdata);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 20;
  background-color: #ffffff;
  height: 100vh;
}
.iswiaperr {
  height: calc(100vh - 44px - 50px);
}
.isnavbar {
  position: relative;
  z-index: 13;
}
.backtop {
  margin-bottom: 15px;
}
.action {
  position: relative;
  z-index: 13;
}
.actionis{
  margin-bottom: 16px;
}
</style>