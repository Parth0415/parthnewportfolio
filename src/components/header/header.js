import React from "react";
import './header.css';
import Nav from "../nav/nav";
import logo from "../assets/images/logo.png"
function Header(){
    return(
        <header>
            <img src={logo} alt="logo"/>
          <Nav></Nav>
        </header>
)
}

export default Header;