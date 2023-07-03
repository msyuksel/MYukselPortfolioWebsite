import "./FooterStyles.css";

import React from 'react';

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

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
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            215-900-8506
                        </h4>
                    </div>
                    <div className="gmail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            mehmetsenih1999@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        About me
                    </h4>
                    <p>
                        I'm Mehmet Yuksel, a life long coder and developer. I started as an Automation Tester, and have since done web development, mobile development, and even some game development with Unity 3D.
                    </p>
                    <div className="social">
                        <FaLinkedin size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <FaTwitter size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer