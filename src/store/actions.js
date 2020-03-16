import { SEARCHHISTORY, /**EDITADDRESS**/ } from "./murations-types.js";

export default {
  addcart(context, payload) {
    let listdata = context.state.goodslist.find(val => {
      return val.iid === payload.iid;
    });

    if (listdata) {
      context.commit("islistdata", listdata);
    } else {
      context.commit("isaddload", payload);
    }
  },
  cartPlus(context, payload) {
    let plus = context.state.goodslist.find(val => {
      return val.iid === payload.iid;
    });

    if (plus) {
      context.commit("isplus", plus);
    }
  },
  cartLess(context, payload) {
    let less = context.state.goodslist.find(val => {
      return val.iid === payload.iid;
    });

    if (less.count <= 1) {
      return false;
    } else {
      context.commit("priceLess", less);
    }
  },
  [SEARCHHISTORY](context, payload) {
    let hisrecord = context.state.searchHistory;
    hisrecord.push(payload);

    context.commit(SEARCHHISTORY, hisrecord);
  },
  // [EDITADDRESS](context, payload) {
  //   const info = context.state.addressInfo;
  //   console.log(info);

  //   const data = info.find(item => {
  //     return item.id == payload;
  //   });
  //   console.log(data);

  //   context.commit(EDITADDRESS, data);
  // }
};
