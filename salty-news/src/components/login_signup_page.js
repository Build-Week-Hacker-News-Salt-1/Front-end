import React from 'react';

import Login from './Login';
import Signup from './Signup';
import Header from './Header'

export const Page = props => {

console.log(props.loggedInUser, "Page")

  return ( <>
      <Header loggedInUser={props.loggedInUser}/>
    <div className="login-signup-page-div">
      <Login history={props.history} savedUser={props.savedUser}/>
      <Signup />
    </div>
    </>
  );
};