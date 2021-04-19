import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Index.vue"),
  },
  {
    path: "/:year/:month/:day/:slug",
    name: "Post",
    component: () => import("@/pages/Post.vue"),
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: () => import("@/pages/Tag.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
