<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" v-ripple @click="RouterJump('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="search" v-ripple @click="RouterJump('/category') ">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" v-ripple @click="RouterJump('/shoppingcart')">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" v-ripple @click="RouterJump('/file')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: 0,
      path: ""
    };
  },
  created() {
    this.path = this.$route.path;
  },
  methods: {
    RouterJump(value) {
      this.$router.push(value).catch(err => {
        err;
      });
    }
  },
  mounted() {
    this.$bus.$on("valueers", () => {
      this.active = 2;
    });
  },
  components: {}
};
</script>

<style scoped>
.tabbar {
  width: 100vh;
}
</style>