<template>
    <v-footer ref='footer' paddless default class='footer' id='footer'>
       
        <v-container class="social-icons" 
            >
            
            <v-btn icon  color='#f1f1f1' class='d-inline-block ma-2 pa-2 icon'
               tile  v-for='i in socialmedia ' :key='i.icon' 
                :href='i.src' target="_blank" elevation='10'
                large
                >
                <v-icon >
                    {{i.icon}}
                </v-icon>
                
            </v-btn>
            <v-btn icon @click='scrolltop' color='white' class='d-inline-block ma-2 pa-2  icon up' elevation='10' tile>
                <v-icon>
                    mdi-chevron-double-up
                </v-icon>
            </v-btn>
        </v-container>
    </v-footer>
</template>
<script>
import { useStore } from '../stores/counter';
export default { 
        name: 'Footer',
        components: {},
        setup() {
            const store = useStore();

            return {
                year: new Date().getFullYear(),
                socialmedia: store.$state.Sociallinks,
            };
        },
        methods:{
            scrolltop(){
                window.scrollTo({top: 0, behaviour: 'smooth' });
            }
        }
    }    
</script>
<style scoped lang="scss">
@import '../assets/_variables.scss';

#footer {
    background-color:$main-bg-color;
}
.social-icons {
    display: block;
    text-align: left;
    padding:auto;
}
.icon {
    vertical-align: middle;
    background-color:$gray;
    margin: auto;
    padding: auto;
    height: 40x;
}
.up{
    height:44px;
    margin: auto;
    margin-top:-18px;
    
}
.copyright{
    margin-top:5px;
    font-size:16px;
    /* text-align: center; */
    color:$gray;
    font-weight:bold;
    text-align: left;
}      
.copyright>span{
    color :$highlight-color;
}
</style>