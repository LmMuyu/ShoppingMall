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
    routerpath(paths) {
      this.$router.push(paths).catch(err => {
        err;
      });
    },
    back() {
      const path = this.$route.path;

      if (path === "/addressinfo/addressedit") {
        this.$Dialog
          .confirm({
            message: "是否放弃本次编辑?"
          })
          .then(() => {
            this.routerpath("/addressinfo");
          })
          .catch(() => {
            // on cancel
          });
      } else if (path === "/addressinfo/addaddress") {
        this.routerpath("/addressinfo");
      } else if (path === "/addressinfo") {
        this.routerpath("/file");
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