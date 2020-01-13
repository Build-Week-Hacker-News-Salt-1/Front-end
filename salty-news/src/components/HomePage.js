import React, { useState } from 'react';
import styled from 'styled-components';

import Comments from './Comments';
import Header from './Header';

const feedData = require("../assets/Feed.json");

const HomePage = props => {

  const [comments, setComments] = useState(feedData);

  const addCommentFn = comment => {
    const newCommit = {
      id: Date.now(),
      title: comment.title,
      text: newCommit.text
    };

    setComments([...comment, newCommit]);
  };

  return (
    <div style={{background: "#f6f6ef"}}>
      <Header />

      <div style={{margin: "0 40px"}}>
        <Comments commentsList={comments}/>
      </div>
    </div>
  )
}

export default HomePage;