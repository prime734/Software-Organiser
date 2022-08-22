import { Link } from "react-router-dom";
import { FiFolder, FiHelpCircle } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <div className="left-header">
          <Link to="/page2" class="link">
            <FiFolder />
            &nbsp;Projects
          </Link>
          <br />
        </div>
        <div className="right-header">
          <div className="links-header">
            <Link to="/page2" class="link">
              <FiHelpCircle />
              &nbsp;Help
            </Link>
            <br />
            <Link to="/page2" class="link">
              <IoNotificationsOutline />
              &nbsp;Notifications
            </Link>
            <br />
            <Link to="/page2" class="link">
              <CgProfile />
              &nbsp;Profile
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
