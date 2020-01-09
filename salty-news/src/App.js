import React from 'react';

import { Page } from './login_signup_page';
import Login from './components/Login';
import About from './components/about/index';
import HomePage from './components/HomePage';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Page />
        <About></About>
      <HomePage />
    </div>
  );
}

export default App;