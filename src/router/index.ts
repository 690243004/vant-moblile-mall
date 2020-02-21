import Vue from "vue";
import VueRouter from "vue-router";
import asyncLoader from "@u/asyncLoader";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: asyncLoader("Home")
  },
  {
    path: "/cart",
    name: "cart",
    component: asyncLoader("Cart")
  },
  {
    path: "/order",
    name: "order",
    component: asyncLoader("Order")
  },
  {
    path: "/my",
    name: "my",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: asyncLoader("My")
  }
];

const router = new VueRouter({
  routes
});

export default router;
