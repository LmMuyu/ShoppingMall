<template>
  <div class="detailes">
    <div class="logo">
      <img :src="business.logo" alt />
      <span>{{business.name}}</span>
    </div>
    <div class="Daby">
      <div class="Number">
        {{business.sells | priceFiltering}}
        <div>总销量</div>
      </div>
      <span class="isbady">
        {{business.goods}}
        <div>全部宝贝</div>
      </span>
    </div>
    <div class="sihti" v-for="(item, index) in business.score" :key="index">
      <span>{{item.name}}</span>
      <span>{{item.score}}</span>
      <span class="iscolor" :class="{active:item.isBetter}">{{item.isBetter === false ? "低":"高"}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    business: {
      type: Object,
      default() {
        return {};
      }
    },
    computed: {}
  },
  filters: {
    priceFiltering(value){
      if (!value) return "";
      return parseInt(value).toFixed(2)
    }
  }
};
</script>

<style scoped>
.detailes {
  height: 100%;
  margin-top: 3px;
  box-shadow: 0px 3px #eeeeee;
}
.logo {
  margin-top: 30px;
  display: flex;
  box-shadow: 50%;
}
.logo img {
  width: 44px;
  height: 44px;
  display: block;
}
.logo span {
  line-height: 44px;
  padding: 0 10px;
}
.Daby {
  width: 200px;
  height: auto;
  margin-top: 30px;
  display: flex;
  border-right: 1px solid #eeeeee;
  text-align: center;
}
.Number {
  padding: 10px;
  margin-left: 15px;
}
.isnae {
  padding: 10px;
  margin-left: 15px;
}
.isbady {
  padding: 10px;
  margin-left: 15px;
}
.sihti {
  display: flex;
  justify-content: space-around;
  width: 200px;
}
.iscolor {
  color: red;
}
.active {
  color: green;
}
</style>