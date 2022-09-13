import firebase from 'firebase';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDU9ZyA3NK9iywwGRckxkseSMtAcI-DMvY",
    authDomain: "todo-list-140ac.firebaseapp.com",
    projectId: "todo-list-140ac",
    storageBucket: "todo-list-140ac.appspot.com",
    messagingSenderId: "504711317814",
    appId: "1:504711317814:web:16c94003df33e8944d0b97",
    measurementId: "G-GP4GGZ2N3F"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;
  