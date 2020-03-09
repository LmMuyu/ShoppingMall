<template>
  <div class="categorygoodsshow">
    <Divider orientation="left" class="leftitem">{{title}}</Divider>
    <div class="divider" v-for="(item, index) in showgoods" :key="index">
      <Card style="width:60px">
        <div style="text-align:center" class="card">
          <img v-lazy="item.image" />
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    showgoods: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.categorygoodsshow {
  display: flex;
  flex-wrap: wrap;
}
.leftitem {
  font-size: 13px;
}
.card img {
  width: 30px;
  height: 30px;
}
.divider {
  margin: 0 4px;
}
</style>