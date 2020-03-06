<template>
  <div class="displaybar">
    <div v-for="(item, index) in displaybarimg" :key="index">
      <div>
        <img class="display" v-lazy="item.image" alt />
      </div>
      <span class="titlebar">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "displaybar",
  props: {
    displaybarimg: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style csoped>
.displaybar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 10px solid #eeeeee;
}

.display {
  width: 60px;
  height: 60px;
}
.titlebar {
  font-size: 14px;
  text-align: center;
}
</style>