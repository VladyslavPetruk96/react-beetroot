import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './components/body/MainPage';
import Avatar from './components/header/Profile/Avatar';
import Testing from './components/body/questions/Testing';
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
