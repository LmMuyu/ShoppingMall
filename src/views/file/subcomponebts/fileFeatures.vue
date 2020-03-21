<template>
  <div class="filefeatures">
    <div class="features" v-ripple @click="fileorder">
      <span class="favorite">
        <img src="~assets/images/fileOrder.svg" alt />
        <span class="font">订单</span>
      </span>
      <span class="arrow">
        <img src="~assets/images/arrow.svg" alt />
      </span>
    </div>
    <div class="features" v-ripple @click="favorite">
      <span class="favorite">
        <img src="~assets/images/fileFavorite.svg" alt />
        <span class="font">收藏</span>
      </span>
      <span class="arrow">
        <img src="~assets/images/arrow.svg" alt />
      </span>
    </div>
    <div class="features" v-ripple>
      <span class="favorite">
        <img src="~assets/images/fileHistory.svg" alt />
        <span class="font">历史记录</span>
      </span>
      <span class="arrow">
        <img src="~assets/images/arrow.svg" alt />
      </span>
    </div>
    <div class="features" v-ripple @click="addressinfo">
      <span class="favorite">
        <img src="~assets/images/file/address.svg" alt />
        <span class="font">地址信息</span>
      </span>
      <span class="arrow">
        <img src="~assets/images/arrow.svg" alt />
      </span>
    </div>
    <div class="features" v-ripple>
      <span class="favorite">
        <img src="~assets/images/fileFeedback.svg" alt />
        <span class="font">意见和反馈</span>
      </span>
      <span class="arrow">
        <img src="~assets/images/arrow.svg" alt />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addressinfo() {
      this.$router.push("/addressinfo").catch(err => {
        err;
      });
    },
    fileorder() {
      this.$emit("fileorder")
    },
    favorite(){
      this.$emit("favorite")
    }
  }
};
</script>

<style scoped>
.features {
  height: 32px;
  line-height: 32px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  padding: 25px 8px 25px 0;
}
.features span {
  width: auto;
  height: 32px;
  flex: 1;
}
.arrow img {
  float: right;
}
.favorite {
  display: flex;
}
.font {
  font: 14px;
  margin-left: 8px;
}
</style>