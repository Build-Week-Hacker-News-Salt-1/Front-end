import React, { useState } from 'react';
import styled from 'styled-components';

let StyledCard = styled.div`
    /*nothing yet*/
`;;

export default function CommentCard(props) {

  const [comment, setComment] = useState({title: "", text: ""});

  return (
    <StyledCard>
      <form>
        <div>
          <label>
            title:
            <input 
              type='text' 
              name='title'
              value={title}
            />
          </label>
        </div>
      </form>
    </StyledCard>
  )
}