<template>
  <div id="login">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from "./subcomponents/LoginComponent";

export default {
  components: {
    LoginComponent,
  }
};
</script>

<style scoped>
#login {
  height: 100vh;
  position: relative;
  z-index: 99999;
  background-color: #f0f0f0;
}
</style>