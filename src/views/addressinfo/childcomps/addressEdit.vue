<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      :address-info="addinfo['item']"
    />
  </div>
</template>

<script>
import areaList from "assets/js/Area";
import { EDITADDRESS, DELETEADDRESS } from "@/store/murations-types";

export default {
  name: "addressedit",
  data() {
    return {
      addinfo: {}, //地址信息
      searchResult: [],
      show: false,
      areaList
    };
  },
  created() {
    this.addinfo = this.$route.query.info;
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
    onSave(content) {
      this.$Dialog
        .confirm({
          title: "保存",
          message: "确定保存?"
        })
        .then(() => {
          this.$store.dispatch(EDITADDRESS, {
            content,
            idnex: this.addinfo["index"]
          });

          this.$router.push("/addressinfo").catch(err => {
            err;
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    onDelete(content) {
      this.$store.dispatch(DELETEADDRESS, content.id).then(value => {
        this.$toast(value);
        this.$router.back();
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