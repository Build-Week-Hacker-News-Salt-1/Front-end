import React, { useState } from 'react';
import {
    Sidebar,
    Responsive,
    Menu,
    Container,
    Checkbox,
    Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../state';

import styled from 'styled-components';


const NavBarMobile = ({
    children,
    onPusherClick,
    onToggle,
    visible,
    theme,
    dispatch,
}) => {
    return (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                visible={visible}
                animation="overlay"
                direction="top"
                stackable
                style={{
                    width: '100vw',
                    backgroundColor: theme === 'dark' ? '#041F42' : null,
                }}
                size="large"
                inverted={theme}
            >
                <Menu.Item as={Link} to="/" name="home" content="Home" />
                <Menu.Item
                    as={Link}
                    to="/SaltyUsers"
                    name="SaltyUsers"
                    content="Hacker News Salty Users"
                />

                <Menu.Item
                    as={Link}
                    to="/about-us"
                    name="about-us"
                    content="About Us"
                />
            </Sidebar>
            <Sidebar.Pusher onClick={onPusherClick}>
                <Menu
                    style={{
                        backgroundColor: theme === 'dark' ? '#041F42' : null,
                    }}
                    inverted={theme}
                    fixed="top"
                >
                    <Menu.Item onClick={onToggle}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Item>
                        <Checkbox
                            toggle
                            defaultChecked
                            style={{ marginTop: 10 }}
                            onClick={() =>
                                dispatch({
                                    type: 'updateTheme',
                                    payload:
                                        theme == 'light' ? 'dark' : 'light',
                                })
                            }
                        />
                    </Menu.Item>
                    <Menu.Menu position="right">


                    </Menu.Menu>
                </Menu>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

const NavBarDesktop = ({ theme, dispatch }) => {
    return (
        <Menu
            style={{ backgroundColor: theme === 'dark' && '#041F42' }}
            inverted={theme === 'dark' ? true : false}
            fixed="top"
            size="large"
        >
            <Menu.Item as={Link} to="/" name="home" content="Home" />
            <Menu.Item
                as={Link}
                to="/SaltyUsers"
                name="top100users"
                content="Hacker News Salty Users"
            />

            <Menu.Item
                as={Link}
                to="/about-us"
                name="about-us"
                content="About Us"
            />


        </Menu>
    );
};

const NavBarChildren = ({ children, theme }) => {
    return (
        <Container
            className={theme}
            fluid
            style={{
                paddingTop: 80,
                backgroundColor: theme === 'dark' ? '#041f42' : null,
                minHeight: '100vh',
            }}
        >
            {children}

        </Container>
    );
};

const NavBar = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const [{ theme }, dispatch] = useStateValue();

    const handlePusher = () => {
        if (visible) setVisible(false);
    };

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <NavBarMobile
                    visible={visible}
                    theme={theme}
                    dispatch={dispatch}
                    onToggle={handleToggle}
                    onPusherClick={handlePusher}
                >
                    <div
                        style={{
                            paddingTop: 80,
                            width: '100%',
                            backgroundColor:
                                theme === 'dark' ? '#041f42' : null,
                        }}
                        theme={theme}
                    >
                        {children}
                    </div>
                </NavBarMobile>
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <NavBarDesktop theme={theme} dispatch={dispatch} />
                <NavBarChildren theme={theme}>{children}</NavBarChildren>
            </Responsive>
        </div>
    );
};

export default NavBar;
