import { useNavigate } from "react-router-dom";

import "./Landing.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
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
