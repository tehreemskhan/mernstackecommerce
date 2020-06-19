import React from "react";
import "../../static/css/resusable/ProductCard.css";
import Button from "./Button";

const ProductCard = (props) => {

    return (
        <div style={{...props.style}} class="product_card_container"> 
            <div className={props.imageClassName}></div>
            
            <div className="buttonContainer">
                <Button onClick={props.linkChangeFunc} > {props.buttonName} </Button>
            </div>
          
        </div>
    );  
}

export default ProductCard;