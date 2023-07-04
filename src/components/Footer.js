import "./FooterStyles.css";

import React from "react";

import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub } from "react-icons/fa";

/*
<FaTwitter size={20} style={{ color: "white", marginRight: "2rem" }} />
<FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} />
*/
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p> Richmond TX</p>
              <p>USA</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              215-900-8506
            </h4>
          </div>
          <div className="gmail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              myukseldev@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I'm Mehmet Yuksel, a life long coder and developer. I started as an
            Automation Tester, and have since done web development, mobile
            development, and even some game development with Unity 3D.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/msy99/" target="_blank">
              <FaLinkedin
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              /> 
            </a>
            <a href="https://github.com/msyuksel" target="_blank">
              <FaGithub
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
