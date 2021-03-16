import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false

require("firebase/firestore");


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAFbbVa4wUfITQHqfXFFJMtTUliy4ifX84",
  authDomain: "vue-app-913ae.firebaseapp.com",
  databaseURL: "https://vue-app-913ae.firebaseio.com",
  projectId: "vue-app-913ae",
  storageBucket: "vue-app-913ae.appspot.com",
  messagingSenderId: "261740015580",
  appId: "1:261740015580:web:6f6dbfa8cc162b2ac76919",
  measurementId: "G-9M85T00E0K"
};
 
require("firebase/firestore");
var fb =firebase.initializeApp(firebaseConfig)
var db = firebase.firestore();

export{
    db,fb
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
