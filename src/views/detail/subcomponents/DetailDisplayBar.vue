<template>
  <div class="detail-display-bar">
    <div class="title">
      <p>{{goods.title}}</p>
    </div>
    <div>
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice" v-if="goods.oldPrice">{{"原价:"+goods.oldPrice}}</span>
      <sup class="activity">{{goods.discountDesc}}</sup>
    </div>
    <div class="sale">
      <span class="issale">{{columns1}}</span>
      <span class="issale">{{columns2}}</span>
      <span class="issale"></span>
    </div>
    <div class="service">
      <div v-for="(item, index) in services" :key="index" class="whole">
        <span class="icon">
          <img :src="goods.services[item-1].icon" alt />
        </span>
        <span class="name">{{goods.services[item-1].name}}</span>
      </div>
    </div>
    <div class="ishine"></div>
  </div>
</template>

<script>
export default {
  name: "detaildisplaybar",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      columns1: null,
      columns2: null,
      services: 0
    };
  },
  mounted() {},
  computed: {},
  watch: {
    goods() {
      (this.columns1 = this.goods.columns[0]),
        (this.columns2 = this.goods.columns[1]),
        (this.services = this.goods.services.length);
    },
    deep: true
  }
};
</script>

<style scoped>
.detail-display-bar {
  background-color: #ffffff;
  box-shadow: 0 3px 1px #eeeeee;
}
.title {
  width: 100%;
  height: auto;
}
.activity {
  width: 80px;
  height: 16px;
  line-height: 16px;
  background-color: #ee8686;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  margin-left: 5px;
}
.sale {
  display: flex;
  margin-top: 8px;
}
.oldPrice {
  margin-left: 5px;
  font-size: 12px;
}
.newPrice {
  font-size: 20px;
  color: #ee8686;
}
.issale {
  flex: 1;
  font-size: 13px;
  color: #525050;
}
.service {
  display: flex;
  flex-wrap: wrap;
}
.icon {
  width: 48%;
}
.icon img {
  width: 10px;
  height: 10px;
}
.name {
  font-size: 12px;
  width: 48%;
}
.whole {
  padding: 8px 16px 8px 0;
  align-items: center;
}
</style>