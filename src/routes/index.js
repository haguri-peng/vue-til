// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createWebHistory, createRouter } from 'vue-router';

import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';

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
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/signup',
    component: SignupPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
