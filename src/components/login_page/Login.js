//Stuff to do
/*
    1). So you have to start sessions no nobody can just go to the home route
    2). Make sure the session store is not memory store there is a mongodb styor inside of express-session docs
    3). FOCUS!!!

            //TRY AGAIN WITH THE ERROR MESSAGE DISAPPEAR FUNCTION LATER
 */

import React, { useState } from "react";
import "../../static/css/Login.css";
import { Button, Form, Alert } from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


const Login = (props) => {
    const [color, setColor] = useState("danger");

    
    const error_message_appear = () => {
        let error_message = document.getElementsByClassName("error_message")[0];
        if(error_message) {
            error_message.style.display = "block";
        } 

    }

    const error_message_disappear = () => {
        setInterval(() => {
            let error_message = document.getElementsByClassName("error_message")[0];
            if(error_message) {
                error_message.style.opacity = 0;
                error_message.style.display = "none";
            }

        
        },6000);
    }

    const [errorMessage, setErrorMessage] = useState();

    try {
       fetch("/redirect")
       .then(res => res.json())
       .then(data => {
        console.log(data);
        let key = data.status;
        switch (key) {
            case "no entry found":
                    setErrorMessage("Sorry your login credentials didn't match up with our records. Please try again or create an account");
                    setColor("danger");
                    error_message_appear();
                    error_message_disappear();
                break;
            case "null":
                setErrorMessage("");
                let error_message = document.getElementsByClassName("error_message")[0];
                error_message.style.display = "none";
                break;
            case "invalid":
                setErrorMessage("Your username or password are invalid please try again");
                setColor("warning");
                error_message_appear();
                error_message_disappear();
                break;
            case "new account created": 
                setErrorMessage("Congrats! Your account has been created please login.");
                setColor("success");
                error_message_appear();
                error_message_disappear();
                break;
            default:
                setErrorMessage("");
                break;
        }
       });
    }
    catch (error) {
        console.log(error);
    }

    

    return (



        <div className="login_main_container">
            <div className="login_container">
                <Alert style={{transition: '0.3s ease-in-out', opacity: 1, display:"none"}} className="error_message" variant={color}> {errorMessage} </Alert>
                <div className="login_title_container">
                    <h1> Login  </h1>
                </div>

                <div className="login_form_container">

                    <form  action="/login" method="POST">
                        <div className="form_group">
                            <input className="input user_input" name="username" placeholder="Enter you username" />  
                        </div>
                        <div className="form_group">
                            <input name="password" className="input password_input" type="password" placeholder="Enter you password" />
                        </div>
                        <div className="form_group submit_form_group">
                            <input type="submit" placeholder="Submit" className="submit_button" />
                        </div>
                    </form>
                    
                </div>
                <div className="create_account_link">
                    New? <Link className="form_back_button" to="/create-an-account">Click here to create an account.</Link>
                </div>
            </div>

        </div>

    
    );
}


export default Login;