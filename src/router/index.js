import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory('/eduardo/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Add other routes here
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const el = to.hash.slice(1); // Remove '#' from the hash
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
