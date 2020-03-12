<template>
  <div class="vangoodsaction">
    <van-goods-action class="vangoodsaction">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="RouterJump('/shoppingcart')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="shopping" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  methods: {
    shopping() {
      this.$emit("shopping");
    },
    RouterJump(value) {
      this.$bus.$emit("valueers");

      this.$router.push(value).catch(err => {
        err;
      });
    }
  }
};
</script>

<style scoped>
.vangoodsaction {
  box-shadow: 0px -1px rgb(250, 250, 250);
}
</style>