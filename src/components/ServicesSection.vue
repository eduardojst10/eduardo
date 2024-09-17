<template>
    <v-container id="services" fluid>
        <v-row >

           <v-col class="" xs="12" sm="12"  md="4"> 
               <h2 id="title"> Interests & Skills </h2> 
            </v-col>
           
           <v-col class="service-names" xs="12"  sm="12" md="4">
              <p> Git </p>
              <p> Web3 </p>
              <p> MicroServices </p>
              <p> Kubernetes </p>

           </v-col>

           <v-col class="service-names" xs="12"  sm="12" md="4" >
            <p> Blockchain </p>
            <p> Machine Learning </p>
            <p> Deep Learning </p>
           </v-col>
        </v-row>
    </v-container>
</template>


<script>
export default {
    name:"services",
}
</script>

<style lang="scss" >
@import '@/assets/_variables.scss';

#services {
    //padding: auto;
    margin: auto;
    height: auto;
    background-color : white;
    
    padding: 5% 10%;
    
    #title{
        text-transform: uppercase;
        font-weight: 700;
        color:$highlight-color;
        padding-top:15px;
        text-align: left;
    }

    .service-names{
        margin: 0;
        padding: 0 10px;

        p{  
            font-family: var(--secondary-font);
            font-size:2.2em;
            color:black;
            transition: font-size 0.3s ease-in-out;
            font-weight: bold;
        }
        p:hover {
            color:$dark-accent;
            font-size: 2.5em;
            font-weight: medium;
        }
}
       
}

@media (max-width: 768px) {
  #title {
    text-align: center;
    font-size: 1.5em;  // Reduce title size for mobile
  }

  .service-names {
    p {
      font-size: 1.2em;  // Smaller text for mobile
    }

    p:hover {
      font-size: 1.6em;
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {

  .service-names p {
    font-size: 1.8em;  // Slightly smaller size for tablets
  }

  p:hover {
    font-size: 2em;  // Adjust hover size accordingly
  }
}

</style>