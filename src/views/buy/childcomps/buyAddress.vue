<template>
  <div>
    <v-card class="mx-auto" max-width="1920" outlined flat tile>
      <v-card-text>
        <div>Word of the Day</div>
        <div class="card">
          <span class="display-1 text--primary clea">be•nev•o•lent</span>
          <span class="spanleft">
            <img src="~assets/images/common/return.svg" />
          </span>
        </div>
        <p>adjective</p>
      </v-card-text>
    </v-card>
    <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
      <div slot="footer" class="footer">
        <span>数量:</span>
        <span size="mini">+</span>
        <input type="text" class="inputtext" v-model="value" @input="inputis" />
        <span size="mini">-</span>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      true: true,
      value: 10
    };
  },
  methods: {
    inputis() {
      if (this.value > 99) {
        this.value = 99;
      } else {
        if (this.value === "") {
          this.value = 1;
        }
      }
    }
  }
};
</script>

<style scoped>
.clea {
  font-size: 20px;
  color: #000000;
}
.theme--light.v-card.v-card--outlined {
  border: none;
}
.card {
  display: flex;
}
.card span {
  flex: 1;
}
.spanleft {
  text-align: right;
}
.inputtext {
  width: 16px;
}
.footer span {
  padding: 10px;
}
</style>