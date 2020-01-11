import React from 'react';

import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'


import { Page } from './components/login_signup_page';
import HomePage from './components/HomePage';
import CommentCard from "./components/CommentCard";
import PrivateHomePage from "./components/PrivateHomePage";
import About from './components/about';
import UserCard from "./components/UserCard";




const App = () => {


  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={HomePage} />
        <PrivateRoute exact path="/protected" component={PrivateHomePage}/>

        <PrivateRoute exact path="/UserCard" component={UserCard}/>

        <Route exact path='/login_signup' component={Page} />

        <PrivateRoute exact path="/CommentCard" component={CommentCard} />

        <Route path="/about" render={() => <About />} />
      </Switch>

    </div>
  );
}

export default App;
