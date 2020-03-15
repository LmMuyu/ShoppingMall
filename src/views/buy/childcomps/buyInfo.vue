<template>
  <div>
    <van-card
      :price="information.lownowrrice"
      :desc="information.desc"
      :title="information.business"
      :thumb="information.goodsimage"
      class="vancard"
    >
      <div slot="footer" class="footer">
        <span>数量:</span>
        <span size="mini" @click="plusLess('plus')">+</span>
        <input type="text" class="inputtext" v-model="value" @input="inputis" />
        <span size="mini" @click="plusLess('less')">-</span>
      </div>
    </van-card>
    <van-cell title="服务" :border="false" is-link value="可选保障服务" />
    <van-cell title="配送" is-link :value="information.courier" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ADDITION } from "@/store/murations-types";

export default {
  data() {
    return {
      true: true,
      value: 1
    };
  },
  methods: {
    inputis() {
      if (this.value > 99) {
        this.value = 99;
      } else {
        if (this.value === "") {
          this.value = 1;
        }
      }
    },
    plusLess(price) {
      if (price === "plus") {
        if (this.value > 99) return false;
        this.value++;
      } else {
        if (this.value <= 1) return false;
        this.value--;
      }

      // this.$bus.$emit("addition", this.information.lownowrrice, this.value); //src\views\buy\childcomps\buyTotalPrice.vue
      this.$store.commit(ADDITION, this.value);
    }
  },
  computed: {
    ...mapGetters(["information"])
  }
};
</script>

<style scoped>
.inputtext {
  width: 33px;
  background-color: #f0f0f0;
  padding: 0 10px;
}
.footer span {
  padding: 10px;
}
.vancard {
  background-color: #ffffff;
}
</style>