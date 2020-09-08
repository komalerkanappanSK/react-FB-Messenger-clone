import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCPJ2BsCk7rYiE37cYkIJCOOXz9DhMAjuM",
    authDomain: "facebook-messenger-clone-b33fb.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-b33fb.firebaseio.com",
    projectId: "facebook-messenger-clone-b33fb",
    storageBucket: "facebook-messenger-clone-b33fb.appspot.com",
    messagingSenderId: "565026852594",
    appId: "1:565026852594:web:166b4c0e944af6aced4a6b",
    measurementId: "G-Y60THG56WP"
    
});

const db = firebaseApp.firestore();

export default db ;
