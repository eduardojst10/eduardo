import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Export Vuetify instance
export default createVuetify({
  components,
  directives,
  // Same values as the tokens in assets/main.scss, so Vuetify components match the rest of the page.
  theme: {
    defaultTheme: 'catalogue',
    themes: {
      catalogue: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#ffffff',
          primary: '#8e1b2e',
          'on-background': '#17181b',
          'on-surface': '#17181b',
          'on-primary': '#ffffff',
        },
      },
    },
  },
});
