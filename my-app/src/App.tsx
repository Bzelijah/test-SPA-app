import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllUsers from './Components/AllUsers/AllUsers';
import Posts from './Components/Posts/Posts';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <AllUsers />
          </Route>
          <Route exact path='/posts'>
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
