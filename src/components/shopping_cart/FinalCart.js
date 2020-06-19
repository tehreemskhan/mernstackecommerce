import React, { useState } from "react";
import "../../static/css/shopping_cart/Cart.css";


const FinalCart = (props) => {

    


    return (
        <div className="final_price_div_container">
        <div className="final_cart_item"> 
            <p> 
                {props.name}
            </p>
            <p>
                ${props.price}
            </p>
        </div>
    </div>
    )
}


export default FinalCart;