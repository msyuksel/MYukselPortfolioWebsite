import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/mail.jpg";
import React2 from "../assets/mail.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I'm Mehmet Yuksel, a life long coder and developer. I started as an
          Automation Tester, and have since done web developement, mobile
          developement, and even some game developement with Unity 3D.{" "}
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
