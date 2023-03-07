import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/resets.css'
import '@/assets/css/border.css'
import '@/assets/js/common.js'

import ErrorTip from "@/components/ErrorTip";

const app = createApp(App);

app.component("ErrorTip", ErrorTip);

app.use(store).use(router).mount('#app')
