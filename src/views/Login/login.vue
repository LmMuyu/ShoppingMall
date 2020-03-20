<template>
  <div id="login">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from "./subcomponents/LoginComponent";

export default {
  components: {
    LoginComponent
  },
  updated() {
    localStorage.getItem("user");
  }
};
</script>

<style scoped>
#login {
  height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #f0f0f0;
}
</style>