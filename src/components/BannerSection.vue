<template>
  <v-container class="banner" fluid>
    <div class="details-section">
      <div class="text-section">
        <h1 class="full-name">Eduardo Teixeira</h1>    
        <h3 class="custom-h3">
          <span class="typewriter">{{ typedText }}</span>
        </h3> 
      </div>
      <div class="image-section">
        <div class="image-container">
          <img :src="fotoUM" alt="Eduardo Teixeira" class="profile-image" />
        </div>
      </div>
    </div>
    <div class="button-container">
      <v-btn color="white" outlined class="btn" @click="scrollToSection">
          View more
      </v-btn>
    </div>
  </v-container>
</template>


<script>
import fotoUM from '@/assets/fotoUM.jpg';
export default {
  name: "Banner",
  data() {
    return {
      fullText: "Welcome to my personal website, where I present myself.",
      typedText: "",
      currentIndex: 0,
      fotoUM,
    };
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      if (this.currentIndex < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
        setTimeout(this.typeWriter, 50);
      }
    },
    scrollToSection() {
      const section = document.getElementById('about');
      section.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/_variables.scss';


body {
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.banner {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); // Adjust opacity and color as needed
    z-index: 1;
  }

}

.details-section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
}
    
.text-section {
  flex: 3; 
  text-align: left;
  margin-right: 20vh;

  .full-name {
    font-size: 4em;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: $highlight-color;
    //text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .custom-h3 {
    font-size: 1.2em;
    color: #b2bec3; // Lighter grey for secondary text
    margin-bottom: 10vh;
  }

}

.image-section {
    //flex: 1; 
    display: flex;
    justify-content: center; 
    align-items: center;

    .image-container {
      background-color: #636e72;
      padding: 13px;
      border-radius: 6%;
      margin-bottom: 20px;

      .profile-image {
        width: 25vw;
        height: 25vw;
        object-fit: cover;
      }
  }
}

.button-container{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;

  .btn {
        border: 2px solid #ffffff;
        color: #ffffff;
        padding: 0 20px;
        font-size: 1em;
        font-weight: bold;
        border-radius: 20px;
        transition: background-color 0.3s, color 0.3s;

        &:hover {
          background-color: #ffffff;
          color: #2d3436; // Contrast color on hover
        }
      }
}


@media (max-width: 768px) {
  .banner {
    padding: 10%;
  }

  .details-section {
    flex-direction: column; /* Stack text and image vertically */
    align-items: center;
    gap: 1.5rem;
  }

  .text-section {
    text-align: center; /* Center-align text on mobile */
    order: 2;
    margin-right: 0;
    
    .full-name {
      font-size: 2.5em; /* Reduce font size */
    }

    .custom-h3 {
      font-size: 1em; 
      margin-bottom: 20px;
    }
  }

  .image-section {
    width: 100%; /* Make image section take full width */
    order: 1;

    .image-container {
      padding: 5px; 
      border-radius: 50%; 
      
      .profile-image {
        width: 170px; 
        height: 170px;
        border-radius: 50%; 
      }
    }
  }

  .button-container {
    margin-top: 20px; 
    .btn {
      width: 100%; /* Make button full-width on mobile */
      max-width: 300px;
       
    }
  }
}


@media (min-width: 768px) and (max-width: 1024px) {
  .banner {
    padding: 10%;
  }

  .details-section {
    flex-direction: column; /* Stack text and image vertically */
    align-items: center;
    gap: 1.5rem;
  }

  .text-section {
    text-align: center; /* Center-align text on mobile */
    order: 2;
    margin-right: 0;
    
    .full-name {
      font-size: 3.5em;
    }

    .custom-h3 {
      font-size: 1.5em; 
      margin-bottom: 20px;
    }
  }

  .image-section {
    width: 100%; /* Make image section take full width */
    order: 1;

    .image-container {
      padding: 5px; 
      border-radius: 50%; 
      
      .profile-image {
        width: 30vw; 
        height: 30vw;
        border-radius: 50%; 
      }
    }
  }

  .button-container {
    margin-top: 20px; 
    .btn {
      width: 100%;
      max-width: 300px;
       
    }
  }
}

</style>