import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/page/:id",
    name: "content",
    component: () =>
      import("../components/NavContent.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
