import React, { Fragment } from "react";
import { Dropdown, NavItem, NavLink } from "react-bootstrap";

const DropDown = (props) => {
    return (
        <Fragment>
            <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}> {props.title} </Dropdown.Toggle>
            <Dropdown.Menu>
            {props.children}
            </Dropdown.Menu>
            </Dropdown>
        </Fragment>
    )
}

export default DropDown;