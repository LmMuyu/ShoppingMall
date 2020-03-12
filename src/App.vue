<template>
  <div id="app">
    <keep-alive exclude="detail,startling,registered,login,searchfor">
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    <tab-bar class="tabbar"></tab-bar>
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
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  created() {
    this.$router.push("/home");
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
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
