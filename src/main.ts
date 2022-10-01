import { createApp } from 'vue'
import { createRouter, createWebHistory  } from 'vue-router';
import './style.css'
import App from './App.vue'
import './styles/app.css'; 


const router = createRouter({
    history: createWebHistory(),
    routes: [

    ]

})


createApp(App).use(router).mount('#app')
