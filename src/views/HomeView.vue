<template>
  <v-app>
    <NavigateSection/>
    <main id="main">
      <BannerSection/>
      <AboutSection/>
      <PortfolioSection/>
      <OutsideSection/>
      <ContactSection/>
    </main>
    <FooterSection/>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import NavigateSection from '../components/NavigateSection.vue';
import BannerSection from '../components/BannerSection.vue';
import AboutSection from '../components/AboutSection.vue';
import PortfolioSection from '../components/PortfolioSection.vue';
import OutsideSection from '../components/OutsideSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FooterSection from '../components/FooterSection.vue';
import NavigateSection from '../components/NavigateSection.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavigateSection,
    BannerSection,
    AboutSection,
    PortfolioSection,
    OutsideSection,
    ContactSection,
    FooterSection
},
});
</script>
