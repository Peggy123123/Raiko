import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { localize,loadLocaleFromURL } from '@vee-validate/i18n';

//定義規則(全部規則)
Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule]);
});

// 讀取外部的資源
loadLocaleFromURL('@/zh_TW.json');

//套用多國語系檔案
configure({
generateMessage: localize('zh_TW'),
validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});

import App from './App.vue';
import router from './router';
import './assets/all.scss';

const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.component('VueLoading', Loading) 
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

router.afterEach(() => {
	window.scrollTo(0, 0);
});

app.mount('#app')
