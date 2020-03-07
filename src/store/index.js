import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

let state = {
  goodslist: [], //购物车商品
  user: JSON.parse(localStorage.getItem("user")) || false //用户信息
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
