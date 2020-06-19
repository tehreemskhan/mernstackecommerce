import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../static/css/Login.css";

const Create_An_Account = (props) => {
    

    
    return (
        <div className="login_main_container">
        <div className="login_container">
            <div className="login_title_container">
                <h1> Create an account </h1>
            </div>

            <div className="login_form_container">

                <form action="/create-an-account" method="POST">
                    <div className="form_group">
                        <input className="input user_input" autoFocus required name="username" placeholder="Please select a username" />  
                    </div>
                    <div className="form_group">
                        <input name="password" required className="input password_input" type="password" placeholder="Please select a password" />
                    </div>
                    <div className="form_group"> 
                      <input name="email" type="email" className="input email_input" placeholder="Please enter your email" required  /> 
                    </div>
                    <div className="form_group"> 
                      <input name="number" type="text" className="input number_input" placeholder="Please enter your number" required  /> 
                    </div>
                    <div className="form_group submit_form_group">
                        <input type="submit" placeholder="Submit" required className="submit_button" />
                    </div>

                </form>
                
            </div>
            <div className="create_account_link">
                Already have an account? <Link className="form_back_button" to="/login"> Login in.</Link>
            </div>
        </div>

    </div>
    );  
}

export default Create_An_Account;