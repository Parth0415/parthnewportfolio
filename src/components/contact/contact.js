import React, { Component } from "react";
import "./contact.css"


class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            name:"",
            message:"",
            fieldEmpty:'',
            emailValid:false
        }
    }

    validateField = (fieldName, value)=>{
        let validEmail = this.state.emailValid
        let emptyField = this.state.fieldEmpty
        if(value == ""){
            emptyField=fieldName;
        }
        if(fieldName == "email"){
            validEmail = value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            )
        }

        this.setState({
            emailValid:validEmail,
            fieldEmpty:emptyField
        })

        // check emailValid from state to show the errros
    }

    handleUserInput = (e)=>{
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]:value
        },()=>{this.validateField(name, value)})
    }


    render (){
       
    return(
        <div>
            <h1>Contact me</h1>
            <form className="contactForm">
                <input placeholder="Name" value={this.state.name} className="inputField" name="name"/>
                <input placeholder="Email" value={this.state.email} className="inputField" name="email"/>
                <textarea placeholder="Message" value={this.state.message} rows= "10"  name="messages" className="inputField"/>
                <div className="submitButton">Submit</div>
            </form>
        </div>
    )
}

}
export default Contact;