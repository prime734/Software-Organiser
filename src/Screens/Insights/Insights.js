import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { db, auth } from '../../firebase';
import { React, useEffect, useState, useContext } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { EmailContext } from "../../context";

export default function Insights(){

    const [projects, setProjects] = useState([]); //array to store user's projects'
    const projectRef = collection(db, "Projects"); //collection reference to all projects
    const { userEmail, setUserEmail } = useContext(EmailContext); //email address of user logged in


    useEffect(() => {
        const getProjects = async () => {
          //fetching all projects from database
    
          const q = query(projectRef , where("ProjectMembers", "array-contains", userEmail));
    
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setProjects(projects => [ ...projects,{ ...doc.data(), id: doc.id }]);
          });
          
        };
        getProjects();
    
    }, []);

    return(
        <div>
            {projects.map((project) => {
            return (
              <div
                key={project.id}>
                <h6>{project.ProjectName}</h6>
              </div>
            );
            })}

        </div>
    );
}