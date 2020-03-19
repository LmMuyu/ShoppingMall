<template>
  <div class="order">
    <file-order-nav />
    <order />
  </div>
</template>

<script>
import Order from "./Order";
import fileOrderNav from "./fileOrderNav";

export default {
  name: "fileorder",
  components: {
    Order,
    fileOrderNav
  }
};
</script>

<style scoped>

</style>