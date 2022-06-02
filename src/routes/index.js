import { createWebHistory, createRouter } from 'vue-router';
import store from '@/store/index';

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
    meta: { auth: true },
  },
  {
    path: '/add',
    component: () => import('@/views/PostAddPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/post/:id',
    component: () => import('@/views/PostEditPage.vue'),
    meta: { auth: true },
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

// Navigation guards
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert('인증이 필요합니다.');
    next('/login');
  } else {
    // 로그인 상태에서 '/login' path가 넘어올 때에는 Main 화면으로 이동
    if (to.path == '/login' && store.getters.isLogin) {
      next('/main');
    } else {
      next();
    }
  }
});

export default router;
