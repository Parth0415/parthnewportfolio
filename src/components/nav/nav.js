import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
            <Link to="/">
            <p>About</p>
            </Link>
            <Link to="/portfolio">
            <p>Portfolio</p>
            </Link>
            <Link to="/contact">
            <p>Contact</p>
            </Link>
            <Link to="/resume">
            <p>Resume</p>
            </Link>
        </nav>
    )
}

export default Nav;