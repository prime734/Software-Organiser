import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Lion from "../../images/Lion.json";

function Intro() {
  let navigate = useNavigate();
  setTimeout(() => {
    let path = "/splash";
    navigate(path);
  }, 2515); // render for 5 seconds and then push to home

  return (
    <div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>

      <Lottie animationData={Lion} loop={true} style={{ height: 400 }} />
    </div>
  );
}

export default Intro;
