<template>
  <div class="goods-item" @click="DetailJump">
    <scroll class="scroll">
      <van-card
        :price="goodsitem.price"
        :desc="goodsitem.title"
        title="购物街"
        :thumb="goodsitemres"
        @load="imgload"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/content/scroll/Scroll";

export default {
  name: "goodslistitem",
  components: {
    Scroll
  },
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
      this.$router
        .push({
          path: "/detail",
          query: {
            iid
          }
        })
        .catch(err => {
          err;
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
.scroll {
}
</style>