<template>
  <div id="login">
    <login-back />
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from "./subcomponents/LoginComponent";
import loginBack from "./subcomponents/loginBack";

export default {
  components: {
    LoginComponent,
    loginBack
  }
};
</script>

<style scoped>
#login {
  height: 100vh;
  position: relative;
  z-index: 999;
  background-color: #f0f0f0;
}
</style>