import { createRouter, createWebHistory } from "vue-router";
const AsyncEntrance = () => import("/@/views/Entrance.vue");

const AsyncPresentation = () => import("/@/views/Presentation.vue");

/**
 * @type {import('node_modules/vue-router/dist/vue-router').RouteRecord[]}
 */
const routes = [
  { path: "/", component: AsyncEntrance },
  { path: "/presentation", component: AsyncPresentation },
];

const createRouterInstance = () => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  return router;
};

const router = createRouterInstance();

export default router;
