<template>
  <div>
    <Menu theme="light" active-name="1" width="120px">
      <MenuItem name="1" @click="toiski('name')">文章管理</MenuItem>
      <MenuItem name="2">评论管理</MenuItem>
      <MenuItem name="3">用户留存</MenuItem>
      <MenuItem name="4">流失用户</MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toiski(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
</style>