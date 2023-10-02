import firebase from 'firebase/app';
import 'firebase/auth';
import { createApp } from 'vue';
import App from './Login.vue';
import router from './router';

const firebaseConfig = {
    apiKey: "AIzaSyBoc1A_0NbverOZwNoAyzgg4WYACOusYmo",
    authDomain: "youdash-cb9e9.firebaseapp.com",
    projectId: "youdash-cb9e9",
    storageBucket: "youdash-cb9e9.appspot.com",
    messagingSenderId: "622766523673",
    appId: "1:622766523673:web:106417ba26ca6927703188",
    measurementId: "G-HH2GNL5ZP6"
  };

const app = createApp(App);
app.config.globalProperties.user = null;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  app.config.globalProperties.user = user;
});

app.use(router);
app.mount('#app');
