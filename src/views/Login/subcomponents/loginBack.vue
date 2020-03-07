<template>
  <div>
    <nav-bar class="backgroundcolor">
      <div slot="left" class="left" @click="loginback">
        <img src="~assets/images/detailnavbarleft.svg" alt />
      </div>
      <div slot="center">{{logreg}}</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      path: ""
    };
  },
  created() {
    this.path = this.$route.path;
  },
  methods: {
    loginback() {
      this.$router.push(`${this.path === "/login" ? "/file" : "/login"}`);
    }
  },
  computed: {
    logreg() {
      let path = this.$route.path;
      let titles = path === "/login" ? "登录" : "注册";
      return titles;
    }
  }
};
</script>

<style scoped>
.backgroundcolor {
  background-color: #ffffff;
}
.left {
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  line-height: 44px;
}
img {
  width: 32px;
  height: 32px;
  margin-left: 15px;
}
</style>