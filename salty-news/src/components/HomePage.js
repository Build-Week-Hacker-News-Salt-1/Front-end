import React, { useState } from 'react';
import Comments from './Comments';

import Header from './Header';

const HomePage = props => {

  const [comment, setComment] = useState([
    {
      id: 1,
      title: '1. A Man Who’s Spending $1B to Own Every Pop Song',
      text: '131 points by SirLJ 3 hours ago | unvote | hide | 83 comments'
    }
  ])

    const addCommentFn = comment => {
      const newCommit = {
        id: Date.now(),
        title: comment.title,
        text: newCommit.text
      };

      setComment([...comment, newCommit]);
    };

    return (
        <div>
            <Header />

            <Comments commentsList={comments} />
        </div>
    )
}

export default HomePage;