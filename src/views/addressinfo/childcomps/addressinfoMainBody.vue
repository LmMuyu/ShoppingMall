<template>
  <div class="adresslist">
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="addinfo"
        default-tag-text="默认"
        @add="addaddress"
        :isDefault="addinfo.isDefault"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "addaddress",
  data() {
    return {
      chosenAddressId: "1"
    };
  },
  methods: {
    addaddress() {
      this.$emit("hineus");
    }
  },
  computed: {
    ...mapGetters(["addinfo"])
  }
};
</script>

<style scoped>
.adresslist {
  height: 100vh;
  background-color: #fafafa;
}
</style>