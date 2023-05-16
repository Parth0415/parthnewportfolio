import React from "react";
import "./contact.css"

function Contact(){
    return(
        <div>
            <h1>Contact me</h1>
            <form className="contactForm">
                <input placeholder="Name" className="inputField"/>
                <input placeholder="Email" className="inputField"/>
                <textarea placeholder="Message" rows= "10" className="inputField"/>
                <div className="submitButton">Submit</div>
            </form>
        </div>
    )
}

export default Contact;