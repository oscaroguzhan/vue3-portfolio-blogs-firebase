import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue2Editor from "vue2-editor";
const app = createApp(App)

app.use(router)
app.use(Vue2Editor)
app.mount('#app')
