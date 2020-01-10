import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
            {/* maybe a search bar for stretch goal here */}
            <div className="left">
                <Link to="/">Home</Link>
            </div>
            <div className="right">
                <Link to='/login_signup'>Login</Link>
                {/* 
                    ! TODO !
                    user dropdown menu. Text content = username
                    option to log out
                */}
                <span>PLACEHOLDER</span>
            </div>
            
        </StyledHeader>
    )
}