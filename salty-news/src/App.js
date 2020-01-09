import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Page } from './login_signup_page';
import Login from './components/Login';
import About from './components/about/index';
import HomePage from './components/HomePage';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/login_signup'>Login</Link>
      </header>
      
      <Route path='/login_signup' component={Page} />
    </div>
  );
}

export default App;