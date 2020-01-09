import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';

=======
import {BrowserRouter as Router} from 'react-router-dom';
>>>>>>> b0f1b73059a820934eec6ed2184700a99d57513e
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<<<<<<< HEAD
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
=======
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
>>>>>>> b0f1b73059a820934eec6ed2184700a99d57513e
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
