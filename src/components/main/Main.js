import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import Header from "../slideshow/Slideshow";
import Main_Content from "../Main_Content/Main_Content";
//Axios
import axios from "axios";


const Main = () => {



    useEffect(() => {
        axios.get("/status")
        .then(res => {
            console.log(res);
            if(res.data.status === "not verified") {
                window.location.href="/login";
            }
        })
    }, [])

    return (
        <div>
            <Nav />
            <Header />
            <Main_Content />
        </div>
    );
}

export default Main;