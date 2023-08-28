import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import { createVfm } from 'vue-final-modal'

import '@/assets/scss/default.scss';
import 'vue-final-modal/style.css'
import 'normalize.css';

createApp(App)
    .use(createPinia())
    .use(createVfm())
    .mount('#app')
