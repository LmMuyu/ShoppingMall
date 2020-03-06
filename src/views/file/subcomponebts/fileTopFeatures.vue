<template>
  <div class="filetopfeatures">
    <span>
      <img src="~assets/images/site.svg" alt />
    </span>
    <span>
      <img src="~assets/images/refresh.svg" alt />
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filetopfeatures {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 31px;
  line-height: 31px;
  background-color: #ffffff
}
.filetopfeatures span img {
  margin-right: 8px;
}
.filetopfeatures span {
  width: 33px;
  height: 25px;
}
img {
  width: 25px;
  height: 25px;
}
</style>