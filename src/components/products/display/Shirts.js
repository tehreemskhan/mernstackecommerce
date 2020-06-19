import React, { useState, Fragment, useEffect } from "react";
import shuffle from "shuffle-array";
import axios from "axios";
import Nav from "../navbar/Nav";
import Header from "../../slideshow/Slideshow";
import Main_Nav from "../../nav/Nav";
import Card from "../../resusable/Card";

const Shirt = () => {

    const [shirt,setShirt] = useState([]);
    
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        axios.get("/products/shirt")
        .then(res => {
            console.log(res);
            setShirt(shuffle(res.data));
        })
    }, [])

    const handleClick = (id) => {
        let product_id = id;

        let url = `/add-to-cart/${product_id}`;
        
        axios.post(url)
        .then(res => {

            console.log(res);
            if(res.data === "Sorry you have already added this item to cart") {
                alert("Sorry you have already added this item to your cart");
            }
        })
    }

    return (
        <Fragment>
            <Main_Nav />
            <Header />
            <Nav />
            <div className="main_content_container">
                <div className="display_container">
                    {
                        shirt.map((item,index) => {
                            return (
                                <Card  
                                    isAddedToCart={isAddedToCart} 
                                    onClick={handleClick.bind(this, item._id)}
                                    key={index} image={item.image} 
                                    productName={item.name} 
                                    price={item.price} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Shirt;