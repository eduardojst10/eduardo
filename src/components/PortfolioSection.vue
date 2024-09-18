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
                        elevation="2"
                        outlined
                    >
                        <div
                            :class="['hover-overlay', { 'hover-active': isHovering }]"
                        >
                            <v-card-title class="card-title white--text">{{ project.name }}</v-card-title>
                            <v-card-subtitle class="card-subtitle white--text">{{ project.description }}</v-card-subtitle> 
                            <v-btn
                                v-if="project.buttonOption === 'Download'"
                                @click="downloadItem({url: project.downloadUrl, label: project.name})"
                                :disabled="isDownloading"
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

import { ref } from 'vue';
import {useStore} from '../stores/counter'
import axios  from 'axios';
export default {
    name: 'portfolio',
    mounted(){},
    setup(){
        const store = useStore();
        const projectChunks = store.projectChunks
        const isDownloading = ref(false)
        return {
            projectChunks,
            isDownloading

    };},
    methods:{
        downloadItem({url,label}){
            this.isDownloading = true; 
            axios.get(url, {responseType: 'blob'})
            .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' })
                const link = document.createElement('a')
                link.href = URL.createObjectURL(blob)
                link.download = label
                link.click()
                URL.revokeObjectURL(link.href)})
            .catch((err) => {console.log(err)})
            .finally(() => {
                this.isDownloading = false; // Re-enable button
            });
        }
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


