<template>
  <div>
    <app-bar class="appbar" :background="'#ffffff'">
      <div slot="left" class="left" @click="Return">
        <img src="~assets/images/detailnavbarleft.svg" alt />
      </div>
      <div slot="center" class="center">
        <span>填写订单</span>
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
    Return() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.left {
  display: flex;
  align-items: center;
  height: 44px;
  margin-left: 5px;
}
.center {
  text-align: center;
  font-size: 16px;
}
</style>