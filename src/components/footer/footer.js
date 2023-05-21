import React from "react";
import './footer.css';
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin.png"
import twitter from "../assets/images/twitter.png"
function Footer(){
    return(
        <footer>
            <div className="footerContainer">
                <a className="footerLink" href="https://github.com/Parth0415"><img src={github} alt = "github"/></a>
                <a className="footerLink" href="https://www.linkedin.com/in/parth-mali-677a59234/"><img src={linkedin} alt = "linkedin"/></a>
                <a className="footerLink" href="https://twitter.com/ParthMa62916849"><img src={twitter} alt = "twitter"/></a>
            </div>
            <div>&copy; Copyright Parth Mali 2023</div>
        </footer>
    )
}

export default Footer;