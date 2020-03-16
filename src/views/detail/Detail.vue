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
      <goods-action @shopping="addshopping" class="action" @purchasePage="purchasee" />
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
import { INFORMATION } from "@/store/murations-types";

export default {
  name: "detail",
  mixins: [backtopmixin],
  data() {
    return {
      iid: null,
      titleNavbar: ["商品", "参数", "评论", "推荐"],
      itemInfo: [], //图片
      isgoods: {}, //商品描述
      business: {}, //商家信息
      desc: {}, //商品描述
      detailImage: [], //商品照片
      parameters: {}, //参数
      comment: {}, //评论
      recommend: [],
      themeTopYs: [], //滚到内容组件的位置:Y值
      themeTopy: null,
      indexis: 0, //滚动
      positionY: 0 //储存Y值
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
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop + 10);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 150);
    });
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then(res => {
        console.log(res);
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

      this.positionY = position;
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
    },
    pagePposition() {
      this.$refs.scroll.scroll.scrollTo(0, this.positionY, 0);
    },
    purchasee() {
      const goodsdata = {};
      //照片
      goodsdata.goodsimage = this.detailImage[0];
      //店家名
      goodsdata.business = this.business.name;
      //商品描述
      goodsdata.desc = this.desc.desc;
      //价格
      goodsdata.lownowrrice = this.isgoods.lownowprice;
      //运输方式
      goodsdata.courier = this.isgoods.columns[2];
      //传入vuex
      this.$store.commit(INFORMATION, goodsdata);

      this.$router.push("/buy");
    }
  },
  mounted() {
    this.pagePposition();
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 20;
  background-color: #f0f0f0;
  height: 100vh;
  min-width: 100%;
}
.iswiaperr {
  height: calc(100vh - 44px - 50px);
}
.isnavbar {
  position: relative;
  z-index: 13;
  width: 100%;
}
.backtop {
  margin-bottom: 15px;
}
.action {
  position: relative;
  z-index: 13;
}
</style>