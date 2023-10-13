/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-10-13 16:59:04
 * @LastEditors: Jackie
 * @Description: routers
 * @FilePath: /my-anniversary-vue/src/router/index.js
 * @version:
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  { path: '/:pathMatch(.*)', component: () => import('@/views/Home.vue') }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
