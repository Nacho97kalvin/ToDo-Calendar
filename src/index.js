import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import firebase from 'firebase'



const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE__DATA}`,
  authDomain: "your-own-calendar.firebaseapp.com",
  databaseURL: "https://your-own-calendar.firebaseio.com",
  projectId: "your-own-calendar",
  storageBucket: "your-own-calendar.appspot.com",
  messagingSenderId: "1037166373213",
  appId: "1:1037166373213:web:69eaf5fe41d7c776fda0b4",
  measurementId: "G-VZ0NG70CCL"
}


firebase.initializeApp(firebaseConfig)    // inisializando app de firebase


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
