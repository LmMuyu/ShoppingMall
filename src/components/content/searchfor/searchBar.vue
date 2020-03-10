<template>
  <div>
    <app-bar :leftspan="5" :centerspan="19" :rightspan="0">
      <div slot="left" class="left" @click="returns">
        <img src="~assets/images/category/categorydetail.svg" alt />
        <span>返回</span>
      </div>
      <div slot="center">
        <van-search class="form" :disabled="true" v-model="value" show-action shape="round" placeholder="请输入搜索关键词">
          <div slot="action" @click="search" class="action">取消</div>
        </van-search>
      </div>
    </app-bar>
  </div>
</template>

<script>
import AppBar from "components/common/appbar/AppBar";

export default {
  components: {
    AppBar
  },
  data() {
    return {
      value: "",
      true: true
    };
  },
  methods: {
    returns() {
      this.$router.back();
    },
    search() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.search {
  height: 49px;
}
.left {
  height: 49px;
  display: flex;
  align-items: center;
  color: #f0f0f0;
}
.left img {
  margin-left: 12px;
}
.form {
  background-color: #30336b;
  height: 49px;
}
.action {
  color: #f0f0f0;
}
</style>