import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

// import {
//     Form, Field, ErrorMessage, defineRule, configure,
//   } from 'vee-validate';



import App from './App.vue';
import router from './router';
import './assets/all.scss';



const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.component('VueLoading', Loading) 
// app.component('VForm', Form);
// app.component('VField', Field);
// app.component('ErrorMessage', ErrorMessage);

app.mount('#app')
