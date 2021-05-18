import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/SomePage/MainPage.js/MainPage.js';
import Avatar from './pages/SomePage/Avatar/Avatar';
import Testing from './pages/SomePage/TestingPage/Testing';
import StarterPage from './pages/StarterPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={StarterPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/avatar" component={Avatar} />
        <Route path="/testing" component={Testing} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
