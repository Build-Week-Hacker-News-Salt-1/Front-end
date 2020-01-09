import React from 'react';

import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header'

export const Page = () => {
  return (
    <div>
      <Header />
      <Login />
      <Signup />
    </div>
  );
};