import React from "react";

import Header from "./Header"

import {axiosWithAuth} from "../utils/axiosWithAuth";

import { withRouter } from 'react-router-dom';

const UserCard = props => {

    const deleteUser = e => {
        e.preventDefault();
        axiosWithAuth()
          .delete(`/salty/${localStorage.getItem("id")}`)
          .then(res => {
            console.log(res)
            localStorage.clear();
            props.history.push("/HomePage");
          })
          .catch(err =>
            console.log(err)    
        )
      };

      console.log(localStorage.getItem("id"))

    return ( <>
        <Header />
        {localStorage.getItem("token") ? 
                <div>
                    <h3>Username: {JSON.parse(localStorage.getItem("name"))}</h3>
                </div>
            :
            null 
            }
            {localStorage.getItem("email") ? 
                <div>
                    <h3>email: {localStorage.getItem("email")}</h3>
                </div> :
            null
            }
        <button onClick={deleteUser}>Delete Account</button>
    </> )
}

export default withRouter (UserCard);