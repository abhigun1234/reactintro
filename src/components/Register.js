import  React  ,{Component} from  'react'
import './register.css';
class   Register extends Component{

    render(){
        return  <div class="register">
        Register<br /><br />
        <div>
          Enter Username<br />
          <input type="text"  autoComplete="new-password" />
        </div>
        <div class="style-margin">
          Enter Password<br />
          <input type="password"  autoComplete="new-password" />
        </div>
        <div class="style-margin">
          Enter Email Id<br />
          <input type="password"  autoComplete="new-password" />
        </div>
       
        <button>Register</button>
      </div>
    }
}
export default Register