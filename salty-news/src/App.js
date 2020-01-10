import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'


import { Page } from './login_signup_page';
import HomePage from './components/HomePage';
import CommentCard from "./components/CommentCard"

import About from './components/about';

// import logo from './logo.svg';
// import './App.css';

const App = props => {
  return (
    <div className="App">

      {/* <header className="App-header">
        <Link to='/login_signup'>Login</Link>

      </header>  */}
      

        {/* <Link to='./about'>About</Link> */}



      <Switch>
        <Route exact path='/' component={HomePage} />
        <PrivateRoute exact path="/protected" component={HomePage} />
        <Route path='/login_signup' component={Page} />

        <PrivateRoute exact path="/CommentCard" component={CommentCard} />

        <Route path="/about" render={() => <About />} />

      </Switch>

    </div>
  );
}

export default App;
