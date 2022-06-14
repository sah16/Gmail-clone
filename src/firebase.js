import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTimXqyc8nAOW3ZUyPiG-sPBF4O6EO3zs",
    authDomain: "clone-91aed.firebaseapp.com",
    projectId: "clone-91aed",
    storageBucket: "clone-91aed.appspot.com",
    messagingSenderId: "950293633089",
    appId: "1:950293633089:web:aa6c1425e50fce54024ec0"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth =firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db , auth , provider};
