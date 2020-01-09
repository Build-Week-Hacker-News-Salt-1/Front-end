import React, {useState} from "react";
import axios from "axios";
// import {axiosWithAuth} from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
  email: ""
};

const Signup = () => {

    const [ signupCredentials, setSignupCredentials ] = useState(initialState)
    const [ error, setError ] = useState(false);
    const [ successSignup, setSuccessSignup] = useState(false);

    const resetField = () => {
      setSignupCredentials(initialState);
    }


    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post("https://salty-hacker.herokuapp.com/api/register", signupCredentials)
            .then(res => {
              console.log(res);
              resetField();
              setError(false);
              setSuccessSignup(true);
            })
            .catch(err => {
              console.log(err);
              setError(true);
              setSuccessSignup(false);
            })
    }

    console.log(signupCredentials)

    return(
        <div className="login-container">
        <h2 className="header-login">
          Create Account
        </h2>
        <div className="login-form-main">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                username:
                <input
                type="text"
                name="username"
                value={signupCredentials.username}
                onChange={e => setSignupCredentials({...signupCredentials, username: e.target.value})}
                />
              </label>
            </div>
            <div>
              <label>
                password:
                <input
                  type="text"
                  name="password"
                  value={signupCredentials.password}
                  onChange={e => setSignupCredentials({...signupCredentials, password: e.target.value})}
                />
              </label>
            </div>
            <div>
              <label>
                email:
                <input
                  type="text"
                  name="email"
                  value={signupCredentials.email}
                  onChange={e => setSignupCredentials({...signupCredentials, email: e.target.value})}
                />
              </label>
            </div>
              <button>SignUp</button>
          </form>
          {error ? <div className="error-message">
                <p>Incorrect Signup. Please input a valid username, password, and email.</p>
          </div> : null }
          {successSignup ? <div className="error-message">
                <p>Successfull registration. Please Login above.</p>
          </div> : null }
        </div>

 

        </div>
    )
}

export default Signup;