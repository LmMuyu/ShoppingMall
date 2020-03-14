import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { DropdownMenu, DropdownItem } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
import { Tabbar, TabbarItem } from "vant";
import { Swipe, SwipeItem } from "vant";
import { ImagePreview } from "vant";
import { Col, Row } from "vant";
import { Search } from "vant";
import { Notify } from "vant";
import { Button } from "vant";
import { Dialog } from "vant";
import { Toast } from "vant";
import { Card } from "vant";
import { AddressList } from 'vant';
import { Cell, CellGroup } from 'vant';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(AddressList);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(CheckboxGroup);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(GoodsAction);
Vue.use(TabbarItem);
Vue.use(SwipeItem);
Vue.use(Checkbox);
Vue.use(Tabbar);
Vue.use(Button);
Vue.use(Search);
Vue.use(Dialog);
Vue.use(Swipe);
Vue.use(Card);
Vue.use(Vant);
Vue.use(Col);
Vue.use(Row);

Vue.prototype.$Notify = Notify;
Vue.prototype.$toast = Toast;
Vue.prototype.$imagepreview = ImagePreview;
