import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Login.css';


function Login() {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <div >
            <div class="header"><Header /></div>
            <div className='container'>
                <div className='resize'>
                   
                    <div className="centre"><br />         
                        <input className='login-input' placeholder="Email"/><br/>
                        <input className='login-input'  placeholder="Password" /><br/>
                        <button className='forget-password-button'>Forgot Password?</button><br/>
                        <button class="Loginbutton">Login</button>
                    </div>
                </div>
                <div className='background'></div>
            </div>
            
        </div>
    );
}

export default Login;