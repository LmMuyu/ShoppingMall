import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

let state = {
  goodslist: [], //购物车商品
  user: null, //用户信息
  token: "" //用户的token
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
