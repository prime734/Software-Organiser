import { useNavigate } from "react-router-dom";

import "./SplashScreen.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import kanban from "../../images/kanban.jpg";
import productivity from "../../images/productivity.png";
import project_management from "../../images/project_management.png";
import user_story from "../../images/user_story.png";

function SplashScreen() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/page2";
    navigate(path);
  };

  return (
    <div>
      <div class="header">
        <Header />
      </div>
      <div class="body">
        <p>Project Management</p>
        <img height={350} src={project_management} alt="project_management" />
        <p>Measure your productivity</p>
        <img height={350} src={productivity} alt="productivity" />
        <p>Kanban board</p>
        <img height={350} src={kanban} alt="kanban" />
        <p>Add user stories</p>
        <img height={350} src={user_story} alt="user_story" />
        <button class="okbutton" onClick={routeChange}>
          I AGREE
        </button>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default SplashScreen;
