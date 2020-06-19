import React from "react";
import "../../static/css/Footer.css";



const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_div1">
                <div className="both_divs">
                    <ul className="first_footer_list">
                        <a href="/"> <li> Home </li> </a>
                        <a href="/products"> <li> Products </li>  </a>
                    </ul>
                </div>
            </div>

            <div className="footer_div2">
                <div className="both_divs">
                        <ul className="second_footer_list">
                          <a href="/products/coats"> <li> Coats </li> </a>
                          <a href="/products/shirts"> <li> Shirts </li> </a>
                          <a href="/products/shoes"> <li> Shoes </li> </a>
                          <a href="/products/watches"> <li> Watches </li> </a>
                        </ul>
                </div>
            </div>
       
       </div>

    );
}


export default Footer;
