import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
import { Tabbar, TabbarItem } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Search } from "vant";
import { Card } from "vant";
import { Notify } from "vant";
import { Button } from 'vant';

Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(CheckboxGroup);
Vue.use(GoodsAction);
Vue.use(TabbarItem);
Vue.use(SwipeItem);
Vue.use(Checkbox);
Vue.use(Tabbar);
Vue.use(Button);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(Vant);
Vue.use(Card);

Vue.prototype.$Notify = Notify;
