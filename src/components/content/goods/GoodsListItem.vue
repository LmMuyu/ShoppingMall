<template>
  <div class="goods-item" @click="DetailJump">
    <van-card
      :price="goodsitem.price"
      :desc="goodsitem.title"
      title="购物街"
      :thumb="goodsitemres"
      @load="imgload"
    />
  </div>
</template>

<script>
export default {
  name: "goodslistitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgload() {
      this.$bus.$emit("imgcomplete");
    },
    DetailJump() {
      const iid = this.goodsitem.iid;
      this.$router.push({
        path: "/detail",
        query: {
          iid
        }
      });
    }
  },
  mounted() {
    // console.log(this.goodsitem);
  },
  computed: {
    goodsitemres() {
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  }
};
</script>

<style scoped>
.goods-item {
  border: 1px solid #f1f1e3d0;
}
</style>