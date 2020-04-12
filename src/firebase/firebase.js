import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHDdqehB0jIkInX2OpQWrO64a7S46TBdk",
  authDomain: "dmvie-722fd.firebaseapp.com",
  databaseURL: "https://dmvie-722fd.firebaseio.com",
  projectId: "dmvie-722fd",
  storageBucket: "dmvie-722fd.appspot.com",
  messagingSenderId: "292978005955",
  appId: "1:292978005955:web:95f47192d5d754802a8f76",
  measurementId: "G-Z04LSEZSTJ"
};

firebase.initializeApp(firebaseConfig);

const database  = firebase.database();

export { firebase as default, database}