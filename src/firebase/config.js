import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4t5734rlk4aVYWmc9n9oU4h87sz5Swfo",
    authDomain: "vue-firebase-sites-e2787.firebaseapp.com",
    projectId: "vue-firebase-sites-e2787",
    storageBucket: "vue-firebase-sites-e2787.appspot.com",
    messagingSenderId: "214185589546",
    appId: "1:214185589546:web:eed8e7d56de103c6237c53"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init firestore service

  const projectFirestore = firebase.firestore()

  export {projectFirestore}