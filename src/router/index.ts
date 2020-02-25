import Vue from "vue";
import VueRouter from "vue-router";
import asyncLoader from "@u/asyncLoader";
import Layout from "@/views/Layout.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/detail",
    name: "detail",
    component: asyncLoader("Detail/index.vue")
  },
  {
    path: "/confirmOrder",
    name: "confirmOrder",
    component: asyncLoader("Submit/ConfirmOrder.vue")
  },
  {
    path: "/submitOrder",
    name: "submitOrder",
    component: asyncLoader("Submit/SubmitOrder.vue")
  },
  {
    path: "/successPurchase",
    name: "successPurchase",
    component: asyncLoader("Submit/SuccessPurchase.vue")
  },
  {
    path: "/login",
    name: "login",
    component: asyncLoader("Login/")
  },
  {
    path: "/",
    name: "layou",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: asyncLoader("Home/")
      },
      {
        path: "cart",
        name: "cart",
        component: asyncLoader("Cart/")
      },
      {
        path: "/order",
        name: "order",
        component: asyncLoader("Order/")
      },
      {
        path: "/my",
        name: "my",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: asyncLoader("My/")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

const whiteList = ["/login", "/home", "/"];

router.beforeEach((to, from, next) => {
  const state = store.state;
  if (whiteList.includes(to.path)) {
    next();
  } else {
    if (state.hasLogin) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
