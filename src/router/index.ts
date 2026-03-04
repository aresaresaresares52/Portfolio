import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "@/components/layout/MainLayout.vue";
import Home from "@/pages/home/Home.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'projects/:id',
          name: 'project-detail',
          component: () => import('@/pages/projects/ProjectDetail.vue'),
        }
      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  },
})