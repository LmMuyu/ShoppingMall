<template>
  <div class="backtop">
    <img src="~assets/images/backtop.svg" alt />
  </div>
</template>

<script>
export default {
  name: "backtop"
};
</script>

<style scoped>
.backtop img {
  width: 48px;
  height: 48px;
  position: absolute;
  right: 8px;
  bottom: 64px;
  background-color: #ffffff;
  border-radius: 100%;
}
</style>