import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderB from '../../Components/HeaderB/HeaderB';
import Footer from '../../Components/Footer/Footer';
import '../Login/Login.css';
import './SignUp.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../../firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";
import emailjs from 'emailjs-com';          // library used to send users emails
import project_management from "../../images/project_management.png";

function SignUp() {
    let navigate = useNavigate();
    let name, password, email, surname;
    const [isLogged, setIsLogged] = useState(null);



    const routeChange = () => {
        let path = '/Login';
        navigate(path);
    }
    const Setname = event => {
        name = event.target.value;
    }
    const Setemail = event => {
        email = event.target.value;
    }
    const Setpassword = event => {
        password = event.target.value;
    }
    const SetSurname = event => {
        surname = event.target.value;
    }

    const auth = getAuth();
    const OnSignup = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                sendemail();                               // notifies the user after account has been created
                addDetails();                                //update table
                routeChange();                         // change to route to login after successful signup
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error)                      //temporary to show error message
            });
    }

    const addressRef = collection(db, "Users");                        //reference to the user collection
    const addDetails = async () => {                            //handles adding an item to database
        await addDoc(addressRef, { Email: email, Name: name, Surname: surname })
    }

    function sendemail() {
        var userid = "Uhi73WxfmyePOs3wU"
        emailjs.init(userid);

        var details = {
            email: email,               // user email
            to_name: name          /* data which will be needed from template may be extracted from here,
                         e.i ( name of user or subject of email)                   */
        };

        emailjs.send('service_ew7io57', 'template_3p2jaur', details).then(function (res) {

        },
            reason => {
                alert("Invalid user email or internet connection is low");
            })
    }

    return (
        <div >
            <div class="header">
                <HeaderB />
            </div>
            <div className='container'>
                <div className='resize'>
                    <div className="centre"><br />
                        <input className='login-input' placeholder="Name" onChange={Setname} /><br />
                        <input className='login-input' placeholder="Surname" onChange={SetSurname} /><br />
                        <input className='login-input' type="email" placeholder="Email" onChange={Setemail} /><br />
                        <input className='login-input' type="password" placeholder="Password" onChange={Setpassword} /> <br />
                        <button class="Loginbutton" onClick={OnSignup}>Sign-Up</button><br />
                        <br />
                    </div>
                </div>
            </div>
            <div class = "Footer">
                <Footer />
            </div>

        </div>
    );
}

export default SignUp;