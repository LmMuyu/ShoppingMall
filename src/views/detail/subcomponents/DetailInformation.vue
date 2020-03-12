<template>
  <div class="detailes">
    <v-card class="mx-auto" max-width="1920" outlined tile>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline accent">{{business.name}}</div>
          <v-list-item-title class="headline mb-1">总销量:{{business.sells}}</v-list-item-title>
          <v-list-item-title class="headline mb-1">全部宝贝:{{business.goods}}件</v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey">
          <img v-lazy="business.logo" />
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions class="actionsis">
        <div class="sihti" v-for="(item, index) in business.score" :key="index">
          <v-btn text>{{item.name}}</v-btn>
          <v-btn text>{{item.score}}</v-btn>
          <v-btn
            text
            class="iscolor"
            :class="{active:item.isBetter}"
          >{{item.isBetter === false ? "低":"高"}}</v-btn>
        </div>
      </v-card-actions>
    </v-card>
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
    }
  },
  filters: {
    priceFiltering(value) {
      if (!value) return "";
      return parseInt(value).toFixed(2);
    }
  }
};
</script>

<style scoped>
.detailes{
  margin-top: 10px;
  margin-bottom: 10px;
}
.iscolor {
  color: red;
}
.active {
  color: green;
}
.accent {
  font-weight: bold;
  font-size: 18px;
}
.actionsis {
  display: flex;
  flex-wrap: wrap;
}
</style>