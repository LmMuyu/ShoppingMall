<template>
  <div>
    <v-card class="mx-auto" max-width="1920" outlined flat tile @click="address">
      <v-card-text>
        <div class="title">地址:</div>
        <div class="card">
          <span class="display-1 text--primary clea">{{isAddresss || ""}}</span>
          <span class="spanleft">
            <img src="~assets/images/common/return.svg" />
          </span>
        </div>
        <span class="title">{{addressinfos["name"] || ""}}</span>
        <span class="title">{{addressinfos["tel"] | phone}}</span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    address() {
      this.$router.push("/addressinfo").catch(err => {
        err;
      });
    }
  },
  computed: {
    ...mapGetters(["addressinfos"]),
    isAddresss() {
      // class addressinfo {
      //   constructor({ province, city, county, addressDetail }) {
      //     this.info = province + city + county + addressDetail;
      //   }
      // }
      // const addinfo = new addressinfo(this.addressinfos);

      // return addinfo;
      const addinfo =
        this.addressinfos.province +
          this.addressinfos.city +
          this.addressinfos.county +
          this.addressinfos.addressDetail || {};
      return addinfo;
    }
  },
  filters: {
    phone(value) {
      return value.slice(0, -7) + "*".repeat(7);
    }
  }
};
</script>

<style scoped>
.clea {
  color: red;
}
.theme--light.v-card.v-card--outlined {
  border: none;
}
.card {
  display: flex;
}
.card span {
  display: block;
  flex: 1;
}
.spanleft {
  text-align: right;
}
.title {
  color: #000000;
}
</style>