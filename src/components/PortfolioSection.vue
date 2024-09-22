<template>
    <v-container fluid class="portfolio-section" id="portfolio">
        <h2 class="portfolio-title">Portfolio</h2>
        
        <v-row align="center" justify="center" v-for="(chunk, index) in projectChunks" :key="index">
            <v-col cols="12" sm="6" md="6" lg="4" v-for="project in chunk" :key="project.img">
                <v-hover v-slot:default="{ isHovering, props }">
                    <v-card
                        v-bind="props"
                        :image=project.img
                        class="project-card"
                        elevation="8"
                        outlined
                    >
                    <div class="interaction-hint" v-if="!isHovering">
                        <v-icon  class="touch-icon">mdi-circle-outline</v-icon>
                        <!--<span class="interaction-tap">Hover to interact</span>-->
                    </div>
                        <div
                            :class="['hover-overlay', { 'hover-active': isHovering }]"
                        >
                            <v-card-title class="card-title white--text">{{ project.name }}</v-card-title>
                            <v-card-subtitle class="card-subtitle white--text">{{ project.description }}</v-card-subtitle> 
                            <v-btn
                                v-if="project.buttonOption === 'Download'"
                                :href="project.downloadUrl"
                                :disabled="isDownloading"
                                download
                                class="visit-btn mx-auto my-1 mt-2"
                            >
                              
                                {{ isDownloading ? 'Downloading...' : project.buttonOption }}
                            </v-btn>
                            <v-btn 
                                v-else-if="project.buttonOption === 'Visit'" 
                                :href=project.url 
                                 target="_blank"  
                                class="visit-btn mx-auto my-1 mt-2"
                                aria-label="Visit {{ project.name }} website"    
                            >

                                {{ project.buttonOption }}
                            </v-btn>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import {useStore} from '../stores/counter'
import axios  from 'axios';
export default {
    name: 'portfolio',
    setup(){
        const store = useStore();
        const projectChunks = store.projectChunks
        const isDownloading = ref(false)
        const isMobile = ref(window.innerWidth <= 768)
    
        const checkMobile = () => {
            isMobile.value = window.innerWidth <= 768
        }

        return {
            projectChunks,
            isDownloading,
            isMobile,
            checkMobile

        };
    },
    mounted(){
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile);
    },
    unmounted(){
        window.removeEventListener('resize', this.checkMobile);
    }
}
</script>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.portfolio-title{
        font-size: 2.5rem;
        font-weight: bold;
        color: $highlight-color;
        margin-bottom: 20px;
    
}
.portfolio-section{
    padding: 5%;
    text-align: center;

}

.project-card{
    /* padding: 16px; */
    width: 100%; /* Make it take up full width of the column */
    max-width: 500px; /* Set a maximum width */
    min-height: 450px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    //border: 2px solid $gray;
    border-radius: 10px;
}


.interaction-hint{
    position: absolute;
    //transform: translate(-50%, -50%);
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 2;
    color: $gray;
    opacity: 0.8;
}

.interaction-tap{
    position: absolute;
    left: 0;
    bottom:16px;
    width: 100%;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
}

.touch-icon {
    position: absolute;
    top: 50%;
    left: 48.8%;
    color: white;
    font-size: 3rem;
    animation: pulse 2s infinite;
    opacity: 0.4;
}

@keyframes pulse {
    0%, 100% {
    transform: translate(-50%, -50%) scale(1); /* Ensure translate stays for centering */
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1); /* Slightly increase size for pulse */
  }
}

.hover-overlay {
  opacity: 0; 
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); //rgba(149, 7, 64,0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%); /* Start hidden above */
  transition: transform 0.5s ease, opacity 0.5s ease; /* Smooth transition */

}

.hover-active {
  transform: translateY(0); /* Slide down to its original position */
  opacity: 1;
}

.visit-btn {
    background-color: white;
    color: black;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 20px;
    margin-top: 15px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}
.card-title {
    color: white;
    text-transform: uppercase;
    font-size: 1.6rem;
    margin-bottom: 10px;
    font-weight: bold;

}
.card-subtitle {
    color: white;
    font-size: 1rem;
    white-space: normal;
    font-weight: bold;
}
</style>


