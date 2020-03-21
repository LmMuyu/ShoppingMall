<template>
  <div>
    <app-bar class="appbar" :background="'#ffffff'">
      <div slot="left" class="left" @click="back">
        <img src="~assets/images/detailnavbarleft.svg" alt />
      </div>
      <div slot="center" class="center">
        <span>地址</span>
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
    back() {
      if (this.$route.path === "/addressinfo/addressedit") {
        this.$Dialog
          .confirm({
            message: "是否放弃本次编辑?"
          })
          .then(() => {
            this.$router.back();
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.back();
      }
    }
  }
};
</script>

<style scoped>
.appbar {
  height: 44px;
}
.left {
  margin-left: 8px;
}
.left,
.center {
  display: flex;
  align-items: center;
  height: 44px;
  line-height: 44px;
}
.center {
  justify-content: center;
}
</style>