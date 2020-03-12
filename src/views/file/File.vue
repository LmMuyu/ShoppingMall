<template>
  <div id="file">
    <file-top-features />
    <file-user-info />
    <file-features class="isfeatures" />
    <file-sign-out class="filesignout" @click.native="DeleteWebStorage" v-if="exithidden" v-ripple />
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
    },
    isexithidden() {
      localStorage.getItem("user")
        ? (this.exithidden = true)
        : (this.exithidden = false);
    }
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
</style>