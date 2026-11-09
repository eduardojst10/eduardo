import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
// After vuetify/styles so our base styles win equal-specificity ties.
import './assets/main.scss';

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
