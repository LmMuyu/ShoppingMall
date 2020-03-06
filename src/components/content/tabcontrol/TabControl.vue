<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in tabcontroltitle" :key="index" :class="{active:index===indexs}">
      <span class="control" @click="controlindex(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  props: {
    tabcontroltitle: {
      type: Array,
      defaults() {
        return [];
      }
    }
  },
  data() {
    return {
      indexs: 0
    };
  },
  methods: {
    controlindex(index) {
      this.indexs = index;
      this.$emit("iscontrolvalue",index)
    }
  }
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}

.active {
  padding-bottom: 5px;
  color: #ee8686;
  border-bottom: 3px solid #ee8686;
}
</style>