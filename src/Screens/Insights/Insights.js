import { db, auth } from '../../firebase';
import { useLocation } from "react-router-dom";
import { React, useEffect, useState, useContext } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { EmailContext } from "../../context";
import { PieChart, Pie, Tooltip} from 'recharts';

export default function Insights(){


    const [projects, setProjects] = useState([]); //array to store user's projects'
    const projectRef = collection(db, "Projects"); //collection reference to all projects
    const { userEmail, setUserEmail } = useContext(EmailContext); //email address of user logged in
    const [stories, setStories] = useState([]);
    const { state } = useLocation();
    const {
        pName,
      } = state;      //state from previous page, PROJECT NAME



    useEffect(() => {
        const getProjects = async () => {
          //fetching all projects from database
    
          const q = query(projectRef , where("ProjectName", "==", pName));
    
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setProjects(projects => [ ...projects,{ ...doc.data(), id: doc.id }]);

          });
          
        };
        getProjects();
    
    }, []);

    useEffect(() => {
      projects.map((project) => {
        project.UserStories.map((story) => {
          setStories(stories => [...stories, story])
        })
      })
    },[projects]);

    let numStories = stories.length;

    var numDone = 1;
    var numNew = 2;
    var numProgress = 1;

    


    const data = [
        {name: 'Done User Stories', users: numDone},
        {name: 'User Stories In Progress', users: numProgress},
        {name: 'New User Stories', users: numNew},
      ];
    

    return(

        <div>
            <div style={{textAlign : "center"}}>
            <h1>
                Total Number Of User Stories: {numStories}
            </h1>
            <PieChart width={700} height={700}>
                <Pie
                    dataKey="users"
                    isAnimationActive={true}
                    data={data}

                    cx={350}
                    cy={250}
                    outerRadius={210}
                    fill="#8E0808"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
        </div>

    );  
}


/*  const [projects, setProjects] = useState([]); //array to store user's projects'
    const projectRef = collection(db, "Projects"); //collection reference to all projects
    const { userEmail, setUserEmail } = useContext(EmailContext); //email address of user logged in
    const [stories, setStories] = useState([]);



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

    useEffect(() => {
      projects.map((project) => {
        project.UserStories.map((story) => {
          setStories(stories => [...stories, story])
        })
      })
    },[projects]);
    

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
          
        {stories.map((story) => {
          return (
            <div key = {story.UserStory}>
              <h1>{story.UserStatus}</h1>
            </div>
          )
        })
        }

        </div>
    );
    const data = [
        {name: 'Geeksforgeeks', users: 400},
        {name: 'Technical scripter', users: 700},
        {name: 'Facebook', users: 200},
      ];

    
    return(

        <div style={{textAlign : "center"}}>
            <h1>
                The User's Productivity
            </h1>
            <PieChart width={700} height={700}>
                <Pie
                    dataKey="users"
                    isAnimationActive={true}
                    data={data}
                    cx={350}
                    cy={250}
                    outerRadius={210}
                    fill="#8E0808"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>

    );*/