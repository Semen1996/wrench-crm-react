import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Search from './Search';

function App() {
  return (
    <div className="root">
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/address">
        <Search />
      </Route>
    </Switch>
    </div>
  );
}

export default App;