import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import style from './StarterPage.module.css';


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
      <div className={style.all}>
        <h2 className={style.h2}>Для входа на сайт вам необходимо авторизороваться</h2>
        <div className={style.link}>
          <Link className={style.link1} to="/createaccount">Sign Up</Link>
          <Link className={style.link2} to="/signin">Sign In</Link>
        </div>     
      </div>     
    </>
  );
}

export default StarterPage;
