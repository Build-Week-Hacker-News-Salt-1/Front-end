import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import { StateProvider } from './state';
import About from './components/about';


const Home = () => {
    return (
        <>
            <div className="hackernewslogo">
                <Link className="cta" to="/SaltyUsers">
                    Enter at your own Peril!
                </Link>
            </div>
        </>
    );
};


const App = () => {
    const initialState = {
        theme: window.localStorage.getItem('theme') || 'dark',
    };

    const reducer = (state, action) => {
        switch (action.type) {

            case 'toggleTheme':
                if (state.theme === 'dark') {
                    window.localStorage.setItem('theme', 'light');
                    return {
                        ...state,
                        theme: 'light',
                    };
                } else {
                    window.localStorage.setItem('theme', 'dark');
                    return {
                        ...state,
                        theme: 'dark',
                    };
                }
            default:
                return state;
        }
    };
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <BrowserRouter>
                <NavBar>
                    <Route exact path="/" render={() => <Home />} />
                    <Route
                        path="/SaltyUsers"
                    />

                    <Route path="/about-us" render={() => <About />} />

                </NavBar>
            </BrowserRouter>
        </StateProvider>
    );
};

export default App;
