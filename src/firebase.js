import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6TSZdE58XQH_2tMnRG_ZVqkBkN-OAtZg",
    authDomain: "whats-app-clone-280ce.firebaseapp.com",
    projectId: "whats-app-clone-280ce",
    storageBucket: "whats-app-clone-280ce.appspot.com",
    messagingSenderId: "603859543921",
    appId: "1:603859543921:web:0ee1d04cf95663fcbbf8d0",
    measurementId: "G-7SN1EXY1BD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;