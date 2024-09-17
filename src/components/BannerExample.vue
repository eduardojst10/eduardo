<template>
    <v-container class="banner d-flex flex-column justify-center align-items-center" fluid>
      <div class="intro">
        <h2 class="custom-h2 ma-0 pa-0">Introduction</h2>
        <h1 class="custom-h1 heading ma-0 pa-0">Eduardo Teixeira</h1>
        <h3 class="custom-h3 secondary-text">
            Welcome to my personal Website, where present myself.  
        </h3>
      <v-btn color="white" outlined class="btn">
        View more
      </v-btn>
      </div>
    </v-container>
</template>
  
<script>
  export default {
    name: "banner",
  };
</script>
  
<style lang="scss">
@import '@/assets/_variables.scss';
  .banner {
    text-align: left;
    height: 100vh;
    width: 100vw;
    background-color: #B2BEC3;//$main-bg-color;
    padding: 0;
  }
  
  .intro {
    padding-left: 10%;
    padding-right: 10%;   

    .custom-h1 {
      font-size: 4em;
      font-weight: bolder;
      color: $highlight-color;
      cursor: pointer;
    }

    .custom-h2 {
      font-size: 1.5em;
      font-weight: bold;
      color: black;
      cursor: pointer;
    }

    .custom-h3 {
      font-size: 1.2em;
      color: $gray;
      cursor: pointer;
    }

    p {
      margin-left: 10px;
      padding: 0;
      font-size: 1.5em;
      font-weight: bold;
      color: $dark-accent;
    }
  
    span {
      color: $highlight-color;
    }
  
    .btn {
        background-color: transparent;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        font-weight: bold;
        margin-top: 15px;
        cursor: pointer;
        border-radius: 30px;
        transition: background-color 0.3s;
    }

    .btn:hover {
        background-color: #1116a0;
    }

  
    .secondary-text {
      color: black;
    }
  
    .heading {
      margin: 0px;
      padding: 0px;
      font-size: 4em;
      color: $highlight-color;
    }
  }
  </style>