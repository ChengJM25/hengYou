import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'font-awesome/css/font-awesome.min.css'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

