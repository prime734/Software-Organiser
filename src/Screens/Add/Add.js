import { React, useContext, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { EmailContext } from "../../context";
import { db } from '../../firebase';
import { Timestamp, updateDoc, doc } from "firebase/firestore";


import './Add.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


function Add() {
  const { state } = useLocation();
  const { ID, UserStories } = state;
  let navigate = useNavigate();
  const { userEmail, setUserEmail } = useContext(EmailContext);
  const [userStory, setUserStory] = useState('');
  const [status, setStatus] = useState('New');

  const addUserStory = async () => {
    let timestamp = Timestamp.fromDate(new Date());
    const prref = doc(db, 'Projects', ID);
    await updateDoc(prref , {
        UserStories: [...UserStories, {
            UserDate: timestamp,
            UserPoster: userEmail,
            UserStatus: status,
            UserStory: userStory
        }]
    })
    goBack();
  };

  const goBack = () => {
    navigate(-2);
  }



  

  return (
    <div>
        <div class="header">
            <Header />
        </div>
        <div class="body">
            <h3>Add User Story</h3>
            <textarea className = 'edtinput' type="text" placeholder="User Story" onChange={(event)=> {setUserStory(event.target.value)}}/>
              <select className='edtselect' placeholder="New" onChange={(event) => { setStatus(event.target.value) }}>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button className="addbtn" onClick={addUserStory}>Add User Story</button>
        </div>
        <div class="footer">
            <Footer />
        </div>
    </div>
  )
}

export default Add