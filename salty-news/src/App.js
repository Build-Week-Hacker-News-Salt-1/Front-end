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
<<<<<<< HEAD
      <header className="App-header">
        <Link to='/login_signup'>Login</Link>
      </header>
      
      <Route path='/login_signup' component={Page} />

=======
      <Page />
      //<About></About>
      <HomePage />
>>>>>>> b0f1b73059a820934eec6ed2184700a99d57513e
    </div>
  );
}

export default App;