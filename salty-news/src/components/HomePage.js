import React, { useState } from 'react';

import CommentCard from './CommentCard';
import Header from './Header';

export default function HomePage({}) {
    //const [feed, setFeed] = useState([]);

    const addCommentFn = comment => {
      const newCommit = {
        id: Date.now(),
        title: comment.title,
        text: newCommit.text
      }
    }

    return (
        <div>
            <Header />

            <div className="feed">

            </div>
        </div>
    )
}