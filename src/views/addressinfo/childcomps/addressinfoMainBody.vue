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
// import { EDITADDRESS } from "@/store/murations-types";

export default {
  name: "addaddress",
  data() {
    return {
      chosenAddressId: "",
      list: []
    };
  },
  methods: {
    addaddress() {
      this.$emit("hineus");
    },
    edit(_item, index) {
      // this.$store.dispatch(EDITADDRESS, this.list[index].id);

      this.$bus.$emit("addressedit", this.addinfo[index], index);
    }
  },
  mounted() {
    this.list = this.addinfo;
  },
  computed: {
    ...mapGetters(["addinfo"])
  },
  watch: {
    list() {
      const id = this.list.findIndex(item => {
        return item.isDefault == true;
      });

      this.chosenAddressId = id;
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