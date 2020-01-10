import React from 'react';
import Header from './Header';

const PrivateHomePage = props => {

    return (
        <div>
            <Header history={props.history}/>

            <div className="feed">

            </div>
        </div>
    )
}

export default PrivateHomePage;