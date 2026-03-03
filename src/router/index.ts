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
          path: 'about',
          name: 'about',
          component: () => import('@/pages/about/About.vue')
        },
        {
          path: 'projects/:id',
          name: 'project-detail',
          component: () => import('@/pages/projects/ProjectDetail.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/pages/contact/Contact.vue')
        },
        {
          path: 'cv',
          name: 'cv',
          component: () => import('@/pages/cv/CV.vue')
        }
      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})