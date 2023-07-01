import "./NavBarStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="header">
            <Link to="/">
                <h1>Porfolio</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar