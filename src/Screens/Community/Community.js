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
      <Container>
        <div className="social-container d-flex justify-content-evenly">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Community;
