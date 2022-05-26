// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createWebHistory, createRouter } from 'vue-router';

// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

// Vue.use(VueRouter);

// export default new VueRouter({
//   routes: [
//     {
//       path: '/login',
//       component: LoginPage,
//     },
//     {
//       path: '/signup',
//       component: SignupPage,
//     },
//   ],
// });

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    // component: LoginPage,
    // Code Splitting (Dynamic Import)
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/signup',
    // component: SignupPage,
    // Code Splitting (Dynamic Import)
    component: () => import('@/views/SignupPage.vue'),
  },
  {
    path: '/main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/notfound',
    component: () => import('@/views/NotFoundPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/notfound',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
