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
  information(state){
    return state.productInformation
  }
};
