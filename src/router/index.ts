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
        },
        {
          path: 'cv',
          name: 'cv',
          component: () => import('@/pages/cv/CV.vue'),
        },
        {
          path: 'projectsvermas',
          name: 'projects-ver-mas',
          component: () => import('@/pages/projects/ProjectsVerMas.vue'),
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
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 350) // Delay to ensure out-in transition finishes and Home.vue is fully mounted
      })
    }
    return savedPosition || { top: 0 }
  },
})