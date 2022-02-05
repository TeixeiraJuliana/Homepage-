<template>
    <footer>
        <section class="end">
            <a class="socialLink" v-for="(socialLink, index) in sociaLinks" :key="index" :href="socialLink.link" target="blanck">
            <img  :alt="socialLink.label"  :title="socialLink.label" :src="socialLink.icon">
            </a>
        </section>
    </footer>
</template>
<script>
import api from '../services/api.js'
export default {
    name: 'Footer',
    data(){
        return{
            sociaLinks:[]
        }
    },
    mounted(){
        api.get('/social-links.json').then(response => {
        this.sociaLinks = response.data;
        });
    }
}
</script>
<style scoped>
    footer{
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: var( --color-background-nav);
        bottom: 0;
    }
    .end{
        padding-bottom: 10px;
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .socialLink img{
        width: 20px;
    }
    .socialLink 
    {
        border: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 0px 10px;
      
    }

</style>