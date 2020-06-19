import React, {Fragment, useState, useEffect} from "react";
import "../../../static/css/main_content/Display.css";
import Card from "../../resusable/Card";
import axios from "axios";
import {Modal, Button} from "react-bootstrap";
import shuffle from "shuffle-array";

const Display = (props) => {

    const styles = {
        buttonStyle: {

        }
    }
    let isAddedToCart = false;
    // const [isAddedToCart, setIsAddedToCart] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false);

    const [product, setProduct] = useState([]);


    let array = [];

    useEffect(() => {


        axios.get("/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href="/login";
            } 
            console.log(res);
        })


        axios.get("/admin/products/show-all")
        .then(res => {
            setProduct(shuffle(res.data));

        })
    }, [])

    const handleClick = (id) => {
        let product_id = id;

        let url = `/add-to-cart/${product_id}`;
        
        axios.post(url)
        .then(res => {
            console.log(res);
            if(res.data === "Sorry you have already added this item to cart") {
                setShowErrorModal(true);
            } else {
                setShowModal(true);
            }
        })

      


   
    }

    const handleModalClose = () => {
        setShowModal(false);
        setShowErrorModal(false);
    }

    return (
        <Fragment>
            {/* SUCCESS MODAL */}
    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
            <Modal.Title> Item has been added to cart. </Modal.Title>
        </Modal.Header>
           
        <Modal.Footer> 
            <Button variant="secondary" onClick={handleModalClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>

        {/* ERROR MODAL */}
       <Modal show={showErrorModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
            <Modal.Title> You have already added this item to cart. </Modal.Title>
        </Modal.Header>
           
        <Modal.Footer> 
            <Button variant="secondary" onClick={handleModalClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
            
        <div className="display_container">
            
            {
                product.map((item, index) => {

                    return (
                        <Card 
                        buttonStyle={{...styles.buttonStyle}} 
                        isAddedToCart={isAddedToCart} 
                        onClick={handleClick.bind(this,item._id)}
                        key={index} image={item.image} 
                        productName={item.name} 
                        price={item.price} />
                    )
                })
            }



        </div>
        </Fragment>
    );
}


export default Display;