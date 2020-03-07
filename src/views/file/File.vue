<template>
  <div id="file">
    <file-top-features />
    <file-user-info />
    <file-features class="isfeatures" />
    <file-sign-out class="filesignout" @click.native="DeleteWebStorage" v-if="exithidden" />
  </div>
</template>

<script>
import fileUserInfo from "./subcomponebts/fileUserInfo";
import fileFeatures from "./subcomponebts/fileFeatures";
import fileTopFeatures from "./subcomponebts/fileTopFeatures";
import fileSignOut from "./subcomponebts/fileSignOut";

export default {
  name: "file",
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
  },
  methods: {
    DeleteWebStorage() {
      localStorage.removeItem("user");
      //点击退出后检查有没有删除成功
      if (!localStorage.getItem("user")) {
        this.$Notify({ type: "primary", message: "删除成功" });
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