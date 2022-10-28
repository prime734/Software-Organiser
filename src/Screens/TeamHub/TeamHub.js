import { React, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { EmailContext } from "../../context";


import './TeamHub.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

function TeamHub() {
    const { state } = useLocation();
    let navigate = useNavigate();
    const { tName } = state; //state from previous page
    const { userEmail, setUserEmail } = useContext(EmailContext);
    const teamRef = collection(db, "Teams");
    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(true);


    ////////////////////////////////////////////////////////////////
    useEffect(() => {
        const getTeam = async () => {
            const q = query(teamRef, where("TeamName", "==", tName));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setTeam({ ...doc.data(), id: doc.id });    //gets in focus team
                setLoading(false);      //update loading to propergate state to tabs

            });
        };

        getTeam();
    }, []);

    return (
        <div>
            <div class="header">
                <Header />
            </div>
            <div class="body">
                {loading ? <LoadingSpinner /> : 
                    <div className="teamdet-div">
                        <h1 className="teamdet-name">{team.TeamName}</h1>

                        <h6 className="title-h">Team Owner</h6>
                        <p className="projdesc">{team.TeamOwner}</p>
                        <br />
                        <h6 className="memdet-title">Team Members</h6>
                        {team.TeamMembers.map((member,index) =>{
                            return (
                                <p className="memdet" key={index}>{member}</p>
                            )
                        })}

                    </div>
                }
            </div>

            <div class="footer">
                <Footer />
            </div>
        </div>
    )
}

export default TeamHub