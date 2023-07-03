import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/cup-of-coffee-1280537.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img"
                    src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>
                    HI, I'M A DEVELOPER.
                </p>
                <h1>
                    SDET, MOBILE/WEB, AND UNITY 3D.
                </h1>
                <div>
                    <Link to="/project" className="btn">
                        Projects
                    </Link>
                    <Link to="/Contact" className="btn btn-light">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg