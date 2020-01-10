import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'


import { Page } from './components/login_signup_page';
import HomePage from './components/HomePage';
import CommentCard from "./components/CommentCard";
import PrivateHomePage from "./components/PrivateHomePage";
import About from './components/about';

import useLocalStorage from "./hooks/useLocalStorage"



const App = () => {

  const [loggedInUser, setLoggedInUser ] = useLocalStorage('name', '');



  const savedUser = value => {
    setLoggedInUser(value)
  }
  
console.log(loggedInUser, "app")

  return (
    <div className="App">



      <Switch>
        <Route exact path='/' component={HomePage} />
        <PrivateRoute exact path="/protected" component={PrivateHomePage}/>

        <Route
          exact path='/login_signup'
          render={(props) => <Page {...props} savedUser={savedUser} loggedInUser={loggedInUser}/>}
        />

        <PrivateRoute exact path="/CommentCard" component={CommentCard} />

        <Route path="/about" render={() => <About />} />

      </Switch>

    </div>
  );
}

export default App;
