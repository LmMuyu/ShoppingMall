import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./network/request";
import "./plugins/vant.js";
import VueLazyLoad from "vue-lazyload";
import './plugins/element.js'
import animate from "animate.css"

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(VueLazyLoad);
Vue.use(animate)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
