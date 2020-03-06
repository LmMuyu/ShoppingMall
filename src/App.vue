<template>
  <div id="app">
    <keep-alive exclude="detail,login">
      <router-view></router-view>
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
  }
};
</script>

<style>
@import "~assets/css/baess.css";
@import "~assets/css/normalize.css";
</style>
