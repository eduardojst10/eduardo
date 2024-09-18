import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia';
import { loadFonts } from './plugins/webfontloader'


import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './assets/_variables.scss';

loadFonts()

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
