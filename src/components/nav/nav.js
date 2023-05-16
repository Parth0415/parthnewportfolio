import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
import resume from "../assets/resources/Resume.pdf"

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
            <a href={resume} download="parthResume">
            <p>Resume</p>
            </a>
        </nav>
    )
}

export default Nav;