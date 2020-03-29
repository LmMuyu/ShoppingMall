<template>
  <div class="favoriteappbar">
    <app-bar :background="'#ffffff'">
      <div slot="left" class="left" @click="Back">
        <img src="~assets/images/detailnavbarleft.svg" alt />
      </div>
      <div slot="center" class="center">
        <span>收藏</span>
      </div>
    </app-bar>
  </div>
</template>

<script>
import AppBar from "components/common/appbar/AppBar";

export default {
  components: {
    AppBar
  },
  methods: {
    Back() {
      this.$router.replace({
        path: "/file"
      });
    }
  }
};
</script>

<style scoped>
.favoriteappbar {
  box-shadow: 0 -2px 2px #fafafa;
  background-color: #ffffff;
}
.left {
  height: 44px;
  margin-left: 8px;
  display: flex;
  align-items: center;
}
.center {
  text-align: center;
}
</style>