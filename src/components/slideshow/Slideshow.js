import React from "react";
import "../../static/css/Slideshow.css";
import Button from "../resusable/Button";

const Slideshow = () => {


    const linkChange = () => {
        window.location.href="/products";
    }

    return (
        <div className="header_container">
            <div className="header_text_container">
                <h1>Hassons</h1>
                <Button onClick={linkChange} > SHOP OUR PRODUCTS </Button>
            </div>
        </div>
    );
}

export default Slideshow;