import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

let state = {
  goodslist: [], //购物车商品
  productInformation: {}, //商品信息
  user: JSON.parse(localStorage.getItem("user")) || false, //用户信息
  searchHistory: JSON.parse(localStorage.getItem("search")) || [], //搜索记录
  addressInfo: JSON.parse(localStorage.getItem("addinfo")) || [], //地址信息
  goodsOrder:[], //商品订单
  favorite:[] //收藏
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
