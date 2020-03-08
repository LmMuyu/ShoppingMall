<template>
  <div class="categorygoodsshow">
    <app-bar :leftspan="0" :centerspan="24" :rightspan="0" class="appbar">
      <div slot="center">
        <van-dropdown-menu class="dropdownmenu">
          <van-dropdown-item v-model="value" :options="option" />
          <van-dropdown-item title="筛选" ref="item">
            <van-switch-cell v-model="switch1" title="包邮" />
            <van-switch-cell v-model="switch2" title="团购" />
            <van-button block type="info" @click="onConfirm">确认</van-button>
          </van-dropdown-item>
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
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
      value: 0,
      switch1: false,
      switch2: false,
      value2: "a",
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style scoped>
.categorygoodsshow {
  position: fixed;
  top: 49px;
  left: 110px;
  right: 0;
  bottom: 0;
}
div.van-popup--top{
  left: 110px;
}
</style>