import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/TodosView.vue')
    },
    {
      path: '/todos/:id',
      name: 'todosDetail',
      component: () => import('../views/TodosDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // 경로가 없는 페이지는 404 페이지를 보여주는것, 
      // 해당 경로는 항상 routes의 가장 마지막 순서로 두어야한다.
      // routes 순서대로 경로를 읽기 때문
    {
      path: '/:pathMatch(.*)*',    
      name: '404',
      component: () => import('../views/404.vue'),
    }
  ]
})

export default router
