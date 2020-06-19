import React, {useState, useEffect} from "react";
import "../../static/css/manageAccount/Content.css";
import axios from "axios";
const Content = () => {

    const [cartLength,setCartLength] = useState();

    const [date, setDate] = useState(new Date().getHours());

    const [greeting, setGreeting] = useState();

    const [username, setUsername] = useState("User");

    useEffect(() => {


        if( date >= 12 ) {
            setGreeting("Afternoon");
        } else if(date <= 12) {
            setGreeting("Morning");
        } else if(date >= 19) {
            setGreeting("Evening")
        }


        axios.get("/status")
        .then((res) => {
            console.log(date);
            console.log(res);
            if(res.data.status === "not verified") {
                window.location.href="/login";
                
            }
            setUsername(res.data.userName);
        })

        axios.get("/db-count/cart")
        .then(res => {
            setCartLength(res.data.length);

        })

    }, [])

    return (
        <div className="manage_account_container">
            <div className="manage_account_inner_div">
                <h1> Good {greeting}, {username} </h1>
                <div className="account_display_data"> 
                    <div className="manage_account_shopping_cart">
                        <h2> Your Shopping Cart Has: </h2>
                        <h2> {cartLength} </h2>
                        <h2> Items </h2>
                    </div>
                </div>
                <div className="additional_info">
                    <a href="/change-password"> Change Password </a>
                    <a href="/shopping-cart" > Shopping Cart </a>
                    <a href="/products" > Shop Products </a>
                </div>
            </div>
            <div className="back_button"> <p> <a href="/"> &#60;- Go Back </a> </p> </div>
            
        </div>
    )
}

export default Content;