<template>
  <div class="vancol">
    <van-row click="vanrow">
      <van-col :span="leftspan">
        <slot name="left"></slot>
      </van-col>
      <van-col :span="centerspan">
        <slot name="center"></slot>
      </van-col>
      <van-col :span="rightspan">
        <slot name="right"></slot>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    leftspan: {
      type: Number,
      default() {
        return 8;
      }
    },
    centerspan: {
      type: Number,
      default() {
        return 8;
      }
    },
    rightspan: {
      type: Number,
      default() {
        return 8;
      }
    }
  }
};
</script>

<style scoped>
.vancol {
  background-color: #30336b;
  height: 49px;
  line-height: 49px;
}
</style>