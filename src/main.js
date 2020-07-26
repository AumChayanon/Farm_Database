import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import* as firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';
import axios from "axios"
import * as VueGoogleMaps from "vue2-google-maps";
import VueThailandAddress from 'vue-thailand-address';
import 'vue-thailand-address/dist/vue-thailand-address.css';
import Vuetify from 'vuetify'
import VueCarousel from 'vue-carousel';
import '@fortawesome/fontawesome-free/css/all.css'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueSimpleAlert from "vue-simple-alert";
import dotenv from 'dotenv'

dotenv.config()
Vue.use(VueSimpleAlert);
Vue.use(VueCarousel);
Vue.use(Vuetify)
Vue.use(VueThailandAddress);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDwRemyTGrDVGy-EYRLa79puv5mqncOf-Y",
    libraries: "places" // necessary for places input
  }
});
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
/*
const config = {
  apiKey: "AIzaSyCZdWSzi6_2YH9lhQe9K7cwrBuqJ4Msy_w",
  authDomain: "farmer-database.firebaseapp.com",
  databaseURL: "https://farmer-database.firebaseio.com",
  projectId: "farmer-database",
  storageBucket: "farmer-database.appspot.com",
  messagingSenderId: "1046406185183",
  appId: "1:1046406185183:web:f488a820bdd93d73a8a96a",
  measurementId: "G-92C8LVTTH6"
};*/
const config = {
  apiKey: "AIzaSyDmO9gExw9LtXZ1kgCecrmbN8bF7knnc0I",
  authDomain: "farmer2-e5737.firebaseapp.com",
  databaseURL: "https://farmer2-e5737.firebaseio.com",
  projectId: "farmer2-e5737",
  storageBucket: "farmer2-e5737.appspot.com",
  messagingSenderId: "178109332606",
  appId: "1:178109332606:web:8d00a673a3bcc65fc16c2f",
  measurementId: "G-KVJ6HF9LH6"
}; 
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

let app;
firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if(!app){
    app = new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
  }
  
})

