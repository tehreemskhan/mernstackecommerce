import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../static/css/Header.css";


//Color has to be changed later

const Header = (props) => {
    return (
        <Navbar id="Navbar" className="navbar_main_container" bg="dark" expand="lg">
            <Navbar.Brand className="navLinks" href="/"> Hassons </Navbar.Brand>
            <Navbar.Toggle id="navbar_toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navLinks" href="/"> Home </Nav.Link>
                    <Nav.Link className="navLinks" href="/products" > All Products </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/coats"> Coats </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/shirts"> T-Shirts </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/shoes"> Shoes </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/watches"> Watches </Nav.Link>
                    <Nav.Link className="navLinks" href="/shopping-cart" > My Cart </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;