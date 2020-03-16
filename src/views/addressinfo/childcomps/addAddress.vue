<template>
  <div class="text-center">
    <van-address-edit
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      save-button-text="新建"
      default-tag-text="默认"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      :area-list="areaList"
      value="110101"
      @change="onChange"
      @confirm="onConfirm"
      @cancel="onCancel"
      @save="onSave"
    />
  </div>
</template>

<script>
import areaList from "assets/js/Area";
import { ADDRESSINFO } from "@/store/murations-types";

export default {
  data() {
    return {
      show: false,
      searchResult: [],
      areaList
    };
  },
  methods: {
    // 弹出层显示
    showPopup() {
      this.show = true;
    },
    //value=0改变省，1改变市，2改变区
    onChange(picker) {
      let val = picker.getValues();
      console.log(val); //查看打印
      let areaName = "";
      for (var i = 0; i < val.length; i++) {
        areaName = areaName + (i == 0 ? "" : "/") + val[i].name;
      }
      this.carmodel = areaName;
    },
    //确定选择城市
    onConfirm(val) {
      console.log(val[0].name + "," + val[1].name);
      this.show = false; //关闭弹框
    },
    //取消选中城市
    onCancel() {
      this.show = false;
      this.$refs.myArea.reset(); // 重置城市列表
    },
    //表单内容
    onSave(content) {
      this.$Dialog
        .confirm({
          message: "确定创建新的地址?"
        })
        .then(() => {
          this.$store.commit(ADDRESSINFO, content);
        })
        .catch(() => {
          // on cancel
        });
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
