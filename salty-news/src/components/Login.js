import React, {useState} from "react";
import axios from "axios";


const initialState = {
  username: "",
  password: ""
};

const Login = props => {

    const [ credentials, setCredentials ] = useState(initialState);
    const [ error, setError ] = useState(false);

    const resetField = () => {
      setCredentials(initialState);
    }
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
          .post("https://salty-hacker.herokuapp.com/api/login", credentials)
          .then(res => {
              resetField();
              setError(false)
              console.log(res);
              localStorage.setItem("token", res.data.payload);
              //props.history.push("/HomePage");       
          })
          .catch(err => {
            console.log(err)
            setError(true)
          })
  }

  console.log(error)
   
    return (
      <div>
        <h2>
          Login
        </h2>
        <div className="login-form-main">
          <form onSubmit={handleSubmit}>
            <div className="form-container-grid">
              <label htmlFor="username-login">
                username:
              </label>
                <input
                  id="username-login"
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={e => setCredentials({...credentials, username: e.target.value})}
                />
              
            </div>
            <div className="form-container-grid">
              <label htmlFor="password-login">
                password:
              </label>
                <input
                  id="password-login"
                  type="text"
                  name="password"
                  value={credentials.password}
                  onChange={e => setCredentials({...credentials, password: e.target.value})}
                />
    
            </div>
            <button>Login</button>
          </form>
          {error ? <div className="error-message">
                <p>Username or password is incorrect.</p>
          </div> : null }
        </div>
      </div>
    );
};
  
export default Login;