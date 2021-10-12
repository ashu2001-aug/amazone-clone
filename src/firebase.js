import firebase from "firebase/compat";
//import "firebase/compat/auth";
//import "firebase/compat/firestore"
//import "firebase/compat/remote-config";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHy19QQ91pkq17pVTmVGcjIeY4YGPjMrM",
  authDomain: "e-clone-34f03.firebaseapp.com",
  projectId: "e-clone-34f03",
  storageBucket: "e-clone-34f03.appspot.com",
  messagingSenderId: "720669548602",
  appId: "1:720669548602:web:9ee78551449d422ed21503",
  measurementId: "G-BB7KR0R5DZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};