import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue2Editor from "vue2-editor";
import store from './store';
import "./firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

let app;
// we use onAuthStateChanged function from firebase to let to create the app after we log sign in to firebase so we dont get null 
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App);
    app.use(router)
    app.use(Vue2Editor)
    app.use(store)
    
    app.mount('#app')
  }
})
