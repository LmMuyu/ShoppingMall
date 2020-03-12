<template>
  <div class="shoppingcart">
    <nav-bar class="navbar">
      <div slot="center" class="cart">购物车({{ goodshas }})</div>
      <div slot="right" class="quanxuan">
        <van-checkbox v-model="trues" @click="checkbox" shape="square">全选</van-checkbox>
      </div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <shopping-items :cartgoodslist="goodslist" />
    </scroll>
    <car-settlement class="crat" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/content/scroll/Scroll";

import ShoppingItems from "./subcomponents/ShoppingItems";
import CarSettlement from "./subcomponents/CartSettlement";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      trues: true
    };
  },
  components: {
    NavBar,
    Scroll,
    ShoppingItems,
    CarSettlement
  },
  methods: {
    checkbox() {
      if (this.trues) {
        //全选
        this.goodslist.forEach(item => (item.status = false));
      } else {
        //部分选或全部选
        this.goodslist.forEach(item => (item.status = true));
      }
    },
    status() {
      let activation = this.goodslist.find(val => {
        return val.status === false;
      });

      if (activation) {
        this.trues = false;
      } else {
        this.trues = true;
      }
    }
  },
  mounted() {
    this.$bus.$on("Activation", () => {
      this.status();
    });
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["goodshas", "goodslist"])
  }
};
</script>

<style scoped>
.shoppingcart {
  height: 100vh;
  background-color: #f0f0f0;
}
.quanxuan {
  height: 44px;
  display: flex;
  align-items: center;
}
#radio1 {
  line-height: 44px;
}
.cart {
  font-weight: 500;
}
.scroll {
  height: calc(100vh - 44px - 50px - 49px);
}
.navbar {
  position: relative;
  z-index: 9;
}
.crat {
  position: absolute;
  left: 0;
  bottom: 49px;
}
</style>
