<template>
  <div>
    <van-address-edit
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['456', 'dawd', '请选dawd择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
export default {
  name: "addressedit",
  data() {
    return {
      addinfo: {},
      searchResult: [456]
    };
  },
  created() {
    this.addinfo = this.$route.query.info;
  },
  methods: {
    onSave() {
      // Toast('save');
    },
    onDelete() {
      // Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped>
</style>