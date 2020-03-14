<template>
  <div id="app">
    <keep-alive exclude="startling,registered,detail,login,searchfor,buy">
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    <tab-bar class="tabbar" v-if="hidedTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/content/tabbar/TabBar";

export default {
  name: "app",
  components: {
    TabBar
  },
  provide() {
    return {
      reload: this.reload,
      dsiplay: this.dsiplay
    };
  },
  data() {
    return {
      isRouterAlive: true,
      hidedTabBar: true
    };
  },
  created() {
    // this.$router.push("/home");
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
    dsiplay() {
      this.hidedTabBar = !this.hidedTabBar;
    }
  }
};
</script>

<style>
.tabbar {
  position: relative;
  z-index: 9;
}

@import "~assets/css/baess.css";
@import "~assets/css/normalize.css";
</style>
