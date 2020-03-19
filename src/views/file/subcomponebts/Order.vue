<template>
  <div>
    <div v-for="(item, index) in goodsorder" :key="index">
      <van-card
        :num="item.count"
        tag="未支付"
        :price="item.lownowrrice"
        :desc="item.desc"
        :title="item.business"
        :thumb="item.goodsimage"
      >
        <div slot="tags">
          <van-tag plain type="danger">{{item.courier}}</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini" class="button">未支付</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "order",
  computed: {
    ...mapGetters(["goodsorder"])
  }
};
</script>

<style scoped>
.button{
  color: red;
}
</style>