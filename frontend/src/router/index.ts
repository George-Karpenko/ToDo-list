import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { RouteNamesEnum } from "@/router/router.types";
import { AppLayoutsEnum } from "@/layouts/layouts.types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNamesEnum.home,
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/create",
      name: "createTask",
      component: () => import("@/views/CreateTaskView.vue"),
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "PageNotExist",
      component: () => import("@/views/Error404View.vue"),
      meta: {
        layout: AppLayoutsEnum.error,
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
