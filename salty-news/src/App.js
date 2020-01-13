import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'
import { Page } from './components/login_signup_page';
import HomePage from './components/HomePage';
import CommentCard from "./components/CommentCard";
import PrivateHomePage from "./components/PrivateHomePage";
import About from './components/about';
import UserCard from "./components/UserCard";

const App = () => {
  const [feed] = useState(require("./assets/Feed.json"));
  // without backend API paths to save or get saved comments, we can use localStorage instead to simulate
  const [savedComments, set_saved_comments] = useState([]);
  const setSavedComments = comments => {
    set_saved_comments(comments);
    localStorage.setItem("savedComments", JSON.stringify(comments));
  }

  useEffect(() => {
    if (localStorage.getItem("savedComments") == null) {
      localStorage.setItem("savedComments", JSON.stringify([]));
    }
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={
          () => <HomePage feed={feed}
          savedComments={savedComments}
          setSavedComments={setSavedComments}/>
        } />
        <PrivateRoute exact path="/user" component={UserCard}/>
        <Route exact path='/login_signup' component={Page} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
