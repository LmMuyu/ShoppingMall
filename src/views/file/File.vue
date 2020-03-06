<template>
  <div id="file">
    <file-top-features />
    <file-user-info />
    <file-features class="isfeatures" />
    <file-sign-out class="filesignout" />
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
    return {};
  },
  components: {
    fileUserInfo,
    fileTopFeatures,
    fileFeatures,
    fileSignOut
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
.filesignout{
  margin-top: 25px
}
</style>