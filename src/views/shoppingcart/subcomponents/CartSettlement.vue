<template>
  <div id="cartsettlement">
    <div class="totalcost">
      <span class="cartzong">总价格:{{carttotalcost || 0}}</span>
      <span class="cartjie">合计:{{carttotal || 0}}件</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    //用扩展运算符将getters混入computed中
    ...mapGetters(["totalcost", "carttotal"]),
    carttotalcost() {
      return "¥" + this.totalcost.toFixed(2);
    }
  }
};
</script>

<style scoped>
#cartsettlement {
  width: 100%;
}
.totalcost {
  height: 49px;
  line-height: 49px;
  width: 100%;
  background-color: #ffffff;
}
.cartzong {
  font-weight: bolder;
  float: left;
}
.cartjie {
  float: right;
  font-weight: 600;
  color: red;
}
</style>