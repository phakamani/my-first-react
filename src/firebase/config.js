import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYVYGn2zt-b871vZy2fQP_UNWaan3ul50",
    authDomain: "ninja-firegram-be855.firebaseapp.com",
    projectId: "ninja-firegram-be855",
    storageBucket: "ninja-firegram-be855.appspot.com",
    messagingSenderId: "1007028187496",
    appId: "1:1007028187496:web:fcc55578d84c53574ae6dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };