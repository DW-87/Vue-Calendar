import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase, {
  initializeApp
} from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase, initializeApp({
  apiKey: "AIzaSyBwEFVOcNA3hd89jJSv5V_PvBrB6WUC2Lw",
  authDomain: "vue-calendar-f8c3e.firebaseapp.com",
  databaseURL: "https://vue-calendar-f8c3e.firebaseio.com",
  projectId: "vue-calendar-f8c3e",
  storageBucket: "vue-calendar-f8c3e.appspot.com",
  messagingSenderId: "176116238303",
  appId: "1:176116238303:web:2a090b56ae9fad3fc0266a"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')