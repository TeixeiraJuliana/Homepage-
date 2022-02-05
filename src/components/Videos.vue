<template>
    <main>
        <section class="container">
            <h1>Videos</h1>
            <section class="videos">
                <div v-for="(video, index) in videos"  class="video"  :key="index" >
                <a :href="video.link" target="blank"> 
                    <img :src="video.thumb" :alt="video.title">
                    <div class="video-title">{{video.title}}</div>
                </a>
                </div>
            </section>
        </section>
    </main>
</template>
<script lang="ts">
import api from '../services/api.js'
export default {
    name: 'videos', 
    data(){
        return{
            videos: [] 

    }

    },
    mounted(){
    api.get('/videos.json').then(response=> {
        this.videos = response.data; 
    })
    
}
}

</script>

<style scoped>
main{
    align-items: center;
}
h1{
    color: var( --color-text-title);
    margin: 40px 0;
    font-size: 30px;
}
.videos{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.video{
    width: 80%;
    margin-bottom: 30px;
}
.video img{
    width: 100%;
}
.video a{
    color: var(--color-text-dark);
    font-weight: 600;
    text-align: center;
}
@media (min-width: 700px){
    .videos{
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .video{
        margin-right: 30px;
        width: 300px;
    }
}


</style>