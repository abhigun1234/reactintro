import React  from 'react'
import './Login.css';
function Login(){
    return (
        <div class="login-page myclolor">
          Login<br /><br />
          <div>
            Username<br />
            <input type="text"  autoComplete="new-password" />
          </div>
          <div class="style-margin">
            Password<br />
            <input type="password"  autoComplete="new-password" />
          </div>
         
          <button>Login</button>
        </div>
      );
}
export default Login