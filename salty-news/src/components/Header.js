import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import CommentCard from './CommentCard';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    /* temporary values */
    padding: 0 50px;
    min-height: 50px;
    background: orange;

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }

    .left, .right {
        display: flex;
        flex-direction: row;
    }
`;

export default function Header({user}) {
    return (
        <StyledHeader>
          <div className="left">
            <Link to="/">Home</Link>
          </div>
          <div className="right">
            <Link to="/saved">Saved</Link>
          </div>
              {/* 
                    ! TODO !
                    user dropdown menu. Text content = username
                    option to log out
              */}
          <div>
            <nav>
              <Link to='/CommentCard'>Submit Comment</Link>
            </nav>
            <Route 
              path='/CommentCard' 
              component={CommentCard} 
            />
          </div>
          {/* maybe a search bar for stretch goal here */}       
        </StyledHeader>
    )
}