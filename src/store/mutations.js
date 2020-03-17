/* eslint-disable no-unused-vars */
import {
  SEARCHHISTORY,
  DELETERECORD,
  DELETEHISTORY,
  DELETEUSERS,
  INFORMATION,
  ADDITION,
  ADDRESSINFO,
  EDITADDRESS,
  REDUCEMONEY
} from "./murations-types";

export default {
  islistdata(_state, payload) {
    payload.count++;
  },
  isaddload(state, payload) {
    payload.count = 1;
    payload.status = true;
    state.goodslist.push(payload);
  },
  isplus(_state, payload) {
    payload.count++;
  },
  priceLess(_state, payload) {
    payload.count--;
  },
  clearfix(_state, payload) {
    localStorage.setItem("user", JSON.stringify(payload));
  },
  [SEARCHHISTORY](_state, payload) {
    localStorage.setItem("search", JSON.stringify([...new Set(payload)]));
  },
  [DELETERECORD](state, payload) {
    state.searchHistory.splice(payload, 1);
    localStorage.setItem("search", JSON.stringify(state.searchHistory));
  },
  [DELETEHISTORY](state) {
    localStorage.removeItem("search");
    state.searchHistory = [];
  },
  [DELETEUSERS](state) {
    state.user = [];
  },
  [INFORMATION](state, payload) {
    state.productInformation = payload;
  },
  [ADDITION](state) {
    state.productInformation.count++;
  },
  [REDUCEMONEY](state) {
    state.productInformation.count--;
  },
  [ADDRESSINFO](state, payload) {
    const info = state.addressInfo;
    payload.id = state.addressInfo.length + 1;
    info.unshift(payload);

    localStorage.setItem("addinfo", JSON.stringify(info));
  },
  [EDITADDRESS](state, payload) {
    const addinfo = state.addressInfo;

    addinfo.splice(payload.index, 1, payload.content);
    localStorage.setItem("addinfo", JSON.stringify(addinfo));
  }
};
