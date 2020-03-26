import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./network/request";
import "./plugins/vant.js";
import VueLazyLoad from "vue-lazyload";
import "./plugins/element.js";
import animated from "animate.css";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import vuetify from "./plugins/vuetify";
import FastClick from "fastclick";
import "swiper/css/swiper.css";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(VueLazyLoad);
Vue.use(animated);
Vue.use(ViewUI, {
  transfer: true,
  size: "large",
  capture: false,
  select: {
    arrow: "md-arrow-dropdown",
    arrowSize: 20
  }
});
FastClick.attach(document.body); //解决移动端300ms

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
