<template>
  <transition
    enter-active-class="animated fadeInRight faster"
    leave-active-class="animated fadeOutRightBig faster"
    :duration="{enter:100,leave:100}"
  >
    <div id="buy" style>
      <buy-top-nav class="nav" />
      <scroll class="scroll" :bounce="false">
        <buy-address />
        <buy-info class="info" />
        <buy-discount class="discount" />
        <buyTotalPrice class="price" />
      </scroll>
      <div class="submitbar">
        <buy-submit-bar class="ishebar" @submitOrders="submitOrders" />
      </div>
    </div>
  </transition>
</template>

<script>
import buyTopNav from "./childcomps/buyTopNav";
import buyAddress from "./childcomps/buyAddress";
import buyInfo from "./childcomps/buyInfo";
import buyDiscount from "./childcomps/buyDiscount";
import buyTotalPrice from "./childcomps/buyTotalPrice";
import buySubmitBar from "./childcomps/buySubmitBar";

import Scroll from "components/content/scroll/Scroll";

import { GOODSORDER } from "@/store/murations-types";
import { mapGetters } from "vuex";

export default {
  name: "buy",
  inject: ["dsiplay"],
  components: {
    buyTopNav,
    buyAddress,
    buyInfo,
    buyDiscount,
    buyTotalPrice,
    buySubmitBar,
    Scroll
  },
  data() {
    return {};
  },
  methods: {
    submitOrders() {
      this.$store.commit(GOODSORDER, this.information);
    }
  },
  mounted() {
    this.dsiplay();
  },
  beforeDestroy() {
    this.dsiplay();
  },
  computed: {
    ...mapGetters(["information"])
  }
};
</script>

<style  scoped>
#buy {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: rgb(250, 250, 250);
}
.info,
.price,
.discount {
  margin-top: 10px;
}
.price {
  border-bottom: 10px solid #fafafa;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 50px;
  right: 0;
  left: 0;
}
.ishebar {
  position: relative;
  z-index: 10;
  box-shadow: 0 -2px 1px #ff0000;
}
.nav {
  position: relative;
  z-index: 10;
  box-shadow: 0 2px 5px #fafafa;
}
.submitbar {
  box-shadow: 0 3px 3px #f0f0f0;
}
</style>