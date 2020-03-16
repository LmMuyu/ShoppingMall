<template>
  <div id="addressinfo">
    <address-nav />
    <addressinfo-main-body @hineus="hineis" v-if="hine" />
    <transition enter-active-class="animated fadeInRight faster" :duration="3000">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import addressinfoMainBody from "./childcomps/addressinfoMainBody";
import addressNav from "./childcomps/addressNav";

export default {
  name: "addressinfo",
  components: {
    addressinfoMainBody,
    addressNav
  },
  data() {
    return {
      hine: true
    };
  },
  methods: {
    hineis() {
      this.$router.push("/addressinfo/addaddress").catch(err => {
        err;
      });
    }
  },
  mounted() {
    this.$bus.$on("addressedit", (item, index) => {
      // console.log(item, index);

      this.$router.push({
        path: "/addressinfo/addressedit",
        query: {
          info: {
            item,
            index
          }
        }
      }).catch(err=>{err});
    });
  },
  beforeUpdate() {
    this.hine = !this.hine;
  }
};
</script>

<style scoped>
#addressinfo {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #ffffff;
}
</style>