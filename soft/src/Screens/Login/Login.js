import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Login.css';
import { loginmethod} from '../../firebase';


function Login() {
    let navigate = useNavigate();
    let password , email;
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }
    const Setemail = event => {
        email = event.target.value; 
    }
    const Setpassword = event => {
        password = event.target.value;     
    }
    const OnLogin = () => {
        //send a function to the database to check if log the user in
        loginmethod(email, password);

        
    }

    const OnForgot = () => {
        // need to do something if the user forgot password
    }

    return (
        <div >
            <div class="header"><Header /></div>
            <div className='container'>
                <div className='resize'>
                    <div className="centre"><br />         
                        <input className='login-input' placeholder="Email" onChange={Setemail}/><br/>      
                        <input className='login-input'  placeholder="Password" onChange={Setpassword}/> <br/>
                        <button className='forget-password-button'>Forgot Password?</button><br/>
                        <button class="Loginbutton" onClick={OnLogin}>Login</button>
                    </div>
                </div>
                <div className='background'></div>
            </div>
        
        </div>
    );
}

export default Login;