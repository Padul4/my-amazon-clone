import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-TUSy-HcTZNjLfhaio6qTSUoe2fEq9Ow",
  authDomain: "challenge-b26c3.firebaseapp.com",
  databaseURL: "https://challenge-b26c3.firebaseio.com",
  projectId: "challenge-b26c3",
  storageBucket: "challenge-b26c3.appspot.com",
  messagingSenderId: "778823117861",
  appId: "1:778823117861:web:f019d23e720a555910a3cc",
  measurementId: "G-WDYC3PSM07",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
