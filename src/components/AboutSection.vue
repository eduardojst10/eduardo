<template>
    <div id="about"> 
      <v-row >
        <v-col cols="12" md="6" order="1">
            <!-- add your personal bio paragraphs here in this column 
            My name is Eduardo Teixeira and I´m a Software Engineering Master's student at University of Minho . Currently working on my Dissertation: Deep Learning approaches for landmarks detection on knee medical images for BiRD LAB a research group from the University of Minho. 
            Learning actively about AI, Deep Learning, Blockchain, Solidity and NFT´s technology.-->
            <h2> ABOUT ME </h2>

            <p> With a degree in Computer Engineering from the University of Minho, currently finalising his
            dissertation in the same course. Familiar with the context of software development
            and proficient in various programming languages, including Python, Java,
            JavaScript, C and C++, with strong analytical and problem-solving skills. I have a
            specific interest in Artificial Intelligence, with a focus on Deep Learning. I'm looking for an
            opportunity to apply and expand my knowledge in an innovative and collaborative company.
            company. I'm a proactive worker, always ready to learn. </p>
        </v-col>
          
        <v-col cols="12" md="6" order="2">
                <v-carousel
                        v-model="currentSlide"
                        hide-delimiters
                        :cycle = "!dialog"
                        interval="5000"
                        :show-arrows="isDesktop ? 'hover' : false"
                        delimiter-icon=""
                        >
                        <v-carousel-item
                            v-for="(image, index) in carouselImages"
                            :key="index"
                            @click="openImageInDialog(image.src)"
                        >
                                <v-img
                                    :src="image.src"
                                    aspect-ratio="16/9"
                                    cover
                                    class="carousel-image"
                                ></v-img>
                            
                        </v-carousel-item>
                </v-carousel>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="80%">
        <v-card>
            <v-img :src="selectedImage" class="fullscreen-image"></v-img>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
import {useStore} from '../stores/counter'
import { ref } from 'vue';
export default {
  name: 'about',
  setup() {
    const store = useStore();
    const carouselImages = store.carouselImages
    const currentSlide = ref(0)
    const dialog = ref(false)
    const selectedImage = ref(null)
    const isDesktop = ref(window.innerWidth > 768);

    const openImageInDialog = (imageSrc) => {
      selectedImage.value = imageSrc;
      dialog.value = true;
    };

    const updateIsDesktop = () => {
      isDesktop.value = window.innerWidth > 768;
    };

    window.addEventListener('resize', updateIsDesktop);

    return {
      carouselImages,
      currentSlide,
      dialog,
      selectedImage,
      openImageInDialog,
      updateIsDesktop,
      isDesktop
    };
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsDesktop); // Clean up event listener on component unmount
  }
};
</script>


<style scoped lang="scss"  >
@import '@/assets/_variables.scss';
    #about{
       padding: 5%;
       h2{  
           font-size: 1.5em;
           text-transform: uppercase;
           font-weight:1000;
           color:$highlight-color;
           padding-top:15px;
        }
        p{
            padding: 10px;
            font-weight: bold;
            color: black;
            font-size: 1.3em;
        }
        .carousel-container{
            position: relative;
            overflow: hidden;
            //height: 400px;
        }


        .carousel-image {
            //object-fit: contain;
            width: 100%;
            height: 100%;
        }

        .fullscreen-image {
            width: 100%;
            height: auto;
        }
}




@media (max-width: 1024px) {
    #about {
        flex-direction: column; /* Stack text and carousel vertically */
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