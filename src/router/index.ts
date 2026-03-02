import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/about/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/pages/projects/ProjectsGallery.vue'),
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('@/pages/projects/ProjectDetail.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/contact/Contact.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/pages/cv/CV.vue')
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})