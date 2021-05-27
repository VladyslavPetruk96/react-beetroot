import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateAccount from './components/auth/CreateAccount';
import Avatar from './components/pages/account/Avatar';
import Testing from './components/pages/testingPage/Testing';
import MainPage from './components/pages/mainPage/MainPage';
import SignIn from './components/auth/SignIn';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={App} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/mainpage" component={MainPage} />
          <Route path="/avatar" component={Avatar} />
          <Route path="/testing" component={Testing} />
          <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


