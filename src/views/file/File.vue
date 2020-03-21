<template>
  <div id="file">
    <div>
      <file-top-features />
      <file-user-info />
      <file-features class="isfeatures" @fileorder="fileOrder" @favorite="favorite" />
      <file-sign-out
        class="filesignout"
        @click.native="DeleteWebStorage"
        v-if="exithidden"
        v-ripple
      />
    </div>

    <transition
      enter-active-class="animated fadeInRight faster"
      leave-active-class="animated fadeOutRightBig faster"
      :duration="{enter:100,leave:100}"
      name="view"
    >
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import fileUserInfo from "./subcomponebts/fileUserInfo";
import fileFeatures from "./subcomponebts/fileFeatures";
import fileTopFeatures from "./subcomponebts/fileTopFeatures";
import fileSignOut from "./subcomponebts/fileSignOut";

import { DELETEUSERS } from "@/store/murations-types";

export default {
  name: "file",
  inject: ["reload"],
  data() {
    return {
      exithidden: true
    };
  },
  components: {
    fileUserInfo,
    fileTopFeatures,
    fileFeatures,
    fileSignOut
  },
  created() {
    this.isexithidden();
    this.pageRefresh();
  },
  methods: {
    pageRefresh() {
      if (localStorage.getItem("uesr")) {
        this.reload();
      }
    },
    DeleteWebStorage() {
      this.$Dialog
        .confirm({
          message: "确定退出登陆?"
        })
        .then(() => {
          localStorage.removeItem("user");
          //删除state中的用户信息
          this.$store.commit(DELETEUSERS);

          //点击退出后检查有没有删除成功
          if (!localStorage.getItem("user")) {
            this.$toast("已退出当前账号");
            this.exithidden = false;
            this.reload();
          } else {
            this.$toast("网络异常");
          }
        })
        .catch(() => {
          // on cancel
        });
    },
    isexithidden() {
      localStorage.getItem("user")
        ? (this.exithidden = true)
        : (this.exithidden = false);
    },
    fileOrder() {
      this.$router.push("/file/fileorder").catch(err => {
        err;
      });
    },
    favorite() {
      this.$router
        .push({
          path: "/file/favorite"
        })
        .catch(err => {
          err;
        });
    }
  },
  updated() {
    localStorage.getItem("user");
  },
  beforeRouteUpdate(to, from, next) {
    const frompath = from.path.split("/").length;
    const topath = to.path.split("/").length;

    if (topath > frompath) {
      // this.fuanimateclass = "animated fadeInLeft";
    } else {
      // console.log(13);
    }

    next();
  }
};
</script>

<style scoped>
#file {
  height: 100vh;
  background-color: #f0f0f0;
}
.isfeatures {
  margin-top: 15px;
}
.filesignout {
  margin-top: 25px;
}
.view-enter-active,
.view-leave-active {
  transition: opacity 0.1s;
}
.view-enter,
.view-leave-to {
  opacity: 0;
}
.view {
  height: 100vh;
  background-color: #fafafa;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>