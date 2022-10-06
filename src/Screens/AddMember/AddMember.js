import { React, useState, useEffect, useContext } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./AddMember.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Lion from "../../images/Lion-white.png";

function AddMember() {
  const { state } = useLocation();
  let navigate = useNavigate();
  const { project } = state;

  const [name, setName] = useState();
  const Setname = (event) => {
    setName(event.target.value);
  };

  const [projects, setProjects] = useState([]); //array to store user's projects'
  const projectRef = collection(db, "Projects"); //collection reference to all projects

  const addMember = async (name) => {
    //handles adding a new member to the project/team
    const prref = doc(db, "Projects", project.id);
    await updateDoc(prref, {
      ProjectMembers: [...ProjectMembers, name],
    });
    alert("Member Added");
    goBack();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div class="header">
        <Header />
      </div>
      <div class="body">
        <textarea
          type="text"
          className="editinput"
          onChange={Setname}
          placeholder="New member..."
        />

        <button className="edtbtn" onClick={() => addMember(name)}>
          Save
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AddMember;
