import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Album',
    component: () => import('../components/TheAlbum'),
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../components/Upload.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
