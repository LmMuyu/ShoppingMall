import {
  SEARCHHISTORY,
  EDITADDRESS,
  DELETEADDRESS,
  CANCELCOLLECTION,
  FAVORITE
} from "./murations-types.js";

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
  [EDITADDRESS](context, payload) {
    const addinfo = context.state.addressInfo;

    if (payload["content"].isDefault === true) {
      for (const i of addinfo) {
        i.isDefault = false;
      }
      context.commit(EDITADDRESS, payload);
    } else {
      context.commit(EDITADDRESS, payload);
    }
  },
  [DELETEADDRESS](context, payload) {
    return new Promise(resolve => {
      const index = context.state.addressInfo.findIndex(item => {
        return item.id === payload;
      });
      context.commit(DELETEADDRESS, index);

      resolve("删除成功");
    });
  },
  [CANCELCOLLECTION](context, payload) {
    return new Promise(resolve => {
      const favor = context.state.favorite.findIndex(item => {
        return item.iid === payload;
      });
      context.commit(CANCELCOLLECTION, favor);

      resolve("取消收藏");
    });
  },
  [FAVORITE](context, payload) {
    return new Promise(resolve => {
      context.commit(FAVORITE, payload);

      resolve("已收藏");
    });
  }
};
