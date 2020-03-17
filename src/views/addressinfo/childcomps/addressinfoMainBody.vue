<template>
  <div class="adresslist">
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="addaddress"
        :isDefault="addinfo.isDefault"
        @edit="edit"
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
      chosenAddressId: "", //默认地址
      list: []
    };
  },
  methods: {
    addaddress() {
      this.$emit("hineus");
    },
    edit(_item, index) {
      console.log(index);

      this.$bus.$emit("addressedit", this.addressedit[index], index); //地址信息 //src\views\addressinfo\addressInfo.vue
    }
  },
  mounted() {
    this.list = this.addinfo;
  },
  computed: {
    ...mapGetters(["addinfo", "addressedit"])
  },
  watch: {
    list() {
      const id = this.list.findIndex(item => {
        return Boolean(item.isDefault) === true;
      });
      this.chosenAddressId = id + 1;
    },
    deep: true
  }
};
</script>

<style scoped>
.adresslist {
  height: 100vh;
  background-color: #fafafa;
}
</style>