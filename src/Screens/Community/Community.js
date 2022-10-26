import React from "react";
import HeaderB from "../../Components/HeaderB/HeaderB";
import "./Community.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

function Community() {
  return (
    <div>
      <HeaderB />
      <Container>
        <div className="social-container">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Community;
