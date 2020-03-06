<template>
  <div id="cartlistitem">
    <span class="chkb">
      <input type="checkbox" v-model="goodsdata.status" id="checkbox2" @click="Activation" />
    </span>
    <div>
      <span class="spanimamg" @click="DetailJump">
        <img :src="goodsdata.image" class="iamges" />
      </span>
      <div class="floatright">
        <span @click="DetailJump">
          <p class="pitem">{{goodsdata.title}}</p>
          <p class="vitem">{{goodsdata.desc}}</p>
          <span class="span1">{{goodsdata.lownowprice | islownowprice}}</span>
        </span>
        <span class="rithg">
          <span class="lefts" @click="cartPlus">+</span>
          <span class="center">{{goodsdata.count}}</span>
          <span class="rights" @click="cartLess">-</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsdata: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    DetailJump() {
      this.$router.push(`/detail/${this.goodsdata.iid}`);
    },
    cartPlus() {
      this.$store.dispatch("cartPlus", this.goodsdata);
    },
    cartLess() {
      this.$store.dispatch("cartLess", this.goodsdata);
    },
    Activation() {
      setTimeout(() => {
        this.$bus.$emit("Activation", this.goodsdata.status);
      }, 20);
    }
  },
  filters: {
    islownowprice(value) {
      return "¥" + parseInt(value).toFixed(2);
    }
  }
};
</script>

<style scoped>
#cartlistitem {
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  border-bottom: 2px solid #eeeeee;
}
.spanimamg {
  height: 90px;
  line-height: 90px;
}
.chkb {
  float: left;
  line-height: 90px;
}
.floatright {
  float: left;
  height: 90px;
  margin-left: 16px;
}
.span1 {
  display: inline-block;
  margin-top: 10px;
  color: red;
  font-size: 16px;
}
.pitem {
  margin-block-start: 0;
  font-size: 14px;
}
.vitem {
  margin-block-end: 0;
  font-size: 12px;
}
.iamges {
  float: left;
  width: 60px;
  height: 75px;
  border-radius: 6px;
  margin-top: 7px;
}
p {
  width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rithg {
  float: right;
  margin-top: 10px;
  font-size: 13px;
  display: flex;
  position: relative;
}
.center {
  display: block;
  width: 32px;
  padding: 2px;
  border-radius: 4px;
  background-color: #eeeeee;
  text-align: center;
}
.lefts {
  margin-right: 4px;
  font-weight: bold;
}
.rights {
  font-weight: bold;
  margin-left: 4px;
}
</style>