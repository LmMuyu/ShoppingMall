<template>
  <div class="detailnavbar">
    <nav-bar class="navbar">
      <div slot="left" class="left" @click="backReturn">
        <img src="~assets/images/detailnavbarleft.svg" alt />
      </div>
      <div slot="center" class="center">
        <div
          v-for="(item, index) in titleNavbar"
          :key="index"
          :class="{active:index===isindex}"
          @click="isclick(index)"
        >{{item}}</div>
        <span class="isbar"></span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  props: {
    titleNavbar: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isindex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    isclick(index) {
      this.isindex = index;
      this.$emit("index", index);
    },
    backReturn() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}
.left {
  margin-top: 5px;
}
.active {
  color: #ee8686;
}
</style>