import React, {Fragment, useState, useEffect} from "react";
import "../../static/css/shopping_cart/Cart.css";
import axios from "axios";

const CartItem = (props) => {


    const [price, setPrice] = useState(props.price);

    const [inputValue, setInputValue] = useState(1);

    const handleChange = (e) => {
        let qty = e.target.value;        
        setInputValue(qty);
        if(isNaN(qty)) {
            alert("Quantity has to be a number");
        } else {
            let url = `/change-qty/${props.id}/`;
            let updated_price = props.price*qty;
                setPrice(props.price * qty);
                props.grabPrice(qty, props.id);
                
        }   


    }


    return (
        <Fragment>
            
                <hr />
            <div className="inner_panel">
            <div className="cart_item">
            {/* <div style={{...props.background}} className="cart_image"></div> */}
            <div className="item_name">
                <p> {props.title} </p>
            </div>
            <div className="qty_tag_container">
               <input value={inputValue} maxlength="2" onChange={handleChange} name="qty" type="text" placeholder="Qty" />
            </div>
            <div className="price_tag_container">
                <p> ${price} </p>
                <div className="remove_container">
                <p> <a onClick={props.onClick.bind(this, props.id)} href="#"> Remove </a> </p>
                </div>

            </div>
            </div>
            </div>
            <hr />
        </Fragment>
    )
}


export default CartItem;