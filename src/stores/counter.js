import { defineStore } from 'pinia'
import _ from 'lodash'

export const useStore = defineStore({
        id: 'store',
        state: () => ({
          Sociallinks:[
            {
              icon:'mdi-facebook',
              src:'https://www.facebook.com/eduardo.teixeira.1840'
            },
            {
              icon:'mdi-linkedin',
              src:'https://www.linkedin.com/in/eduardo-teixeira-16b807196/'
            },
            {
              icon:'mdi-github',
              src:'https://github.com/eduardojst10'
            },
            
            {
                icon:'mdi-instagram',
                src:'https://www.instagram.com/eduardojst10/'
            }
            
          ],
          projects: [
            {
              name:"Master's Dissertation",
              description:"Deep Learning approaches for landmark detection in Knee medical images",
              tech_stack:["Python, Pandas, Qt"],
              img:"https://imgur.com/xMFKBjs.png",
              downloadUrl:"/files/Master_Thesis_Eduardo.pdf",
              buttonOption:'Download'
            },
            {
              name:"FEN Website",
              description:"Music Festival in Várzea Cova, Fafe",
              tech_stack:["React, Javascript"],
              img:"https://i.imgur.com/myTgUAQ.jpeg",
              url:"https://fafeenosso.pt",
              buttonOption: 'Visit'
            },
          ],
          carouselImages: [
            {
              src: 'https://i.imgur.com/sqMaVyC.jpeg',
              alt: 'FEN Team'
            },
            {
              src: 'https://i.imgur.com/iGDmapu.jpeg',
              alt: 'Brussels'
            },
            {
              src: 'https://i.imgur.com/OSu4yrL.jpeg',
              alt: 'Avenida'
            }
          ]
        }),
        getters: {
          projectChunks(state) {
            return _.chunk(state.projects,2)
          }
        },
        actions: {
          // async getProjects() {
          //   let res=await client.get('projects');
          //   console.log(JSON.stringify(res));
          //   this.addProjects(res.data);
          // },
        }
})
