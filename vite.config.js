import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  base: '/eduardo/', // base path to my GitHub repo name
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: {
    'process.env': {},
  },
});

