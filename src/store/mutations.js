/* eslint-disable no-unused-vars */
import {
  SEARCHHISTORY,
  DELETERECORD,
  DELETEHISTORY,
  DELETEUSERS
} from "./murations-types";
import { Array } from "core-js";

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
  [DELETEHISTORY](state, _payload) {
    localStorage.removeItem("search");
    state.searchHistory = [];
  },
  [DELETEUSERS](state, _payload) {
    state.user = [];
  }
};
