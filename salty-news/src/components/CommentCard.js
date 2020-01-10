import React, { useState } from 'react';
import styled from 'styled-components';

let StyledCard = styled.div`
    /*nothing yet*/
`;;

export default function CommentCard(props) {

  const [comment, setComment] = useState({title: "", text: ""});

  const handleChange = e => {
    setNote({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addCommentFn(comment);
    setComment({ title: "", body: "" });
  };

  return (
    <StyledCard>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            title:
            <input 
              type='text' 
              name='title'
              value={title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            text:
            <input 
              type='textarea' 
              name='text'
              value={text}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </StyledCard>
  )
}