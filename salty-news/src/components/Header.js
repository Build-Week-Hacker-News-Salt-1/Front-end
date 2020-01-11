import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import CommentCard from './CommentCard';

import { withRouter } from 'react-router-dom';

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

const Header = props => {

    

    const logout = () => {
        localStorage.clear("token");
        props.history.push("/")
    }


console.log(props.loggedInUser)
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
            <div className="left">
                <Link to="/">Home</Link>
            </div>
            <div className="right">
                {/* 
                    ! TODO !
                    user dropdown menu. Text content = username
                    option to log out
                */}
                {localStorage.getItem("token") ? <Link>User: {JSON.parse(localStorage.getItem("name"))}</Link> : null }
                <Link to='./about'>About</Link>
                {!localStorage.getItem("token") ? <Link to='/login_signup'>Login</Link> : null}
                {localStorage.getItem("token") ? <Link onClick={logout}>Logout</Link> : null}
                
            </div>
        </StyledHeader>
    )
}

export default withRouter (Header);
// export default Header;