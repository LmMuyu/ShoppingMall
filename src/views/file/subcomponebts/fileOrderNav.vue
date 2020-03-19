<template>
  <div>
    <app-bar :background="'#ffffff'">
      <div slot="left" class="left" @click="backpush">
        <img src="~assets/images/detailnavbarleft.svg" alt />
      </div>
      <div slot="center" class="center">
        <span>订单</span>
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
    backpush() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.left {
  height: 44px;
  display: flex;
  align-items: center;
}
.center {
  text-align: center;
}
</style>