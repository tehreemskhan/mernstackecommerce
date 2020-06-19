import React from "react";
import "../../../static/css/main_content/Nav.css";

const Nav = () => {
    return (
        <div className="display_navbar_container">           
            <ul className="display_ul">
                <li className="display_li"> <a href="/products/shirts" >Shirts</a> </li>
                <li className="display_li"> <a href="/products/coats" > Coats </a> </li>
                <li className="display_li"> <a href="/products/shoes" > Shoes </a> </li>
                <li className="display_li"> <a href="/products/watches" > Watch </a> </li>
            </ul>
        </div>
    );
}

export default Nav;