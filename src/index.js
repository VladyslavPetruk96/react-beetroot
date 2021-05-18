import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';import './index.scss';
import StarterPage from './pages/StarterPage';
import reportWebVitals from './reportWebVitals';
import CreateAccount from './pages/SomePage/components/CreateAccount';
import Avatar from './pages/SomePage/Avatar/Avatar';
import Testing from './pages/SomePage/TestingPage/Testing';
import MainPage from './pages/SomePage/MainPage/MainPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/VladyslavPetruk96/react-beetroot" exact component={StarterPage} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/avatar" component={Avatar} />
        <Route path="/testing" component={Testing} />
        {/* <Redirect to="/404" />       */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
