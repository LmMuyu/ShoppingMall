<template>
  <div>
    <app-bar :leftspan="4" :centerspan="17" :rightspan="3">
      <div slot="left" class="left" @click="returns">
        <img src="~assets/images/category/categorydetail.svg" alt />
        <span>返回</span>
      </div>
      <div slot="center" class="center">
        <van-search
          class="form"
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
          @keydown.enter="searchFor"
        ></van-search>
      </div>
      <div slot="right" class="left">
        <div @click="returns" class="action">取消</div>
      </div>
    </app-bar>
  </div>
</template>

<script>
import AppBar from "components/common/appbar/AppBar";

import { SEARCHHISTORY } from "@/store/murations-types";

export default {
  components: {
    AppBar
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    returns() {
      this.$router.back();
    },
    searchFor() {
      this.$store.dispatch(SEARCHHISTORY, this.value);
      this.value = "";
    }
  }
};
</script>

<style scoped>
.search {
  height: 44px;
}
.left {
  height: 44px;
  display: flex;
  align-items: center;
  color: #f0f0f0;
  width: auto;
}
.left img {
  margin-left: 3px;
}
.form {
  background-color: #ff8198;
  height: 44px;
}
.action {
  color: #f0f0f0;
}
.center {
  margin-bottom: 24px;
}
</style>