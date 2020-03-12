<template>
  <div class="fileuserinfo">
    <div class="header">
      <span class="image">
        <img
          :src="userInfo.avatar? userInfo.avatar:'../../../assets/images/login/loginPassword.svg'"
          @click="picturePreview"
        />
      </span>
    </div>
    <div class="flexes" @click="LoginJump">
      <div class="title">{{userInfo.username? userInfo.username:"点击登录" }}</div>
      <div class="font">手机号:{{userInfo.phone? userInfo.phone:""}}</div>
    </div>
    <div class="identity">
      <span>状态:{{userInfo.RealNameVerification ? "以实名":"未实名"}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    LoginJump() {
      if (localStorage.getItem("user")) return false;

      this.$router.push("/login").catch(err => {
        err;
      });
    },
    picturePreview() {
      this.$imagepreview({
        images: [JSON.parse(localStorage.getItem("user")).avatar],
        showIndex: false
      });
    }
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>

<style scoped>
.identity {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  left: 20px;
}
.identity span {
  font-size: 12px;
}
.flexes {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  position: relative;
  left: 10px;
}
.flexesc div {
  margin-left: 10px;
}
.fileuserinfo {
  display: flex;
  background-color: #ffffff;
}
.header {
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
}
.image {
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  margin-left: 15px;
  background-color: #e6e6e6;
}
.image img {
  width: 48px;
  height: 48px;
  border-radius: 100%;
}
.title {
  font-weight: bolder;
  flex: 1;
  height: 32px;
}
.font {
  font-size: 12px;
}
</style>