<template>
    <main>
        <section class="container">
            <h1>Contatos</h1>
            <section class="contacts">
                <div class="contact" v-for="(contact, index) in contacts" :key="index">
                    <div class="contact-title">
                        {{contact.title}}
                    </div>
                        <a :href="contact.link" target="blanck" >
                            {{contact.label}}
                        </a>
                    </div>
            </section>
        </section>
    </main>
</template>
<script lang="ts">
import api from '../services/api.js'
export default {
    name: 'Contato', 
    data(){
        return{
            contacts: []

    }

    },
    mounted(){
    api.get('/contacts.json').then(response=> {
        this.contacts = response.data; 
    })
    
}
}

</script>

<style scoped>
main{
    align-items: center;
}
h1{
    text-align: center;
    padding: 20px;
    color: var(--color-text-title);
}

.contacts{
    width: 100%;
    text-align: center;
    padding: 20px;
}
.contact-title{
    font-weight: 600;
}
.contact{
    margin-bottom: 20px;
}
.contacts a{
    color: black;
}
@media (min-width: 700px){

}


</style>