import React, {useState} from "react";
import axios from "axios";

const Login = props => {

  
    const  [ credentials, setCredentials ] = useState({
      username: "cori",
      password: "cori"
    })
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
          .post("http://localhost:3456/api/login", credentials)
          .then(res => {
              // console.log(res);
              localStorage.setItem("token", res.data.payload)
              props.history.push("")
          })
          .catch(err =>
              console.log(err)    
          )
  }
  
  
  
    return (
      <div className="login-container">
        <h2 className="header-login">
          LOGIN PAGE
        </h2>
        <div className="login-form-main">
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={e => setCredentials({username: e.target.value})}
              />
              <input
                  type="text"
                  name="password"
                  value={credentials.password}
                  onChange={e => setCredentials({password: e.target.value})}
              />
              <button>Login</button>
          </form>
        </div>
        </div>
    );
  };
  
  export default Login;