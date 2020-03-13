<template>
  <transition
    enter-active-class="animated fadeInRight faster"
    leave-active-class="animated fadeOutLeft faster"
    :duration="{enter:'300',leave:'250'}"
  >
    <div id="buy" style>
      <buy-top-nav />
      <buy-address />
    </div>
  </transition>
</template>

<script>
import buyTopNav from "./childcomps/buyTopNav";
import buyAddress from "./childcomps/buyAddress";

export default {
  components: {
    buyTopNav,
    buyAddress
  }
};
</script>

<style  scoped>
#buy {
  position: relative;
  z-index: 10;
  height: 100vh;
}
</style>