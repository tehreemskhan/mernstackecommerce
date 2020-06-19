import React from "react";
import "../../static/css/resusable/SideSplit.css";
import Button from "./Button";


const SideSplit = (props) => {
    
    
    const linkChange =(link) => {
        window.location.href=link;
    }


    return (
        <div className="sideSplitContainer">
            <div className="sideSplit_image_div"></div>
            <div className="sideSplit_text_container">
                <div className="sideSplit_text">
                    <h1 class="sideSplit_message_part_one"> Check out our Summer Styles </h1>
                    
                    <Button onClick={linkChange.bind(this, "/products")} > Shop Now </Button>
                </div>
            </div>
        </div>
    );
}



export default SideSplit;




