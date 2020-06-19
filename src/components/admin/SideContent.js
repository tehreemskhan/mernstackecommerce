import React from "react";
import "../../static/css/admin/SideContent.css";
import DropDown from "../resusable/Dropdown";
import { Dropdown, NavItem } from "react-bootstrap";
 
 const SideContent = () => {
     return (
        <div className="sideContentContainer">
            <div>
                <div>
                    <DropDown  title="Inventory" >
                        <Dropdown.Item> Add All Inventory </Dropdown.Item>
                        <Dropdown.Item> View All Inventory</Dropdown.Item>
                    </DropDown>
                </div>

            </div>
        </div>
     )
 }

 export default SideContent;