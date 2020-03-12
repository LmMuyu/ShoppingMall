<template>
  <div class="hisrecord" v-if="historyRecord.length === 0? false:true">
    <Divider orientation="left" class="leftitem">搜索记录</Divider>
    <div class="historyrecord">
      <div v-for="(item, index) in historyRecord" :key="index" class="recordhis">
        {{item}}
        <Icon class="icon" type="md-close" @click="deleteRecord(index)" />
      </div>
    </div>
    <div class="istrash" @click="isDelete">
      <Icon type="ios-trash-outline" />清除搜索记录
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { mapGetters } from "vuex";
import { DELETERECORD, DELETEHISTORY } from "@/store/murations-types";

export default {
  methods: {
    deleteRecord(index) {
      this.$store.commit(DELETERECORD, index);
    },
    isDelete() {
      Dialog.confirm({
        message: "确定删除全部搜索记录?"
      })
        .then(() => {
          this.$store.commit(DELETEHISTORY);
        })
        .catch(() => {});
    }
  },
  computed: {
    ...mapGetters(["historyRecord"])
  }
};
</script>

<style scoped>
.historyrecord {
  display: flex;
  flex-wrap: wrap;
}
.leftitem {
  color: #000;
  font-weight: bold;
}
.historyrecord div {
  text-align: center;
  margin-left: 8px;
  height: 16px;
  line-height: 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 12px 8px;
  background-color: #e0e0e0;
}
.recordhis {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon {
  margin-left: 8px;
}
.istrash {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}
</style>