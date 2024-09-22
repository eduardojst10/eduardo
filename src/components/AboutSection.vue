<template>
  <div id="about">
    <h2> ABOUT ME </h2>

    <!-- First Paragraph -->
    <p>
      I am a Computer Engineering graduate from the University of Minho, currently finalizing my dissertation titled
      <em>Deep Learning Techniques for Medical Image Analysis</em>. With extensive experience in software development and proficiency
      in <u>Python</u>, <u>Java</u>, <u>JavaScript</u>, <u>C</u>, and <u>C++</u>, I have honed strong analytical and problem-solving skills. My specific interest in
      Artificial Intelligence, especially Deep Learning, has led me to work on projects like developing a convolutional neural network
      for medical diagnostics. This experience solidified my passion for leveraging AI to solve real-world problems.
    </p>
    <!-- Carousel -->
    <v-carousel
      v-model="currentSlide"
      :show-arrows="isDesktop ? 'hover' : false"
      hide-delimiters
      :cycle="!dialog"
      interval="5000"
      class="carousel-container"
    >
      <v-carousel-item
        v-for="(image, index) in carouselImages"
        :key="index"
        @click="openImageInDialog(index)"
        class="carousel-item"
      >
        <v-img
          :src="image.src"
          class="carousel-image"
          cover
        ></v-img>
      </v-carousel-item>
    </v-carousel>
    
    <!-- Second and Third Paragraphs -->
    <p>
      My lifestyle revolves around creating joyful and engaging experiences for those around me, whether it's through sharing music or
      spending quality time with friends and companions. I believe that making people happy, entertained, and comfortable fosters strong relationships
      and collaborative environments.
    </p>

    <p>
      I'm eager to join an innovative and collaborative company where I can apply my skills and continue to grow professionally.
      As a proactive learner and team player, I'm always ready to tackle new challenges and contribute to groundbreaking solutions.
    </p>

    <!-- Dialog for Fullscreen Images -->
  <v-dialog v-model="dialog" max-width="65%">
    <v-carousel
      v-model="dialogCurrentSlide"
      hide-delimiters
      :show-arrows="isDesktop ? 'hover' : false"
      class="carousel-container"
    >
      <v-carousel-item
        v-for="(image, index) in carouselImages"
        :key="index"
      >
        <v-img
          :src="image.src"
          aspect-ratio="16/9"
          class="fullscreen-image"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
  </div>
</template>


<script>
import {useStore} from '../stores/counter'
import { ref, onBeforeUnmount } from 'vue';
export default {
  name: 'about',
  setup() {
    const store = useStore();
    const carouselImages = store.carouselImages
    const currentSlide = ref(0)
    const dialog = ref(false)
    const dialogCurrentSlide = ref(0);

    const isDesktop = ref(window.innerWidth > 768);

    const openImageInDialog = (index) => {
      dialogCurrentSlide.value = index;
      dialog.value = true;
    };

    const updateIsDesktop = () => {
      isDesktop.value = window.innerWidth > 768;
    };

    window.addEventListener('resize', updateIsDesktop);

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateIsDesktop);
    });

    return {
      carouselImages,
      currentSlide,
      dialog,
      dialogCurrentSlide,
      openImageInDialog,
      updateIsDesktop,
      isDesktop,
    };
  },
};
</script>


<style scoped lang="scss"  >
@import '../assets/_variables.scss';
    #about{
       padding: 5%;
       p{
            padding: 10px;
            font-weight: 600; 
            color: #333;
            font-size: 1.5em;
       }
       h2{
           font-size: 1.5em;
           text-transform: uppercase;
           font-weight: 1000;
           color:$highlight-color;
           padding-top:15px;
        }
        .carousel-container{
          position: relative;
          margin: 20px 0;
        }

        .carousel-item {
          width: 100%; 
          height: 100%;
        }

        .carousel-image {
          width: 100%; 
          height: 100%;
        }
        .fullscreen-image {
            width: 100%;
            height: 100%;
        }
}
@media (max-width: 1024px) {
    #about {
        flex-direction: column; 
  }
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  #about {
    padding: 5%;
    text-align: center;

    p {
      font-size: 1.1em;
      text-align: left;
    }

    h2 {
      font-size: 1.4em;
    }
  }

}
</style>