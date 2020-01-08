import React, {useState} from "react";
import axios from "axios";

const Login = props => {

  
    const  [ credentials, setCredentials ] = useState({
      username: "joe",
      password: "joseph"
    })
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
          .post("https://salty-hacker.herokuapp.com/api/login", credentials)
          .then(res => {
              console.log(res);
              localStorage.setItem("token", res.data.payload)
              props.history.push("")
          })
          .catch(err =>
              console.log(err)    
          )
  }
  
  
  
    return (
      <div>
        <h2>
          Login
        </h2>
        <div className="login-form-main">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={e => setCredentials({username: e.target.value})}
              />
            </div>
            <div>
             <input
                type="text"
                name="password"
                value={credentials.password}
                onChange={e => setCredentials({password: e.target.value})}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;