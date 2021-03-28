import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllUsers from './Components/AllUsers/AllUsers';
import AllPosts from './Components/AllPosts/AllPosts';
import Header from './Components/Header/Header';
import UserPosts from './Components/UserPosts/UserPosts';
import PostWithComments from './Components/PostWithComment/PostWithComment';

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
          <Route exact path='/posts/:id'>
            <div className="posts-container">
              <PostWithComments />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
