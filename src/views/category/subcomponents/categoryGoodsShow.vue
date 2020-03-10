<template>
  <div class="categorygoodsshow">
    <v-card :loading="loading" class="mx-auto my-12" width="120">
      <v-img height="100" :src="showdata.image" @load="imageload"></v-img>
      <v-card-text>{{showdata.title}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),
  components: {},
  props: {
    showdata: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    imageload() {
      this.$bus.$emit("imageload");
    }
  }
};
</script>

<style scoped>
.categorygoodsshow {
  text-align: center;
  margin: 5px;
}
</style>