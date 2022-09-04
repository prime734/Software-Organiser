import { useNavigate, useLocation } from "react-router-dom";

import "./Landing.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NewProject from "../../images/new_project.svg";

function Landing() {
  const { state } = useLocation();
  const { email } = state;

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
        <h1>{email}</h1>
        
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
