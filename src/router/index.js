import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/**
 * 主路由
 */
const Buy = () => import("views/buy/Buy");
const Home = () => import("views/home/Home");
const File = () => import("views/file/File");
const Login = () => import("views/Login/login");
const Detail = () => import("views/detail/Detail");
const Category = () => import("views/category/category.vue");
const addressInfo = () => import("views/addressinfo/addressInfo.vue");

/**
 * 子路由
 */
const fileOrder = () => import("views/file/subcomponebts/fileOrder.vue");
const ShoppingCart = () => import("views/shoppingcart/ShoppingCart");
const startLogin = () => import("views/Login/subcomponents/LoginComponent.vue");
const addAddress = () => import("views/addressinfo/childcomps/addAddress.vue");
const Favorite = () => import("views/favorite/Favorite.vue");

const addressEdit = () =>
  import("views/addressinfo/childcomps/addressEdit.vue");
const CategorySearchFor = () =>
  import("components/content/searchfor/searchFor.vue");
const loginRegistered = () =>
  import("views/Login/subcomponents/loginRegistered");

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/file",
    name: "file",
    component: File,
    meta: {
      findName: "fadelnLeft",
      comdisp: true
    },
    children: [
      {
        path: "fileorder",
        name: "fileorder",
        component: fileOrder,
        meta: {
          comdisp: false
        }
      },
      {
        path: "favorite",
        name: "favorite",
        component: Favorite,
        meta: {
          comdisp: false
        }
      }
    ]
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/category",
    name: "category",
    component: Category,
    meta: {
      comdisp: true
    },
    children: [
      {
        path: "searchfor",
        name: "searchfor",
        component: CategorySearchFor,
        meta: {
          comdisp: false
        }
      }
    ]
  },
  {
    path: "/shoppingcart",
    name: "shoppingcart",
    component: ShoppingCart
  },
  {
    path: "/login/",
    name: "login",
    component: Login
  },
  {
    path: "/startling",
    name: "startling",
    component: startLogin
  },
  {
    path: "/registered",
    name: "registered",
    component: loginRegistered
  },
  {
    path: "/buy",
    name: "buy",
    component: Buy
  },
  {
    path: "/addressinfo",
    name: "addressinfo",
    component: addressInfo,
    meta: {
      comdisp: true
    },
    children: [
      {
        path: "addaddress",
        name: "addaddress",
        component: addAddress,
        meta: {
          comdisp: false
        }
      },
      {
        path: "addressedit",
        name: "addressedit",
        component: addressEdit
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && localStorage.getItem("user")) {
    next(from);
  }

  next();
});

export default router;
