export default {
  goodshas(state) {
    return state.goodslist.length;
  },
  goodslist(state) {
    return state.goodslist;
  },
  totalcost(state) {
    let price = state.goodslist.filter(item => {
      return item.status === true;
    });

    let cost = 0;
    for (const val of price) {
      cost += val.lownowprice * val.count;
    }
    return cost;
  },
  carttotal(state) {
    let cartEach = state.goodslist.filter(item => {
      return item.status === true;
    });

    let pieces = 0;
    for (const item of cartEach) {
      pieces += item.count;
    }

    return pieces;
  },
  userInfo(state) {
    return state.user;
  },
  historyRecord(state) {
    return [...new Set(state.searchHistory)];
  },
  information(state) {
    return state.productInformation;
  },
  addinfo(state) {
    for (const item of state.addressInfo) {
      console.log(item);

      class infois {
        constructor({
          name,
          tel,
          province,
          city,
          county,
          addressDetail,
          isDefault
        }) {
          this.name = name;
          this.tel = tel;
          this.address = province + city + county + addressDetail;
          this.isDefault = isDefault;
        }
      }

      const addinfoes = new infois(item);

      const isaddinfo = [];

      isaddinfo.unshift(addinfoes);

      // if (isaddinfo.length === state.addressInfo.length)
      return isaddinfo;
    }
  }
};
