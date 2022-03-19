import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3-j1AwVlVV1096iK9zTG1SBuBar0IATw",
    authDomain: "testerchatapp-bb01c.firebaseapp.com",
    databaseURL: "https://testerchatapp-bb01c-default-rtdb.firebaseio.com",
    projectId: "testerchatapp-bb01c",
    storageBucket: "testerchatapp-bb01c.appspot.com",
    messagingSenderId: "983990021551",
    appId: "1:983990021551:web:9e5fde17411140b279535a",
    measurementId: "G-ZMZHJ3TXVV"
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;