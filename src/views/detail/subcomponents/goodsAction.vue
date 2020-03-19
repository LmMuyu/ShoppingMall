<template>
  <div class="vangoodsaction">
    <van-goods-action class="vangoodsaction">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="RouterJump('/shoppingcart')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="shopping" />
      <van-goods-action-button type="danger" text="立即购买" @click="purchasePage" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  methods: {
    shopping() {
      if (localStorage.getItem("user")) {
        this.$emit("shopping");
      } else {
        this.$toast("未登录");
      }
    },
    RouterJump(value) {
      if (value === "/shoppingcart") {
        this.$bus.$emit("valueers");
      }

      this.$router.replace(value).catch(err => {
        err;
      });
    },
    purchasePage() {
      if (!localStorage.getItem("addinfo")) {
        this.$Dialog
          .confirm({
            message:
              "抱歉,您没有设置地址无法购买商品,请点击确定按钮前往设置地址",
            confirmButtonText: "前往"
          })
          .then(() => {
            this.$router.push("/addressinfo").catch(err => {
              err;
            });
          })
          .catch(() => {
            // on cancel
          });

        return false;
      }

      this.$emit("purchasePage");
    }
  }
};
</script>

<style scoped>
.vangoodsaction {
  box-shadow: 0px -1px #fafafa;
}
</style>