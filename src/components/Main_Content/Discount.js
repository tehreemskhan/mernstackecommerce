import React from "react";
import "../../static/css/main_content/Discount.css";

const Discount = (props) => {
    return (
        <div className="discount_container">
            <div className="discount_message_container">
                <h1 className="message_part_one">
                    UP TO 50% OFF
                </h1>
 
                <h1 className="message_part_two">
                    WITH THIS CODE IN CHECKOUT:
                </h1>

                <h1 className="message_part_three">
                    50OFF
                </h1>
            </div>
        </div>  
    );
}

export default Discount;