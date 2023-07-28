import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Signin from "./components/Signin.vue";
import Order from "./components/Order.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin
  },
  {
    path: "/order",
    name: "order",
    component: Order
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
