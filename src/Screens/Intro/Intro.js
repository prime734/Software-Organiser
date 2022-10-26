import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  let navigate = useNavigate();
  setTimeout(() => {
    let path = "/splash";
    navigate(path);
  }, 5000); // render for 5 seconds and then push to home

  return <h1>render for 5 seconds and then push to home</h1>;
}

export default Intro;
