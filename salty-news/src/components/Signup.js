import React, {useState} from "react";
import axios from "axios";

const Signup = () => {

    const  [ signupCredentials, setSignupCredentials ] = useState({
        username: "",
        password: "",
        email: ""
      })

      const handleSubmit = e => {
        e.preventDefault();
        axios
            .post("http://localhost:3456/api/register", signupCredentials)
            .then(res => {
                console.log(res)
            })
            .catch(err =>
                console.log(err)    
            )
    }

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
                onChange={e => setSignupCredentials({username: e.target.value})}
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
                  onChange={e => setSignupCredentials({password: e.target.value})}
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
                  onChange={e => setSignupCredentials({email: e.target.value})}
                />
              </label>
            </div>
              <button>SignUp</button>
          </form>
        </div>
        </div>
    )
}

export default Signup;