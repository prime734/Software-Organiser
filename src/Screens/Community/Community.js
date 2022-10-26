import React from "react";
import HeaderB from "../../Components/HeaderB/HeaderB";
import "./Community.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

function Community() {
  return (
    <div>
      <HeaderB />
      <div class="body">
        <div class="side-by-side">
          <div>
            <p class="title">
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

            <Container>
              <div className="social-container">
                <a className="facebook" href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="instagram" href="https://instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="twitter" href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="linkedin" href="https://linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <p class="title">PROJECT MANAGEMENT</p>
    </div>
  );
}

export default Community;
