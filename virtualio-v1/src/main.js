import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // <---
import store from './store'

createApp(App).use(router).use(store).mount('#app')//<-- createApp(App).mount('#app')
import "bootstrap/dist/js/bootstrap.js"





