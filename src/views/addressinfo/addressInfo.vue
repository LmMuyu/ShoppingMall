<template>
  <transition
    enter-active-class="animated fadeInRight faster"
    leave-active-class="animated fadeOutRightBig faster"
    :duration="{enter:100,leave:100}"
  >
    <div id="addressinfo">
      <address-nav class="addressnav" />
      <scroll class="scroll" :bounce="false">
        <div v-if="this.$route.meta.comdisp">
          <addressinfo-main-body @hineus="hineis" class="mainbody" />
        </div>
      </scroll>

      <transition
        enter-active-class="animated fadeInRight faster"
        leave-active-class="animated fadeOutRightBig faster"
        :duration="{enter:100,leave:100}"
      >
        <router-view class="view"></router-view>
      </transition>
    </div>
  </transition>
</template>

<script>
import addressinfoMainBody from "./childcomps/addressinfoMainBody";
import addressNav from "./childcomps/addressNav";

import Scroll from "components/content/scroll/Scroll";

export default {
  name: "addressinfo",
  components: {
    addressinfoMainBody,
    addressNav,
    Scroll
  },
  data() {
    return {};
  },
  methods: {
    hineis() {
      this.$router.push("/addressinfo/addaddress").catch(err => {
        err;
      });
    }
  },
  mounted() {
    this.$bus.$on("addressedit", (item, index) => {
      this.$router
        .push({
          path: "/addressinfo/addressedit",
          query: {
            info: {
              item,
              index
            }
          }
        })
        .catch(err => {
          err;
        });
    });
  }
};
</script>

<style scoped>
#addressinfo {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #ffffff;
}
.view,
.mainbody {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}
.scroll {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.addressnav {
  position: relative;
  z-index: 99999;
}
</style>