<template>
  <div class="cird">
    <div v-for="(item, index) in favorite" :key="index">
      <van-card :desc="item.desc" :title="item.business" :thumb="item.goodsimage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["favorite"])
  }
};
</script>

<style scoped>
</style>