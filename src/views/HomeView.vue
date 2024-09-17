<template>
  <v-app>
    <NavigateSection/>
    <BannerSection/>
    <ServicesSection/>
    <AboutSection/>  
    <PortfolioSection/>
    <ContactSection/>
    <FooterSection/>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import NavigateSection from '../components/NavigateSection.vue';
import BannerSection from '../components/BannerSection.vue';
import ServicesSection from '../components/ServicesSection.vue'
import AboutSection from '../components/AboutSection.vue';
import PortfolioSection from '../components/PortfolioSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FooterSection from '../components/FooterSection.vue';
import NavigateSection from '../components/NavigateSection.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavigateSection,
    BannerSection,
    ServicesSection,
    AboutSection,
    PortfolioSection,
    ContactSection,
    FooterSection
},
});
</script>
