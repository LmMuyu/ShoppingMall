<template>
  <div class="searchfor">
    <search-bar />
    <recordHistory class="isrecord"/>
  </div>
</template>

<script>
import searchBar from "./searchBar";
import recordHistory from "./recordHistory";

export default {
  components: {
    searchBar,
    recordHistory
  }
};
</script>

<style scoped>
.searchfor {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #ffffff;
  z-index: 10000;
}
.isrecord{
  float: left;
}
</style>