import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import our custom CSS
import './assets/scss/style.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.js';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
