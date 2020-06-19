import React, { Fragment, useState } from "react";
//Components Import Start
import Display from "./display/Display";
import Sidebar from "./sidebar/Sidebar";
import Nav from "./navbar/Nav";
import Main_Nav from "../nav/Nav";
import Header from "../slideshow/Slideshow";
import axios from "axios";

//Components Import End
import "../../static/css/main_content/Main_Content.css";
//THIS COMPONENT WILL DISPLAY THE ITEMS THAT ARE BEING SOLD BY
//THE ECOMMERCE STORE AND WILL DISPLAY THEM
//Inside put in a card system and much more

 // THE MAIN DIV WILL BE A FLEX THAT WILL DIVIDE BOTH OF THE SECTIONS EVENLY

const Products = () => {

    const [userChoiceResults, setUserChoiceResults] = useState([]);

    let array = [];

    let finalArray = [];


    let userChoice = "";

    const myCallback = (data) => {
        console.log(data);
        userChoice = data;

        callFunc();

    }


    const callFunc = () => {
        axios.post(`/products/${userChoice}`)
        .then(firstRes => {
            axios.post(`/products/${userChoice}`)
            .then(res => {
                res.data.map((item) => {
                    array.push(item);
                })

                let new_array = array.filter((item, index, self) => 
                    index === self.findIndex((t) => {
                        return t._id === item._id;
                    })
                )
                array.splice(0, array.length, ...new_array );
            })
        })
    }



    return (
       <Fragment>
           <Main_Nav />
           <Header />
           <Nav />
            <div className="main_content_container"> 
                <Display userChoiceResults={array} />
            </div>
        </Fragment>
    )
}

export default Products;