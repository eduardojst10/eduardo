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
  scrollBehavior(to, savedPosition) {
    if (to.hash) {
      const el = to.hash.slice(1);
      if (el) {
        document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
});

export default router;
