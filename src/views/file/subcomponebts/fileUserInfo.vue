<template>
  <div class="fileuserinfo">
    <div class="header">
      <span class="image">
        <img src="~assets/images/fileUser.svg" alt />
      </span>
    </div>
    <div class="flexes" @click="LoginJump">
      <div class="title">点击登录</div>
      <div class="font">暂无手机号</div>
    </div>
    <div class="identity">
      <span>未实名</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    LoginJump() {
      this.$router.push("/login").catch(err => {
        err;
      });
    }
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
.title {
  font-weight: bolder;
  flex: 1;
  height: 32px;
}
.font {
  font-size: 12px;
}
</style>