import { React, useState, useEffect, useContext } from "react";
import { db } from "../../firebase";
import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./Wiki.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Lion from "../../images/Lion-white.png";


function Wiki() {
  const { state } = useLocation();
  let navigate = useNavigate();
  const { ProjectWiki, ID, ProjectName, UserStories } = state;

  const [wiki, setWiki] = useState({ ProjectWiki });
  const Setwiki = (event) => {
    setWiki(event.target.value);
  };

  const [projects, setProjects] = useState([]); //array to store user's projects'
  const projectRef = collection(db, "Projects"); //collection reference to all projects

  const editWiki = async (wiki) => {
    //handles adding a wiki to database
    await setDoc(
      doc(db, "Projects", ID),
      {
        ProjectWiki: wiki,
      },
      { merge: true }
    );
    alert("Wiki edited");
  };

  const goBack = () => {
    navigate(-1);
  };


  const deleteProject = async () => {
    await deleteDoc(doc(db, "Projects", ID));
    goBack();
  };

  const tryDelete = () => {
    let isExecuted = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (isExecuted) {
      deleteProject();
    }
  };

  const goAdd = () => {
    let path = "/add";
    navigate(path, {
      state: {
        ID: ID,
        UserStories: UserStories,
      },
    });
  };

  return (
    <div>
      <div class="header">
        <Header />
      </div>
      <div class="body">
        <div className="side-content">
          <div className="liondiv">
            <img src={Lion} width="40" onClick={goBack} className="lionimg" />
          </div>
          <h3>{ProjectName}</h3>
          <h6 onClick={() => editWiki(ProjectWiki)}>Add Wiki </h6>
          <h6 onClick={goAdd}>Add new user story</h6>
          <h6 onClick={tryDelete}>Delete project</h6>
        </div>
        <h1>{ProjectWiki}</h1>
        <div>
        <textarea
          type="text"
          className="editinput"
          defaultValue={ProjectWiki}
          onChange={Setwiki}
          placeholder="Wiki..."
        />

        <button className="edtbtn" onClick={() => editWiki(wiki)}>
          Save
        </button>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Wiki;
