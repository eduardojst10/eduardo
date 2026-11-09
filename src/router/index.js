import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory('/eduardo/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
  ],
  // No explicit `behavior`: the CSS `scroll-behavior` in main.scss decides, so prefers-reduced-motion is respected.
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash };
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

export default router;
