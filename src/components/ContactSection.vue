<template>
    <v-container fluid class='contact pa-2' id='contact'>
        <v-container>
        <v-row class="py-8">

            <v-col class="info-text" xs="12"  sm="12" md="6">
                 <h2 >
                     Let's 
                     <v-icon>
                        mdi-arrow-right
                     </v-icon>
                 </h2>
                 <h2>
                     Connect
                 </h2>
                 <p>
                    You can email me through this channel!
                 </p>
            </v-col>
           
            <v-col class="form"  xs="12"  sm="12" md="6" >
                <!-- simple HTML form - posts to Formspree -->
                <form
                    action="https://formspree.io/f/xrbzvvay"
                    method="POST"
                >
                    <!-- name Input -->
                    <v-text-field
                        name="name"
                        label="name"
                        :rules="nameRules"
                        required
                        class="text-field montserrat my-8"
                        outlined
                    >
                    </v-text-field>

                    <!-- email Input -->
                    <v-text-field
                        name="email"
                        label="email"
                        :rules="nameRules"
                        type="email"
                        required
                        bg-color="grey-lighten-2"
                        class="text-field montserrat my-8"
                        outlined
                    >
                    </v-text-field>

                    <!-- message Textarea -->
                    <v-textarea
                        name="message"
                        label="message"
                        :rules="messageRules"
                        required
                        
                        bg-color="grey-lighten-2"
                        class="text-area montserrat my-8"
                        outlined
                    >
                    </v-textarea>

                    <!-- Submit Button -->
                    <v-btn type="submit" outlined medium class="montserrat btn">
                    Submit
                    </v-btn>
              </form>  
            </v-col>
        </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: "ContactSection",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      messageRules: [(v) => !!v || "Message can't be empty"],
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Proceed with the form submission logic or Formspree submission
        console.log("Form is valid, proceed to submit!");
      } else {
        console.log("Form is invalid, check the fields.");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/_variables.scss';

#contact{
    background-color:$main-bg-color;
}
.info-text{
    padding-right: 2%;
    h2{ 
        max-width:600px;
        width:100vw;  
        font-size: 3em;
        color:$highlight-color;
    }
    .mdi-arrow-right{
        font-size: 1.5em;
        color:$dark-accent;
    }
    p{
        color:$white;
        font-weight: bold;
        font-size: 1.2em;
    }
}
    
.form {
    .text-field {
        height: 55px;
        background-color: #d3d3d3;
        font-weight: bold;

        /* Change label color */
        :deep(.v-label) {
        color: $highlight-color !important;
        }

        /* Change label color when active or focused */
        :deep(.v-label.v-label--active) {
        color: white !important;
        }

        /* Change label color when there's an error */
        :deep(.v-label.error--text) {
        color: white !important;
        }

        /* Override the validation message color */
        :deep(.v-messages__message) {
        color: white !important;
        }

        :deep(.v-messages__message.error--text) {
        color: white !important;
        }

        /* Change the border color when there's an error */
        :deep(.v-input--is-error .v-input__slot) {
        border-color: white !important;
        }
    }
}

.text-area {
    font-weight: bold;
    :deep(.v-label) {
      color: $highlight-color !important;
    }

    :deep(.v-label.v-label--active) {
      color: white !important;
    }

    :deep(.v-label.error--text) {
      color: white !important;
    }

    :deep(.v-messages__message) {
      color: white !important;
    }

    :deep(.v-messages__message.error--text) {
      color: white !important;
    }

    :deep(.v-input--is-error .v-input__slot) {
      border-color: white !important;
    }
}

.btn {
    font-weight: bolder;
    border-width: 2px;
    border-color: $highlight-color;
    color: $highlight-color;
    background-color: transparent;
    text-transform: uppercase;
    transition: all 0.3s ease; /* smooth transition for hover */

    &:hover {
      background-color: $highlight-color;
      color: white;
    }

    &:focus {
      outline: none;
    }

    &:active {
      background-color: $dark-accent;
    }
}
</style>