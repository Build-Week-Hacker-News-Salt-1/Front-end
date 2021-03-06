import React from 'react';

import Login from './Login';
import Signup from './Signup';
import Header from './Header'

export const Page = props => {



  return ( <>
    <Header />
    <div className="login-signup-page-div">
    <Login history={props.history} />
    <Signup />
    </div>
  </> );
};