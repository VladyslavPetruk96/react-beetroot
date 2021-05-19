import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVUi10vvawbIYVwtCsGeRwnKLt8xfoEpg",
  authDomain: "maintest-firebase.firebaseapp.com",
  databaseURL: "https://maintest-firebase-default-rtdb.firebaseio.com",
  projectId: "maintest-firebase",
  storageBucket: "maintest-firebase.appspot.com",
  messagingSenderId: "682906644852",
  appId: "1:682906644852:web:44028260df4f3c9259fc21"
}

firebase.initializeApp(firebaseConfig);


function StarterPage() {
  return (
    <>
      <h2>Для входа на сайт вам необходимо авторизироваться</h2>
      <Link to="/createaccount">Создать учетную запись</Link>
      <Link to="/signin">Войти</Link>
    </>
  );
}

export default StarterPage;
