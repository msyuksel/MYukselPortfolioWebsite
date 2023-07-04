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
        My name is Mehmet Yuksel and I have a passion for coding and developing software. I began my career as an Automation Tester, where I learned how to write scripts and test cases for various applications. Later, I expanded my skills to web developement, where I created websites using HTML, CSS, JavaScript and other frameworks. I also ventured into mobile developement, where I built apps for Android and iOS devices using native or cross-platform tools. Recently, I have been exploring game developement with Unity 3D, where I can unleash my creativity and imagination. Coding and developing are my life long hobbies and I enjoy learning new technologies and challenges.</p>
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
