<template>
    <main id="home">
        <div id="text-top">Videos novos toda <b>quinta</b> as 20 horas</div>
        <a href="https://www.youtube.com/watch?v=kmsM_hHrDHE&list=PL_zkXQGHYosEiQDlAbpwjssQ44JjIdZe9" target="blanck">
            <img  alt="inscreva-se" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
        </a>
        <div id="text-botton">Youtube</div>
<!-- em 49:30-->
    </main>
</template>
<script>


export default {
    name: 'Home', 
    data() {
        
    }
}
</script>
<style scoped>
    main{
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }
    #text-top{
        color: var(--color-text-light);
        font-size: 22px;
        margin-bottom: 20px;
    }
    #text-botton{
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 15px;

    }
    #subscribe{
        width: 340px;
    }
    @media (max-width:380px){
        #text-top{
             font-size: 20px;
  
        }
    }
</style>