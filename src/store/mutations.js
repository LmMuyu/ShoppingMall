/* eslint-disable no-unused-vars */
import { HISTORY } from "./murations-types";

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
  [HISTORY](_state, payload) {
    localStorage.setItem("search", JSON.stringify(payload));
  }
};
