<template>
  <div id="parameters">
    <div>
      <table class="tatlb" v-for="(item, index) in parameters.tables" :key="index">
        <tr>
          <td v-for="(items, index) in item" :key="index">{{items}}</td>
        </tr>
      </table>
      <table class="tatlbs">
        <tr v-for="(item, index) in parameters.set" :key="index">
          <td>{{item.key}}</td>
          <td class="color">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parameters: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script> 

<style scoped>
#parameters{
  box-shadow: 0px 3px 1px #eeeeee
}
.tatlb {
  border-collapse: collapse;
  font-size: 13px;
}
.tatlb td {
  border-bottom: 1px solid #eeeeee;
  width: 60px;
  padding: 10px;
}
.tatlbs {
  border-collapse: collapse;
  font-size: 13px;
  width: 320px;
}
.tatlbs td {
  border-bottom: 1px solid #eeeeee;
  width: 60px;
  padding: 10px;
}
.color {
  color: #f75f41;
}
</style>