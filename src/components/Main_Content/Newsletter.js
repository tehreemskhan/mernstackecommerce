import React, { Fragment, useState, useEffect } from "react";
import "../../static/css/main_content/Newsletter.css";
import ReButton from "../resusable/Button";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const Newsletter = () => {
    
    const [res, setRes] = useState();

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleClick = () => {
        setShowModal(true);
    }

    useEffect(() => {
        axios.get("/people")
        .then(res => {
            setRes(res.data.hello);
        })
    })

    return (
        <Fragment>

            <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title> Congrats! </Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully subscribed to our newsletter!</Modal.Body>
        <Modal.Footer> 
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="newsletter_section_container">
                <div className="newsletter_container">
                    <h2> {res} </h2>
                    <h4>Sign up for our newsletter to receive special offers, new products and more!</h4>
                    <input type="text" placeholder="Enter you email address" className="newsLetterInput" />
                    <ReButton onClick={handleClick} style={{width: '25%', backgroundColor: "#EEEDE9", color: "black", outline: "none"}}>Sign Up</ReButton>
                </div>
            </div>
        </Fragment>
    );
}



export default Newsletter;