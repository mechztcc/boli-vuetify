// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/layouts/HomeLayout.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/layouts/LoginLayout.vue"),
  },
  {
    path: "/create-account",
    name: "create-account",
    component: () => import("@/layouts/CreateAccountLayout.vue"),
  },
  {
    path: "/plans",
    name: "plans",
    component: () => import("@/layouts/PlansLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
