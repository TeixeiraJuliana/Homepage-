import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); 

import Home from '../components/Home'
import Videos from '../components/Videos'
import Sobre from '../components/Sobre'
import Contatos from '../components/Contatos'

const routes = [
    {
        path:'/', 
        component: Home
    }, 
    {
        path:'/videos', 
        component: Videos
    },
    {
        path:'/sobre', 
        component: Sobre
    },
    {
        path:'/contatos', 
        component: Contatos
    }
];

const router = new VueRouter({
    routes, 
    mode:'history'
}); 

export default router; 