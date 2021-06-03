import React from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateAccount from '../auth/CreateAccount';
import Avatar from '../../../pages/account/Avatar';
import Testing from '../../../pages/testingPage/Testing';
import MainPage from '../../../pages/mainPage/MainPage';
import SignIn from '../auth/SignIn';
import LoginForm from '../auth/LoginForm';

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

  function App() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/mainpage" component={MainPage} />
          <Route path="/avatar" component={Avatar} />
          <Route path="/testing" component={Testing} />
          <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
    )
  }

export default App