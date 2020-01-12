import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import CommentCard from './CommentCard';

import { withRouter } from 'react-router-dom';

const StyledHeader = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    min-height: 50px;
    background: #ff6000;

    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        text-decoration: underline;
    }

    div {
        display: flex;
        flex-direction: row;
    }
`;

const Separator = () => <span style={{
    padding: "0 5px",
}}>|</span>

const Header = props => {

    

    const logout = () => {
        localStorage.clear();
        props.history.push("/")
    }


    return (
        <StyledHeader>
            <div>
                <Link to="/">Home</Link>
                <Separator />
                <Link to='/about' className="last">About</Link>
            </div>
            {/* <div>
                <nav>
                <Link to='/CommentCard'>Submit Comment</Link>
                </nav>
                <Route 
                path='/CommentCard' 
                component={CommentCard} 
                />
            </div> */}
            { localStorage.getItem("token") ? // if logged in
                <div>
                    <Link to="/UserCard">User: {JSON.parse(localStorage.getItem("name"))}</Link>
                    <Separator />
                    <Link onClick={logout} className="last">Logout</Link>
                </div>
                : // if not logged in
                <div>
                    <Link to='/login_signup' className="last">Login</Link>
                </div>
            }
            
            
        </StyledHeader>
    )
}

export default withRouter (Header);
// export default Header;