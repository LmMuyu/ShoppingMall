<template>
  <div id="app">
    <keep-alive exclude="detail,startling,registered,login">
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
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
@import "~assets/css/baess.css";
@import "~assets/css/normalize.css";
</style>
