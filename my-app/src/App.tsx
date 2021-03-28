import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllUsers from './Components/AllUsers/AllUsers';
import AllPosts from './Components/AllPosts/AllPosts';
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';
import UserPosts from './Components/UserPosts/UserPosts';

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
            <AllPosts />
          </Route>
          <Route exact path='/posts/user_id=:id'>
            <UserPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
