<template>
  <div id="favorite">
    <favorite-appbar />
    <favorite-cird />
  </div>
</template>

<script>
import favoriteAppbar from "./childcomps/favoriteAppbar";
import favoriteCird from "./childcomps/favoriteCird";

export default {
  components: {
    favoriteAppbar,
    favoriteCird
  }
};
</script>

<style scoped>
</style>