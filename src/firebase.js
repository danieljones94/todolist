import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAYVnSTpYICnXq8nyCVPvBqjIzFLDw0dk4",
  authDomain: "todolist-5cde9.firebaseapp.com",
  databaseURL: "https://todolist-5cde9.firebaseio.com",
  projectId: "todolist-5cde9",
  storageBucket: "todolist-5cde9.appspot.com",
  messagingSenderId: "174267397987",
  appId: "1:174267397987:web:6837ba15879fdfd70c8556",
  measurementId: "G-X3KPCE02Z0"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;
