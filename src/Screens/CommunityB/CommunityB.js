import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import "./CommunityB.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import social1 from "../../images/social1.json";
import social2 from "../../images/Social2.json";
import social3 from "../../images/Social3.json";
import Tooltip from "@mui/material/Tooltip";

function CommunityB() {
  return (
    <div>
      <Header />
      <div class="body">
        <div class="side-by-side">
          <div>
            <Lottie
              animationData={social1}
              loop={true}
              style={{ height: 400 }}
            />
          </div>
          <div>
            <p class="community-title">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join the Lion
              Community
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Connect beyond
              the screen. Meet up with creatives
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;in your area
              through events designed to help you
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connect, share,
              and learn together.
            </p>
          </div>
        </div>
        <div class="side-by-side">
          <div>
            <p class="community-title">
              Be part of the conversation&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>
              There are conversations about motion happening
              &nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>
              everywhere, and we’d like you to add your voice.
              &nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>
              Find it all here, whether you are looking for
              insights&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>
              from experts, casual chats, live events, tutorials, or
              &nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>community stories. &nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div>
            <p>&nbsp;</p>

            <div className="social-container">
              <a className="facebook" href="https://facebook.com">
                <Tooltip title="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </Tooltip>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a className="instagram" href="https://instagram.com">
                <Tooltip title="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </Tooltip>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a className="twitter" href="https://twitter.com">
                <Tooltip title="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </Tooltip>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a className="linkedin" href="https://linkedin.com">
                <Tooltip title="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Tooltip>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default CommunityB;
