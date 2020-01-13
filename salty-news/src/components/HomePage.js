import React, { useState } from 'react';
import styled from 'styled-components';

import Comments from './Comments';
import Header from './Header';

const feedData = require("../assets/Feed.json");

const HomePage = ({feed, savedComments, setSavedComments}) => {

  return (
    <div style={{background: "#f6f6ef"}}>
      <Header />

      <div style={{margin: "0 40px"}}>
        <Comments feed={feed}
          savedComments={savedComments}
          setSavedComments={setSavedComments}/>
      </div>
    </div>
  )
}

export default HomePage;