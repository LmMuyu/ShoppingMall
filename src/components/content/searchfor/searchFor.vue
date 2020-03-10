<template>
  <div class="searchfor">
    <search-bar />
    <recordHistory />
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
  position: relative;
  background-color: #ffffff;
  z-index: 10000;
}
</style>